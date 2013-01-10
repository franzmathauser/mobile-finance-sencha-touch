Ext.define('MobileFinance.view.CategorySetting', {
    extend: 'Ext.form.Panel',
    alias: "widget.category-setting",

    requires: [
    ],
    
    config: {
        layout : {
            type: 'vbox'
        },
        items : [
            {
                xtype: 'fieldset',
                title: 'Kategorie',
                items: [{
                            xtype: 'hiddenfield',
                            name: 'id'
                        },
                        {
                            xtype: 'hiddenfield',
                            name: 'iconUrl'
                        },
                        {
                            xtype: 'textfield',
                            name: 'name',
                            label: 'Name'
                        }
                ]
            },
            {
                xtype: 'button',
                text: 'Speichern',
                iconCls : 'action',
                iconMask : true,
                ui:'confirm',
                action: 'category-save'
            }
            ,
            {
                xtype: 'button',
                text: 'Löschen',
                iconCls : 'trash',
                iconMask : true,
                ui:'decline',
                action: 'category-delete'
            }
        ]
    }
});
