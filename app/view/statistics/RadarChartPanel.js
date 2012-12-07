Ext.define('MobileFinance.view.statistics.RadarChartPanel', {
   extend: 'Ext.Panel',
   alias: 'widget.radar-chart',

   requires: ['Ext.chart.series.Radar'],

    config:{
      layout: 'fit',
      title: 'Radar Chart',

      items: [{
        xtype: 'polar',
        animate: true,
        interactions: ['rotate'],
        store: 'MonthlyCategories',
        legend: {
           position: 'left'
        },
        series: [{
            type: 'radar',
            showInLegend: true,
            showMarkers: true,
            xField: 'name',
            yField: 'value1',
            style: {
              fillStyle: 'rgba(0, 0, 255, 0.1)',
              strokeStyle: 'rgba(0, 0, 0, 0.8)',
              lineWidth: 1
            }
        },{
            type: 'radar',
            showInLegend: true,
            showMarkers: true,
            xField: 'name',
            yField: 'value2',
            style: {
              fillStyle: 'rgba(0, 0, 255, 0.1)',
              strokeStyle: 'rgba(0, 0, 0, 0.8)',
              lineWidth: 1
            }
        },{
            type: 'radar',
            showInLegend: true,
            showMarkers: true,
            xField: 'name',
            yField: 'value3',
            style: {
              fillStyle: 'rgba(0, 255, 0, 0.1)',
              strokeStyle: 'rgba(0, 0, 0, 0.8)',
              lineWidth: 1
            }
        },{
            type: 'radar',
            showInLegend: true,
            showMarkers: true,
            xField: 'name',
            yField: 'value4',
            style: {
              fillStyle: 'rgba(0, 255, 0, 0.1)',
              strokeStyle: 'rgba(0, 0, 0, 0.8)',
              lineWidth: 1
            }
        },{
            type: 'radar',
            showInLegend: true,
            showMarkers: true,
            xField: 'name',
            yField: 'value5',
            style: {
              fillStyle: 'rgba(0, 255, 0, 0.1)',
              strokeStyle: 'rgba(0, 0, 0, 0.8)',
              lineWidth: 1
            }
        }],
        axes: [
          {
            type: 'numeric',
            position: 'radial',
            fields: ['value1','value2','value3','value4','value5'],
            style: {
                estStepSize: 10
            },
            grid: true
          },
          {
            type: 'category',
            position: 'angular',
            fields: 'name',
            style: {
                estStepSize: 1
            },
            grid: true
          }
        ]
      }
      ]
    }

   
});