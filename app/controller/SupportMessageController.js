Ext.define('MobileFinance.controller.SupportMessageController', {
	extend: 'Ext.app.Controller',

	requires: ['MobileFinance.util.Socketio', 'MobileFinance.model.SupportMessage'],

	config:{
		
		refs: {
			chatSendMessageBtn : 'button[action=sendChatMessage]',
			chatMessageField : 'chat-panel panel toolbar textfield',
			chatMessageProtocol : 'chat-panel list'
		},

		control: {
        	chatSendMessageBtn : {
            	tap : 'doSendMessage'
        	}
        }, 

        stores: ['SupportMessages']

	},

	/**
     * @ inti 
     * @description method called after initialization of controller
     */
	init: function(){
		console.log('support-message controller: inited');
	
		if (!this.socket) {
			this.initSocketConnection();
		}

	}, 

	initSocketConnection: function() {
		this.chatStore = Ext.getStore('SupportMessages');
		this.configStore = Ext.StoreMgr.get('ConfigStore');

		this.socket = new MobileFinance.util.Socketio(MobileFinance.util.GlobalConf.nodejsBackendBaseUrl);

		//this.socket.connect();

		// Event Listener
		this.socket.on(
			'connect',
			function(){
					this.sendMessageToServer('connection established.'); 
			},
			//this.registerUser,
			this
		);

		this.socket.on(
			'message',
			this.addMessageToChatStore,
			this
		);

		MobileFinance.app.on(
			'newMsg',
			this.sendMessageToServer,
			this
		);
	},

	connectToSocket: function(){
		this.socket.connect();
	},

	sendMessageToServer: function(msg){
		this.socket.send(msg);
	},

	addMessageToChatStore: function(data) {
		this.chatStore.add({xindex:data.xindex, user:data.user, message:data.message});
		var listScroller = this.getChatMessageProtocol().getScrollable().getScroller()
		listScroller.scrollToEnd(true);

	},

	registerUser: function() {

		var user = {
			nickname: 'franz',
			gravatar: 'banker'
		};
		
		this.socket.send(user);
	}, 

	doSendMessage : function() {
		var msg = this.getChatMessageField().getValue();
		this.sendMessageToServer(msg);
	}
	
});