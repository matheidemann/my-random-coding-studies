(function readyJS(win, doc) {
    'use strict';

    /* GLOBAL VARS */
    //QUERRYSELECTOS
    const groceryForm = doc.querySelector('.grocery-form');
    const alertText = doc.querySelector('.alert');
    const submitBtn = doc.querySelector('.submit-btn');
    const groceryName = doc.getElementById('grocery');
    const groceryList = doc.querySelector('.grocery-list');
    const clearBtn = doc.querySelector('.clear-btn');
    const clearConfirmation = doc.querySelector('.clear-confirmation');

    //TEMP ITEMS
    let tempItem = null;
    let tempArticle = null;

    //EDIT VALUES
    let editStatus = false;


    /* PRIMAL EVENTS */
    window.addEventListener('DOMContentLoaded', setupItemList);
    groceryForm.addEventListener('submit', submitItem, false);
    clearBtn.addEventListener('click', clearList, false);

    /* FUNCTIONS */
    //SUBMIT AN ITEM
    function submitItem(e) {
        e.preventDefault();
        const groceryValue = groceryName.value;
        const idValue = new Date().getTime().toString();

        //IF THE NEW VALUE EXISTS AND EDIT STATUS IF FALSE
        if (checkIfExists(groceryValue) && !editStatus) {
            showAlert('O item já existe', 'red');
            setBackToDefault();
        }

        //IF THE NEW VALUE EXISTS AND EDIT STATUS IF TRUE
        else if (checkIfExists(groceryValue) && editStatus) {
            showAlert('nenhuma edição foi realizada', 'blue');
            setBackToDefault();
        }
        //IF THE NEW VALUE DOESN'T EXIST
        else {
            //SUBMIT A NEW ITEM
            if (groceryValue && !editStatus) {
                createNewItem(idValue, groceryValue);

                //SHOW THE ALERT
                showAlert('Item adicionado', 'green');

                //SHOW CLEAR ALL ITEM BTN
                CheckClearAllItemsBtn();

                //LOCAL STORAGE
                addToLocalStorage(idValue, groceryValue);

                //SET BACK TO DEFAULT
                setBackToDefault();
            }

            //EDIT AN EXISTING ITEM 
            else if (groceryValue && editStatus) {
                tempItem.textContent = groceryValue;
                editFromLocalStorage(tempArticle.dataset.id, groceryValue);
                showAlert('Item editado', 'blue');
                setBackToDefault();
            }

            //IF THE VALUE IS BLANK
            else {
                showAlert('Por favor, insira um valor', 'red');
                setBackToDefault();
            };
        }
    };

    //DELETE CURRENT ITEM
    function deleteItem(e) {
        const itemArticle = e.currentTarget.parentElement.parentElement;
        removeFromLocalStorage(itemArticle.dataset.id);
        groceryList.removeChild(itemArticle);
        CheckClearAllItemsBtn();
        showAlert('Item removido', 'red');
        setBackToDefault();
    };

    //EDIT CURRENT ITEM
    function editItem(e) {
        //CHANGE EDITSTATUS TO TRUE
        editStatus = true;

        //REMOVE BLUE BACKGROUND FROM ALL EDITING ITEMS
        defaultBackgroundColor();

        //GET SPECIFIC ITEM
        const itemArticle = e.currentTarget.parentElement.parentElement;
        const itemArticleText = e.currentTarget.parentElement.previousElementSibling;

        //CHANGE SPECIFIC ITEM BACKGROUND TO BLUE
        itemArticle.classList.add('alert-blue');

        //CHANGE SUBMIT BTN TEXT CONTENT TO "EDITAR"
        submitBtn.textContent = 'Editar';


        //CHANGE THE INPUT TEXT TO THE SPECIFIC ITEM TEXT
        groceryName.value = itemArticleText.textContent;

        //GET THE TEMP VALUES
        tempArticle = itemArticle;
        tempItem = itemArticleText;
    };

    //CHANGE THE BACKGROUND FROM ALL ITEMS TO DEFAULT
    function defaultBackgroundColor() {
        const tempItemList = doc.querySelectorAll('article.grocery-item');
        tempItemList.forEach(function (item) {
            item.classList.remove('alert-blue');
        });
    }

    //CHECK IF THE ITEM ALREADY EXISTS
    function checkIfExists(currentGroceryValue) {
        //GET ALL ITEMS FROM LIST
        const tempItemList = doc.querySelectorAll('article.grocery-item');

        //VAR FOR EQUAL VALUES
        let equalValues = 0;

        //CHECK IF EACH ITEM FROM LIST HAS THE SAME VALUE OF THE INPUT VALUE
        tempItemList.forEach(function (item) {
            if (item.firstElementChild.textContent == currentGroceryValue) {
                equalValues++
            };
        });

        //IF THERE IS EQUALS VALUES, RETURN TRUE, IF THERE ISN'T RETURN FALSE
        if (equalValues > 0) {
            return true;
        } else {
            return false;
        };
    };

    //SHOW ALERT
    function showAlert(text, color) {
        alertText.textContent = text;
        alertText.classList.add(`alert-${color}`)
        let alertFunc = setTimeout(function () {
            alertText.textContent = "";
            alertText.classList.remove(`alert-${color}`);
        }, 1500);
    };

    //SHOW CLEAR ITEMS BTN
    function CheckClearAllItemsBtn() {
        if (groceryList.children.length !== 0) {
            clearBtn.classList.add('show-container');
        } else {
            clearBtn.classList.remove('show-container');
        }
    };

    //CLEAR ALL ITEMS
    function clearList() {
        clearConfirmation.classList.add('show-confirmation');
        clearConfirmation.addEventListener('click', function (e) {
            if (e.target.classList.contains('yes-btn')) {
                clearConfirmation.classList.remove('show-confirmation');
                groceryList.innerHTML = '';
                localStorage.removeItem('list');
                showAlert('todos os items foram removidos', 'red');
                setBackToDefault();
                CheckClearAllItemsBtn()
            }
            else if (e.target.classList.contains('no-btn') || e.target.classList.contains('clear-confirmation')) {
                clearConfirmation.classList.remove('show-confirmation');
                return;
            }
        })

    }

    //SET ALL TO DEFAULT
    function setBackToDefault() {
        defaultBackgroundColor();
        groceryName.value = '';
        submitBtn.textContent = 'Enviar';
        editStatus = false;
    };

    //LOCAL STORAGE
    //GET THE LOCAL STORAGE ARRAY
    function getLocalStorage() {
        return localStorage.getItem('list')
            ? JSON.parse(localStorage.getItem('list'))
            : [];
    };

    //ADD A NEW ITEM TO THE LOCAL STORAGE
    function addToLocalStorage(id, value) {
        const groceryData = { id, value };
        let storageList = getLocalStorage();
        storageList.push(groceryData)
        localStorage.setItem('list', JSON.stringify(storageList));
    };

    //REMOVE AN ITEM FROM THE LOCAL STORAGE
    function removeFromLocalStorage(id) {
        let storageList = getLocalStorage();

        //RETURN A NEW ARRAY WITHOUT THE SPECIFIED ITEM
        storageList = storageList.filter(function (item) {
            if (item.id != id) {
                return item;
            };
        })
        localStorage.setItem('list', JSON.stringify(storageList));
    };

    //EDIT AN EXISTING ITEM FROM LOCAL STORAGE
    function editFromLocalStorage(id, value) {
        let storageList = getLocalStorage();

        //RETURN A NEW ARRAY WITH THE EDITED ITEM
        storageList = storageList.map(function (item) {
            if (item.id == id) {
                item.value = value;
            }
            return item;
        })
        localStorage.setItem('list', JSON.stringify(storageList));
    };

    //SETUP ITEM LIST
    function setupItemList() {
        let storageList = getLocalStorage();
        if (storageList.length > 0) {
            storageList.forEach(function (item) {
                createNewItem(item.id, item.value);
            });
        }
        CheckClearAllItemsBtn();
    };

    function createNewItem(id, value) {
        const itemTemplate = ` <p class="grocery-title">${value}</p>
    <div class="grocery-btns">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button><!-- edit-btn -->
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button><!-- edit-btn -->
        </div><!-- grocery-btns -->`;

        //CREATE A NEW ELEMENT 
        const newItemHTML = doc.createElement('article');
        newItemHTML.classList.add('grocery-item', 'flex');
        newItemHTML.innerHTML = itemTemplate;

        //ADD THE NEW ELEMENT TO THE LIST
        groceryList.appendChild(newItemHTML);

        //ADD FUNCTION TO ITEM THE BUTTONS
        const editBtn = newItemHTML.querySelector('.edit-btn');
        const deleteBtn = newItemHTML.querySelector('.delete-btn');
        editBtn.addEventListener('click', editItem, false);
        deleteBtn.addEventListener('click', deleteItem, false);

        //ID
        const idAttr = doc.createAttribute('data-id');
        idAttr.value = id;
        newItemHTML.setAttributeNode(idAttr);
    }
})(window, document);