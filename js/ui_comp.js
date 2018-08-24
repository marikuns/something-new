var uilib = {
    header:{
        id: "_header",
        view:"template",
        template: `<div class="header">${config.name}</div>`,
        autoheight:true  
    },
    balance_area:{
        id:"balance_area",
        data:mainData,
        template:(o)=>{return `<div id='balance_area'>
        <div class='avl'><b>Total:</b> ${o.balance.avaliable+o.balance.pending} XDNA</div>
        <div class='avl'><b>Avaliable:</b> ${o.balance.avaliable} XDNA</div>
        <div class="pnd"><b>Pending:</b> ${o.balance.pending} XDNA</div>`},
        autoheight:true
    },
    txhistory:{
        id:"txhist",
        view:"datatable",
        css:"padder",
        scroll:false,
        columns:[
            {id:"dt",header:"Time",fillspace:1},
            {id:"state",header:"State",fillspace:1,template:(o)=>{
               if(o.state==0)
                return "Unconfirmed";
                else
                return "Confirm count "+o.state;
            }},
            {id:"addr",header:"Addres",fillspace:1},
            {id:"amm",header:"Amount",fillspace:1}            
        ],
        data:testdata
    },
    mainbutton_area:{
        css:"padder",
        cols:[{
            view:"button",        
            value:"Send", 
            type:"form", 
            inputWidth:100 
        },
        {
            view:"button", 
            
            value:"Recieve", 
            type:"form", 
            inputWidth:100 
        },
        {
            view:"button", 
           
            value:"Addresses", 
            type:"form", 
            inputWidth:100 
        }

        ]
    }
}