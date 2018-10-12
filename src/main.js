import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MemoryCard } from "./memory.js";


/* eslint-disable no-unused-vars */

$(document).ready(function() {
    // const imgArray = ["./img/cardOne.jpg", "./img/cardTwo.jpeg", "./img/cardThree.jpeg", "./img/cardFour.jpg"];
    const imgArray = ["1", "2", "3", "4"];
    let cardArray = [];
    
    let cardOne = new MemoryCard(imgArray[0]);
    cardArray.push(cardOne);
    let cardTwo = new MemoryCard(imgArray[0]);
    cardArray.push(cardTwo);
    let cardThree = new MemoryCard(imgArray[1]);
    cardArray.push(cardThree);
    let cardFour = new MemoryCard(imgArray[1]);
    cardArray.push(cardFour);
    let cardFive = new MemoryCard(imgArray[2]);
    cardArray.push(cardFive);
    let cardSix = new MemoryCard(imgArray[2]);
    cardArray.push(cardSix);
    let cardSeven = new MemoryCard(imgArray[3]);
    cardArray.push(cardSeven);
    let cardEight = new MemoryCard(imgArray[3]);
    cardArray.push(cardEight);

    let randomizedArray = [];
    while (cardArray.length != 0) {
        let randomInt = Math.floor(Math.random() * cardArray.length);
        randomizedArray.push(cardArray[randomInt]);
        cardArray.splice(randomInt, 1);
    }

    for (let i = 0; i < randomizedArray.length; i++) {
        $(`#${i}`).attr('value', `${randomizedArray[i].value}`);
        $(`#${i}`).text("?");
    }

    let valueOne = -1;
    let valueTwo = -1;
    let idOne = -1;
    let idTwo = -1;

    let counter = 0;

    $(".clickable").click(function() {

        if (valueOne === -1) {
            valueOne = $(this).attr("value");
            $(this).text($(this).attr("value"));
            idOne = $(this).attr("id");
        } else if (valueTwo === -1) {
            valueTwo = $(this).attr("value");
            $(this).text($(this).attr("value"));
            idTwo = $(this).attr("id");
        }

        if (valueOne != -1 && valueTwo != -1) {
            setTimeout(function(){ 
                if (valueOne != valueTwo) {
                    $(`#${idOne}, #${idTwo}`).text("?");
                } else if (valueOne === valueTwo) {
                    counter++;
                    console.log(counter);
                }
                
                valueOne = -1;
                valueTwo = -1;
                idOne = -1;
                idTwo = -1;

                if (counter === 4) {
                    console.log("You WIN!");
                    setTimeout(function() {
                        location.reload();
                    }, 4000);
                }
             }, 1500);

            

             
        }
    })
});