
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

const container = document.querySelector('.container');
let isMouseButtonDown = false;

function handleMouseOver(event) {
  const block = event.target;
  if (isMouseButtonDown) {
    block.classList.add('active');
  } else {
    block.classList.add('hovered');
  }
}

function handleMouseOut(event) {
  const block = event.target;
  if (!block.classList.contains('active')) {
    block.classList.remove('hovered');
  }
}

function handleMouseDown() {
  isMouseButtonDown = true;
}

function handleMouseUp() {
  isMouseButtonDown = false;
}

document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mouseup', handleMouseUp);

for (let i = 0; i < 16 * 16; i++) {
  const block = document.createElement('div');
  let reset=document.getElementById("reset");
  let blocks = document.querySelectorAll('.block');
  block.classList.add('block');
  container.appendChild(block);

  block.addEventListener('mouseover', handleMouseOver);
  block.addEventListener('mouseout', handleMouseOut);

//   block.addEventListener('click', () => {
//     block.classList.toggle('active');
    
//   });

    blocks.forEach(block => {
        block.addEventListener('click', () => {
        block.classList.toggle('active');
        });
    });

    reset.onclick=function() {

        blocks.forEach(block => {
            block.classList.remove('active');
          });

    }

}






