Ext.define("MobileFinance.store.UserStore", {
    extend: "Ext.data.Store",
    storeId: 'UserStore',
    config: {
        autoLoad: true 
    },
    model: 'MobileFinance.model.UserModel',
    proxy: {
        type: 'localstorage',
        id: 'Username'
    }
        
});
