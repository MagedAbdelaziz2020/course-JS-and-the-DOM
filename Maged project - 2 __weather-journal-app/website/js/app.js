/* Global Variables */
const apiKey = ("fca54ba7aacfc90eadb86f7542ed078c");
 url = (api.openweathermap.org/data/2.5/weather?zip = {}&metric&appid:{});
const zipCode = zip ;
const tempDiv = document.getElementById("temp");
const contentDiv = document.getElementById("content");
const botn = document.getElementById("generate");

const updateUi = async () => {
    const request = await fetch("base");
    try {
        tempDiv.innerHTML = response.temp;
        content.innerHTML = response.content;
    }
catch (error) {
    // code to log error
    console.log(error)
 }
};
// Create a new date instance dynamically with JS
let d = new Date();
// take care that getmonth() counts month from 0 to 11 
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
const getData = async () => {
   //code to fetch data from api ( await the fetch )
    const request = await fetch(api.openweathermap.org/data/2.5/weather?zip = {}&metric&appid:{})
    try{
       // code to convert json data and return result ( await conversion )
       const response = await request.json()
       return response;
    } catch (error) {
        // code to log error
        console.log(error)
    }
};
getData(url,zip,apiKey)
.then(function (userData){
    postData("base",{
        date: newDate,
        temp: userData.main.temp,
        content: content,
    });
})
.then(function () {
    updateUi();
});
const postData = async (url = "", data = {}) => {
    const request = await fetch(url,{
        "method":"post",
        "credentials":"same-origin",
        "headers":{"content-type":"application/json"},
        "body":JSON.stringify(data)
    });
    return ;
};
botn.addEventListener('click',performAction);  
    function performAction () {
    }

  getData () ;
getData.then(() =>  postData () );
postData.then(() =>  updateUi () );



