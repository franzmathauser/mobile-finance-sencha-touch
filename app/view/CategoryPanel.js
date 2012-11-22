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
                xtype: 'list',
                store: 'Categories',
                itemTpl: '<img src="{iconUrl}" style="float:left;"/>'+
                   '<h1>{name:ellipsis(22)}</h1>',
                  
                itemCls: 'category-entry',
                //plugins: [MobileFinance.app.pullRefreshPlugin]
            }
        ]
   }
});