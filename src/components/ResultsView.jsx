import Result from "./Result"

const ResultsView = ({data,searchValue,setSearch,setData,setCountry}) => {
    console.log('result data',data)
    const updateCountry = (country)=>{
        const newCountry = {...country}
        setCountry(newCountry)
        setData(null)
    }
    if(data){
        return (
            <>
                <div className="results-container">
                    {
                        data.map(country=>{
                            return <Result country={country} key={country.id} onClick={()=>updateCountry(country)}/>
                        })
                    }
                </div>
            </>
            
        )
    }
} 

export default ResultsView