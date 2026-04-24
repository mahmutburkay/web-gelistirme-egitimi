// Seçim işlemleri
const todoAddForm = document.getElementById('todoAddForm');
const todoNameInput = document.getElementById('todoName');
const todoList = document.querySelector('.list-group');
const clearButton = document.getElementById('clearButton');
const todoSearchInput = document.getElementById('todoSearch');

// Yeni bir todo eklemek için event listener
todoAddForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = todoNameInput.value.trim();

    if (todoText === '') {
        alert('Lütfen bir todo girin');
        return;
    }

    addTodoItem(todoText);
    todoNameInput.value = ''; // Ekleme sonrası input temizleme
});

// Todo öğesi eklemek için fonksiyon
function addTodoItem(todoText) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between';
    li.innerText = todoText;

    // Silme butonu oluşturma
    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.className = 'delete-item';
    deleteButton.innerHTML = '<i class="fa fa-remove"></i>';

    // Silme işlemi için event ekleme
    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        li.remove(); // Todo öğesini sil
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li); // Listeye ekle
}

// Tüm todoları temizlemek için event listener
clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    todoList.innerHTML = ''; // Tüm listeyi temizle
});

// Arama için event listener
todoSearchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();

    // Tüm todo listesi öğelerini al
    const todoItems = document.querySelectorAll('.list-group-item');

    todoItems.forEach((item) => {
        const itemText = item.textContent.toLowerCase();

        // Arama metnine göre öğeyi göster/gizle
        if (itemText.includes(searchText)) {
            item.style.display = 'flex'; // Eşleşirse göster
        } else {
            item.style.display = 'none'; // Eşleşmezse gizle
        }
    });
});
