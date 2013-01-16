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
          legend: {
            docked: 'bottom'
          },
          style: 'z-index: 5',
          xtype: 'polar',
          store: 'StatisticByCategory',
          innerPadding: 16,
          series: [
              {
                  type: 'pie',
                  xField: 'value1',
                  labelField: 'name',
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