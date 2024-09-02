"use client"
import React from 'react'

function Page() {
  return (
    <div style={{ display: 'flex' }}>
        <div style={{ height:"2000px", backgroundColor:"blue", width:"80%" }}>
            side 1
        </div>
        <div style={{ height:"2000px", backgroundColor:"green", width:"20%" }}>
            <div style={{ position:'sticky', top:'100px', backgroundColor: 'yellow', padding: '10px' }}>
                uaua
            </div>

        </div>
    </div>
  )
}

export default Page
