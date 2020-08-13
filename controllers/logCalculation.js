fs = require('fs');
url = require('url');


const handleLogCalculation = (req, res, publicPath) => {
    
    //GET TIMESTAMP INFO
    let timestamp = Date.now();
    let tsSeconds = Math.floor(timestamp/1000)

    let date_ob = new Date(timestamp);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    //SET FILENAME
    let fileName = year + "-" + month + "-" + date + "-" + tsSeconds;
    let filePath = publicPath + `/${fileName}.txt`;
 

    //SET LOG DATA 
    let data = {
        Date: year + "-" + month + "-" + date,
        "Calculation Type": req.body.type,
        "Input 1": req.body.input1,
        "Input 2": req.body.input2,
        Result: req.body.result
    }

    //WRITE FILE
    fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8', function(err){
        if (err) throw err;
        console.log('Saved to:', filePath);
        res.status(200).json('Log Saved')
    });
}


module.exports = {
    handleLogCalculation
}