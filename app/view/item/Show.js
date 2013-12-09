Ext.define('Application.view.item.Show', {
  extend: 'Ext.panel.Panel',
  // Shorthand name for this object
  alias: 'widget.itemShow',
  title: 'Item data',
  // Layout configuration
  layout: {
    // Fully stretch this panel to
    // it's container size
    type: 'fit'
  },
  items: [{
      xtype: 'component',
      // Item id - used by Ext.getCmp() method for instance
      // selection
      id: 'item-description',
      // Html inside this component
      html: 'Please select an item on the left',
      // Since adding parameter "padding" to this item 
      // doesn't work - we'll add some direct styles
      style: {
        padding: '10px'
      }
    }]
});