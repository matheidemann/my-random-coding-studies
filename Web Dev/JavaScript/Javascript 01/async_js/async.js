// callback hell - era feito assim antes do Promises
function doSomething() {
    setTimeout(() => {
        console.log("First");
        setTimeout(() => {
            console.log("Second");
            setTimeout(() => {
                console.log("Third");
            }, 1000);
        }, 1000);
    }, 1000);
}

// Promises
// Uma Promise pode ter os status de: Pending, Resolved ou Rejected
// resolve e reject são funções
// then / catch = passa outro callback
const my_promise = new Promise((resolve, reject) => {
    const value = true;
    if (value) {
        resolve("SUA DATA AQUI!");
    } else {
        reject("DEU ERRO DOIDO");
    }
});

my_promise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// Image API example
const btn4 = document.querySelector(".btn4");
const box3 = document.querySelector(".box3");
let url = "https://picsum.photos/";

btn4.addEventListener("click", () => {
    loadImage(url)
        .then((data) => {
            box3.appendChild(data);
        })
        .catch((err) => {
            box3.appendChild(`<h1>There was an error: ${err}</h1>`);
        });
});

const loadImage = (url) => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = `${url}/${Math.floor(Math.random() * 1000) + 1}`;
        img.classList.add("img");

        img.addEventListener("load", () => {
            resolve(img);
        });
        img.addEventListener("error", () => {
            reject(new Error("Deu erro no bagulho =("));
        });
    });
};

// async / await
// async sempre vai retornar uma promise por default
const btn5 = document.querySelector(".btn5");
const box4 = document.querySelector(".box4");
let url2 = "https://picsum.photos/";

btn5.addEventListener("click", async () => {
    try {
        await addColor(1000, document.querySelector(".text1"), "red");
        await addColor(1000, document.querySelector(".text2"), "blue");
        await addColor(1000, document.querySelector(".text3"), "green");
    } catch (err) {
        console.log(`${err}`);
    }
});

const addColor = (time, element, color) => {
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time);
        } else {
            reject(new Error(`No such element. Element is ${element}`));
        }
    });
};
