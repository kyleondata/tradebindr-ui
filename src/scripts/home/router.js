Tb.home = Tb.home || {};
Tb.home.router = Tb.home.router || new Tb.router();

var routeHandler = Mn.Controller.extend({
    home: function () {
        var view = new Tb.home.view();
        view.render();
    }
}); 

Tb.home.router.processAppRoutes(new routeHandler(), {
    "home": "home"
});
