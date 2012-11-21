Ext.define('MobileFinance.controller.TransactionController',{
    extend: 'Ext.app.Controller',
    
    requires: [
        'Ext.data.Store',
    ],

    config: {
        views: ["TransactionPanel"],

        refs: {
            transactionRefreshBtn : 'button[action=doTransactionRefresh]',
            transactionList : 'transactionpanel list'
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
    }, 

    doRequest: function() {
        
        var transactions = Ext.getStore('Transactions');
        var transactionsProxy = transactions.getProxy();
        transactionsProxy.setUrl(MobileFinance.app.backendBaseUrl+'secure/bankaccount/1/transactions');
        transactions.load();
    }, 

    showCategoryMenue: function() {


        alert('true');
    }
    
});