Ext.define('MobileFinance.controller.HomeController', {
	extend: 'Ext.app.Controller',

	config:{
		
		views: [
			'Home', 
			'TransactionPanel', 
			'BankingFormPanel',
			'BankingForm',
			'ChatPanel',
			'BankInfoPanel',
			'storefinder.StoreFinderContainer', 
			'storefinder.StoreFinderPanel', 
			'storefinder.StoreFinderDetails', 
			'statistics.ChartsCarousel', 
			'statistics.BarChartContainer', 
			'statistics.BarChartPanel',
			'statistics.PieChartContainer', 
			'statistics.PieChartPanel',
			'statistics.RadarChartContainer', 
			'statistics.RadarChartPanel'

		],

		controllers: ['AuthController', 'LoginController'],
		models: ['Store', 'Transaction', 'Category'],
		stores: ['Stores', 'Transactions', 'Categories'],

		refs: {
			logout: 'logout',
            slidenavigationview : 'slidenavigationview',
            storeFinderContainer : 'storefinder-container',
            transactioncontainer : 'transactionpanel',
            statisticscontainer : 'charts-carousel'

		}, 

		control:{
			slidenavigationview : {
				'onSelect' : 'doOnSelectHandling',
			},

			storeFinderContainer : {
				activate : 'loadStoreFinderList'
			},

			transactioncontainer : {
				activate : 'loadTransactionList'
			}, 
			statisticscontainer : {
				activate : 'loadStatistic'
			}
		}

	},

	init: function(){
		console.log('home controller: inited');
	},

	doOnSelectHandling: function(item){
 		if(item.raw.items[0].title == "Logout"){
			MobileFinance.app.getController('LoginController').doLogout();
        }
	},

	loadStoreFinderList : function(newActiveItem, oldActiveItem, eOpts) {
		MobileFinance.app.getController("GeoLocationController").doGeoRequest();
	},

	loadTransactionList : function(newActiveItem, oldActiveItem, eOpts) {
		MobileFinance.app.getController("TransactionController").doRequest();
	},

	loadStatistic :  function(newActiveItem, oldActiveItem, eOpts) {
		var statisticByCategories = Ext.getStore('StatisticByCategory');
		var statisticByCategoriesProxy = statisticByCategories.getProxy();
		statisticByCategoriesProxy.setUrl(MobileFinance.app.backendBaseUrl+'secure/bankaccount/'+MobileFinance.app.currentBankAccount+'/statistic/byCategory');
		statisticByCategories.load();

		var monthlyCategories = Ext.getStore('MonthlyCategories');
		var monthlyCategoriesProxy = monthlyCategories.getProxy();
		monthlyCategoriesProxy.setUrl(MobileFinance.app.backendBaseUrl+'secure/bankaccount/'+MobileFinance.app.currentBankAccount+'/statistic/byMonthlyCategory?maxCategories=5');
		monthlyCategories.load();

		var incomeOutcomeSaldos = Ext.getStore('IncomeOutcomeSaldos');
		var incomeOutcomeSaldosProxy = incomeOutcomeSaldos.getProxy();
		incomeOutcomeSaldosProxy.setUrl(MobileFinance.app.backendBaseUrl+'secure/bankaccount/'+MobileFinance.app.currentBankAccount+'/statistic/incomeOutcomeSaldo');
		incomeOutcomeSaldos.load();
	},
	
	
});