const path = require("path")
module.exports={
    main:function(req,res){
        res.sendFile(path.join(__dirname,"../views/home.html"));
    }
}