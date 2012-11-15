Ext.define('MobileFinance.model.Filiale', {
   extend: 'Ext.data.Model',
   
   config: {
       fields: ['id', 'recordId', 'name', 'icon', 'vicinity', 'rating', 'geometry']
   }
    
});