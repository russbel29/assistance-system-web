export default function TextField({
    label,
    type = "text",
    value,
    onChange,
    placeholder = "",
    error = "",

}){
    return (
        <div className = "mb3">
            {label && <label className="form-label"> {label}</label>}

            <input 
                type = {type}
                className = {`form-control ${error? "is invalid" : ""} ` }
                value = {value}
                placeholder = {placeholder}
                onChange = {onChange}
            />

            {error && <div className = "invalid-feedback">{error}</div>}

        </div>
    );
}