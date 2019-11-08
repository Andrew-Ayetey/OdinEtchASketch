let createDiv = function(){
    let etchDiv = document.createElement('div')
    let etchBox = document.getElementById('Etch-a-Sketch')
    etchDiv.classList.add("etchBlock")
    etchDiv.style.background = 'rgba(0,0,0)'
    etchDiv.style.opacity = '0'
    etchBox.appendChild(etchDiv)

}

let makeDivs = function(number){
    totalBlocks = number ** 2
    for(let i = 0; i < totalBlocks; i++){
        createDiv()
    }
    for(i = 0; i < number; i++){
        let etchBox = document.getElementById('Etch-a-Sketch')
        etchBox.style.gridTemplateColumns += " 1fr"
        etchBox.style.gridTemplateRows += " 1fr"
    }
}





makeDivs(16)
let blockDivsNode = document.querySelectorAll(".etchBlock")
let blockDivsArray = Array.from(blockDivsNode)

for(const block of blockDivsArray){
        block.addEventListener('mouseover', e => {
            opacity = Number(block.style.opacity)
            console.log(typeof opacity)
            if(opacity <= 1){
                opacity += .3}
            else{}
            block.style.opacity = String(opacity)


        }
        )
    
}