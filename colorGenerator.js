

tray = []
const numberPalette = '0123456789abcdef'


for ( let count = 0; count < 6; count++ )   {

    hexcode = ''

    for ( let count = 0; count < 6; count++ )   {
        hexcode = hexcode + numberPalette[Math.floor(Math.random() * 16)]
    }

    hexcode = '#' + hexcode

    tray.push(hexcode)

}

console.log(tray)
