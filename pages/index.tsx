import styles from './styles.css'
import React, { useState } from 'react'
import ColourBox from '../components/ColourBox'

const IndexPage = () => {

    let tray = {}

    for ( let i = 0; i < 6; i++ )    {

        let color = ''
        for(let i = 0; i < 6; i++)  {
            let state = namespace[Math.floor(Math.random() * 16)]
            color = color + state
            }

         tray[color] = 'true'
    }

    console.log(tray)

    const [ hexcode, setHex ] = useState(['hey', 'you', 'people', '', ''])
    const namespace = '0123456789abcdef'

    const handleGenerate = () => {

        const colorIndex = Math.round(Math.random() * 16)

        function getColor() {

            let color = ''
                for(let i = 0; i < 6; i++)  {
                    let state = namespace[Math.floor(Math.random() * 16)]
                    color = color + state
                }

                return '#' + color ;
        }


        const newArray = hexcode.map(x => getColor())
        setHex(newArray)
    }

  return(
      <main className = { 'hexcode main-panel' }>
        {hexcode.map(x => <ColourBox />)}
        <button
            className = { 'hexcode' }
            onClick = {handleGenerate}> Generate </button>
      </main>
    )
}

export default IndexPage
