
const slideUp = () => {
    document.getElementById("topBars").className = "slideUp"
}

const slideDown = () => {
    document.getElementById("bottomBars").className = "slideDown"
}

const slideLeft = () => {
    document.getElementById("leftBars").className = "slideLeft"
}

const slideRight = () => {
    document.getElementById("rightBars").className = "slideRight"
}
const reset = () => {
    document.getElementById("topBars").className = ""
    document.getElementById("bottomBars").className = ""
    document.getElementById("leftBars").className = ""
    document.getElementById("rightBars").className = ""
}