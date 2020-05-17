var ul = document.getElementById('list')
var len=localStorage.length;

if(len >0)
{
    for(var i=0; i<len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        var textnode = document.createTextNode(value);
        
        //Creating elements
        var li = document.createElement('li')
        var p = document.createElement('p')
        var label = document.createElement('label')
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')

        var span = document.createElement('span')
        //Adding Element
        span.appendChild(textnode)
        span.className='black-text'
        label.appendChild(checkbox)
        label.appendChild(span)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0]);
        li.className = 'myCheck';
    }
}


function addItem(){
    var index = localStorage.length;

    var input = document.getElementById('input');
    var todo = input.value;
    ul = document.getElementById('list')
    var textnode = document.createTextNode(todo);
    if(todo === '')
    {
        // alert("Enter todo")
        var p = document.createElement('span')
        var errorMsg = document.createTextNode('Please enter your todo.')
       
        p.appendChild(errorMsg)
        ul.insertBefore(p, ul.childNodes[0]);
        p.className = 'warningOn';

        setTimeout(() => {
            p.remove();
        }, 2500);

        return false;

    }else{
        index = index+1;
        console.log(index);
        localStorage.setItem('todo'+index, todo)
        
        //Creating elements
        var li = document.createElement('li')
        var p = document.createElement('p')
        var label = document.createElement('label')
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')

        var span = document.createElement('span')
        //Adding Element
        span.appendChild(textnode)
        span.className='black-text'
        label.appendChild(checkbox)
        label.appendChild(span)
        li.appendChild(label)
        
        
        setTimeout(() => {
            ul.insertBefore(li, ul.childNodes[0]);
            li.className = 'myCheck';
            input.value = '';
        }, 350);

        
    }

}

function removeItem(){
    li = ul.children
   
    if(li.length === 0)
    {
        var p = document.createElement('span')
        var errorMsg = document.createTextNode('No tasks available to delete.')
       
        p.appendChild(errorMsg)
        ul.insertBefore(p, ul.childNodes[0]);
        p.className = 'warningOn';

        setTimeout(() => {
            p.remove();
        }, 2500);

        return false;
    }

    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].childNodes[0].checked)
        {
            var val = li[index].innerText;
            console.log(val);
            ul.removeChild(li[index]);
        }
    }
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        if(value == val)
        localStorage.removeItem(key)
    }
}

