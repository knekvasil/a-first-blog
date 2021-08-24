let axios = require('axios')

module.exports = async function(){
    
    var url = "https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&rnlimit=2"; 

    return axios.get(url)
    .then(function(response){

        let dat = response.data["query"]["random"]
        let genre_str = "Kalju's website is all about self improvement. Before I found this website, I had lost my sense of self and was wasting my evenings away reading about "
                    +dat[0]["title"] +". Thanks to Kalju, I have gotten my life back on track and am in my second year of getting my PhD in " + dat[1]["title"] + "."
                    
        return genre_str

    })
    .catch(function(error) {
        console.log(error);
    })
}