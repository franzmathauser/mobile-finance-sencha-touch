var myStore = Ext.create("Ext.data.Store", {
    fields: ['xindex', 'gravatar', 'user', 'message'],
    autoload:true,
    data: [
        { xindex: 1, gravatar: 'franz.png', user:'franz', message: 'Hello World!'},
        { xindex: 2, gravatar: 'franz.png', user:'bank', message: 'Foo Bar!'},
        { xindex: 1, gravatar: 'franz.png', user:'franz', message: 'Hello World!'},
        { xindex: 2, gravatar: 'franz.png', user:'bank', message: 'Foo Bar!'},
        { xindex: 1, gravatar: 'franz.png', user:'franz', message: 'Hello World!'},
        { xindex: 2, gravatar: 'franz.png', user:'bank', message: 'Foo Bar!'},
        { xindex: 1, gravatar: 'franz.png', user:'franz', message: 'Hello World!'},
        { xindex: 2, gravatar: 'franz.png', user:'bank', message: 'Foo Bar!'},
        { xindex: 1, gravatar: 'franz.png', user:'franz', message: 'Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! '},
        { xindex: 2, gravatar: 'franz.png', user:'bank', message: 'Foo Bar!'},
        { xindex: 1, gravatar: 'franz.png', user:'franz', message: 'Hello World!'},
        { xindex: 2, gravatar: 'franz.png', user:'bank', message: 'Foo Bar!'},
        { xindex: 1, gravatar: 'franz.png', user:'franz', message: 'Hello World!'},
        { xindex: 2, gravatar: 'franz.png', user:'bank', message: 'Foo Bar!'}
    ]
});

Ext.define('MobileFinance.view.ChatPanel', {
    extend: 'Ext.Panel',
    alias: "widget.chat-panel",

    requires: [
    ],
    
    config: {

        
        title: 'Chat',
        layout: 'hbox',
       
        items: [

            {
                xtype:'panel',
                layout: 'fit',
                flex:1,

                items: [
                        {
                        xtype: 'list',
                        disableSelection:true,

                        itemTpl : '<tpl if="xindex % 2 === 0">'+
                                    '   <img class="odd" src="http://www.gravatar.com/avatar/{gravatar}?s=28&d=mm" />'+
                                    '   <p class="chat-right left"><span class="user">{user}:</span> {message}</p>'+
                                    '</tpl>'+
                                    '<tpl if="xindex % 2 === 1">'+
                                    '   <p class="chat-right right"><span class="user">{user}:</span> {message}</p>'+
                                    '   <img class="even" src="http://www.gravatar.com/avatar/{gravatar}?s=28&d=mm" />'+
                                    '</tpl>',
                        store: 'SupportMessages',
                        scrollable: 'vertical'
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'textfield',
                                width: '80%'
                            },{
                                xtype: 'button',
                                iconCls: 'chat',
                                iconMask: true,
                                action: 'sendChatMessage'
                            }
                        ]
                    }
                ]
            },{
                xtype: 'bank-info-panel',
                width:'220px',
                cls: 'bank-info-panel'

            }
            
        ]
    }
});
