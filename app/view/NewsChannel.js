Ext.define('MobileFinance.view.NewsChannel', {
    extend: 'Ext.Panel',
    alias: "widget.newschannel",

    config: {

        title: 'News',
        iconCls: 'time',
        scrollable: true,
        layout: 'fit',

        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'News Channel'
            }, 
            {
                xtype: 'list',
                store: 'NewsChannel',
                itemTpl: '<tpl if="image"><img src="{image}" /></tpl><h1>{message}</h1><h3>{date}</h3>', 
                itemCls: 'newschannel-entry',
                plugins: [
                    MobileFinance.util.GlobalConf.pullRefreshPlugin,
                    MobileFinance.util.GlobalConf.infiniteScroll
                ]
            }
        ]
    }
});
