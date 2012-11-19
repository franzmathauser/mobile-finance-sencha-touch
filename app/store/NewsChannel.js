Ext.define('MobileFinance.store.NewsChannel',{
    extend: 'Ext.data.Store',
    
    config: {
        model: 'MobileFinance.model.News',
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: 'https://pc42366.de.softlab.net:8181/JavaBackend/rest/newschannel',
            reader: {
                type: 'json',
                rootProperty:'bodyData'
            },
            headers: {
                'Accept': 'application/json'
            },
        }
    }
})