 $(document).ready(function () {
            $('.slider').slick({
                slidesToShow: 5,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1500
            });
        });
 $(document).ready(function () {
            $('.slider2').slick({
                slidesToShow: 5,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1200
            });
        });
$(document).ready(function () {
            $('.gt').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 500
            });
        });
         $(document).ready(function () {
            $('.gt2').slick({
                slidesToShow: 7,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 500
            });
        });
function user(){
    let user = document.getElementById("user_con");
    if(user.style.display=="none"|| user.style.display==""){
        user.style.display="block";
    }else{
         user.style.display="none";
    }
}
const gioiThieu = document.getElementById("gioiThieu");
const trailer = document.getElementById("trailer");
const xem = document.getElementById("xem");

let dangMo = false;
gioiThieu.onclick= function(){
   if(!dangMo){
    trailer.innerHTML = 
        `<iframe width="450" height="200" src="https://www.youtube.com/embed/2Ox6aYmhxvw?si=UhPlvA6ZLEw1fxR6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    dangMo=true;
    }else{
       trailer.innerHTML = "";
        dangMo = false;
   }
}
xem.onclick=function(){
    window.open("https://youtu.be/2Ox6aYmhxvw?si=pDxLX7joHOERTwrl", "_blank","width=1200, height=600, top=100, left=150");
}

const menucon = document.querySelector("#menucon");
const menu_menucon = document.querySelector("#menu-menucon");
menucon.onclick = function(){
     menu_menucon .classList.toggle("show");
}


const addthem= document.querySelector("#addthem");
const add = document.querySelector(".addmovie");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
const xoa_pm = document.querySelector("#xoa_pm");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
addthem.onclick = function(){
    add.classList.add("show2");
}

xoa_pm.onclick = function(){
    add.classList.remove("show2");
}
const them = document.querySelector("#them");
const listMovie = document.querySelector("#listMovie");

them.onclick = function(){
    const nameMovie = document.querySelector("#nameMovie").value;
    const poster = document.querySelector("#poster").value;
    
    const col = document.createElement("div");
col.className = "col-xl-3";

     // tạo div
    const div = document.createElement("div");

    div.className="item";

    const img = document.createElement("img");

    img.src=poster;

    const p=document.createElement("div");

    p.innerHTML=nameMovie;

        // Tạo nút Xóa
    const btnXoa = document.createElement("button");
    btnXoa.innerText = "X";
    btnXoa.className="btn";

    // Khi bấm nút Xóa
    btnXoa.onclick = function(){
        let check = confirm("Bạn có chắc chắn muốn xóa phim này không?");
         if(check){
             btn.closest(".itemcha").remove();
         }
        
    }
   
  div.appendChild(img);
div.appendChild(p);

col.appendChild(div);
div.appendChild(btnXoa);
listMovie.appendChild(col);
}

const btns = document.querySelectorAll(".btn");
const xoa = document.querySelectorAll(".itemcha");
btns.forEach(function(btn){
    btn.onclick = function(){
         let check = confirm("Bạn có chắc chắn muốn xóa phim này không?");
         if(check){
             btn.closest(".itemcha").remove();
         }
        
    }
});



