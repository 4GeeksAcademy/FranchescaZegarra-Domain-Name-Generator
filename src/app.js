/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Basic solution
window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
      }
    }
  }
};

//Write diferents name of the domain in the web page
let newPronoun = ["the", "our"];
let newAdj = ["great", "big"];
let newNoun = ["jogger", "racoon"];

function generateName(firstArray, secondArray, thirdArray) {
  let nameOfDomain = [];
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      for (let k = 0; k < thirdArray.length; k++) {
        nameOfDomain.push(
          `${firstArray[i]}${secondArray[j]}${thirdArray[k]}.com`
        );
      }
    }
  }
  return nameOfDomain;
}

document.getElementById("domainNameGenerator").innerHTML = generateName(
  newPronoun,
  newAdj,
  newNoun
);
document.getElementById("numberOfDomains").innerHTML = generateName(
  newPronoun,
  newAdj,
  newNoun
).length;
