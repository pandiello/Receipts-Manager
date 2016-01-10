Router.route("/", function() {
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

    //Yield footer
    this.render('footer', {
        to: "footer",
        data: {}
    });

});


Router.route("/Clients",function() {

    this.layout('main',{
        data:{},
    });

    //Yield

    this.render('clients',{
        data:{},
    });

     //Yiel nav

    this.render('nav', {
        to: 'nav',
        data: {},
    });

    //Yield footer
    this.render('footer', {
        to: "footer",
        data: {}
    });


});
