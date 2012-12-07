Ext.define('MobileFinance.controller.PieChartController', {
	extend: 'Ext.app.Controller',

	config:{

		stores: ['StatisticByCategory', 'IncomeOutcomeSaldos', 'MonthlyCategories']
		
	},

	init: function(){
		console.log('piechart controller: inited');
	}

	
});