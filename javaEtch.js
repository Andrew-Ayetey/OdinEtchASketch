let createDiv = function(){
    let etchDiv = document.createElement('div')
    let etchBox = document.getElementById('Etch-a-Sketch')
    etchDiv.classList.add("etchBlock")
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
let blockDivs = document.getElementsByClassName("etchBlock")




makeDivs(16)
console.log(blockDivs)

blockDivs.addEventListener(onmouseover, (e) => {
    console.log(e)
})