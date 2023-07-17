'use client'
import React from 'react'
import Button from './Button';

function Navbar() {
    const isLoggedIn: boolean = true;
    return (
        <>
            {isLoggedIn ? <div
                className="flex justify-end gap-2.5"
            >
                <Button title="LOG IN" onClick={ () => {}} />
                <Button title="SIGN UP" onClick={ () => {}} />
    
            </div>
                :
                <div
                    className="flex justify-end gap-2.5"
                    
                >
                    <div id="font-medium text-xs text-white-text-color"></div>
                    <Button title="LOG OUT" onClick={ () => {}} />
                </div>}</>
  )
}

export default Navbar