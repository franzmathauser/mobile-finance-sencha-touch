Ext.define('MobileFinance.controller.Home', {
	extend: 'Ext.app.Controller',

	config:{
		
		views: ['Home', 'FilialfinderContainer', 'FilialfinderPanel', 'FilialfinderDetails', 'TransactionPanel'],
		controllers: ['Auth', 'Login'],
		models: ['Filiale', 'Transaction'],
		stores: ['Filialen', 'Transactions'],

		refs: {
			logout: 'logout',
            slidenavigationview : 'slidenavigationview',
            filialfindercontainer : 'filialfindercontainer',
            transactioncontainer : 'transactionpanel'

		}, 

		control:{
			slidenavigationview : {
				'onSelect' : 'doOnSelectHandling',
			},

			filialfindercontainer : {
				activate : 'loadFilialfinderList'
			},

			transactioncontainer : {
				activate : 'loadTransactionList'
			}
		}



	},

	init: function(){
		console.log('home controller: inited');

		console.log(this.getSlidenavigationview());

	},

	doOnSelectHandling: function(item){
 		if(item.raw.items[0].title == "Logout"){
			MobileFinance.app.getController('Login').doLogout();
        }
	},

	loadFilialfinderList : function(newActiveItem, oldActiveItem, eOpts) {
		MobileFinance.app.getController("GeoLocation").doGeoRequest();
	},

	loadTransactionList : function(newActiveItem, oldActiveItem, eOpts) {
		MobileFinance.app.getController("Transaction").doRequest();
	}
	

	
});