function setup(){
    createCanvas(1000, 1000)
    background(4, 150, 255)
}

let start = 0; 
let end = 1000;
let fir = 100;

function draw(){
    fill(200, 100, 78)
    for(let i = 0; i < 10 ; i++){
    line(fir, start, fir, end)
    line(start, fir, end, fir)
    fir = fir + 100; 
    }
}  
let S = "ship";
/*
let letterArray = [A, B, C, D, E, F, G, H, I, J]
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let A = [S, 2, 3, S, S, S, 7, S, 9, S]
let B = [1, 2, 3, 4, 5, 6, 7, S, 9, S]
let C = [1, 2, S, 4, 5, 6, 7, 8, 9, S]
let D = [1, 2, 3, 4, 5, 6, 7, 8, 9, S]
let E = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let F = [1, S, 3, S, S, 6, 7, 8, 9, 10]
let G = [1, 2, 3, 4, 5, 6, S, S, S, 10]
let H = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let I = [1, 2, S, 4, 5, 6, 7, S, S, 10]
let J = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

let letterArray = [
[S, 2, 3, S, S, S, 7, S, 9, S],
[1, 2, 3, 4, 5, 6, 7, S, 9, S],
[1, 2, S, 4, 5, 6, 7, 8, 9, S],
[1, 2, 3, 4, 5, 6, 7, 8, 9, S],
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
[1, S, 3, S, S, 6, 7, 8, 9, 10],
[1, 2, 3, 4, 5, 6, S, S, S, 10],
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
[1, 2, S, 4, 5, 6, 7, S, S, 10],
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
];


/*
1. find mouseX and mouseY

2.  find a way to show that any location on the grid inside a certain box
    is that box
    a. mouseXvariable = Math.floor(mouseX / 60);
    b. mouseYvariable = Math.floor(mouseY / 60);
        1) assign to a variable

3.  use the values you just got to access the array 
    a. arrayname[mouseY variable][mouseX variable];
    
4.  use the conditional to determine if that is or is not a ship and 
    do the according action
*/

//if(array[mouse y coordinate box][mouse x cordinate box] == S){
// hit;
// do something (draw box to show hit)}
//else{
// miss}

function mouseClicked(){

}