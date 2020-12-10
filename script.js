

(() => {

    const key = "a3b4024741635c916c33de8b5cd6faf3";
    let city = "";
    let celcius;
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let day = date.toISOString();
    let tomorrow = day.slice(0,10);
    
    //When site is loaded, default city is selected
    window.onload = () => {
        city = "Brussel";

        getDataApi();

    };

    //Enter city and get forecast
    document.getElementById("submit").addEventListener("click", getForecast);

    getForecast = (event) => {
        event.preventDefault();

        getCity();

        if(city == ""){
            alert("Enter a city to get the weather.")
        } else {
            getDataApi();
        };      
    };

    //Get all the data from the API
    getDataApi = () => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+key)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            getWeatherNow(data); 
            getWeatherNextDays(data); 
            document.getElementById("location").innerHTML = data.city.name;          
        }); 
    };

    //Get the city input
    getCity = () => {
        city =  document.getElementById("city").value;
        console.log(city)
    };

    //Add the weather for this moment 
    getWeatherNow = (data) => {
        celcius = Math.round(parseFloat(data.list[0].main.temp)-273.15);

        document.getElementById("title").innerHTML = "At this moment"
        document.getElementById("description").innerHTML = data.list[0].weather[0].description;
        document.getElementById("temp").innerHTML = celcius +"&#8451;";
        document.getElementById("location").innerHTML = data.city.name;
        document.getElementById("weatherimage").src = "images/"+data.list[0].weather[0].icon+".png"
    };

    //Add the weather for the next five days
    getWeatherNextDays = (data) => {

        date = new Date();
        date.setDate(date.getDate() + 1);
        day = date.toISOString();
        tomorrow = day.slice(0,10);
        let i = 0;
        
        while (tomorrow+" 12:00:00" != data.list[i].dt_txt) {
            i++; 
            console.log(tomorrow+i);
        };
        console.log(data.list[i].dt_txt);
        document.getElementById("date1").innerHTML = data.list[i].dt_txt.slice(0,10);
        document.getElementById("location1").innerHTML = data.city.name;
        document.getElementById("description1").innerHTML = data.list[i].weather[0].description;
        celcius1 = Math.round(parseFloat(data.list[i].main.temp)-273.15);
        document.getElementById("temp1").innerHTML = celcius1 +"&#8451;";
        document.getElementById("weatherimage1").src = "images/"+data.list[i].weather[0].icon+".png"

        date = new Date();
        date.setDate(date.getDate() + 2);
        day = date.toISOString();
        tomorrow = day.slice(0,10);
        i=0;

        while (tomorrow+" 12:00:00" != data.list[i].dt_txt) {
            i++;
        };

        document.getElementById("date2").innerHTML = data.list[i].dt_txt.slice(0,10);
        document.getElementById("location2").innerHTML = data.city.name;
        document.getElementById("description2").innerHTML = data.list[i].weather[0].description;
        celcius2 = Math.round(parseFloat(data.list[i].main.temp)-273.15);
        document.getElementById("temp2").innerHTML = celcius2 +"&#8451;";
        document.getElementById("weatherimage2").src = "images/"+data.list[i].weather[0].icon+".png"

        date = new Date();
        date.setDate(date.getDate() + 3);
        day = date.toISOString();
        tomorrow = day.slice(0,10);

        while (tomorrow+" 12:00:00" != data.list[i].dt_txt) {
            i++; 
        };

        document.getElementById("date3").innerHTML = data.list[i].dt_txt.slice(0,10);
        document.getElementById("location3").innerHTML = data.city.name;
        document.getElementById("description3").innerHTML = data.list[i].weather[0].description;
        celcius3 = Math.round(parseFloat(data.list[i].main.temp)-273.15);
        document.getElementById("temp3").innerHTML = celcius3 +"&#8451;";
        document.getElementById("weatherimage3").src = "images/"+data.list[i].weather[0].icon+".png"

        date = new Date();
        date.setDate(date.getDate() + 4);
        day = date.toISOString();
        tomorrow = day.slice(0,10);

        while (tomorrow+" 12:00:00" != data.list[i].dt_txt) {
            i++;
        };

        document.getElementById("date4").innerHTML = data.list[i].dt_txt.slice(0,10);
        document.getElementById("location4").innerHTML = data.city.name;
        document.getElementById("description4").innerHTML = data.list[i].weather[0].description;
        celcius4 = Math.round(parseFloat(data.list[i].main.temp)-273.15);
        document.getElementById("temp4").innerHTML = celcius4 +"&#8451;";
        document.getElementById("weatherimage4").src = "images/"+data.list[i].weather[0].icon+".png"

        date = new Date();
        date.setDate(date.getDate() + 5);
        day = date.toISOString();
        tomorrow = day.slice(0,10);

        while (tomorrow+" 12:00:00" != data.list[i].dt_txt) {
            i++; 
        };
        
        document.getElementById("date5").innerHTML = data.list[i].dt_txt.slice(0,10);
        document.getElementById("location5").innerHTML = data.city.name;
        document.getElementById("description5").innerHTML = data.list[i].weather[0].description;
        celcius5 = Math.round(parseFloat(data.list[i].main.temp)-273.15);
        document.getElementById("temp5").innerHTML = celcius5 +"&#8451;";
        document.getElementById("weatherimage5").src = "images/"+data.list[i].weather[0].icon+".png"
        
    };

})();