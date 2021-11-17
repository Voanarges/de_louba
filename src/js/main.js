import forms from './modules/forms';
import description from './modules/description';
'use strict';
window.addEventListener('DOMContentLoaded', ()=>{

    const openMenu = document.querySelector('.hamburger'),
            menu = document.querySelector('.menu'),
            close = document.querySelector('.menu__close');

    openMenu.addEventListener('click', (e)=>{
        menu.classList.add('active');
    });
    menu.addEventListener('click', ()=>{
        menu.classList.remove('active');
    })
    close.addEventListener('click', ()=>{
        menu.classList.remove('active');
    })
    forms();
    description('.myworks__fon','.myworks__description');
    
});