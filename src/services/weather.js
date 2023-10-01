import axios from "axios"

const getCordinates = () => {
    return new Promise((resolve,reject)=>{
        console.log('getting coordinates')
        if(navigator.geolocation){
            var latitude = 0
            var longitude = 0
            console.log(latitude,longitude)
            navigator.geolocation.getCurrentPosition(position=>{
                latitude = position.coords.latitude
                longitude = position.coords.longitude
                console.log('coordinates',latitude,longitude)
                resolve( {
                    latitude,longitude
                })
            }) 
        }
        else {
            reject('Location not allowed')
        }
    })
    
    
    
} 

const getWeatherData = ({latitude,longitude}) => {
    console.log('getting weather data')
    const api_key = 'ee101955b2befdfd16e0cf86fbcfc9d1'
    var url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
    const promise = axios.get(url)
    console.log('getting weather data')
    return promise.then((response)=>{
        return response.data
    })
    // return {
    //     main: {
    //         temp:400,
    //         temp_min: 300,
    //         temp_max: 400,
    //         humidity: 4000,
    //         pressure: 4002,
    //     },
    //     weather: [
    //         {
    //             icon:'04d',
    //             description: 'clouds'
    //         }
    //     ]
    // }
}

export  {
    getCordinates,
    getWeatherData
}