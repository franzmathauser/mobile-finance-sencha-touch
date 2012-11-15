Ext.define('MobileFinance.controller.Main', {
	extend: 'Ext.app.Controller',

	config:{
		
		views: ['Main', 'Login', 'Home'],
		controllers: ['Auth']
	},

	init: function(){
		console.log('main controller: inited');

	}

	
});