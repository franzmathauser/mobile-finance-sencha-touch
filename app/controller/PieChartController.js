Ext.define('MobileFinance.controller.PieChartController', {
	extend: 'Ext.app.Controller',

	config:{

		stores: ['StatisticByCategory', 'IncomeOutcomeSaldos', 'MonthlyCategories']
		
	},

	/**
     * @function inti 
     * @description method called after initialization of controller
     */
	init: function(){
		console.log('piechart controller: inited');
	}

	
});