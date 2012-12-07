Ext.Loader.setConfig({enabled:true});
//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'MobileFinance': 'app',
    'Ext.ux':'ux',
});
//</debug>

Ext.application({
    name: 'MobileFinance',

    backendBaseUrl : 'https://pc42366.de.softlab.net:8181/JavaBackend/rest/',

    requires: ['Ext.MessageBox', 'Ext.Anim'],

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
        'BankingController'
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
    }, 
    /** 
    * configuration of pullrefresh for list components
    */
    pullRefreshPlugin : {
        xclass: 'Ext.plugin.PullRefresh',
        pullRefreshText: 'Ziehen um neue Daten zu laden!',
        releaseRefreshText: 'Loslassen zum aktualisieren',
        lastUpdatedText: 'Letzte Aktualisierung:',
        loadingText: 'Datenladen...',
        pullTpl: [
            '<div class="x-list-pullrefresh">',
                '<div class="x-list-pullrefresh-arrow"></div>',
                '<div class="x-loading-spinner">',
                    '<span class="x-loading-top"></span>',
                    '<span class="x-loading-right"></span>',
                    '<span class="x-loading-bottom"></span>',
                    '<span class="x-loading-left"></span>',
                '</div>',
                '<div class="x-list-pullrefresh-wrap">',
                    '<h3 class="x-list-pullrefresh-message">{message}</h3>',
                    '<div class="x-list-pullrefresh-updated">{lastUpdatedText}&nbsp;{lastUpdated:date("d.m.Y h:iA")}</div>',
                '</div>',
            '</div>'
        ].join('')
    },

    /** 
    * configuration of infinitescrolling  for list components
    */
    infiniteScroll : {
        xclass: 'Ext.plugin.ListPaging',
        autoPaging: true,
        loadMoreText: 'lade weitere Daten...'
    },

    /**
    * status of allowed bankaccount-id, only this accound-id is 
    * accessable thru the session user.
    **/
    currentBankAccount : -1

});
