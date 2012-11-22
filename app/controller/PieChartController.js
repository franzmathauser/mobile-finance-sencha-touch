Ext.define('MobileFinance.controller.PieChartController', {
	extend: 'Ext.app.Controller',

	stores: ['StatisticByCategory'],
	
	config:{
		
	},

	init: function(){
		console.log('piechart controller: inited');
	}

	
});