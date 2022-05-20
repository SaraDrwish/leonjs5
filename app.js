
let landing = document.querySelector(".landing");

let imgArray = ["XIx9yfP.jpg","284467.jpg","wp2656336.jpg","21.jpg"];

setInterval(()=>{
   
for(let i =0 ; i<= imgArray.length ; i++){
    let randomimg = Math.floor(Math.random() * imgArray.length );
    landing.style.backgroundImage='url("img/'+ imgArray[randomimg]+'")';
   }
}
,5000
);

