
const fs = require('fs');
const dx_data = "dx_data.json";

// Update spot to json data
function updateJson(dxData) {
    const fs = require("fs");
    let data = fs.readFile(dx_data, (err, data) => {

        if(err){
            console.log(err)
            return
        }

        let jsonObj = JSON.parse(data);
        jsonObj.spots.push(dxData);

        // Filter sport older than 1 month out
        let d = new Date()
        d.setDate(d.getDate() - 1)
        let jsonNew = jsonObj.spots.filter(el => new Date(el.when) > d)
        jsonObj.spots = jsonNew;

        let newData = JSON.stringify(jsonObj, null, 4);
        fs.writeFile(dx_data, newData, (err) => {
            if (err) throw err;
            console.log("New data added");
        });
    })


}

module.exports = updateJson