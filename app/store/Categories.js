Ext.define('MobileFinance.store.Categories',{
    extend: 'Ext.data.Store',
    
    config: {
        model: 'MobileFinance.model.Category',
        autoLoad: false,
        autoSync: true,

        proxy: {
            type : 'rest',
            //url: is set in controller
            withCredentials:true,
            useDefaultXhrHeader:false,
            reader: {
                type: 'json',
                rootProperty: 'bodyData'
            },
            headers: {
                'Accept': 'application/json'
            },
        }
    }
})