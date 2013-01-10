Ext.define('MobileFinance.view.CategoryPanel', {
   extend: 'Ext.Panel',
   xtype : 'categorypanel',
   alias: 'widget.categorypanel',
   
   config: {
       title: 'Kategorien',
       layout: 'fit',
       modal:true,
        
        items: [
            
            {
               xtype: 'navigationview',

               navigationBar: {
               
                 items: [
                 {
                    align: 'right',
                    xtype: 'button',
                    iconCls: 'add',
                    iconMask: true,
                    id: 'add-category-button',
                    ui: 'action',
                    hidden:true
                  },
                  {
                    align: 'right',
                    xtype: 'button',
                    iconCls: 'compose',
                    iconMask: true,
                    id: 'edit-category-button'
                  }
                  ]
                },

                items: [
                {
                 
                  xtype: 'list',
                  store: 'Categories',
                  itemTpl: '<img src="{iconUrl}" style="float:left;"/>'+
                     '<h1>{name:ellipsis(22)}</h1>',
                    
                  itemCls: 'category-entry'
                  //plugins: [MobileFinance.app.pullRefreshPlugin]
                }
               ]
            }
            
        ]
   }
});