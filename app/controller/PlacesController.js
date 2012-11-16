/**
*   This File needs to be removed after deleting login TEST-Buttons
*/

Ext.define('MobileFinance.controller.PlacesController', {
	extend: 'Ext.app.Controller',

	config:{
		
		views: ['Home'],

		controllers: ['Auth'],

		control: {
			'button[action=submitPlaces]': {
				tap:  'doPlaces'
			}
		}
	},

	init: function(){
		console.log('places controller: inited');

	},

	doPlaces: function() {
        var url = "https://pc42366.de.softlab.net:8181/JavaBackend/rest/secure/places?location=48.13661,11.57709"

        Ext.Ajax.request({
            url: url,
            method: 'GET',
            useDefaultXhrHeader:false,
            withCredentials:true,
            disableCaching:false,
            params: {
            },
            headers: {
                "Accept":"application/json"
            },

            success: function(response) {
                console.log(response.responseText);
            },

            failure: function(response) {
                console.log("failed");
            }
        });

    }

	
});