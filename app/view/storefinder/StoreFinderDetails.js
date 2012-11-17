Ext.define('MobileFinance.view.storefinder.StoreFinderDetails', {
   extend: 'Ext.Panel',
   alias : 'widget.storefinder-details',
   xtype: 'storefinder-details',


   config: {

       title: 'Details',
       layout: 'fit',
       scrollable: true,
       styleHtmlContent: true,
       tpl: '<img src="{icon}" /><h1>{name}</h1><h3>{vicinity}</h3>',
       hidden:true,
       items: [
      ]
   }
   
});