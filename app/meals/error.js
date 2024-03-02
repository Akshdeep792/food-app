'use client'
import React from 'react'

const Error = ({ error }) => {
    return (
        <main className='error'>
            <h1>An Error Occured!</h1>
            <p>Failed to fetch Meals Data</p>
        </main>
    )
}

export default Error