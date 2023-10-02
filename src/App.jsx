import { useState } from 'react'
import SearchView from './fragments/SearchView'
import DataView from './fragments/DataView'
import './App.css'

function App() {
  const [searchTerm,setSearchTerm] = useState('');
  const [selectedCountry,setSelectedCountry] = useState(null)
  const [weatherData,setWeatherData] = useState(null)
  return (
    <>
      <div className='root-content'>
          <SearchView value={searchTerm} setValue={setSearchTerm} setCountry={setSelectedCountry}/>
          <DataView data={weatherData} setData={setWeatherData} country={selectedCountry}/>
      </div>
    </>
  )
}

export default App
