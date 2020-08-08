// EXAMINE THE DOCUMENT OBJECT // 

// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.all);

// GETELEMENTBYID //

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');

// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);

// GETELEMENTBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// console.log(items[2]);
// items[2].textContent = 'Hello';
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'yellow';

// Gives error 
//items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTBYTAGNAME //
// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[2]);
// li[2].textContent = 'Hello';
// li[2].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'yellow';

// Gives error 
//li.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// QUERYSELECTORALL //
var titels = document.querySelectorAll('.title');

console.log(titels);
titels[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i< odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}