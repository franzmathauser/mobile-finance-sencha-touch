Ext.define('MobileFinance.store.NewsChannel',{
    extend: 'Ext.data.Store',
    
    config: {
        model: 'MobileFinance.model.News',
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: MobileFinance.app.backendBaseUrl+'newschannel',
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