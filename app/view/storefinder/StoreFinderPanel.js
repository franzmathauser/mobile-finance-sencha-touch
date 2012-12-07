Ext.define('MobileFinance.view.storefinder.StoreFinderPanel', {
   extend: 'Ext.Panel',
   
   alias: 'widget.storefinder-panel',
   
   config: {
       title: 'Filialfinder',
       iconCls: 'maps',
       layout: 'fit',
        
        items: [
            {
                xtype: 'list',
                store: 'Stores',
                itemTpl: '<img src="{icon}" /><h1>{name:ellipsis(22)}</h1><h3>{vicinity:ellipsis(32)}</h3>', 
                itemCls: 'storefinder-entry',
                grouped: true,
                indexBar: true,
                allowDeselect : true
            }
        ]
      
   }
});