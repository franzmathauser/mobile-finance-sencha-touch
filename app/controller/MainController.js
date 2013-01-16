Ext.define('MobileFinance.controller.MainController', {
	extend: 'Ext.app.Controller',

	requires: ['MobileFinance.util.GlobalConf'],
	
	config:{
		views: ['Main', 'Login', 'Home'],
		controllers: ['AuthController']
	},

	/**
     * @function inti 
     * @description method called after initialization of controller
     */
	init: function(){
		console.log('main controller: inited');

	}

	
});