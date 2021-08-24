let axios = require('axios')

module.exports = async function(){
    const date = new Date();
    const day = date.getDate()
    const month = date.getMonth()+1
    
    // The API is literally wrong. May have to send them a pull req.
    if( month == 13) {
        month = 1
    }

    let url = "http://numbersapi.com/"+month+"/"+day+"/date"
    
    return axios.get(url)
    .then(function(response){
        
        let date_info = "If you hadn't visited this website today, you would have never known that "+response.data + " The more you know!"
        
        return date_info
    
    })
    .catch(function(error) {
        console.log(error);
    })
}