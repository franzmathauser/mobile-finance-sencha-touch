Ext.define('MobileFinance.controller.TransactionController',{
    extend: 'Ext.app.Controller',
    
    requires: [
        'Ext.data.Store',
    ],

    config: {
        views: ["TransactionPanel", "CategoryPanel"],

        refs: {
            transactionRefreshBtn : 'button[action=doTransactionRefresh]',
            transactionList : 'transactionpanel list',
            categoryList : 'categorypanel list',
            /*
            filialFinderDetails: 'filialfindercontainer filialfinderdetailspanel',
            filialFinderMap : 'filialfindercontainer map',
            filialFinderList : 'filialfindercontainer filialfinderpanel list'
            */
        },

        control: {
            transactionRefreshBtn : {
                tap : 'doRequest'
            }, 
            transactionList : {
                itemtaphold: 'showCategoryMenue'
            },
            categoryList : {
                itemtap : 'selectCategory',
                
            }
            /*
            filialFinderList :{

                select: function(list, record, eOpts ) {

                    var filialFinderDetailsView = this.getFilialFinderDetails();


                    filialFinderDetailsView.setData(record.data);
                    
                    var filialFinderMap = this.getFilialFinderMap();
                    var location = record.get('geometry').location;
                    var coords = new google.maps.LatLng(location.lat, location.lng);
                    filialFinderMap.setMapCenter(coords);
                    
                    console.log(filialFinderMap.getMap());
                    this.currentMarker.setMap(filialFinderMap.getMap());
                    this.currentMarker.setPosition(coords);

                    filialFinderDetailsView.show();
                    this.currentItemId = record.get('id');
                    
               }, 

               deselect: function(list, record, supressed, eOpts){
                    var filialFinderDetailsView = this.getFilialFinderDetails();
                    filialFinderDetailsView.hide();
               }
           }
           */
        }
    },
    
    init: function() {
        console.log('transaction controller: inited ');
        this.categoryPanel = Ext.createByAlias('widget.categorypanel', {hidden:true, width: 300, height:400, hideOnMaskTap:true });
    }, 

    doRequest: function() {
        
        var transactions = Ext.getStore('Transactions');
        var transactionsProxy = transactions.getProxy();
        transactionsProxy.setUrl(MobileFinance.app.backendBaseUrl+'secure/bankaccount/1/transactions');
        transactions.load();
    }, 

    showCategoryMenue: function( item, index, target, record, e, eOpts) {
        var categoryId = record.data.categoryId;
        this.selectedTransaction = record.data.id;

        var categories = Ext.getStore('Categories');
        var categoriesProxy = categories.getProxy();
        categoriesProxy.setUrl(MobileFinance.app.backendBaseUrl+'secure/bankaccount/1/categories');
        
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

    selectCategory: function(item, index, target, record, e, eOpts) {
        console.log(record.data);
        var transactionId = this.selectedTransaction;
        var iconUrl = record.data.iconUrl;
        var iconId = record.data.id;
        var iconName = record.data.name;

        var transactions = Ext.getStore('Transactions');
        var record = transactions.findRecord('id', transactionId);
        console.log(record);
        record.set('categoryId', iconId);
        console.log(record.get('categoryIcon'));
        record.set('category', iconName);
        record.set('categoryIcon', iconUrl);
        console.log(record.get('categoryIcon'));
        console.log(record);

        this.categoryPanel.hide();
        transactions.sync();
        
    },

    
});