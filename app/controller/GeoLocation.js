Ext.define('MobileFinance.controller.GeoLocation',{
    extend: 'Ext.app.Controller',
    

    config: {
        views: ["FilialfinderContainer", "FilialfinderDetails", "FilialfinderPanel"],

        refs: {
            filialFinderDetails: 'filialfindercontainer filialfinderdetailspanel',
            filialFinderMap : 'filialfindercontainer map',
            filialFinderList : 'filialfindercontainer filialfinderpanel list'
        },

        control: {
            filialFinderList :{

                select: function(list, record, eOpts ) {

                    var filialFinderDetailsView = this.getFilialFinderDetails();


                    filialFinderDetailsView.setData(record.data);
                    
                    var filialFinderMap = this.getFilialFinderMap();
                    var location = record.get('geometry').location;
                    var coords = new google.maps.LatLng(location.lat, location.lng);
                    filialFinderMap.setMapCenter(coords);
                    
                    console.log(filialFinderMap.getMap());
                    this.currentMarker.setMap(filialFinderMap.getMap());
                    this.currentMarker.setPosition(coords);

                    filialFinderDetailsView.show();
                    this.currentItemId = record.get('id');
                    
               }, 

               deselect: function(list, record, supressed, eOpts){
                    var filialFinderDetailsView = this.getFilialFinderDetails();
                    filialFinderDetailsView.hide();
               }
           }
        }
    },
    
    init: function(){
        
        this.currentMarker = new google.maps.Marker({
            draggable: false,
            animation: google.maps.Animation.DROP
        });
    }, 

    doGeoRequest: function() {
        console.log(Ext.device);
        Ext.device.Geolocation.getCurrentPosition({
                scope:this,
                success: function(position) {
                    console.log(position.coords);
                    
                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;
                    var filialen = Ext.getStore('Filialen');
                    var filialenProxy = filialen.getProxy();
                    var map = this.getFilialFinderMap();

                    map.setMapCenter(new google.maps.LatLng(lat, lon));
                   
                    filialenProxy.setUrl('https://pc42366.de.softlab.net:8181/JavaBackend/rest/secure/places?location='+lat+','+lon);
                    console.log(filialenProxy);
                    filialen.load();
                },
                failure: function() {
                    console.log('something went wrong with geolocation!');
                }
            });
    }
    
});