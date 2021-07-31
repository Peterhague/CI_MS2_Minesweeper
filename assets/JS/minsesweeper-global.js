let randomSquares = []; //creates the array to be populated by the randomise function
let grid = document.getElementById("grid");
let gridRow = ""; //these will be the rows (divs) to be appended to the minesweeper grid
let difficulty = document.getElementById("difficulty"); //targets the dropdown selector per the html file
difficulty.addEventListener("change", variableVariables);
let selectedRows = 9;
let selectedBombs = 15;
let selectedSquares = 81;
let gridRowsList = document.getElementsByClassName("grid-rows"); // to create an array of the grid rows to iterate over
let scoreContainer = document.getElementById("score-container"); // gets the div to be populated by the remaining flags tally
let play = document.getElementById("play"); // gets the start game button from the html file
function addPlayFunctions() {
    play.addEventListener("click", generatedGridRows); // generates the number of rows as per the difficulty selected
    play.addEventListener("click", randomise);
    play.addEventListener("click", newGame);
    play.addEventListener("click", squareSize);
    play.addEventListener("click", checkerboard);
    play.addEventListener("click", addFlags);
    play.addEventListener("click", assignRelativePosition);
    play.addEventListener("click", assignHTML);
    play.addEventListener("click", bombIcon);
    play.addEventListener("click", flags);
}
function removePlayFunctions() {
    play.removeEventListener("click", generatedGridRows); // generates the number of rows as per the difficulty selected
    play.removeEventListener("click", randomise);
    play.removeEventListener("click", newGame);
    play.removeEventListener("click", squareSize);
    play.removeEventListener("click", checkerboard);
    play.removeEventListener("click", addFlags);
    play.removeEventListener("click", assignRelativePosition);
    play.removeEventListener("click", assignHTML);
    play.removeEventListener("click", bombIcon);
    play.removeEventListener("click", flags);
}
addPlayFunctions();
function variableVariables() {
    let selectedDifficulty = difficulty.value;
    if (selectedDifficulty == "Medium") {
        selectedRows = 15;
        selectedBombs = 40;
        selectedSquares = 225;
    } else if (selectedDifficulty == "Hard") {
        selectedRows = 20;
        selectedBombs = 99;
        selectedSquares = 400;
    } else {
        selectedRows = 9;
        selectedBombs = 15;
        selectedSquares = 81;
    }
}
function generatedGridRows() {
    grid.innerHTML = "";
    for (i = 0; i < selectedRows; i++) {
        gridRow = document.createElement("div");
        gridRow.classList.add("grid-rows", `grid-row-${i}`) // to be able to identify the row precisely when necessary
        grid.appendChild(gridRow);
    } // this loop creates the number of rows determined by the selected difficulty and adds them to the grid
}
function randomise() {
/*Adds random numbers to the randomSquares variable (15 for easy, 40 for medium and 99 for hard). 
Multiplies each random number by the number of squares on the grid, and pushes them to the array 
IF the random number y does NOT appear in the list already, ie so that each number in the array
is unique. This ensures that ultimately the grids will have the correct number of mines, and no
squares with > 1 mine.*/
randomSquares = []; // to be populated by array of random numbers to be iterated to randomly place the "mines"
    while (randomSquares.length < selectedBombs) {
        let y = Math.floor(Math.random()*selectedSquares);
        if (randomSquares.includes(y) === false) {
            randomSquares.push(y);
        }  
    }    
}
function newGame() {
    for (x = 0; x < selectedRows; x++) {
        for (y = 0; y < selectedRows; y++) {
            /* the for x loop iterates through the rows of the grid and the nested y loop generates 9 squares for each row,
            to end up with a 9x9 grid of squares.*/ 
            let squares = document.createElement("button"); // these are the "square" button elements created x9 for each x loop
            squares.classList.add("squares");
            squares.classList.add("hovered-squares"); // this class adds the highlight on hover effect 
            let squaresNumber = (y*selectedRows)+x; 
            /* variable to be assigned to each square as a unique id, so they can be "searched"
            for the presence of "mines"*/
            if (randomSquares.includes(squaresNumber)) {
                /* This code whether the list of random numbers generated by the randomise function includes the number assigned 
                to the squaresNumber variable, and if so to assign the square the class of "bomb" and if not the class of 
                "no-bomb". This effectively checks whether the square's id is included in the list of random numbers. */ 
                squares.classList.add("bomb");
            } else {
                squares.classList.add("no-bomb");
            }
            squaresFunctions(squares);
            squares.id = squaresNumber; // assigns each square a uniqe id based on its position in the grid
            gridRowsList[y].appendChild(squares); // adds each of the 9 squares created in each iteration of the outer loop
        }   
    }        
}
function squareSize() {
    let squares = document.getElementsByClassName("squares");
    let selectedDifficulty = difficulty.value;
    for (square of squares) {
        if (selectedDifficulty == "Easy") {
            square.classList.add("squaresBig");   
        } else if (selectedDifficulty == "Medium") {
            square.classList.add("squaresMedium") ;   
        } else {
            square.classList.add("squaresSmall");   
        }
    }
}
function squaresFunctions(squares) {
    squares.addEventListener("click", minesweep); // function to detect how many mines are in the squares surrounding the clicked square
    squares.addEventListener("click", counter); // function counts how many squares with no mines have been clicked to determine ultimate success
    squares.addEventListener("click", gameOverOne); // performs part of the game over "animation" sequence
    squares.addEventListener("click", gameOverTwo); // performs part of the game over "animation" sequence
}
function checkerboard() {
/* the outer loop iterates over the rows of the grid and the nested loop iterates over the 
    squares (ie children of the row). The code says if the row's index is even then the first square
    of that row is given the class of "odd-squares", and every alternate square of that row is
    given the class of "even-squares", and then the reverse for rows with indices that are odd.
    This is purely for styling in the checkerboard pattern, and to distinguish the code applied to 
    every alternate row of the grid. If the same code was applied to every row the grid would have
    vertical stripes and not a chequered effect. */
    for (let i = 0; i < selectedRows; i++) {
        for (let x = 0; x < selectedRows; x++) {
            if (i % 2 === 0 && x % 2 === 0) {
                gridRowsList[i].children[x].classList.add("odd-squares");
            }   else if (i % 2 === 0 && x % 2 > 0) {
                gridRowsList[i].children[x].classList.add("even-squares");
            } 
        }
        for (let x = 0; x < selectedRows; x++) {
            if (i % 2 > 0 && x % 2 > 0) {
                gridRowsList[i].children[x].classList.add("odd-squares");
            } else if (i % 2 > 0 && x % 2 === 0) {
                gridRowsList[i].children[x].classList.add("even-squares");
            }
        }
    }
}
function addFlags() {
    let squares = document.getElementsByClassName("squares");
    $(squares).mousedown(function(event) {
        // code for placing and removing "flags" on squares as mine-markers, via a right-click (hence "case 3")
        if (!this.classList.contains("selected")) {
            // ie if the square hasn't already been left-clicked on to reveal no mine
            switch (event.which) {
            case 3:
                if (this.classList.contains("even-squares")) {
                    $(this).removeClass("even-squares"); // removes the styling
                    $(this).removeClass("hovered-squares"); // removes hover pseudo class
                    $(this).addClass("evenReserved"); 
                    /* this purely nominal class reserves that the square DID have class of "even-squares"
                    within the element's attributes, so that fact can be accessed later on if the flag is removed*/
                    $(this).addClass("flagged");
                    $(this).attr("data-id", this.innerHTML);
                    /* this custom attribute reserves the square's inner html (ie what number of mines surrounds it)
                    so that it can be accessed later on if the flag is removed (the inner html will change to the
                    flag icon)*/
                    $(this).html(`<i class="fas fa-flag"></i>`); // square displays the flag icon
                    scoreContainer.innerHTML = scoreContainer.innerHTML - 1; // reduces the display of number of flags in hand by 1
                } else if (this.classList.contains("odd-squares")) {
                    // same process as above but for "odd-squares"
                    $(this).removeClass("odd-squares");
                    $(this).removeClass("hovered-squares");
                    $(this).addClass("oddReserved");
                    $(this).addClass("flagged");
                    $(this).attr("data-id", this.innerHTML);
                    $(this).html(`<i class="fas fa-flag"></i>`);
                    scoreContainer.innerHTML = scoreContainer.innerHTML - 1;
                } else if (this.classList.contains("flagged") && this.classList.contains("evenReserved")) {
                    // reverses the process when an even square already has a flag
                    $(this).removeClass("flagged");
                    $(this).removeClass("evenReserved");
                    $(this).addClass("even-squares");
                    $(this).addClass("hovered-squares");
                    $(this).html($(this).attr("data-id"));
                    scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
                } else if (this.classList.contains("flagged") && this.classList.contains("oddReserved")) {
                    // reverses the process when an odd square already has a flag
                    $(this).removeClass("flagged");
                    $(this).removeClass("oddReserved");
                    $(this).addClass("odd-squares");
                    $(this).addClass("hovered-squares");
                    $(this).html($(this).attr("data-id"));
                    scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;
                }
            }
        }
    });
}
function assignRelativePosition() {
    let squares = document.getElementsByClassName("squares");
    for (square of squares) {
        let sqid = parseInt(square.id);
        if (sqid === 0) {
            square.classList.add("top-left");
        } else if (sqid > 0 && sqid < (selectedRows -1)) {
            square.classList.add("top-edge")
        } else if (sqid === selectedRows -1) {
            square.classList.add("top-right");
        } else if (sqid > 0 && sqid % selectedRows === 0 && sqid != (selectedSquares - selectedRows)) {
            square.classList.add("left-edge");
        } else if (sqid > 0 && (sqid +1) % selectedRows === 0 && sqid != (selectedSquares - 1)) {
            square.classList.add("right-edge");
        } else if (sqid === (selectedSquares - selectedRows)) {
            square.classList.add("bottom-left");
        } else if (sqid === (selectedSquares - 1)) {
            square.classList.add("bottom-right");
        } else if (sqid > (selectedSquares - selectedRows) && sqid < (selectedSquares - 1)) {
            square.classList.add("bottom-edge");
        } else {
            square.classList.add("middle");
        }
    }
}



