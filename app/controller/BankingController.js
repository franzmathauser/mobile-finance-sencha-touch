Ext.define('MobileFinance.controller.BankingController',{
    extend: 'Ext.app.Controller',
    
    requires: [
        'Ext.data.Store'    
    ],

    config: {
        views: ["BankingForm"],

        refs: {
            transactionRefreshBtn : 'button[action=doCameraBankingCapture]',
            bankTransferSubmitBtn : 'button[action=doBankTransferSubmit]',
            bankingForm :'banking-form',
            bankingFormPanel: 'banking-form-panel panel'
        },

        control: {
            transactionRefreshBtn : {
                tap : 'doCamera'
            }, 
            bankTransferSubmitBtn : {
                tap : 'doBankTransferSubmit'
            }
        }
    },

    init: function() {
        console.log('banking controller: inited ');
    }, 

    doCamera: function() {
        
        console.log('camera button pressed');
var base64 = '';
        Ext.device.Camera.capture({

            success: function(base64) {

                Ext.Ajax.request({
                    url: 'http://192.168.178.150:8888/base64upload',
                    method: 'POST',
                    disableCaching:false,
                    params: {
                      image : base64
                    },
                    success: this.onOcrSuccess,
                    failure: function(){alert('error')}, 
                    scope: this
                });

            },

            failure: function() {
                console.error('picture could not be taken.');
                //alert('error');
            },

            quality: 100,
            width: 800,
            height: 800,
            destination: 'data',
            source: 'camera',
            encoding : 'png',
            scope:this
        });

    }, 

    onOcrSuccess: function(response, opts){
        var obj = Ext.decode(response.responseText);
        if(obj.success){
            var form = this.getBankingForm();
            form.setValues(obj.bodyData);
        }
    },

    doBankTransferSubmit: function() {
        console.log('send bank transfer');
        var form = this.getBankingForm();
        var formValues = form.getValues();
        var bankTransfer = Ext.create('MobileFinance.model.BankTransfer', formValues);

        var errors = bankTransfer.validate();

        if(!errors.isValid()){
            var msg = '';
            errors.each(function (error) {
                msg += error.getMessage() + '<br/>';
            });
            Ext.Msg.alert('ERROR', msg);
            return;
        } else {
            var bankTransferProxy = bankTransfer.getProxy();
            bankTransferProxy.setUrl(MobileFinance.util.GlobalConf.javaBackendBaseUrl+'secure/bankaccount/'+MobileFinance.util.GlobalConf.currentBankAccount+'/banktransfer');
            
            bankTransfer.save({
                success: function(){
                    this.getBankingForm().reset();
                    Ext.Msg.alert('Status', 'Ihre Überweisung wurde erfolgreich übertragen.');
                }, 
                failure: function(){
                    Ext.Msg.alert('Fehler', 'Ihre Überweisung konnte nicht übertragen werden. Versuchen Sie es zu einem späteren Zeitpunkt nocheinmal.');
                }

            }, this);
        }

    }
    
});