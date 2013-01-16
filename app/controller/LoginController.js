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
            }
            
        },

        refs: {
            loginForm: '#loginForm',
            home: {
                xtype:'homescreen',
                selector: 'homescreen',
                autoCreate:true
            }
        }
        
    },
    
    /**
     * @function inti 
     * @description method called after initialization of controller
     */
    init: function(){
        console.log('login controller: inited');
    },

    /**
     * @function doLogin 
     * @description method performs a login request against the backend.
     */
    doLogin: function() {
        var form = this.getLoginForm();
        var jsonObj = form.getValues();
        var json = JSON.stringify(jsonObj);

        var url = MobileFinance.util.GlobalConf.javaBackendBaseUrl+'auth/login';

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

    /**
     * @function onLoginResponse 
     * @description method checks success-metadata-flag.
     */
    onLoginResponse: function(response, opts){
        var obj = Ext.decode(response.responseText);
        if(obj.success){
            this.onLoginSuccess(response, opts);
        } else {
            this.onLoginFailure(response, opts);
        }
    },

    /**
     * @function onLoginSuccess 
     * @description method shows home-screen and removes data of login-form.
     */
    onLoginSuccess: function(response, opts){
        
        // Receive allowed bankaccount id.
        var obj = Ext.decode(response.responseText);
        var allowedAccountId = obj.bodyData.allowedBankAccountId;

        MobileFinance.util.GlobalConf.currentBankAccount = allowedAccountId;

        var hc = MobileFinance.app.getController('HomeController');
        var logout = hc.getLogout();
        var form = this.getLoginForm();
        var jsonObj = form.setValues({
            username: "",
            password: ""
        });
        
        var items = Ext.Viewport.getItems();
        var home = this.getHome();
        var items = Ext.Viewport.getItems();

        home.previousView = items.items[0];

        Ext.Viewport.animateActiveItem(home,{ type: 'slide', direction: 'left'});
        home.openContainer();
    },

    /**
     * @function onLoginFailure 
     * @description method shows asynchronous alert if login-request was not successful.
     */
    onLoginFailure: function(response, opts){
        Ext.Msg.alert('Login fehlgeschlagen', 'Benutzer oder Passwort falsch', Ext.emptyFn);
    },

    /**
     * @function doLogout 
     * @description method performs a logout request against the backend, to destroy the session.
     */
    doLogout: function() {
        var url = MobileFinance.util.GlobalConf.javaBackendBaseUrl+'auth/logout';

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
                var auth = MobileFinance.app.getController("AuthController");
                auth.slideToLoginPanel();
            },

            failure: function(response) {
                console.log("Curses, something terrible happened");
            }
        });

    }
    
});

