Ext.define('MobileFinance.store.MonthlyCategories',{
    extend: 'Ext.data.Store',
    
    config: {

        fields: ['name', 'value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7', 'value8', 'value9', 'value10'],

        autoLoad: false,
        
        proxy: {
            type: 'ajax',
            url: 'https://pc42366.de.softlab.net:8181/JavaBackend/rest/secure/bankaccount/1/statistic/byMonthlyCategory?maxCategories=5',
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