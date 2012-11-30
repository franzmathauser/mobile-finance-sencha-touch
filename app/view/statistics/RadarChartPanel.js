Ext.define('MobileFinance.view.statistics.RadarChartPanel', {
   extend: 'Ext.Panel',
   alias: 'widget.radar-chart',

   requires: [
      
  ],

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

   // config: {
   //    title: 'Radar Chart',
   //    layout: 'fit',

   //    item: [{
   //        xtype: 'polar',
   //        store: 'MonthlyCategories',

   //        background: 'white',
   //        interactions: 'rotate',

   //        series: [{
   //            type:'radar',
   //            xField: 'name',
   //            yField:'value1',
   //            style: {
   //              fillStyle: 'rgba(0,255,0,0.2)',
   //              strokeStyle: 'rgba(0,0,0,0.8)',
   //              lineWidth:1
   //            }
   //        }],
   //        axes: [{
   //          type:'numeric',
   //          position:'radial',
   //          fields:'value1',
   //          grid:true,
   //          style:{
   //            estStepSize: 20
   //          },
   //          label: {
   //            fill:'black'
   //          }
   //        },
   //        {
   //          type:'category',
   //          position:'angular',
   //          fields:'name',
   //          grid:true,
   //          style:{
   //            estStepSize: 2
   //          },
   //          label: {
   //            fill:'black'
   //          }
   //        }]
          

   //    }]

      // animate: true,
      // store: 'MonthlyCategories',
      // theme: 'Category2',
      // insetPadding: 20,
      // width: 400, 
      // height:400,
      // legend: {
      //     position: 'right'
      // },
      // axes: [{
      //     type: 'Radial',
      //     position: 'radial',
      //     label: {
      //         display: true
      //     }
      // }],
      // series: [{
      //     type: 'radar',
      //     xField: 'name',
      //     yField: 'value1',
      //     showInLegend: true,
      //     showMarkers: true,
      //     markerCfg: {
      //         radius: 5,
      //         size: 5
      //     },
      //     style: {
      //         'stroke-width': 2,
      //         fill: 'none'
      //     }
      // }
      // ,{
      //     type: 'radar',
      //     xField: 'name',
      //     yField: 'value2',
      //     showInLegend: true,
      //     showMarkers: true, 
      //     markerCfg: {
      //         radius: 5,
      //         size: 5
      //     },
      //     style: {
      //         'stroke-width': 2,
      //         fill: 'none'
      //     }
      // },{
      //     type: 'radar',
      //     xField: 'name',
      //     yField: 'value3',
      //     showMarkers: true,
      //     showInLegend: true,
      //     markerCfg: {
      //         radius: 5,
      //         size: 5
      //     },
      //     style: {
      //         'stroke-width': 2,
      //         fill: 'none'
      //     }
      // }
      // ]
      
   
});