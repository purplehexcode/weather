import { useEffect, useState } from "react"
import axios from "axios"
import {getResults} from '../services/weather'
import SearchBar from "../components/SearchBar"
import ResultsView from "../components/ResultsView"

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
                    
                </div>
                <ResultsView data={results} searchValue={value} setSearch={setValue} setData={setResults} setCountry={setCountry}/>
                
            </div>
            
        </>
    ) 
} 

export default SearchView