Routes.route("/", function() {
    this.layout('main', {
        data: {},

    });

    //Yield region
    this.render('content', {
        data: {},
    });

    //Yiel nav

    this.render('nav', {
        to: 'nav',
        data: {},
    });

    this.render('footer', {
        to: "footer",
        data: {}
    });

})
