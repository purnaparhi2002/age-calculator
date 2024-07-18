const birthYearInput = document.getElementById('birthyear');
const currentYearInput = document.getElementById('currentyear');
const resultParagraph = document.getElementById('result');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
const birthYear = parseInt(birthYearInput.value);
const currentYear = parseInt(currentYearInput.value);
const age = currentYear - birthYear;
resultParagraph.textContent=`You are ${age} years old`;
    });

});

