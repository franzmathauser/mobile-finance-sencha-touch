Ext.define('MobileFinance.view.statistics.ChartsCarousel', {
    extend: 'Ext.Panel',
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
                        xtype : 'bar-chart-container'
                    },
                    {
                        xtype : 'pie-chart-container'
                    },
                    {
                        xtype : 'radar-chart-container'
                    }
                ]
            }
        ]
    }
});
