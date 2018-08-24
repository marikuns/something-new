
var xdnaw = {
    currpageid:"loadingPage",
    mainPage: () => {
        xdnaw.clear();

        webix.ui.animate({
            id:"mainPage",

            rows:[
                uilib.header,
                uilib.balance_area,
                uilib.mainbutton_area,
                uilib.txhistory,
                {}

            ]
        },$$(xdnaw.currpageid))        
        xdnaw.currpageid="mainPage";
    },
    loadingPage: () => {
        webix.ui({
            id:"loadingPage",
            container:"centered",
            template:"loading"
           
        })
        
    },
    clear: () => {
        
        webix.ui.animate({
            id:"blank",

            rows:[
                
            ]
        },$$(xdnaw.currpageid))
        xdnaw.currpageid="blank";

    },
    bootstrap: () => {
        xdnaw.loadingPage();
        setTimeout(xdnaw.mainPage, 1000);
    }
}
//webix.ui({id:"main",template:""});