Ext.define('MobileFinance.controller.BankingController',{
    extend: 'Ext.app.Controller',
    
    requires: [
        'Ext.data.Store',
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

        Ext.device.Camera.capture({
            success: function(image) {
                //imageView.setSrc(image);
                console.log('picture-data:'+image);
            },
            failure: function() {
                console.error('picture could not be taken.');
            },

            quality: 80,
            width: 1024,
            height: 1024,
            destination: 'data',
            source: 'camera',
            encoding : 'png'
        });

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

            bankTransfer.save({
                success: function(){
                    this.getBankingForm().reset();
                    Ext.Msg.alert('Status', 'Ihre Überweisung wurde erfolgreich übertragen.');
                }, 
                failure: function(){
                    Ext.Msg.alert('Fehler', 'Ihre Überweisung konnte nicht übertragen werden. Versuchen Sie es zu einem späteren Zeitpunkt nocheinmal.');
                },

            }, this);
        }

    }
    
});