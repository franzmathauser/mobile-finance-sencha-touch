Ext.define("MobileFinance.store.UserStore", {
    extend: "Ext.data.Store",
    storeId: 'UserStore',
    config: {
        autoLoad: true 
    },
    model: 'MobileFinance.model.User',
    proxy: {
        type: 'localstorage',
        id: 'Username'
    }
        
});
