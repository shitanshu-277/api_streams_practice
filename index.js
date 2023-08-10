const axios = require('axios');
require('dotenv').config();
axios.get(process.env.BOT_TOKEN)
.then((response)=>{
    console.log(response.data);
}) 
async function fetch(){
    const response = await axios.get(process.env.BOT_TOKEN);
    console.log(response.data);
}
fetch();