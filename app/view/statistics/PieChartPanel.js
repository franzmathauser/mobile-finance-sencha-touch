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

Ext.define('MobileFinance.view.statistics.PieChartPanel', {
   extend: 'Ext.Panel',
   alias: 'widget.pie-chart',

   requires: [
      'Ext.chart.series.Pie',
      'Ext.chart.interactions.Rotate'
  ],

   config: {
       title: 'Pie Chart',
       layout: 'fit',
        
        items: [
        {
          interactions: ['rotate', 'itemhighlight'],
          style: 'z-index: 5',
          xtype: 'polar',
          store: store,
          innerPadding: 16,
          series: [
              {
                  type: 'pie',
                  xField: 'value2',
                  donut: 30,
                  highlightCfg: {
                      margin: 15
                  },
                  style: {
                      fillOpacity: 0.9,
                      stroke: "#444"
                  },
                  subStyle: {
                      fillStyle: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
                  }
              }
            ]
          }

        ]
      
   }
});