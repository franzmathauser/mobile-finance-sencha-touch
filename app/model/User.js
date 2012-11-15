Ext.define("MobileFinance.model.User", {
    extend: "Ext.data.Model",
    config: {
        fields: [
        {
            name: 'username', 
            type: 'string'
        },
        {
            name: 'password', 
            type: 'string'
        },
        {
            name: 'Checked', 
            type: 'boolean'
        }
        ],
        validations: [
        	
        ]
    }
});