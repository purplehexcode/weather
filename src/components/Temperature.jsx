const Temperature = (props) => {
    return (
        <span className={props.className}>
            {props.value}
            <sup>o</sup>
            <span>c</span>
        </span>
    )
}

export default Temperature