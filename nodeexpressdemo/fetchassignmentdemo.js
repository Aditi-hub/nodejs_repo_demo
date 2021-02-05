const json_data = require('../assignmentJson.json')

const country = json_data.countries
console.log(country)
let urlFetch = [];
class FetchApiDetailsdemo {
    fetchData(){
        document.getElementById('submitCountry').addEventListener('click',() =>{
            const country = document.getElementById('country').value;
            fetch(json_data)
            .then(response=>response.json)
            .then(data=>{
                console.log(data);
                document.getElementById('country').value = country;
            })
        })
    }
}

new FetchApiDetailsdemo().fetchData();