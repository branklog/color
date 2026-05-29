```js
let pantoneData = []

fetch('./pantone.json')
.then(res => res.json())
.then(data => {

    pantoneData = data

    console.log('pantone loaded')

})

const button = document.querySelector('.convert-btn')

button.addEventListener('click', () => {

    const input = document.querySelector('.input').value

    if(!input){
        alert('HEX 코드를 입력하세요')
        return
    }

    const hex = input.replace('#','')

    const r = parseInt(hex.substring(0,2),16)
    const g = parseInt(hex.substring(2,4),16)
    const b = parseInt(hex.substring(4,6),16)

    let closest = null
    let minDistance = Infinity

    pantoneData.forEach(color => {

        const pr = Number(color.R)
        const pg = Number(color.G)
        const pb = Number(color.B)

        const distance = Math.sqrt(
            (r-pr)**2 +
            (g-pg)**2 +
            (b-pb)**2
        )

        if(distance < minDistance){

            minDistance = distance
            closest = color

        }

    })

    console.log(closest)

    document.querySelector('.pantone-title').innerText =
    `Pantone ${closest.Code}`

    document.querySelector('.color-preview').style.background =
    closest.Hex

})
```
