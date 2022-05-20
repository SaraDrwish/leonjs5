
let landing = document.querySelector(".landing");

let imgArray = ["XIx9yfP.jpg","284467.jpg","wp2656336.jpg","21.jpg"];

// let imgArray = ["1.jpg","2.jpg","3.jpg","4.jpg"];

// function ppp(randomimg){
//     let randomimg = Math.floor(Math.random()*4);
//     landing.style.backgroundImage = 'url("img/'+imgArray[randomimg]+'")';
// }

// for(let i = 0 ; i<imgArray.length ; i++){
//     let randomimg = Math.floor(Math.random()*imgArray[i]);
//     landing.style.backgroundImage='url("img/'+imgArray[randomimg]+'")';
// }

setInterval(()=>{
    // let randomimg = Math.floor(Math.random()*4);
    // landing.style.backgroundImage = randomimg ;
    // landing.style.backgroundImage='url("img/'+imgArray[randomimg]+'")';
for(let i = 1 ; i<=imgArray.length ; i++){
// console.log(imgArray[i]);
    let randomimg = Math.floor(Math.random()* imgArray[i] );
    landing.style.backgroundImage='url("img/'+ imgArray[randomimg]+'")';
}
    // let randomimg = Math.floor(Math.random()* imgArray * 4 );
    // landing.style.backgroundImage='url("img/'+imgArray[randomimg]+'")';
}
,1000
);

// setInterval(ppp(),100);