Ext.define('MobileFinance.controller.MainController', {
	extend: 'Ext.app.Controller',

	requires: ['MobileFinance.util.GlobalConf'],
	
	config:{
		views: ['Main', 'Login', 'Home'],
		controllers: ['AuthController']
	},

	init: function(){
		console.log('main controller: inited');

	}

	
});