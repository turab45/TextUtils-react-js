import React, { useState } from 'react'

export default function Alert(props) {
    let capitalize = (str) => {
        const lower = str.toLowerCase(); 
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} fade show text-center`} role="alert">
                <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
            </div>
        </div >
    )
}
