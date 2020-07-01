var app = {
    pages: [
        {
            id: 'index',
            data: menu 
        }, {
            id: 'product',
            data: detail
        }
    ],
    getPage: function() {
        var pages = this.pages;
        var pageFile = location.href.substring(location.href.lastIndexOf('/') + 1).toLowerCase();
        var pageData;

        for (var i = 0; i < pages.length; i++) {
            if (pageFile.includes(pages[i].id.toLowerCase())) {
                pageData = pages[i].data;
                break;
            }
        }

        return pageData;
    },
    init: function() { 
        var pageData = this.getPage();

        pageData.init();
    }
}

app.init();