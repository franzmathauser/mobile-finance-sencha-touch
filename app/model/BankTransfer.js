Ext.define('MobileFinance.model.BankTransfer', {
   extend: 'Ext.data.Model',
   
   config: {
        fields: [
       		{name: 'name', type: 'string'},
       		{name: 'accountNumber', type: 'int'},
       		{name: 'bankCode', type: 'int'},
       		{name: 'amount', type: 'string'},
       		{name: 'purpose1', type: 'string'},
       		{name: 'purpose2', type: 'string'},
       		{name: 'purpose3', type: 'string'},
       		{name: 'purpose4', type: 'string'},
       		{name: 'purpose5', type: 'string'}
        ],

        validations: [
            {type: 'presence',  field: 'name', message: 'Bitte geben Sie einen Begünstigten an.'},
            {type: 'presence',  field: 'accountNumber' , message: 'Bitte geben Sie eine Kontonummer an.'},
            {type: 'presence',  field: 'bankCode', message: 'Bitte geben Sie eine Bankleitzahl an.'},
            {type: 'presence',  field: 'amount', message: 'Bitte geben Sie einen Betrag an.'},

            {type: 'length',    field: 'name',     min: 2, message: 'Name des Begünstigen ist zu kurz.'},
            {type: 'length',    field: 'accountNumber',  min: 3, message: 'Länge der Kontonummer ist zu kurz.'},

            {type: 'format',    field: 'amount', message: 'Betragformat stimmt nicht überein.', matcher: /^[-+]?[0-9]\d{0,2}(\.\d{1,2})?%?$/ }
        ],

        proxy: {
            type : 'rest',
            //url: is set in controller
            withCredentials:true,
            useDefaultXhrHeader:false,
            reader: {
                type: 'json',
                rootProperty: 'bodyData'
            },
            headers: {
                'Accept': 'application/json'
            },
        }
   }
   
});