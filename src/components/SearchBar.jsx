import axios from "axios"

const SearchBar = (props) => {

    const updateValue = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        props.setValue(event.target.value)
    }

    return (
        <input type="search" 
        placeholder={props.help} 
        className="search-bar"
        value={props.value?props.value.name:props.value}
        onChange={updateValue}
        />
    ) 
}

export default SearchBar