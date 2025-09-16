// XHR - older syntax
// retorna um objeto xhr
const getData1 = (url) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            const text = document.createElement("p");
            text.textContent = xhr.responseText;
            document.body.appendChild(text);
        } else {
            console.log({
                status: xhr.status,
                text: xhr.readyState,
            });
        }
    };

    console.log(xhr);
    xhr.send("");
};

const getData2 = (url) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // conter uma string JSON em um objeto*
            const data = JSON.parse(xhr.responseText);
            const displayData = data
                .map((item) => {
                    return `<p>XHR >>> ID: ${item.id} - Name: ${item.name}</p>`;
                })
                .join("");
            const element = document.createElement("div");
            element.innerHTML = displayData;
            document.body.appendChild(element);
        } else {
            console.log({
                status: xhr.status,
                text: xhr.readyState,
            });
        }
    };

    console.log(xhr);
    xhr.send("");
};

const btn6 = document.querySelector(".btn6");
const url1 = "./async_js/api/sample.txt";
const url2 = "./async_js/api/people.json";
btn6.addEventListener("click", () => {
    getData2(url2);
});

// FETCH - newer syntax
// retorna uma Promise
// sem o async/await
const btn7 = document.querySelector(".btn7");
btn7.addEventListener("click", () => {
    fetch(url2)
        .then((resp) => {
            // response object - useful methods and properties
            console.log(resp);
            return resp.json();
        }) // é necessário adicionar um 2o "then" porque o then acima
        // retorna uma Promise também
        .then((data) => {
            // aqui ele já não retorna uma Promise mais
            console.log(data);
            displayData(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

//com o async/await
const btn8 = document.querySelector(".btn8");
btn8.addEventListener("click", async () => {
    try {
        const response = await fetch(url2);
        const data = await response.json();
        displayData(data);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
});

const displayData = (data) => {
    const people = data
        .map((item) => {
            const { id, name } = item;
            return `<p>FETCH >>> ID:${id} - Name: ${name}</p>`;
        })
        .join("");

    const element = document.createElement("div");
    element.innerHTML = people;
    document.body.appendChild(element);
};
