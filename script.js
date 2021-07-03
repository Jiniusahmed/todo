let nameField = document.querySelector('#nameField')
let ul = document.querySelector('#nameList')



nameField.addEventListener('keypress',function (event){
    if(event.keyCode === 13){
        let name = event.target.value;
        createLi(ul, name)
        event.target.value = ''
        
    }
})



function createLi(ul,name){
    let li = document.createElement('li')
    li.className = 'list-group-item my-2 bg-dark text-light d-flex'
    li.innerHTML = name;


    let span = document.createElement('span')
    span.innerHTML = 'X'
    span.className = 'ms-auto'
    span.style.color = 'red'
    span.style.cursor = 'pointer'
    li.appendChild(span)



    span.addEventListener('click', (event) =>{
        ul.removeChild(li)
    })


    ul.appendChild(li)
}

