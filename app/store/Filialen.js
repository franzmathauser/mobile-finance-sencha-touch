Ext.define('MobileFinance.store.Filialen',{
    extend: 'Ext.data.Store',
    
    config: {
        model: 'MobileFinance.model.Filiale',
        autoLoad: false,
        grouper: {
            groupFn: function(record) {
                return record.get('name').toUpperCase().substr(0, 1);
            }
        },
        proxy: {
            type: 'ajax',
            //url: is set in controller
            useDefaultXhrHeader:false,
            withCredentials:true,
            reader: {
                type: 'json',
                rootProperty:'results'
            }
        }
    }
})