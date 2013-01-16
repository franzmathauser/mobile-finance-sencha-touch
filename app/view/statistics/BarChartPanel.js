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
        'Ext.chart.interactions.ItemInfo'
        ],

   config: {
       title: 'Bar Chart',
       layout: 'fit',
        
        items: [
        {
            xtype: 'chart',
            background: "none",
            store: 'IncomeOutcomeSaldos',
            animate: true,
            //flipXY:true,
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
                    type: 'bar',
                    xField: 'name',
                    yField: ['value1','value2'],
                    title: ['Einnahmen', 'Ausgaben'],
                    style: {
                        maxBarWidth: 30,
                        lineWidth: 1.5,
                        //fill: "#a61120",
                        stroke: 'rgb(40,40,40)',
                        shadowColor: 'rgba(0,0,0,0.7)',
                        shadowBlur: 10,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3
                    }, 
                    subStyle: {
                      fillStyle: ["#94ae0a", "#a61120"]
                    },
                    stacked:false
                },
                {
                    type: 'line',
                    xField: 'name',
                    yField: 'value3',
                    title: 'Saldo',
                    style: {
                        smooth: false,
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
                    //minimum: 0,
                    //maximum: 1210,
                    fields:['value1', 'value2', 'value3']

                },
                {
                    type: 'category',
                    position: 'bottom',
                    // visibleRange: [0, 0.7],
                    style: {
                        estStepSize: 1,
                        stroke: '#999'
                    },
                    fields: 'name'
                }
            ]
        }

        ]
      
   }
});