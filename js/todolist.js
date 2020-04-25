let textfield = document.getElementById('text-id');
document.getElementById('err-msg').style.display = 'none';
document.getElementById('add-btn').addEventListener('click', () => {
    let textbox = document.getElementById('text-id').value;
    let list = document.getElementById('list');
    if (textbox === '') {
        document.getElementById('err-msg').style.display = 'block';
    }
    else {
        let counter = 1;
        document.getElementById('err-msg').style.display = 'none';
        let li = document.createElement('li');
        li.setAttribute('id', 'li-id')
        li.setAttribute('class', 'li-class');
        let textnode = document.createTextNode(textbox + counter++ );
        li.appendChild(textnode);
        let remove = document.createElement('button');
        remove.innerHTML = 'remove';
        remove.setAttribute("id", "remove-btn");
        li.appendChild(remove);
        list.appendChild(li);
        removeText();
        // واقف هنا على ان اضغط على زرار ريموف فيمسح اى ال نود كلها
        document.getElementById('remove-btn').addEventListener('click',()=>{
            document.querySelector('.li-class').style.display = 'none';

        });
    }

    textfield.onkeydown = function () {
        document.getElementById('err-msg').style.display = 'none';

    }
    function removeText() {
        document.getElementById('text-id').value = '';
    }
    // function removeLi() {

    //     let deletedLi = document.getElementById('li-id');
    //     deletedLi.style.display = 'none';

    //     // deletedLi.style.display = 'none';
    // }

});

