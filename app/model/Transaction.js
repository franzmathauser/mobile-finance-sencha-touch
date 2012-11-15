Ext.define('MobileFinance.model.Transaction', {
   extend: 'Ext.data.Model',
   
   config: {
       fields: ['id', 'billingDate', 'valueDate', 'amount', 'revenueType', 'name', 'account', 'bankCode', 'purpose', 'category']
   }
    
});