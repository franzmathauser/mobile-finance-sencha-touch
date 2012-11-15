Ext.define('MobileFinance.controller.Transaction',{
    extend: 'Ext.app.Controller',
    

    config: {
        views: ["TransactionPanel"],

        refs: {
            transactionRefreshBtn : 'button[action=doTransactionRefresh]'
            /*
            filialFinderDetails: 'filialfindercontainer filialfinderdetailspanel',
            filialFinderMap : 'filialfindercontainer map',
            filialFinderList : 'filialfindercontainer filialfinderpanel list'
            */
        },

        control: {
            transactionRefreshBtn : {
                tap : 'doRequest'
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
        transactionsProxy.setUrl('https://pc42366.de.softlab.net:8181/JavaBackend/rest/secure/bankaccount/1/transactions');
        transactions.load();
    }
    
});