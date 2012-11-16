Ext.define('MobileFinance.view.ChartsCarousel', {
    extend: 'Ext.Panel',
    //xtype: 'main',
    alias: "widget.charts-carousel",

    config: {
        fullscreen: true,
        direction: 'vertical',
        layout: 'fit',
        
        items: [
            { 
                xtype: 'carousel',
                

                defaults: {
                    styleHtmlContent: true
                },

                items: [
                    {
                        xtype : 'bar-chart-container'
                    },
                    {
                        xtype : 'pie-chart-container'
                    },
                    {
                        html : 'Item 2',
                        style: 'background-color: #759E60'
                    }
                ]
            }
        ]
    }
});
