Ext.define('MobileFinance.view.BankingForm', {
    extend: 'Ext.form.Panel',
    alias: "widget.banking-form",

    requires: [
    ],
    
    config: {

        title: 'Banking',
        fullscreen: true,

        items: [
            {
                xtype: 'fieldset',
                title: 'Banking',
                instructions: 'Geben Sie bitte ihre Bankingdaten ein',

                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'Begünstigter',
                        label: 'Begünstigter',
                        name: 'name',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Konto',
                        label: 'Konto',
                        name: 'accountNumber',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'BLZ',
                        label: 'BLZ',
                        name: 'bankCode',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Betrag',
                        label: 'Betrag',
                        name: 'amount',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Verwendungszweck',
                        label: 'Verwendungszweck',
                        name: 'purpose1'
                    },
                    {
                        xtype: 'textfield',
                        name: 'purpose2',
                        label: ' '
                    },
                    {
                        xtype: 'textfield',
                        name: 'purpose3',
                        label: ' '
                    },
                    {
                        xtype: 'textfield',
                        name: 'purpose4',
                        label: ' '
                    },
                    {
                        xtype: 'textfield',
                        name: 'purpose5',
                        label: ' '
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'confirm',
                text: 'Überweisung durchführen',
                action: 'doBankTransferSubmit'
            }
        ]
    }
});
