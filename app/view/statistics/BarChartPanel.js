var store = Ext.create("Ext.data.Store", {
    fields: ['name', 'value1', 'value2'],
    data: [
        { name: 'Jan', value1: 5, value2: 412 },
        { name: 'Feb', value1: 23, value2: 142 },
        { name: 'Mar', value1: 83, value2: 113 },
        { name: 'Apr', value1: 233, value2: 834 },
        { name: 'May', value1: 509, value2: 1024 },
        { name: 'Jun', value1: 864, value2: 1102 },
        { name: 'Jul', value1: 1144, value2: 425 },
        { name: 'Aug', value1: 1179, value2: 324 },
        { name: 'Sep', value1: 946, value2: 39 },
        { name: 'Oct', value1: 591, value2: 1142 },
        { name: 'Nov', value1: 288, value2: 523 },
        { name: 'Dec', value1: 109, value2: 634 }
    ]
});

Ext.define('MobileFinance.view.statistics.BarChartPanel', {
   extend: 'Ext.Panel',
   alias: 'widget.bar-chart',

   requires: [
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Bar',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.PolarChart',
        'Ext.chart.interactions.ItemInfo',
        ],

   config: {
       title: 'Bar Chart',
       layout: 'fit',
        
        items: [
        {
            xtype: 'chart',
            background: "none",
            store: store,
            animate: true,
            interactions: ['panzoom', 'itemhighlight', {
                type: 'iteminfo',
                listeners: {
                    show: function(me, item, panel) {
                        panel.setHtml('Stock Price: $' + item.record.get('value2'));
                    }
                }
            }],
            legend: {
                position: "bottom"
            },
            series: [
                {
                    type: 'line',
                    xField: 'name',
                    yField: 'value1',
                    title: 'Line',
                    style: {
                        smooth: true,
                        stroke: '#115fa6',
                        lineWidth: 3,
                        shadowColor: 'rgba(0,0,0,0.7)',
                        shadowBlur: 10,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3
                    },
                    highlightCfg: {
                        scale: 2
                    },
                    marker: {
                        type: 'circle',
                        stroke: '#0d1f96',
                        fill: '#115fa6',
                        lineWidth: 2,
                        radius: 4,
                        shadowColor: 'rgba(0,0,0,0.7)',
                        shadowBlur: 10,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3,
                        fx: {duration: 300}
                    }
                },
                {
                    type: 'bar',
                    xField: 'name',
                    yField: ['value2'],
                    title: ['Bar'],
                    style: {
                        maxBarWidth: 15,
                        lineWidth: 1.5,
                        fill: "#a61120",
                        stroke: 'black',
                        shadowColor: 'rgba(0,0,0,0.7)',
                        shadowBlur: 10,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3
                    }
                }
            ],
            axes: [
                {
                    type: 'numeric',
                    position: 'left',
                    grid: {
                        odd: {
                            fill: '#fafafa'
                        }
                    },
                    style: {
                        axisLine: false,
                        estStepSize: 20,
                        stroke: '#ddd'
                    },
                    minimum: 0,
                    maximum: 1210
                },
                {
                    type: 'category',
                    position: 'bottom',
                    visibleRange: [0, 0.7],
                    style: {
                        estStepSize: 1,
                        stroke: '#999'
                    }
                }
            ]
        }

        ]
      
   }
});