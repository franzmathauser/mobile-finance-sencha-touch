Ext.define('MobileFinance.view.BarChartContainer', {
   extend: 'Ext.Panel',
   alias: 'widget.bar-chart-container',

   config: {

       layout: 'vbox',
        
        items: [
        {
            flex: 5,
            xtype : 'bar-chart'

        },
        {
            html: 'message preview',
            style: 'background-color: #759E60;',
            flex: 1
        }
    ]
      
   }
});