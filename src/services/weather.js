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
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
    const promise = axios.get(url)
    console.log('getting weather data')
    return promise.then((response)=>{
        return response.data
    })
}

const getResults = (value) =>{
    return new Promise((resolve,reject)=>{
        try{
            if(value){
                const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'
                const promise = axios.get(url)
                promise.then((response)=>{
                    // console.log('country data',response.data)
                    const data = response.data.filter((country)=>{
                        // console.log(country.name.common)
                        
                        if(country.name.common.toLowerCase().includes(value.toLowerCase())){
                            return country
                        }   
                    })
                    resolve(data.map((country,index)=>{
                        return {
                            id:index+1,
                            name: country.name.common,
                            flag: country.flags.png,
                            latlang: country.latlng,
                        }
                    }))
                })
            }
        }
        catch(error){
            console.log('Error',error)
            reject(404)
        }
        
    })
}

export  {
    getCordinates,
    getWeatherData,
    getResults
}