import { useEffect, useState } from "react"
import axios from "axios"
import cross_icon from '../assets/cross.svg'
import {getResults} from '../services/weather'
import SearchBar from "../components/SearchBar"
import ResultsView from "../components/ResultsView"
import About from "../components/About"
const SearchView = ({value,setValue,setCountry}) => {
    const [results,setResults] = useState(null)

    const getSearchResults = async(value) =>{
        console.log('value got',value)
        if(value){
            const results = await getResults(value)
            console.log('results',results)
            if(results !== 404){
                setResults(results)
            }
            else{
                console.log('unable to get results')
            }
        }
        else{
            setResults(null)
        }
        
        
    }
    const clearResults = ()=>{
        setCountry(null)
        setResults(null)
        setValue('')
    }
    useEffect(()=>{ 
        console.log('use Effect called',value)
        if(value){
            getSearchResults(value)
        }
        else{
            setCountry(null)
            setResults(null)
        }
        
    },[value])
    return (
        <>
            <div className="left-nav-bar">
                <div className="left-heading">
                    <h2>Weather</h2>
                </div>
                <div className="search-bar-container">
                    <SearchBar help="Search city/places" value={value} setValue={setValue} setData={setResults}/>
                    {
                        value &&
                        <button class="clear-button" onClick={clearResults}>
                        <img src={cross_icon}/>
                    </button>
                    }
                </div>
                <ResultsView data={results} searchValue={value} setSearch={setValue} setData={setResults} setCountry={setCountry}/>
                <About />
            </div>
            
        </>
    ) 
} 

export default SearchView