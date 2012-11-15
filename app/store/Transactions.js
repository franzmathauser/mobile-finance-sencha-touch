Ext.define('MobileFinance.store.Transactions',{
    extend: 'Ext.data.Store',
    
    config: {
        model: 'MobileFinance.model.Transaction',
        autoLoad: false,
        
        grouper: {
            groupFn: function(record) {
                return record.get('billingDate').toUpperCase();
            }
        },
        
        proxy: {
            type: 'ajax',
            //url: is set in controller
            useDefaultXhrHeader:false,
            withCredentials:true,
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