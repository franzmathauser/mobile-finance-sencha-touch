Ext.define('MobileFinance.view.BankInfoPanel', {
    extend: 'Ext.Panel',
    //xtype: 'main',
    alias: "widget.bank-info-panel",

    requires: [
    ],
    
    config: {
        
        html: ['<div class="support-box">',
                '<div class="support-content">',
                '<h4>Ihr Ansprechpartner</h4>',
                '<img src="resources/icons/banker.png" align="center" />',
                        '<p>',
                            'Herr<br>',
                            'Max Mustermann',
                        '</p>',
                        '<h4>Telefon</h4>',
                        '<p>',
                            '+49 8912345678',
                        '</p>',
                        '<h4>Email</h4>',
                        '<p>',
                            '<a href="max.mustermann@bank.de" />max.mustermann@bank.de</a>',
                        '</p>',
                '</div>',
            '</div>'
        ].join("")

    }
});
