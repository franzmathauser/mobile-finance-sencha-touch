Ext.define('MobileFinance.view.FilialfinderDetails', {
   extend: 'Ext.Panel',
   alias : 'widget.filialfinderdetailspanel',
   xtype: 'filialfinderdetailspanel',


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