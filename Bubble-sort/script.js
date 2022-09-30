
var array = []
var arrayLength 
var delay

document.getElementById("genListBtn").addEventListener("click", inputClick)
document.getElementById("bubbleSortButton").addEventListener("click", bubbleSortClicked)
const inputError = document.getElementById("inputError")
const sortingComplete = document.getElementById("sortingComplete")
const mainInput = document.getElementById("mainInput")
const listDiv = document.getElementById("list-wrapper")
const delayInput = document.getElementById("delayInput")


inputError.style.visibility = "hidden"
sortingComplete.style.visibility = "hidden"

function inputClick() {
    sortingComplete.style.visibility = "hidden"
    array = []
    inputError.style.visibility = "hidden"
    if (!isNaN(mainInput.value)) {
        arrayLength = Math.floor(mainInput.value)
        mainInput.value = Math.floor(mainInput.value)
        generateList()
    } else {
        inputError.style.visibility = "visible"
    }
}

function generateList() {
    for (let i = 0; i<arrayLength; i++) {
        array.push(Math.random())
    }
    delay = delayInput.value
    drawScreen()
}

function drawScreen() {
    listDiv.innerHTML = ""
    for (let i = 0; i<array.length; i++) {
        var divValue = array[i]
        const newDiv = document.createElement("div")
        newDiv.classList.add("item")
        newDiv.id = divValue.toString()
        newDiv.style.backgroundColor = "rgb("+255*divValue+","+255*divValue+","+255*divValue+")"
        listDiv.appendChild(newDiv)
    }
}

function checkIfSorted() {
    for (let i = 0; i < array.length; i++) {
        if (i != array.length-1) {
            if (array[i] > array[i+1]) {
                return false
            }
        }
    }
    return true
}

function iterateBubble() {
    for (let i = 0; i < array.length; i++) {
        if (i != array.length-1) {
            if (array[i] > array[i+1]) {
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
            }
        }
    }
}

function bubbleSortClicked() {
    const bubbleLoop = setInterval(() => {
        if (checkIfSorted() == true) {
            clearInterval(bubbleLoop)
            sortingComplete.style.visibility = "visible"
        }
        iterateBubble()
        drawScreen()
    }, delay);
    
}

