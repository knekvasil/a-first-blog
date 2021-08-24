let axios = require('axios')

module.exports = async function(){

    let url = 'https://randomuser.me/api/?results=3'
    let user_info = [] 

    return axios.get(url)
    .then(function(response){

        data = response.data["results"]
        for (let i =0; i< data.length; i++) {
            let cur = data[i]
            let user_name = cur["name"]
            user_info[i] = [user_name["first"] +" "+ user_name["last"], cur["picture"]["thumbnail"]]
        }
    
        return user_info
        
    })
    .catch(function(error) {
        console.log(error);
    })
}