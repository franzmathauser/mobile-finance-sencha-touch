Ext.define('MobileFinance.util.GlobalConf', {

    constructor: function (config) {
         this.javaBackendBaseUrl = 'http://'+this.backendHost+':8080/JavaBackend/rest/';
         this.nodejsBackendBaseUrl = 'http://'+this.backendHost+':4000/';
     },
    

    singleton: true,

    //backendHost: 'pc42366.de.softlab.net',
    //backendHost: '192.168.178.150',
    backendHost : '192.168.178.150',

    javaBackendBaseUrl : '',

    nodejsBackendBaseUrl : '',

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