Ext.define('MobileFinance.view.Main', {
    extend: 'Ext.tab.Panel',
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
