import { concatination } from "./concatenation";

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');

if (buttonEl && inputEl) {
    buttonEl.addEventListener(`click`, () => {
        concatination(inputEl.value, 'hello!')
    })
}