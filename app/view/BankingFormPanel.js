Ext.define('MobileFinance.view.BankingFormPanel', {
   extend: 'Ext.Panel',
   
   alias: 'widget.banking-form-panel',
   
   config: {
       title: 'Banking',
       layout: 'hbox',
      
        
        items: [
            {
              xtype: 'panel',
              layout: 'fit',
              flex:1,
              items: [
                  {
                    xtype: 'banking-form',
                  }
              ]
            },{
                xtype: 'panel',
                width:'220px',
            }
            
        ]
   }
});