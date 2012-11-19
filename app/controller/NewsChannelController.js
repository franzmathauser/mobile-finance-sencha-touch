Ext.define('MobileFinance.controller.NewsChannelController', {
	extend: 'Ext.app.Controller',

	requires: [
        'Ext.data.Store',
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging'
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

	init: function(){
		console.log('newschannel controller: inited');

	}, 

	loadNewsChannel: function() {
		this.getNewsChannelList().getStore().load();
	}

	
});