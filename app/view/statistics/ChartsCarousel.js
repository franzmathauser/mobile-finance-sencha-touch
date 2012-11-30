Ext.define('MobileFinance.view.statistics.ChartsCarousel', {
    extend: 'Ext.Panel',
    //xtype: 'main',
    alias: "widget.charts-carousel",

    requires: ['Ext.carousel.Carousel', 'Ext.chart.CartesianChart'],

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
                        xtype : 'radar-chart-container'
                    },
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
