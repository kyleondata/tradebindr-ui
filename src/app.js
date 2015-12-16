var Tb = {
    app: new Mn.Application(),
    router: Mn.AppRouter.extend({})
};


// Start history when our application is ready
Tb.app.on('start', function() {
  Backbone.history.start();
});

var init = function () {
    Tb.app.start();
}
