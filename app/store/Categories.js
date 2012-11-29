Ext.define('MobileFinance.store.Categories',{
    extend: 'Ext.data.Store',
    
    config: {
        model: 'MobileFinance.model.Category',
        autoLoad: false,
        autoSync: true,
        // proxy: {
        //     type: 'ajax',
        //     // url is set in controller
        //     useDefaultXhrHeader:false,
        //     withCredentials:true,
        //     reader: {
        //         type: 'json',
        //         rootProperty:'bodyData'
        //     },
        //     headers: {
        //         'Accept': 'application/json'
        //     },
        // }

        proxy: {
            type : 'rest',
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