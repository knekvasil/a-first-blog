let axios = require('axios')

module.exports = async function(){
    
    var url = "https://binaryjazz.us/wp-json/genrenator/v1/genre/3"; 
    
    return axios.get(url)
    .then(function(response){
        
        let genres = response.data
        let genre_str = "Exposure to this website has changed me as a person, including my music tastes. I used to love listening to "
                    + genres[0]+", but now I'm a big fan of "+genres[1]+" and "+genres[2]+"."
        
        return genre_str

    })
    .catch(function(error) {
        console.log(error);
    })
}