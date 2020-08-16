let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  var item = document.createElement('div');
  item.classList.add('item');
  item.id = "item-" + order;
  item.setAttribute('draggable', true);
  item.addEventListener('dragstart', (event) => {
    return event.setData('text');
  })
  item.addEventListener('dragend', (event) => {
    return event.clearData();
  })
  var input = document.createElement('input');
  item.appendChild(input);
  var save_btn = document.createElement('button');
  save_btn.innerHTML = 'Save';
  save_btn.addEventListener('click', () => {
    error = '';
    if (value !== '') {
      order += 1;
      item.innerHTML = value;
      adding = false;
    } else {
      error.innerHTML = message;
    }
  })
  item.appendChild(save_btn);
  return item;
};

document.querySelectorAll('.drop').forEach(element => {
  element.addEventListener('drop', (event) => {
    event.preventDefault();
  })
  const id = event.getData();
  document.getElementById(id).appendChild(event.target);
  element.addEventListener('dragover', (event) => {
    event.preventDefault();
  })
});