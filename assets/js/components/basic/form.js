import React from "react";

export const renderField = ({input, label, type, value, meta: {error}}) => {
    return (
        <div className="form-group">
            {label !== null && <label>{label}</label>}
            {type !== 'textarea' && <input {...input} type={type} className="form-control"/>}
            {type === 'textarea' && <textarea {...input} type={type} className="form-control"/>}
        </div>
    )
}

export const renderSelect = ({input, label, option, meta: {error}}) => {
    return (
        <div className="form-group">
            {label !== null && <label>{label}</label>}
            <select {...input} className="form-control">
                <option>---</option>
                {option &&
                Array.isArray(option) ?
                    option && option.map((breeder) => (
                        <option key={breeder.id} value={breeder[`@id`]}>{breeder.name}</option>
                    ))
                    :
                    option && <option key={option.id} value={option[`@id`]}>{option.name}</option>}
            </select>
        </div>
    )
}

export const renderSelectCustom = ({input, label, option, meta: {error}}) => {
    return (
        <div className="form-group">
            {label !== null && <label>{label}</label>}
            <select {...input} className="form-control">
                <option>---</option>
                {option &&
                Array.isArray(option) ?
                    option && option.map((breeder) => (
                        <option key={breeder.id} value={breeder.id}>{breeder.name}</option>
                    ))
                    :
                    option && <option key={option.id} value={option.id}>{option.name}</option>}
            </select>
        </div>
    )
}