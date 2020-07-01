var app = {
    pages: [
        {
            title: 'Menu list',
            data: menu 
        }, {
            title: 'Detail',
            data: detail
        }
    ],
    getPage: function() {
        var pages = this.pages;
        var pageTitle = document.getElementsByTagName("title")[0].innerHTML.toLowerCase();
        var pageData;

        for (var i = 0; i < pages.length; i++) {
            if (pageTitle.includes(pages[i].title.toLowerCase())) {
                pageData = pages[i].data;
                break;
            }
        }

        return pageData;
    },
    init: function() { 
        this.getPage().init();
    }
}

app.init();