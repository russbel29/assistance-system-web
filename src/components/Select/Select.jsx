export default function Select({
    label,
    value,
    onChange,
    options = [],
    error = "",
}){
    return (
        <div className="mb-3">
            {
                label && <label className="form-label">{label}</label>
            }
            <select 
                className={`form-select ${error ? "is-invalid" : ""}`}
                value={value}
                onChange={onChange}
            >
                <option value="">Seleccione</option>
                {options.map((opt)=>(
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}

            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}