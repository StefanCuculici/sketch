
// const container=document.querySelector('.container');

// for(let i=0; i<16*16; i++) {

//     const blocks=document.createElement('div');
//     blocks.classList.add('block');
//     container.appendChild(blocks);

// }

// const container = document.querySelector('.container');

// for (let i = 0; i < 16 * 16; i++) {
//   const block = document.createElement('div');
//   block.classList.add('block');
//   container.appendChild(block);

//   block.addEventListener('mouseover', () => {
//     block.classList.add('hovered');
//   });

//   block.addEventListener('mouseout', () => {
//     block.classList.remove('hovered');
//   });

//   block.addEventListener('click', () => {
//     block.classList.toggle('active');
//   });
// }
let colorWheel=document.getElementById('colorWheel');


const container = document.querySelector('.container');
let isMouseButtonDown = false;
let dim=16;
let draw=false;

// function handleMouseOver(event) {
//   const block = event.target;
//   if (isMouseButtonDown) {
//     block.classList.add('active');
//   } else {
//     block.classList.add('hovered');
//   }
// }

function startDrawing(event) {
  const block=event.target;
  draw=true;
  block.classList.add('active');

}

function stopDrawing() {

  draw=false;


}

function Drawing(event) {

  const block=event.target;
  if(!draw) return;
  block.classList.add('active');

}

// function handleMouseOut(event) {
//   const block = event.target;
//   if (!block.classList.contains('active')) {
//     block.classList.remove('hovered');
//   }
// }

// function handleMouseDown() {
//   isMouseButtonDown = true;
// }

// function handleMouseUp() {
//   isMouseButtonDown = false;
// }

// document.addEventListener('mousedown', handleMouseDown);
// document.addEventListener('mouseup', handleMouseUp);
// document.addEventListener('touchmove'. handleTouch);

document.addEventListener('mousedown', startDrawing);
document.addEventListener('mouseup', stopDrawing);
document.addEventListener('mouseleave', stopDrawing);
document.addEventListener('mousemove', Drawing);

document.addEventListener('touchstart', startDrawing);
document.addEventListener('touchend', stopDrawing);
document.addEventListener('touchmove', Drawing);


for (let i = 0; i < dim*dim; i++) {
  const block = document.createElement('div');
  let reset=document.getElementById("reset");
  let blocks = document.querySelectorAll('.block');
  block.classList.add('block');
  container.appendChild(block);

  // block.addEventListener('mouseover', handleMouseOver);
  // block.addEventListener('mouseout', handleMouseOut);

//   block.addEventListener('click', () => {
//     block.classList.toggle('active');
    
//   });

    blocks.forEach(block => {
        block.addEventListener('click', () => {
          block.classList.toggle('active');
        });

        block.addEventListener('touch', () => {

          block.classList.toggle('active');

        });

    });

    reset.onclick=function() {

        blocks.forEach(block => {
            block.classList.remove('active');
          });

    }

}






