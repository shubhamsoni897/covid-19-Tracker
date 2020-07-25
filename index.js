const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

var countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombi",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor ",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];
for (let i = 0; i < countryList.length; i++) {
    countryList[i] = countryList[i].toUpperCase();
   }
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    

})
app.post("/",function(req,res){ 
    const cName = (req.body.country).toUpperCase();
    if(countryList.includes(cName)){const url = "https://coronavirus-19-api.herokuapp.com/countries/" + cName ;

    https.get(url,function(response){
        response.on("data",function(data){
           var jData= JSON.parse(data);
           var cases = jData.cases;
           var recovered = jData.recovered;
           var deaths = jData.deaths;
           var active = jData.active;
           res.render('index',{active: active,total: cases,recovered: recovered,death: deaths,country: req.body.country});
          
        });
    })
}
else if(cName === "USA" || cName === "UNITED STATES OF AMERICA" || cName === "US" || cName === "AMERICA"){
        const url = "https://coronavirus-19-api.herokuapp.com/countries/USA"  ;

        https.get(url,function(response){
            response.on("data",function(data){
               var jData= JSON.parse(data);
               var cases = jData.cases;
               var recovered = jData.recovered;
               var deaths = jData.deaths;
               var active = jData.active;
               res.render('index',{active: active,total: cases,recovered: recovered,death: deaths,country: req.body.country});
              
            });
        })
    }
else if(cName === "UNITED ARAB EMIRATES" || cName === "UAE") {
    const url = "https://coronavirus-19-api.herokuapp.com/countries/UAE" ;

    https.get(url,function(response){
        response.on("data",function(data){
           var jData= JSON.parse(data);
           var cases = jData.cases;
           var recovered = jData.recovered;
           var deaths = jData.deaths;
           var active = jData.active;
           res.render('index',{active: active,total: cases,recovered: recovered,death: deaths ,country: req.body.country });
          
        });
    })
}
else if(cName === "UNITED KINGDOM" || cName === "UK" || cName === "BRITAIN" || cName === "UNITED KINGDOM OF GREAT BRITAIN" || cName === "GREAT BRITAIN"){
    const url = "https://coronavirus-19-api.herokuapp.com/countries/UK"  ;

    https.get(url,function(response){
        response.on("data",function(data){
           var jData= JSON.parse(data);
           var cases = jData.cases;
           var recovered = jData.recovered;
           var deaths = jData.deaths;
           var active = jData.active;
           res.render('index',{active: active,total: cases,recovered: recovered,death: deaths,country: req.body.country});
          
        });
    })
}
else{
    res.sendFile(__dirname +"/failure.html");
}

})
 
   app.post("/failure",function(req,res){
       res.redirect("/");
   })
   app.post("/home",function(req,res){
       res.redirect("/");
   })

app.listen(process.env.PORT || 3000,function(){
    console.log("server is running at 3000");
})
