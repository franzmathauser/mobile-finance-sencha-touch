Ext.define('MobileFinance.view.storefinder.StoreFinderContainer', {
   extend: 'Ext.Container',
   
   alias: 'widget.storefinder-container',
   xtype: 'storefinder-container',
   
   requires: [ 'Ext.device.Communicator',
        'Ext.device.camera.PhoneGap',
        'Ext.device.camera.Sencha',
        'Ext.device.camera.Simulator', 
        'Ext.device.Geolocation', 
        'Ext.Map'
  ],


   config: {
       layout:'fit',
       title: 'Filialfinder',
       iconCls: 'maps',
       items: [
           {
               xtype: 'storefinder-panel',
               width: 300,
               docked: 'left'
           },{
               xtype: 'container',
               layout: 'vbox',
               items: [
                   {
                       xtype: 'storefinder-details',
                       flex: 2,
                       baseCls: 'storefinder-details'
                   },{
                       xtype: 'map',
                       flex:10,
                       useCurrentLocation: false,
                       mapOptions: {
                           minZoom: 10,
                           zoom: 16,
                           zoomControlOptions: {
                               style: 'SMALL'
                           },
                           streetViewControl: false,
                           rotateControl: false,
                           panControl: false,
                           overviewMapControl: false
                       }
                   }
                   
               ]
               
               
           }
       ]
   }
});
