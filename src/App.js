import React, { Component } from 'react';
import Title from './component/Title';
import FormCompo from './component/FormCompo';
import Weather from './component/Weather';
import "./App.css";

const API_KEY = "6cf1c9bfd193f9e21a454b19fd8fb014";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    if(city && country) {
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: "",
        });
    }else{
        this.setState({
            city: undefined,
            country: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please, Enter a value",
        });
    }
  }

  render() {
    return (

        <div class="container-fluid background">
            <div class="container ">
                <div class="row">
                    <div class="col">
                        <Title />
                        <FormCompo getWeather={this.getWeather} />
                    </div>
                    <div class="col box-background" style={{
                        paddingLeft: "100px",
                        paddingTop: "30px",
                    }}>
                        <Weather
                            city = {this.state.city}
                            country = {this.state.country}
                            temperature = {this.state.temperature}
                            humidity = {this.state.humidity}
                            description = {this.state.description}
                            error = {this.state.error}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
  }
}


{/*<div className="App">
    <Title />
    <FormCompo getWeather={this.getWeather} />
    <Weather
        city = {this.state.city}
        country = {this.state.country}
        temperature = {this.state.temperature}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
    />
</div>*/}

export default App;
