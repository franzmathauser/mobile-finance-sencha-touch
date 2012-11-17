Ext.define('MobileFinance.view.statistics.PieChartContainer', {
   extend: 'Ext.Panel',
   alias: 'widget.pie-chart-container',

   config: {

       layout: 'vbox',
        
        items: [
        {
            flex: 5,
            xtype : 'pie-chart'

        },
        {
            html: 'message preview',
            style: 'background-color: #759E60;',
            flex: 1
        }
    ]
      
   }
});