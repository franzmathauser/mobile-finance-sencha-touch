Ext.define('MobileFinance.controller.NewsChannelController', {
	extend: 'Ext.app.Controller',

	requires: [
		'MobileFinance.util.GlobalConf',
        'Ext.data.Store',
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
        'Ext.data.proxy.Rest',
        'MobileFinance.model.BankTransfer'
    ],
	config:{
		
		views: ['NewsChannel'],
		models: ['News'],
		stores: ['NewsChannel'],

		refs: {
			newsChannel: 'newschannel',
			newsChannelList: 'newschannel list'
		}, 

		control: {
			newsChannel: {
				show: 'loadNewsChannel'
			}
		}
	},

	/**
     * @function inti 
     * @description method called after initialization of controller
     */
	init: function(){
		console.log('newschannel controller: inited');

	}, 

	/**
     * @function loadNewsChannel 
     * @description method loads the store with news-data.
     */
	loadNewsChannel: function() {
		this.getNewsChannelList().getStore().load();
	}

	
});