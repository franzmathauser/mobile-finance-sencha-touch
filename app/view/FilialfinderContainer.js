Ext.define('MobileFinance.view.FilialfinderContainer', {
   extend: 'Ext.Container',
   
   alias: 'widget.filialfindercontainer',
   xtype: 'filialfindercontainer',
   
   requires: [ 'Ext.device.Communicator',
        'Ext.device.camera.PhoneGap',
        'Ext.device.camera.Sencha',
        'Ext.device.camera.Simulator', 'Ext.device.Geolocation', 'Ext.Map'],


   config: {
       layout:'fit',
       title: 'Filialfinder',
       iconCls: 'maps',
       items: [
           {
               xtype: 'filialfinderpanel',
               width: 400,
               docked: 'left',
           },{
               xtype: 'container',
               layout: 'vbox',
               items: [
                   {
                       xtype: 'filialfinderdetailspanel',
                       flex: 1,
                       baseCls: 'filialfinder-details',

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
