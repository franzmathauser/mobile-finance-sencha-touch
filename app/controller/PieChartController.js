Ext.define('MobileFinance.controller.PieChartController', {
	extend: 'Ext.app.Controller',

	stores: ['StatisticByCategory', 'IncomeOutcomeSaldos'],
	
	config:{
		
	},

	init: function(){
		console.log('piechart controller: inited');
	}

	
});