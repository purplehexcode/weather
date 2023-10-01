import { useEffect } from "react"
import Temperature from "../components/Temperature"
import Humidity from "../components/Humidity"
import Pressure from "../components/Pressure"
import {getCordinates,getWeatherData} from '../services/weather'
const DataView = (params) => {
    useEffect(()=>{
        getData()
    },[])

    const convert = (data) => {
        data.main.temp = (data.main.temp - 273.15).toFixed(2)
        data.main.temp_max = (data.main.temp_max - 273.15).toFixed(2)
        data.main.temp_min = (data.main.temp_min - 273.15).toFixed(2)
        data.main.feels_like = (data.main.feels_like-273.15).toFixed(2)
    }

    const get_abbr = ()=>{
        const abbr = {
            'temp_max': 'Max Temp',
            'temp_min': 'Min Temp',
            'feels_like': 'Feels Like',
            'humidity': 'Humidity',
            'pressure': 'Pressure',
            
        }
        return abbr
    }
    

    const getData = async() => {
        console.log('use effect called')
        try {
            console.log('getting data')
            var coordinates = await getCordinates();
            console.log(coordinates)
            var data = await getWeatherData(coordinates);
            convert(data);
            console.log(data);
            params.setData(data);
        } catch (error) {
            console.error("Error:", error);
        } 
    }

    if(params.data){
        return (
            <div className="weather-data-container">
                <div className="temperature-container">
                    <div className="main-temp-container">
                    
                        <img src={`https://openweathermap.org/img/wn/${params.data.weather[0].icon}@2x.png`} className="weather-icon"/>
                        <p>{params.data.weather[0].description}</p>
                        <Temperature value={params.data.main.temp} className="main-temp-value"/>
                        
                    </div>
                    
                    <div className="location-container">
                        <p className="location-name">{params.data.name}</p>
                    </div>
                    <div className="other-temp-container">
                        <table className="temp-table">
                            <tbody>
                            {
                        Object.keys(get_abbr()).map((key)=>{
                            if(['feels_like','temp_max','temp_min'].includes(key)){
                                return (
                                    <tr key={key}>
                                        <td>{get_abbr()[key]}</td>
                                        <td><Temperature value={params.data.main[key]}/></td>
                                    </tr>
                                    )
                            } 
                            else if(key=='humidity'){
                                return (
                                <tr key={key}>
                                    <td>{get_abbr()[key]}</td>
                                    <td><Humidity value={params.data.main[key]}/></td>
                                </tr>
                                )
                            }
                            else if(key=="pressure"){
                                return (
                                <tr key={key}>
                                    <td>{get_abbr()[key]}</td>
                                    <td><Pressure value={params.data.main[key]}/></td>

                                </tr>
                                )
                            }
                            
                        })
                        }
                            </tbody>
                        
                    </table>
                    </div>
                    
                    
                </div>
            </div> 
        )
    }
    else{
        return(
            <div>
                <p>Location Not allowed/Some Error Occured</p>
            </div>
        )
    }
    
}

export default DataView