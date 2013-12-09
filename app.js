Ext.application({
  name: 'Application',
  // Automatically create an instance of AM.view.Viewport
  // on application launch
  autoCreateViewport: true,
  // Attach controllers
  controllers: ['ItemController']
});