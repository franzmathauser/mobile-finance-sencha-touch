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
     * @function inti 
     * @description method called after initialization of controller
     */
	init: function(){
		console.log('support-message controller: inited');
	
		if (!this.socket) {
			this.initSocketConnection();
		}

	}, 

	/**
     * @function initSocketConnection 
     * @description method initializes the websocket object.
     */
	initSocketConnection: function() {
		this.chatStore = Ext.getStore('SupportMessages');
		this.configStore = Ext.StoreMgr.get('ConfigStore');

		this.socket = new MobileFinance.util.Socketio(MobileFinance.util.GlobalConf.nodejsBackendBaseUrl);

		// Event Listener
		this.socket.on(
			'connect',
			function(){
					this.sendMessageToServer('connection established.'); 
			},
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

	/**
     * @function connectToSocket 
     * @description method establishes the websocket-connection
     */
	connectToSocket: function(){
		this.socket.connect();
	},

	/**
     * @function sendMessageToServer 
     * @description method sends message thru websocket.
     */
	sendMessageToServer: function(msg){
		this.socket.send(msg);
	},

	/**
     * @function addMessageToChatStore 
     * @description method handles received websocket-messages.
     */
	addMessageToChatStore: function(data) {
		this.chatStore.add({xindex:data.xindex, user:data.user, message:data.message});
		var listScroller = this.getChatMessageProtocol().getScrollable().getScroller()
		listScroller.scrollToEnd(true);

	},

	/**
     * @function doSendMessage 
     * @description button-handler reads input-field value and passes the information to send method.
     */
	doSendMessage : function() {
		var msg = this.getChatMessageField().getValue();
		this.sendMessageToServer(msg);
	}
	
});