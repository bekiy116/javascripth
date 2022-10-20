// Тоглогчийн ээлжийг хадгалах хувьсагч 

var activePlayer = 1;

// Тоглогчийн цуглуулсан хадгалах хувьсагч

var scores = [0 , 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй , 1 6 гэсэн
// утгыг энэ хувьсагчид санатсаргүйгээр үүсгэж өгнө 


// программ эхлэхэд бэлтгэе 

document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";
document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";

var diceDom = document.querySelector('.dice');

// diceDom.style.displey = "none";

document.querySelector('.btn-roll').addEventListener("click", function(){

    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.displey = "block";
    diceDom.src = 'dice-'+diceNumber+'.png';

});