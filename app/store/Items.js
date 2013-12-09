Ext.define('Application.store.Items', {
  extend: 'Ext.data.TreeStore',
  model: 'Application.model.Item',
  autoLoad: true,
  // Define the root of the json file
  root: {
    // Root should be expanded on
    // the application start
    expanded: true
  },
  proxy: {
    // Defined this proxy type
    type: 'ajax',
    // Data source
    url: 'data/items.json',
    // Reader should be configured for 
    // json parsing
    reader: {
      type: 'json'
    }
  }
});