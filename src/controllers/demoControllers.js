exports.demo1 = (req,res) =>{
    res.send("This is demo1");
}
exports.demo2 = (req,res) =>{
    res.send("This is demo2");
}
exports.demo3 = (req,res) =>{
    console.log(req.body);
    res.send("This is demo2");
}