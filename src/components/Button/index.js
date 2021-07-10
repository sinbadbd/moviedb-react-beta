import React from 'react'

const Button = ({ text, callback }) => {
    return (
        <div className="mx-auto justif col-2 y-content-center">
            <button className="btn btn-dark" onClick={callback}>{text}</button>
        </div>
    )
}

export default Button
