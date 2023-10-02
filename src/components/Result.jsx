const Result = ({country,onClick}) => {
    return (
        <div className="result-card-container" onClick={onClick}>
            <div className="flag-container">
                <img src={country.flag} className="flag-image"/>
            </div>
            <div className="country-name-container">
                <p>{country.name}</p>
            </div>
        </div>
    )
}

export default Result