Ext.define('MobileFinance.controller.TransactionController',{
    extend: 'Ext.app.Controller',
    
    requires: [
        'Ext.data.Store'
    ],

    config: {
        views: ["TransactionPanel", "CategoryPanel", "CategorySetting"],

        refs: {
            transactionRefreshBtn : 'button[action=doTransactionRefresh]',
            transactionList : 'transactionpanel list',
            categoryList : 'categorypanel list',
            categoryEdit : 'categorypanel #edit-category-button',
            categoryAdd : 'categorypanel #add-category-button',
            categoryNavigationView : 'categorypanel navigationview',
            categorySettingForm : 'categorypanel category-setting',
            categorySettingFormSubmit : 'categorypanel category-setting button[action=category-save]',
            categorySettingFormDelete : 'categorypanel category-setting button[action=category-delete]'
        },

        control: {
            transactionRefreshBtn : {
                tap : 'doRequest'
            }, 
            transactionList : {
                itemtaphold: 'showCategoryMenue'
            },
            categoryList : {
                itemtap : 'selectCategory'
            },
            categoryEdit : {
                tap : 'editCategory'
            },
            categoryAdd : {
                tap : 'addCategory'
            },
            categorySettingFormSubmit : {
                tap : 'doCategorySubmit'
            },
            categorySettingFormDelete : {
                tap : 'doCategoryDelete'
            },
            categoryNavigationView : {
                back : 'doBack'
            }
        }
    },

    /**
    * switch for en/disable the category settings
    */
    editCategoryToggle : false,
    
    /**
     * @function inti 
     * @description method called after initialization of controller
     */
    init: function() {
        console.log('transaction controller: inited ');
        this.categoryPanel = Ext.createByAlias('widget.categorypanel', {hidden:true, width: 300, height:400, hideOnMaskTap:true });
    }, 

    /**
     * @function doRequest 
     * @description method receive transaction-data from backend service.
     */
    doRequest: function() {
        
        var transactions = Ext.getStore('Transactions');
        var transactionsProxy = transactions.getProxy();
        
        transactionsProxy.setUrl(MobileFinance.util.GlobalConf.javaBackendBaseUrl+'secure/bankaccount/'+MobileFinance.util.GlobalConf.currentBankAccount+'/transactions');
        transactions.load();
    }, 

    /**
     * @function showCategoryMenue 
     * @description method shows configured categories as list.
     */
    showCategoryMenue: function( item, index, target, record, e, eOpts) {
        var categoryId = record.data.categoryId;
        var categories = Ext.getStore('Categories');
        var categoriesProxy = categories.getProxy();

        this.selectedTransaction = record.data.id;

        categoriesProxy.setUrl(MobileFinance.util.GlobalConf.javaBackendBaseUrl+'secure/bankaccount/'+MobileFinance.util.GlobalConf.currentBankAccount+'/categories');

        categories.load({
            callback: function() {
                console.debug('category-id: ' + categoryId);
                if(categoryId > 0) {
                    var rowindex = categories.find('id', categoryId);
                    this.getCategoryList().select(rowindex);
                } else {
                    this.getCategoryList().deselectAll();
                }
                this.categoryPanel.showBy(target);
            }, 
            scope: this
        });
        
    }, 

    /**
     * @function selectCategory 
     * @description method add or changes a category of transaction.
     */
    selectCategory: function(item, index, target, record, e, eOpts) {


        if(!this.editCategoryToggle){ // check if category settings switch is enabled

            var transactionId = this.selectedTransaction;
            var iconUrl = record.data.iconUrl;
            var iconId = record.data.id;
            var iconName = record.data.name;

            var transactions = Ext.getStore('Transactions');
            var record = transactions.findRecord('id', transactionId);
            
            record.set('categoryId', iconId);
            console.log(record.get('categoryIcon'));
            record.set('category', iconName);
            record.set('categoryIcon', iconUrl);
            console.log(record.get('categoryIcon'));
            console.log(record);

            this.categoryPanel.hide();
            transactions.sync();
        } else {

            this.getCategoryNavigationView().push({
                xtype: 'category-setting', 
                record: record
            });
        }
        
    },

    /**
     * @function editCategory 
     * @description method changes toggle-button for edit or select mode of categories.
     */
    editCategory : function( button, e, eOpts) {
        if(this.editCategoryToggle) {
            //close bearbeiten
            this.editCategoryToggle = false;    
            button.setUi('normal');
            this.getCategoryAdd().hide();
        } else {
            //bearbeiten
            this.editCategoryToggle = true;
            button.setUi('confirm');
            this.getCategoryAdd().show();
        }
        
    },

    /**
     * @function addCategory 
     * @description method show category-input form.
     */
    addCategory : function( button, e, eOpts) {
        this.getCategoryNavigationView().push({
                    xtype: 'category-setting'
        });

        var form = this.getCategorySettingForm();
        form.reset();
    },

    /**
     * @function doCategorySubmit 
     * @description method changes or adds a category to the backend.
     */
    doCategorySubmit : function( button, e, eOpts) {
        var form = this.getCategorySettingForm();
        var catObj = form.getValues();
        //var categoryStore = Ext.getStore('Categories');
        var categoryStore = this.getCategoryList().getStore();

        if(catObj.id) {
            // update
            var record = categoryStore.findRecord('id', catObj.id);
            record.set('name', catObj.name);
        } else {
            // create
            var record = Ext.create('MobileFinance.model.Category', {name: catObj.name});
            //record.dirty = true;
            record.set('id',null);
            categoryStore.add(record);
        }
        categoryStore.sync();
        this.getCategoryNavigationView().pop();
    },

    /**
     * @function doCategoryDelete 
     * @description method removes a category in backend.
     */
    doCategoryDelete : function( button, e, eOpts) {
        var form = this.getCategorySettingForm();
        var catObj = form.getValues();

        var categoryStore = Ext.getStore('Categories');
        var record = categoryStore.findRecord('id', catObj.id);
        categoryStore.remove(record);
        categoryStore.sync();
        this.getCategoryNavigationView().pop();
    },

    /**
     * @function doBack 
     * @description method refreshes the category-list afer returning to the category-list-view.
     */
    doBack : function(me, eOpts) {
        this.getCategoryList().refresh();
    }


    
});