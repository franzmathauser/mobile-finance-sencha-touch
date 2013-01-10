Ext.define('MobileFinance.view.TransactionPanel', {
   extend: 'Ext.Panel',
   
   alias: 'widget.transactionpanel',

   config: {
       title: 'Transaktionen',
       layout: 'hbox',
      
        
        items: [
            {
              xtype: 'panel',
              layout: 'fit',
              flex:1,
              items: [
              // {  
              //     xtype:'toolbar',
              //     docked:'top',  

              //     items:[{  
              //         xtype: 'searchfield',
              //         placeHolder: 'Search Transaction'  
              //     }]  
              // },
              {
                    xtype: 'list',
                    store: 'Transactions',
                    itemTpl: '<span class="transaction-amount <tpl if="amount &gt; 0">green<tpl else>red</tpl>">{amount} &euro;</span>'+
                      '<img src="{categoryIcon}" style="float:left;"/>'+
                      '<h1>{name:ellipsis(22)}</h1>'+
                      '<h3>{purpose:ellipsis(50)}</h3>',
                      
                    itemCls: 'transaction-entry',
                    grouped: true,
                    //indexBar: true,
                    allowDeselect : true, 
                    plugins: [MobileFinance.util.GlobalConf.pullRefreshPlugin]
                  }
              ]
            },{
                xtype: 'bank-info-panel',
                width:'220px',
                cls: 'bank-info-panel'

            }
            
        ]
   }
});