import tabs  from'./modules/tabs';
import modal from'./modules/modal';
import calc  from'./modules/calc';
import timer  from'./modules/timer';
import slider  from'./modules/slider';
import forms  from'./modules/forms';
import cards  from'./modules/cards';
import {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', function() {
       
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active' );
    modal('[data-modal]', '.modal', modalTimerId);
    calc();
    timer('.timer', '2022-12-11');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field:'.offer__slider-inner'
    });
    forms('form', modalTimerId);
    cards(); 

});
