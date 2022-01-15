const img1=document.querySelector('.img1');
const img2=document.querySelector('.img2');
const img3=document.querySelector('.img3');
const img4=document.querySelector('.img4');
const img5=document.querySelector('.img5');
const img6=document.querySelector('.img6');
const img7=document.querySelector('.img7');
const img8=document.querySelector('.img8');
const img9=document.querySelector('.img9');
var dest;
var source;

img1.addEventListener("dragstart",dragStart1);
img1.addEventListener("dragend",dragEnd1);
img1.addEventListener("dragover",dragOver1);
img1.addEventListener("dragenter",dragEnter);
img1.addEventListener("dragleave",dragLeave);
img1.addEventListener("drop",dragDrop1);

img2.addEventListener("dragstart",dragStart2);
img2.addEventListener("dragend",dragEnd2);
img2.addEventListener("dragover",dragOver2);
img2.addEventListener("dragenter",dragEnter);
img2.addEventListener("dragleave",dragLeave);
img2.addEventListener("drop",dragDrop2);

img3.addEventListener("dragstart",dragStart3);
img3.addEventListener("dragend",dragEnd3);
img3.addEventListener("dragover",dragOver3);
img3.addEventListener("dragenter",dragEnter);
img3.addEventListener("dragleave",dragLeave);
img3.addEventListener("drop",dragDrop3);

img4.addEventListener("dragstart",dragStart4);
img4.addEventListener("dragend",dragEnd4);
img4.addEventListener("dragover",dragOver4);
img4.addEventListener("dragenter",dragEnter);
img4.addEventListener("dragleave",dragLeave);
img4.addEventListener("drop",dragDrop4);

img5.addEventListener("dragstart",dragStart5);
img5.addEventListener("dragend",dragEnd5);
img5.addEventListener("dragover",dragOver5);
img5.addEventListener("dragenter",dragEnter);
img5.addEventListener("dragleave",dragLeave);
img5.addEventListener("drop",dragDrop5);

img6.addEventListener("dragstart",dragStart6);
img6.addEventListener("dragend",dragEnd6);
img6.addEventListener("dragover",dragOver6);
img6.addEventListener("dragenter",dragEnter);
img6.addEventListener("dragleave",dragLeave);
img6.addEventListener("drop",dragDrop6);

img7.addEventListener("dragstart",dragStart7);
img7.addEventListener("dragend",dragEnd7);
img7.addEventListener("dragover",dragOver7);
img7.addEventListener("dragenter",dragEnter);
img7.addEventListener("dragleave",dragLeave);
img7.addEventListener("drop",dragDrop7);

img8.addEventListener("dragstart",dragStart8);
img8.addEventListener("dragend",dragEnd8);
img8.addEventListener("dragover",dragOver8);
img8.addEventListener("dragenter",dragEnter);
img8.addEventListener("dragleave",dragLeave);
img8.addEventListener("drop",dragDrop8);

img9.addEventListener("dragstart",dragStart9);
img9.addEventListener("dragend",dragEnd9);
img9.addEventListener("dragover",dragOver9);
img9.addEventListener("dragenter",dragEnter);
img9.addEventListener("dragleave",dragLeave);
img9.addEventListener("drop",dragDrop9);

function dragStart1() {
    console.log("Start");
    source=document.getElementById("1").src;
}

function dragStart2() {
    console.log("Start");
    source=document.getElementById("2").src;
}

function dragStart3() {
    console.log("Start");
    source=document.getElementById("3").src;
}

function dragStart4() {
    console.log("Start");
    source=document.getElementById("4").src;
}

function dragStart5() {
    console.log("Start");
    source=document.getElementById("5").src;
}

function dragStart6() {
    console.log("Start");
    source=document.getElementById("6").src;
}

function dragStart7() {
    console.log("Start");
    source=document.getElementById("7").src;
}

function dragStart8() {
    console.log("Start");
    source=document.getElementById("8").src;
}

function dragStart9() {
    console.log("Start");
    source=document.getElementById("9").src;
}

function dragEnd1() {
    console.log("End");
    document.getElementById("1").src=dest;
}

function dragEnd2() {
    console.log("End");
    document.getElementById("2").src=dest;
}

function dragEnd3() {
    console.log("End");
    document.getElementById("3").src=dest;
}

function dragEnd4() {
    console.log("End");
    document.getElementById("4").src=dest;
}

function dragEnd5() {
    console.log("End");
    document.getElementById("5").src=dest;
}

function dragEnd6() {
    console.log("End");
    document.getElementById("6").src=dest;
}

function dragEnd7() {
    console.log("End");
    document.getElementById("7").src=dest;
}

function dragEnd8() {
    console.log("End");
    document.getElementById("8").src=dest;
}

function dragEnd9() {
    console.log("End");
    document.getElementById("9").src=dest;
}

function dragOver1(e) {
    e.preventDefault();
    console.log("Over");
}

function dragOver2(e) {
    e.preventDefault();
    console.log("Over");
}

function dragOver3(e) {
    e.preventDefault();
    console.log("Over");
}

function dragOver4(e) {
    e.preventDefault();
    console.log("Over");
}

function dragOver5(e) {
    e.preventDefault();
    console.log("Over");
}

function dragOver6(e) {
    e.preventDefault();
    console.log("Over");
}

function dragOver7(e) {
    e.preventDefault();
    console.log("Over");
}

function dragOver8(e) {
    e.preventDefault();
    console.log("Over");
}

function dragOver9(e) {
    e.preventDefault();
    console.log("Over");
}

function dragEnter(e) {
    e.preventDefault();
    console.log("Enter");
}

function dragLeave() {
    console.log("Leave");
}

function dragDrop1() {
    console.log("Drop");
    dest=document.getElementById("1").src;
    document.getElementById("1").src=source;
}

function dragDrop2() {
    console.log("Drop");
    dest=document.getElementById("2").src;
    document.getElementById("2").src=source;
}

function dragDrop3() {
    console.log("Drop");
    dest=document.getElementById("3").src;
    document.getElementById("3").src=source;
}

function dragDrop4() {
    console.log("Drop");
    dest=document.getElementById("4").src;
    document.getElementById("4").src=source;
}

function dragDrop5() {
    console.log("Drop");
    dest=document.getElementById("5").src;
    document.getElementById("5").src=source;
}

function dragDrop6() {
    console.log("Drop");
    dest=document.getElementById("6").src;
    document.getElementById("6").src=source;
}

function dragDrop7() {
    console.log("Drop");
    dest=document.getElementById("7").src;
    document.getElementById("7").src=source;
}

function dragDrop8() {
    console.log("Drop");
    dest=document.getElementById("8").src;
    document.getElementById("8").src=source;
}

function dragDrop9() {
    console.log("Drop");
    dest=document.getElementById("9").src;
    document.getElementById("9").src=source;
}

