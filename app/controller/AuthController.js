Ext.define('MobileFinance.controller.AuthController', {
	extend: 'Ext.app.Controller',

	config:{
		
		refs: {
			main:'main'
		}

	},

	/**
     * @function inti 
     * @description method called after initialization of controller
     */
	init: function(){
		console.log('auth controller: inited');

		// Event before a Ajax-Request is executed
		Ext.Ajax.on('beforerequest', function(conn, options) {
			console.log('before:' + arguments);
			//this.loadingMask.show();
		}, this );

		// Event on successful Ajax-Request
		Ext.Ajax.on('requestcomplete', function(conn, response, options) {
			console.log('complete');
			console.log(arguments);

			// check if version of json-responses is 1.0
			if(JSON.parse(response.responseText).version != '1.0') {
				Ext.Msg.alert('JSON Response changed', 'Das Backend liefert Daten in einer neuen Struktur aus. Dieser Client unterstützt dieses Format-Version noch nicht.');
			}

			//this.loadingMask.hide();
		}, this );

		// Event on HTTP-Errors Ajax-Request
		Ext.Ajax.on('requestexception', function(conn, response, options) {

			switch(response.status){
				case 401: // HTTP 401 Unauthorized Handling
					console.warn('auth-error 401');
					this.unauthorizedHandler(conn, response, options);
					break; 

				default: 
					break;
			}

			this.loadingMask.hide();

		}, this );

	}, 

	/*
	loadingMask: new Ext.LoadMask(Ext.getBody(), {
            message: "L&auml;dt...",
            itemId: "loadMask",
            indicator:true,
            hidden: true
    }),
	*/

	/**
	* @function unauthorizedHandler
    * @description method is called if a ajax-request returns with http-status 401.
	*/
	unauthorizedHandler: function(conn, response, options){
		
		Ext.Msg.alert('Zugriff verweigert', 'Der Zugriff auf Ihre Anfrage wurde verweigert.');

		this.slideToLoginPanel()

		delete options.failure;
  		delete options.callback;
	},

	/**
	* @function slideToLoginPanel
    * @description slides the login mask on the top of the screen.
	*/
	slideToLoginPanel: function(){
		var main = this.getMain();

		var items = Ext.Viewport.getItems();
        main.previousView = items.items[0];

		Ext.Viewport.animateActiveItem(main,{ type: 'slide', direction: 'right'});
	}

	
});