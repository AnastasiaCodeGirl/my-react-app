import React from "react";
import axios from 'axios';
import { Hourglass } from "react-loader-spinner";

export default function Weather(props){
    
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
    }
    let apiKey= "c8735bb7e8e2f8d8a38c7501f3cd47d3";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <div>
        <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
/>
    </div>
}