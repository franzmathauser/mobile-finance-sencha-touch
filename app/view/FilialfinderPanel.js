Ext.define('MobileFinance.view.FilialfinderPanel', {
   extend: 'Ext.Panel',
   
   alias: 'widget.filialfinderpanel',
   
   config: {
       title: 'Filialfinder',
       iconCls: 'maps',
       layout: 'fit',
        
        items: [
            {
                xtype: 'list',
                store: 'Filialen',
                itemTpl: '<img src="{icon}" /><h1>{name:ellipsis(22)}</h1><h3>{vicinity:ellipsis(40)}</h3>', 
                itemCls: 'filialfinder-entry',
                grouped: true,
                indexBar: true,
                allowDeselect : true
            }
        ]
      
   }
});