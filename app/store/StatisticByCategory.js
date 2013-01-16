Ext.define('MobileFinance.store.StatisticByCategory',{
    extend: 'Ext.data.Store',
    
    config: {

        fields: ['name', 'value1'],

        autoLoad: false,
        
        proxy: {
            type: 'ajax',
            // url: is set in controller
            useDefaultXhrHeader:false,
            withCredentials:true,
            reader: {
                type: 'json',
                rootProperty:'bodyData'
            },
            headers: {
                'Accept': 'application/json'
            }
        }
    }
})