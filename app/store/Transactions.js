Ext.define('MobileFinance.store.Transactions',{
    extend: 'Ext.data.Store',
    
    config: {
        model: 'MobileFinance.model.Transaction',
        autoLoad: false,
        
        grouper: {
            sortProperty:'billingDateMillis',
            direction: 'DESC',
            groupFn: function(record) {
                return record.get('billingDate').toUpperCase();
            }
        },
        
        proxy: {
            type: 'ajax',
            url: MobileFinance.app.backendBaseUrl+'secure/bankaccount/'+MobileFinance.app.currentBankAccount+'/transactions',
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