
let createDiv = function(){
    let etchDiv = document.createElement('div')
    let etchBox = document.getElementById('Etch-a-Sketch')
    // console.log(typeof etchBox.firstChild)
    etchDiv.classList.add("etchBlock")
    etchDiv.style.background = 'rgba(0,0,0)'
    etchDiv.style.opacity = '0'
    etchBox.appendChild(etchDiv)
    console.log(typeof etchBox.firstChild)
    return

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

let makeDivsStart = function(number){
    return makeDivs(number)
}



makeDivsStart(4)

let blockDivsNode = document.querySelectorAll(".etchBlock")
let blockDivsArray = Array.from(blockDivsNode)
let blockLength = blockDivsArray.length

let clearDivs = function(){
    let etchBox = document.getElementById('Etch-a-Sketch')
    console.log(blockLength)
    for(let i = 0; i < blockLength; i++){
            let firstKid = etchBox.firstChild
            console.log(typeof firstKid)
            etchBox.removeChild(firstKid)
    }
    
    etchBox.style.gridTemplateColumns = ""
    etchBox.style.gridTemplateRows = ""
}

//event listeners
let addEtchEvent = function(){
    for(const block of blockDivsArray){
        block.addEventListener('mouseover', e => {
            opacity = Number(block.style.opacity)
            if(opacity <= 1){
                opacity += .3}
            else{}
            block.style.opacity = String(opacity)
            }
        )
    }
}

let resetButton = document.getElementById('reset')
resetButton.addEventListener('click', e => {
    let resetDivFunction = function(){
        let resetDivs = prompt("Please enter a new number between 2 and 100", "")
        if(Number(resetDivs) >= 2 || Number(resetDivs) >= 100){
            clearDivs()
            makeDivs((Number(resetDivs)))
            blockDivsNode = document.querySelectorAll(".etchBlock")
            blockDivsArray = Array.from(blockDivsNode)
            blockLength = blockDivsArray.length
            addEtchEvent()
        }
        else{resetDivFunction()}   
    }
    resetDivFunction()

    })

addEtchEvent()