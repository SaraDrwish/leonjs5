
///toggle spin

let geerr = document.querySelector(".togglesitting .geerr");
let setingbox = document.querySelector(".setingbox");



geerr.onclick = function(){
 this.classList.toggle("fa-spin");

 setingbox.classList.toggle("open");

//  document.querySelector(".setingbox").classList.toggle("open");
};

//لو عملت دا هيفضل يعمل توجل كل م ادوس ع اي حته في الناف دا
// setingbox.onclick= function(){
    // this.classList.toggle("open");
// };

// ------------



// ------------

let bgoptions = true;
let bginterval ;

//check if there is local storge random item

let bglocalitemoptions = localStorage.getItem("bglocalitemoptions");

    if(bglocalitemoptions !== null){

      //لان القيمة الي بتطلع استرنج فعشان نحولها لازم نعمل شرط تاني
        //   console.log(bglocalitemoptions);
        //   console.log(typeof(bglocalitemoptions));

          if(bglocalitemoptions === "true"){
            bgoptions = true ;
          }else{
            bgoptions = false ;
          }

          document.querySelectorAll(".randbackgr span").forEach(el=>{
             el.classList.remove("activ");
           
        });

        if(bglocalitemoptions === "true"){
            document.querySelector(".randbackgr .yes").classList.add("activ");
        }else{
            document.querySelector(".randbackgr .no").classList.add("activ");
        }

    } 

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

//switch random bg option
const randbackgr = document.querySelectorAll(".randbackgr span");
//loop on all spans
randbackgr.forEach( span =>{
//check every span
    span.addEventListener("click", (e)=>{
            //remove active class from all spans
//           e.target.parentElement.querySelectorAll(".activ").forEach( (el)=>{
//               el.classList.remove("activ");
//           });
//          //add activ to target class          
//           e.target.classList.add("activ");
            handelAcriv(e);
            if(e.target.dataset.bg === 'yes'){
                // randomizimgs();
                    bgoptions = true;
                    randomizimgs();
                    localStorage.setItem("bglocalitemoptions" , true);

            }else {
                
                    bgoptions = false;
                    clearInterval(bginterval);
                    localStorage.setItem("bglocalitemoptions" , false);

            }

    });
});

// -------------



// --------------

//must be glopal
// let bgoptions= "ture";
// let bginterval ;

function randomizimgs(){

   if(bgoptions === true){

    let landing = document.querySelector(".landing");

    let imgArray = ["XIx9yfP.jpg","284467.jpg","wp2656336.jpg","21.jpg"];

        bginterval = setInterval(()=>{
        
                for(let i =0 ; i<= imgArray.length ; i++){
                    let randomimg = Math.floor(Math.random() * imgArray.length );
                    landing.style.backgroundImage='url("img/'+ imgArray[randomimg]+'")';
                }
        }
,3000
);

   }

}

randomizimgs();

//---------------



// ----------------------

let skills = document.querySelector(".skills");

window.onscroll = function(){

    let skilloffsettop = skills.offsetTop;

    let skilloffsethight = skills.offsetHeight;

    let windowhight = this.innerHeight;

    let windoscrolltop = this.pageYOffset;

    console.log(windowhight , skilloffsethight , skilloffsettop);


        if( windoscrolltop > ( ( skilloffsettop + skilloffsethight ) - windowhight ) ){
            
              let allskills = document.querySelectorAll(".skillsbox .skillprogg span").forEach( skillspan =>{

                skillspan.style.width = skillspan.dataset.prog;
                
            });
            
        }


}


// ------------------------------


let gallimg = document.querySelectorAll(".gallary  img");

