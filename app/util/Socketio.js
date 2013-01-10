Ext.define('MobileFinance.util.Socketio',{
    extend: 'Ext.util.Observable',
    
    constructor: function(socketHost, options){

		options = options || {};

		MobileFinance.util.Socketio.superclass.constructor.call(
			this
		);
		this.socketHost = socketHost;

	},
	connect : function() {
		this.socket = io.connect(this.socketHost);

		var that = this;

		this.socket.on('connect', function(){
			that.onConnect();
		});
		this.socket.on('message', function(data){
			that.onMessage(data);
		});
		this.socket.on('close', function(){
			that.onClose();
		});
		this.socket.on('disconnect', function(){
			that.onDisconnect();
		});
	},
	
	disconnect: function(){
		this.socket.disconnect();
	},

	send: function(message) {
		//this.socket.send(message);
		this.socket.emit('message', {xindex:1, user:'ich', message:message});
	},

	onConnect: function() {
		this.fireEvent('connect');
	},

	onDisconnect: function() {
		this.fireEvent('disconnect');
	},

	onClose: function() {
		this.fireEvent('close');
	},

	onMessage: function(message) {
		this.fireEvent('message', message);
	}
})