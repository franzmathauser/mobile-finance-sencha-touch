Ext.define('MobileFinance.view.Main', {
    extend: 'Ext.tab.Panel',
    //xtype: 'main',
    alias: "widget.main",

    requires: [
    ],
    
    config: {
        tabBarPosition: 'bottom',

        items: [
            { 
                xtype: 'loginpage'
            },
            {
               xtype: 'newschannel'
                
            }
        ]
    }
});
