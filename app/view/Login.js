Ext.define("MobileFinance.view.Login", {
	extend: 'Ext.form.Panel',
	xtype: "loginpage",
    id: 'loginForm',

    requires: ['Ext.field.Password', 'Ext.form.FieldSet'],
    
    config: {
        title: "Login", 
        iconCls: "user",

        layout: {
            type: 'vbox'
        },

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Mobile Finance'
            },
            {
                xtype: 'fieldset',
                title: 'Anmelden',
                instructions: 'Geben Sie bitte ihre Nutzerdaten ein',
                
                items: [
                {
                    xtype: 'textfield',
                    placeHolder: 'Benutzername',
                    name: 'username',
                    value: 'franz'
                },
                {
                    xtype: 'passwordfield',
                    placeHolder: 'Passwort',
                    name: 'password',
                    value: '123'

                },
                ]
            },
            {
                xtype: 'button',
                ui: 'confirm',
                text: 'Anmelden',
                action: 'submitLogin'
            }/*,{
                xtype: 'button',
                ui: 'confirm',
                text: 'Logout',
                action: 'submitLogout'
            },{
                xtype: 'button',
                ui: 'confirm',
                text: 'Request Places',
                action: 'submitPlaces'
            }*/
        ]
    	
    }

});

