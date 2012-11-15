Ext.define('MobileFinance.view.Home', {
    extend: 'Ext.ux.slidenavigation.View',
    xtype: 'homescreen',

    requires: [
        
    ],

    config: {
        fullscreen: true,
        slideSelector: 'x-toolbar',
        selectSlideDuration: 300,
        closeOnSelect: false,
        modal:true,
        
        listeners : {
            select: function(){
                alert('selected');
            }

        },
        

        list: {
            maxDrag: 350,
            width: 300,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',                    
                title: {
                    title: 'Navigation',
                    centered: false,
                    width: 200,
                    left: 0
                },
                
                /**
                 *  Here's an example of how to add a different type of
                 *  component into the toolbar of the list.
                 */
                /*
                items: [{
                    xtype: 'searchfield',
                    placeHolder: 'search',
                    width: 180
                }]
                */
            }]
            
        },

        defaults: {
            style: 'background: #ccc',
            xtype: 'container',
        },

       
        items: [{
            title: 'Transaktionsliste',
            //group: 'Group 1',
            iconPath: "touch/resources/themes/images/default/pictos/card2.png",
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true,
            },
            items: [{
                xtype: 'toolbar',
                title: 'Transaktionsliste',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    iconMask: true,
                    iconCls: 'refresh',
                    top: '7px',
                    left: '50px',
                    action: 'doTransactionRefresh'
                }],
            },{
                    xtype: 'transactionpanel'
            }]
        },
        {
            title: 'Filialfinder',
            iconPath: 'touch/resources/themes/images/default/pictos/locate4.png',
            //group: 'Group 1',
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true,
            },
            items: [{
                xtype: 'toolbar',
                title: 'Filialfinder',
                docked: 'top'
            },
            {
                xtype: 'filialfindercontainer'
            }
            // weitere elemente
            ]
        },
        {
            title: 'Statistik',
            //group: 'Group 1',
            iconPath: 'touch/resources/themes/images/default/pictos/chart2.png',
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true,
            },
            items: [{
                xtype: 'toolbar',
                title: 'Statistik',
                docked: 'top'
            }]
        },
        {
            title: 'Chat',
            //group: 'Group 1',
            iconPath: 'touch/resources/themes/images/default/pictos/chat.png',
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true,
            },
            items: [{
                xtype: 'toolbar',
                title: 'Chat',
                docked: 'top'
            }]
        },
        {
            title: 'Logout',
            //group: 'Group 1',
            iconPath: 'touch/resources/themes/images/default/pictos/stop2.png',
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true,
            },
            items: [{
                xtype: 'toolbar',
                title: 'Logout',
                docked: 'top'
            },{
                    xtype: 'button',
                    ui: 'confirm',
                    text: 'Logout Button',
                    action: 'submitLogout'
            }]
        }
        ]
    }
});
