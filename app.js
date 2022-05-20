
///toggle spin

let geerr = document.querySelector(".togglesitting .geerr");
let setingbox = document.querySelector(".setingbox");

geerr.onclick = function(){
 this.classList.toggle("fa-spin");
//  document.querySelector(".setingbox").classList.toggle("open");
};

setingbox.onclick= function(){
    this.classList.toggle("open");
};
// ------------



// -----------

const colorslist = document.querySelectorAll(".settingcontainer .colorsoption ul li");

colorslist.forEach(li =>{

    li.addEventListener("click" , (e)=>{
        //   console.log(e.target.dataset.color);
          
          document.documentElement.style.setProperty( '--maincolor' ,  e.target.dataset.color);

    });

});

// -----------



// -----------------
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

//------------------

