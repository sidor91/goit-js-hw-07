const initSize = 30;
let currentSize = initSize;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateClick);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onCreateClick() {
  const amount = Number(refs.input.value.trim());

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    refs.input.value = '';
    return;
  }

  createBoxes(amount);

  refs.input.value = '';
}

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${currentSize}px`;
    div.style.height = `${currentSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '4px';
    elements.push(div);
    currentSize += 10;
  }

  refs.boxes.append(...elements);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  currentSize = initSize;
}