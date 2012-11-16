Ext.define("MobileFinance.controller.LoginController", {
    extend: "Ext.app.Controller",

    config: {

        views:['Login', 'Home'],

        control: { 
            'button[action=submitLogin]': {
                tap:  'doLogin'
            },
            'button[action=submitLogout]': {
                tap:  'doLogout'
            },
            
        },

        refs: {
            loginForm: '#loginForm',
            home: {
                xtype:'homescreen',
                selector: 'homescreen',
                autoCreate:true
            },
        }
        
    },

    init: function(){
        console.log('login controller: inited');
    },

    
    test : function() {
        alert('catched');
    },

    doLogin: function() {
        var form = this.getLoginForm();
        var jsonObj = form.getValues();
        var json = JSON.stringify(jsonObj);

        var url = "https://pc42366.de.softlab.net:8181/JavaBackend/rest/auth/login"

        Ext.Ajax.request({
            url: url,
            method: 'POST',
            useDefaultXhrHeader:false,
            withCredentials:true,
            scope: this,
            params: {
                username:jsonObj.username,
                password:jsonObj.password
            },
            headers: {
                "Accept":"application/json"
            },

            success: this.onLoginResponse,
            failure: this.onLoginFailure
        });

        

    },

    onLoginResponse: function(response, opts){
        var obj = Ext.decode(response.responseText);
        if(obj.success){
            this.onLoginSuccess();
        } else {
            this.onLoginFailure(response, opts);
        }
    },

    onLoginSuccess: function(){
        
        var hc = MobileFinance.app.getController('HomeController');
        var logout = hc.getLogout();

        var form = this.getLoginForm();
        
        var jsonObj = form.setValues({
            username: "",
            password: ""
        });
        
 
        //logout.getComponent('LogoutFieldset').getComponent('LogoutUsername').setValue(username);

        var items = Ext.Viewport.getItems();
        //logout.previousView = items.items[0];
        //Ext.Viewport.animateActiveItem(login.previousView, hc.slideRightTransition);



        var home = this.getHome();

        var items = Ext.Viewport.getItems();
        home.previousView = items.items[0];

        Ext.Viewport.animateActiveItem(home,{ type: 'slide', direction: 'left'});
        home.openContainer();
    },

    onLoginFailure: function(response, opts){
        Ext.Msg.alert('Login fehlgeschlagen', 'Benutzer oder Passwort falsch', Ext.emptyFn);
    },

    doLogout: function() {
        var url = "https://pc42366.de.softlab.net:8181/JavaBackend/rest/auth/logout"

        Ext.Ajax.request({
            url: url,
            method: 'GET',
            useDefaultXhrHeader:false,
            withCredentials:true,
            params: {
            },
            headers: {
                "Accept":"application/json"
            },

            success: function(response) {
                //var auth = Ext.app.Application.getController("MobileFinance.controller.Auth");
                var auth = MobileFinance.app.getController("AuthController");
                auth.slideToLoginPanel();
            },

            failure: function(response) {
                console.log("Curses, something terrible happened");
            }
        });

    },
    
});

