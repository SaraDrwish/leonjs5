
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
// دا جديد عشان اللوكالستورج
let coloroptions = localStorage.getItem("coloroptions"); 
// not tha same in html its a new elem
if(coloroptions !== null){
//  console.log("no color");
document.documentElement.style.setProperty( '--maincolor' , localStorage.getItem("coloroptions") );
// document.documentElement.style.setProperty( '--maincolor' ,coloroptions );

// عشان الدويرة تفضل بعد م نعمل ريفرش للصفحة
 document.querySelectorAll(".boxoption li").forEach( (elm)=>{
    elm.classList.remove("act");
        if(elm.dataset.color === coloroptions ){
            elm.classList.add("act");
        }
   });
}
const colorslist = document.querySelectorAll(".settingcontainer .boxoption ul li");
colorslist.forEach(li =>{
    li.addEventListener("click" , (e)=>{
        //   console.log(e.target.dataset.color);
          document.documentElement.style.setProperty( '--maincolor' ,  e.target.dataset.color);
          // se color in local storg
          localStorage.setItem("coloroptions",e.target.dataset.color);
        //   remove active class from all chids

          e.target.parentElement.querySelectorAll(".act").forEach( (elm)=>{
              elm.classList.remove("act");
          });
          e.target.classList.add("act");
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

