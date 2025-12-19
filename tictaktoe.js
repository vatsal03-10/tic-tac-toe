let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newgame = document.querySelector("#newbtn");
let msgCont = document.querySelector(".mess-cont");
let mess = document.querySelector("#msg");
let turnO = true;
let count=0;

const winnpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color="#755C1B";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color="#400406"
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});
const disabledbtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enablebtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showwinner = (winner) => {
    msg.innerText = `Congratulation,winner is ${winner}`;
    msgCont.classList.remove("hide");
    disabledbtn();

};
const checkWinner = () => {
    for (let pattern of winnpatterns) {
        let postval1 = boxes[pattern[0]].innerText;
        let postval2 = boxes[pattern[1]].innerText;
        let postval3 = boxes[pattern[2]].innerText;
        if (postval1 != "" && postval2 != "" && postval3 != "") {
            if (postval1 === postval2 && postval2 === postval3) {
                console.log("winner", postval1);
                showwinner(postval1);
                return;
            }
        }
    }
     // ✅ draw condition
     if (count === 9) {
        msg.innerText = "It's a Draw!";
        msgCont.classList.remove("hide");
    }
};
const resetGame = () => {
    turnO = true;
    count=0;
    enablebtns();
    msgCont.classList.add("hide");
};

newgame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
