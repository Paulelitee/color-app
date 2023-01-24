import styles from './styles.css'
import React, { useState } from 'react'
import ColourBox from '../components/ColourBox'
import { HydrationProvider, Server, Client } from "react-hydration-provider";


const IndexPage = () => {

let hexcode = '#6af127'
const letters = '0123456789abcdef'
const generateCode = () => {
    let code = ''

    for ( let count = 0; count < 6; count++ )
    {
        code = code + letters[Math.floor(Math.random() * 16)]
    }

    return code;
}

let firstCode = generateCode()
let newCode = '#' + firstCode


  return(
      <HydrationProvider>
        <main className = { 'hexcode main-panel' }>
            <Client>
                <div style = {{
                    backgroundColor: `${newCode}`,
                    padding: '200px'
                    }}>
                    {newCode}
                </div>
            </Client>
            <button
                className = { 'hexcode' }
                > Generate
            </button>
        </main>
      </HydrationProvider>
    )
}

export default IndexPage
