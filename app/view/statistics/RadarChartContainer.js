Ext.define('MobileFinance.view.statistics.RadarChartContainer', {
   extend: 'Ext.Panel',
   alias: 'widget.radar-chart-container',

   config: {

       layout: 'vbox',
        
        items: [
        {
            flex: 5,
            xtype : 'radar-chart'

        },
        {
            html: 'message preview',
            style: 'background-color: #759E60;',
            flex: 1
        }
    ]
      
   }
});