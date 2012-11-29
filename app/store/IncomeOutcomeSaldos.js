Ext.define('MobileFinance.store.IncomeOutcomeSaldos',{
    extend: 'Ext.data.Store',
    
    config: {

        fields: ['name', 'value1', 'value2', 'value3'],

        autoLoad: true,
        
        proxy: {
            type: 'ajax',
            url: 'https://pc42366.de.softlab.net:8181/JavaBackend/rest/secure/bankaccount/1/statistic/incomeOutcomeSaldo',
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