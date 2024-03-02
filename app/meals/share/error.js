'use client'
import React from 'react'

const Error = ({ error }) => {
    return (
        <main className='error'>
            <h1>An Error Occured!</h1>
            <p>Invalid Inputs. Failed to create meal</p>
        </main>
    )
}

export default Error