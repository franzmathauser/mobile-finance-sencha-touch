Ext.Loader.setConfig({enabled:true});
//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'MobileFinance': 'app'
});
//</debug>

Ext.application({
    name: 'MobileFinance',

    requires: ['Ext.MessageBox', 'Ext.Anim' /*, 'MobileFinance.util.Socketio'*/],

    controllers: [ 
        'MainController', 
        'LoginController', 
        'NewsChannelController', 
        'AuthController', 
        'HomeController', 
        'PlacesController', 
        'GeoLocationController', 
        'TransactionController', 
        'PieChartController', 
        'BankingController',
        'SupportMessageController'
    ],

    views: ['Main'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // prevent OPTION-HTTP-Requests on customized headers for CORS // readmore http://remysharp.com/2011/04/21/getting-cors-working/
        Ext.Ajax.setUseDefaultXhrHeader(false);

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('MobileFinance.view.Main'));

        /*
        Ext.device.Push.register({
            type: Ext.device.Push.ALERT|Ext.device.Push.BADGE|Ext.device.Push.SOUND,
            success: function(token) {
                alert(token);
                console.log('# Push notification registration successful:');
                console.log('    token: ' + token);

            },
            failure: function(error) {
                alert(error);
                console.log('# Push notification registration unsuccessful:');
                console.log('     error: ' + error);
                
            },
            received: function(notifications) {
                alert(JSON.stringify(notifications));
                console.log('# Push notification received:');
                console.log('    ' + JSON.stringify(notifications));
                
            }
        });
        */

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
    

});