function bombIcon() {
    let squares = document.getElementsByClassName("squares");  
    for (square of squares) { // simple loop to assign squares with class of "bomb" the skull font awesome icon as innerHTML
        if (square.classList.contains("bomb")) {
            square.innerHTML = `<i class="fas fa-skull"></i>`;
        }
    }
}
function flags() {
    /* Assigns the starting value of the number flags in hand counter depending on the selected difficulty*/
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML = selectedBombs;    
}
function minesweep() {
/* This code runs when the player left clicks on any square in the grid.
Its main function is to check if any of the surrounding squares of the clicked
square have an innerHTML value of zero. If the value of the clicked square is zero,
this function will then automatically "click" on any of its surrounding squares that
ALSO have a value of zero. */
    this.removeEventListener("click", minesweep);// so a square can only be clicked once
    this.classList.remove("hovered-squares");// removes the highlight effect from clicked squares
    this.classList.remove("even-squares", "odd-squares");
    this.classList.add("selected");// adds identifier to clicked squares
    if (parseInt(this.innerHTML) === 0) { // changes the styling of clicked squares
        this.classList.add("text-grey");
    } else {
        this.classList.add("text-white");
    }
    let squares = document.getElementsByClassName("squares");
    for (square of squares) {
        /* removes the class identifier from the squares selected by the below code as
        surrounding the clicked square. This prevents the automated clicking code from
        clicking on squares previously identified as surrounding OTHER squares but which weren't
        selected for automatic clicking because the initially clicked square didn't have a value
        of zero*/
        square.classList.remove("clicked-square-radius");
    }
    if (this.classList.contains("right-edge")) {
        minesweepRight(squares, this);
    } else if (this.classList.contains("left-edge")) {
        minesweepLeft(squares, this);
    } else if (this.classList.contains("top-left")) {
        minesweepTopLeft(squares, this);        
    } else if (this.classList.contains("top-edge")) {
        minesweepTop(squares, this);        
    } else if (this.classList.contains("top-right")) {
        minesweepTopRight(squares, this);        
    } else if (this.classList.contains("bottom-edge")) {
        minesweepBottom(squares, this);        
    } else if (this.classList.contains("bottom-left")) {
        minesweepBottomRight(squares, this);        
    } else if (this.classList.contains("bottom-right")) {
        minesweepBottomRight(squares, this);        
    } else if (this.classList.contains("middle")) {
        minesweepMiddle(squares, this);
    }
    automatedClick(this);
}
function minesweepRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
}
function minesweepLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
}
function minesweepTopLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
}
function minesweepTop(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
}
function minesweepTopRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
}
function minesweepBottom(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
}
function minesweepBottomLeft(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) -selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
}
function minesweepBottomRight(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
}
function minesweepMiddle(squares, that) {
    let thisID = that.id;
    squares[parseInt(thisID) - selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - (selectedRows +1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + selectedRows].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + 1].classList.add("clicked-square-radius");
    squares[parseInt(thisID) - 1].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows -1)].classList.add("clicked-square-radius");
    squares[parseInt(thisID) + (selectedRows +1)].classList.add("clicked-square-radius");
}
function automatedClick(that) {
    let clickedSquareRadius = document.getElementsByClassName("clicked-square-radius");
    for (square of clickedSquareRadius) {
        square.classList.add(`csr-${that.id}`)
    }   
    let automatedClickers = document.getElementsByClassName(`csr-${that.id}`)     
    for (clicker of automatedClickers) {   
        if (parseInt(that.innerHTML) === 0) {
            clicker.click();
        }
    }
}