gallimg.forEach( img =>{

    img.addEventListener("click" , (e) => {

        // creat pupap overlay
        let popoverly = document.createElement("div");
        popoverly.className = "pop-overlay" ;
        document.body.appendChild(popoverly);

        let popimgbox = document.createElement("div");
        popimgbox.className = "pop-img-box";

       if( img.alt !== null){

            let imgtitle = document.createElement("h3");

            let imgtext = document.createTextNode(img.alt);

            imgtitle.appendChild(imgtext);

            popimgbox.appendChild(imgtitle);

          }

        let popimg = document.createElement("img");

        popimg.src = img.src;

        popimgbox.appendChild(popimg);

        document.body.appendChild(popimgbox);

        let closepotn = document.createElement("span");
        closepotn.className = "closebtn";
        let textclosebtn = document.createTextNode("X");
        closepotn.appendChild(textclosebtn);
        popimgbox.appendChild(closepotn);

    });

});

document.addEventListener("click", function(e){
    
    if(e.target.className == "closebtn"){
        e.target.parentNode.remove();

        document.querySelector(".pop-overlay").remove();

    }

});


// ----------------------------------------------------------------------bullets
const bullets = document.querySelectorAll(".nav-bullets .bullets");
//     bullets.forEach( bul=>{
//          bul.addEventListener( "click" , (e) =>{
//             // console.log(e.target.dataset.section);
//             document.querySelector(e.target.dataset.section).scrollIntoView({
//                 behavior: "smooth"
//             });
//          });
//     } );
// // ---------------------------------------------------------------------------------
const links = document.querySelectorAll(".header-area .nav  a ");
//      links.forEach( nv=>{
//          nv.addEventListener( "click" , (e) =>{
//             // console.log(e.target.dataset.section);
//             e.preventDefault();
//             document.querySelector(e.target.dataset.section).scrollIntoView({
//                 behavior: "smooth"
//             });

//          });

//     } );
// // ----------------------------------------------------------------------------------
function scrollFunctionsInSite(elements){
    elements.forEach( el=>{
        el.addEventListener( "click" , (e) =>{
           // console.log(e.target.dataset.section);
           e.preventDefault();
           document.querySelector(e.target.dataset.section).scrollIntoView({
               behavior: "smooth"
           });
        });
   } );

}

 scrollFunctionsInSite(bullets);
 scrollFunctionsInSite(links);

// --------------------------------------------------------------------------------------


//handel ac]tive state 

function handelAcriv(ev){
  ev.target.parentElement.querySelectorAll(".activ").forEach(elem =>{
    elem.classList.remove("activ");
  });
  ev.target.classList.add("activ");

}

// ----------------------------------------------------------------------------------

let bulletSpans = document.querySelectorAll(".bulletsoptions span");
let navbullets = document.querySelector(".nav-bullets");
let bulletsOptionsStorg = localStorage.getItem("bulletsOptionsStorg");

if(bulletsOptionsStorg !== null){
    bulletSpans.forEach(span =>{
        span.classList.remove("activ");
    });
    if(bulletsOptionsStorg === 'none'){
        navbullets.style.display="none";
        document.querySelector(".bulletsoptions .no").classList.add("activ");
    }else{
        navbullets.style.display = "block";
        document.querySelector(".bulletsoptions .yes").classList.add("activ");
    }
}

   bulletSpans.forEach(spa =>{

        spa.addEventListener("click" , (el) => {

            if(spa.dataset.options === "hide"){
                navbullets.style.display="none";
                localStorage.setItem("bulletsOptionsStorg" , 'none');
            }else{
                navbullets.style.display = "block";
                localStorage.setItem("bulletsOptionsStorg" , 'block');
            }

            handelAcriv(el);

        });
  
   });

//    ----------------------------------------------------------------------------

let resetOptions = document.querySelector(".reset-site-options");

resetOptions.onclick = function(){

    // localStorage.clear();
    localStorage.removeItem("bglocalitemoptions");
    localStorage.removeItem("coloroptions");
    localStorage.removeItem("bulletsOptionsStorg");

    window.location.reload();

};

// --------------------------------------------------------------------------------