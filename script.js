let mainArea = document.querySelector('.main-area');
let secondaryArea = document.querySelector('.secondary-area');
let thirdArea = document.querySelector('.third-area');
let fourthArea = document.querySelector('.fourth-area');
let fifthArea = document.querySelector('.fifth-area');


let inputs = document.querySelectorAll('.unuse');
let check = document.querySelectorAll('.checkBox');
let divs = document.querySelectorAll('form');
let functions = [secondaryAreaF, thirdAreaF, fourthAreaF];

let area;
let dict = [];
let percent = [];
let uniqueChars = 0;

mainArea.addEventListener('blur', function () {

    for (let i = 0; i < check.length; i++) {
        for (let j = 0; j < inputs.length; j++) {
            if (check[i].checked) {
                for (let n = 0; n < functions.length; n++) {
                    functions[i]();
                    break;
                }
                break;
            } else if (check[i].checked == false) {
                inputs[i].value = '';
            }
        }
    }

    clear();
})

function dictionary() {
    for (let i = 0; i < area.length; i++) {

        let char = area[i].toLowerCase();

        for (let j = 0; j < area.length; j++) {
            if (char in dict) {
                dict[char] += 1;
                percent[char] = dict[char] * 100 / area.length + '%';
                break;
            } else {
                dict[char] = 0;
                if (area.length == 1) {
                    dict[char] = 1;
                    percent[char] = 100 + '%';
                }
            }
        }
    }
    console.log(percent);
    console.log(dict);
}


function secondaryAreaF() {
    secondaryArea.value = ('Количество слов: ' + mainArea.value.split(/ +(?:\S)/).length);
}

function thirdAreaF() {
    thirdArea.value = ('Количество символов: ' + mainArea.value.length);
}


function fourthAreaF() {
    fourthArea.value = ('Количество символов за вычетом пробелов: ' + mainArea.value.replace(/\s/g, '').length);
}

function clear() {
    area = mainArea.value;
    dictionary();
    dict = [];
    percent = []
    mainArea.value = '';
}
