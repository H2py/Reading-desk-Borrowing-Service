document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let taskValue = document.getElementById('task').value;

    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let textNode = document.createElement('span');
    textNode.textContent = ' ' + taskValue;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    let editButton = document.createElement('button');
    editButton.textContent = '수정';
    editButton.style.backgroundColor = '#007bff';
    editButton.style.marginLeft = '10px';
    editButton.addEventListener('click', function() {
        if (editButton.textContent === '수정') {
            let inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = textNode.textContent.trim();
            li.insertBefore(inputField, textNode);
            li.removeChild(textNode);
            editButton.textContent = '저장';
            editButton.style.backgroundColor = '#28a745';

            inputField.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    editButton.click();
                }
            });

        } else {
            textNode.textContent = ' ' + li.querySelector('input[type="text"]').value;
            li.insertBefore(textNode, li.querySelector('input[type="text"]'));
            li.removeChild(li.querySelector('input[type="text"]'));
            editButton.textContent = '수정';
            editButton.style.backgroundColor = '#007bff';
        }
    });

    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById('taskList').appendChild(li);

    document.getElementById('task').value = '';
});

document.getElementById('clearAll').addEventListener('click', function() {
    document.getElementById('taskList').innerHTML = '';
});

