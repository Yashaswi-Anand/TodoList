// Taking line-throuhg the todo list on selecting a checkbox
console.log("Taking line-throuhg the todo list on selecting a checkbox");

var tasks = document.getElementsByClassName('list-item-left');

console.log(tasks.length);

for(let i of tasks){
    i.getElementsByTagName('input')[0].addEventListener('change', function() {
        if(this.checked){
            i.getElementsByTagName('h3')[0].style.textDecoration = 'line-through';
            i.getElementsByTagName('h5')[0].style.textDecoration = 'line-through';
            //console.log('checked');
        }else{
            i.getElementsByTagName('h3')[0].style.textDecoration = 'none';
            i.getElementsByTagName('h5')[0].style.textDecoration = 'none';
            //console.log('unchecked');
        }
    });
}