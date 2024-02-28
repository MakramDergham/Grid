var isClicked = false
var penColor = "black"
function setPenColor(color){
    penColor = color
}
// function set_cell_color(cell){
//     if(isClicked == false){
//         cell.style.backgroundColor = penColor
//         isClicked = true
//     }
//     else{
//         cell.style.backgroundColor = "white"
//         isClicked = false
//     }


// }
function set_cell_color(cell){
    cell.style.backgroundColor = penColor
}