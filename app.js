// Тоглогчийн ээлжийг хадгалах хувьсагч 

var activePlayer = 0;

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
    diceDom.style.displey = 'none';
  

 //шоог шидэх эвэнт 

document.querySelector('.btn-roll').addEventListener("click", function(){

    // 1 6 доторх санамсаргүй тоо гаргаж авах 

    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // шооны зураг вэб дээр гаргаж ирнэ

    diceDom.style.displey = "block";

    // буусан санамсаргүй тоонд харгалзах шооны зургийг ваб дээр гаргаж ирнэ  

    diceDom.src = 'dice-'+diceNumber+'.png';

    // тоглгчийн ээлжийн оноог өөрчилнө 

    if(diceNumber !== 1){

        roundScore = roundScore + diceNumber;
        document.getElementById('current-'+activePlayer).textContent = roundScore;

    }else{

        roundScore = 0;

        document.getElementById('current-'+activePlayer).textContent = 0;

        if(activePlayer === 0){

            activePlayer = 1; 

        }else{

            activePlayer = 0;
        }

        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");
        diceDom.style.displey = "none";
    }
});