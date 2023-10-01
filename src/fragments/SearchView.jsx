import SearchBar from "../components/SearchBar"

const SearchView = ({value,setValue}) => {
    return (
        <>
            <div className="left-nav-bar">
                <div className="left-heading">
                    <h2>Weather</h2>
                </div>
                <div className="search-bar-container">
                    <SearchBar help="Search city/places" value={value} setValue={setValue}/>
                </div>
            </div>
        </>
    )
} 

export default SearchView