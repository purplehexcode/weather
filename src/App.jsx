import { useState } from 'react'
import SearchView from './fragments/SearchView'
import DataView from './fragments/DataView'
import './App.css'

function App() {
  const [searchTerm,setSearchTerm] = useState('');
  const [weatherData,setWeatherData] = useState(null)
  return (
    <>
      <div className='root-content'>
          <SearchView value={searchTerm} setValue={setSearchTerm}/>
          <DataView data={weatherData} setData={setWeatherData}/>
      </div>
    </>
  )
}

export default App
