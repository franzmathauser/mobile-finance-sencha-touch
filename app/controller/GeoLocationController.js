Ext.define('MobileFinance.controller.GeoLocationController',{
    extend: 'Ext.app.Controller',
    

    config: {
        views: [
            "storefinder.StoreFinderContainer",
            "storefinder.StoreFinderDetails",
            "storefinder.StoreFinderPanel"
        ],

        refs: {
            storeFinderDetails: 'storefinder-container storefinder-details',
            storeFinderMap : 'storefinder-container map',
            storeFinderList : 'storefinder-container storefinder-panel list'
        },

        control: {
            storeFinderList :{

                select: function(list, record, eOpts ) {

                    var storeFinderDetailsView = this.getStoreFinderDetails();


                    storeFinderDetailsView.setData(record.data);
                    
                    var storeFinderMap = this.getStoreFinderMap();
                    var location = record.get('geometry').location;
                    var coords = new google.maps.LatLng(location.lat, location.lng);
                    storeFinderMap.setMapCenter(coords);
                    
                    console.log(storeFinderMap.getMap());
                    this.currentMarker.setMap(storeFinderMap.getMap());
                    this.currentMarker.setPosition(coords);

                    storeFinderDetailsView.show();
                    this.currentItemId = record.get('id');
                    
               }, 

               deselect: function(list, record, supressed, eOpts){
                    var storeFinderDetailsView = this.getStoreFinderDetails();
                    storeFinderDetailsView.hide();
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
                    var stores = Ext.getStore('Stores');
                    var storesProxy = stores.getProxy();
                    var map = this.getStoreFinderMap();

                    map.setMapCenter(new google.maps.LatLng(lat, lon));
                   
                    storesProxy.setUrl(MobileFinance.app.backendBaseUrl+'secure/places?location='+lat+','+lon);
                    console.log(storesProxy);
                    stores.load();
                },
                failure: function() {
                    console.log('something went wrong with geolocation!');
                }
            });
    }
    
});