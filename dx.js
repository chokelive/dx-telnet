const DXCluster = require('dxcluster')
const savetojson = require('./saveToJson')


conn = new DXCluster()

let opts = {
    host: 'dxusa.net',
    port: 7300,
    loginPrompt: 'login:',
    call: 'E29AHU'
  }

  conn.connect(opts)
  .then(() => {
    console.log('connected')
  })
  .catch((err) => {
    console.log(err);
  })


  
conn.on('spot', (spot) => {
 
  savetojson(spot)
 
})

