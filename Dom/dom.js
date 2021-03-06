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
// var titels = document.querySelectorAll('.title');

// console.log(titels);
// titels[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i< odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');
    // parentNode
    // console.log(itemList.parentElement);
    // itemList.parentElement.style.backgroundColor = '#cccc';

    // childNodes
    // console.log(itemList.childNodes)
    // console.log(itemList.children)

    // FirstChild
    // console.log(itemList.firstChild)

    // FirstElementChild
    // console.log(itemList.firstElementChild)
    // itemList.firstElementChild.textContent = 'hello 1';

    // LastChild
    // console.log(itemList.lastChild)

    // LastElementChild
    // console.log(itemList.lastElementChild)
    // itemList.lastElementChild.textContent = 'hello 3';

    // NextSibling
    // console.log(itemList.nextSibling) 

    // NextElementSibling
    // console.log(itemList.nextElementSibling)

    // PreviousSibling
    // console.log(itemList.previousSibling)

    // PreviousElementSibling
    // console.log(itemList.previousElementSibling)

    // CreateElement
    // var newDiv = document.createElement('div');

    // Add class
    // newDiv.className = 'bg-secondary';

    // Add id 
    // newDiv.id = 'hello1';

    // Add attr
    // newDiv.setAttribute('style', 'color:"red"');

    // Create text node
    // var newDivText = document.createTextNode('test');

    // Add text to div
    // newDiv.appendChild(newDivText)

    // insert the div into the dom 
    // var list = document.querySelector('header .container');
    // var h1 = document.querySelector('header h1');

    // list.insertBefore(newDiv , h1);
    
    // console.log(newDiv);

// EVENTS //

// var button = document.getElementById('button').addEventListener( 'click', buttonClick);

    // function buttonClick(e) {
        // console.log('ok')
        // document.getElementById('header-title').textContent = "Changed";
        // document.querySelector('#main').style.backgroundColor = '#cccc';

        // console.log(e.target);
        // console.log(e.target.id);
        // console.log(e.target.className);

        // var output = document.getElementById('output');
        // output.innerHTML = '<h3>'+e.target.id+'</h3>'

        // console.log(e.clientX);
        // console.log(e.clientY);

        // console.log(e.offsetX);
        // console.log(e.offsetY);

        // console.log(e.altKey);
        // console.log(e.ctrlKey);
        // console.log(e.shiftKey);
    // }

    // var button = document.getElementById('button');
    // var box = document.getElementById('box');
    // var output = document.getElementById('output');
    // button.addEventListener( 'click', runEvent);
    // button.addEventListener( 'dblclick', runEvent);
    // button.addEventListener( 'mousedown', runEvent);
    // button.addEventListener( 'mouseup', runEvent);

    // box.addEventListener( 'mouseenter', runEvent);
    // box.addEventListener( 'mouseleave', runEvent);
    // box.addEventListener( 'mousemove', runEvent);
    // box.addEventListener( 'mouseout', runEvent);
    // box.addEventListener( 'mouseover', runEvent);
//    var itemInput = document.querySelector("input[type='text']");
//    var form = document.querySelector('form');
//    var select = document.querySelector('select'); 

//    itemInput.addEventListener('keydown', runEvent)
//    itemInput.addEventListener('keyup', runEvent)
//    itemInput.addEventListener('keypress', runEvent)

//    itemInput.addEventListener('focus', runEvent)
//    itemInput.addEventListener('blur', runEvent)

    // select.addEventListener('change', runEvent);

// form.addEventListener('submit', runEvent)


//     function runEvent(e){
//         e.preventDefault();
//         console.log('EVEN TYPE: '+e.type);
        
        // output.innerHTML =  '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
        // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",50)";

        // console.log(e.target.value)
        // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
    // }