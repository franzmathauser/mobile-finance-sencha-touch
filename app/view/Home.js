Ext.define('MobileFinance.view.Home', {
    extend: 'MobileFinance.ux.slidenavigation.View',
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
            maxDrag: 230,
            width: 220,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',                    
                title: {
                    title: 'Navigation',
                    centered: false,
                    width: 200,
                    left: 0
                }
                
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
            xtype: 'container'
        },

       
        items: [{
            title: 'Transaktionsliste',
            //group: 'Group 1',
            iconPath: "resources/pictos/sign_leftright2.png",
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true
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
                }]
                },{
                    xtype: 'transactionpanel'
            }]
        },
        {
            title: 'Banking',
            iconPath: 'resources/pictos/card2.png',
            //group: 'Group 1',
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true
            },
            items: [{
                xtype: 'toolbar',
                title: 'Transaktionsliste',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    iconMask: true,
                    iconCls: 'camera',
                    top: '7px',
                    left: '50px',
                    action: 'doCameraBankingCapture'
                }]
                },{
                    xtype: 'banking-form-panel'
            }]
        },
        {
            title: 'Filialfinder',
            iconPath: 'resources/pictos/locate4.png',
            //group: 'Group 1',
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true
            },
            items: [{
                xtype: 'toolbar',
                title: 'Filialfinder',
                docked: 'top'
            },
            {
                xtype: 'storefinder-container'
            }
            // weitere elemente
            ]
        },
        {
            title: 'Statistik',
            //group: 'Group 1',
            iconPath: 'resources/pictos/chart2.png',
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true
            },
            items: [{
                xtype: 'toolbar',
                title: 'Statistik',
                docked: 'top'
                },
                {
                    xtype: 'charts-carousel'
                }
            ]
        },
        {
            title: 'Chat',
            //group: 'Group 1',
            iconPath: 'resources/pictos/chat.png',
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true
            },
            items: [
                {
                    xtype: 'toolbar',
                    title: 'Chat',
                    docked: 'top'
                }, {
                    xtype: 'chat-panel'
                }
            ]
        },
        {
            title: 'News',
            //group: 'Group 1',
            iconPath: 'resources/pictos/quote_black3.png',
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true
            },
            items: [{
                xtype: 'toolbar',
                title: 'News',
                docked: 'top'
                },
                {
                    xtype: 'newschannel'
                }
            ]
        },
        {
            title: 'Logout',
            //group: 'Group 1',
            iconPath: 'resources/pictos/stop2.png',
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar',
                iconCls: 'more',
                iconMask: true
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
