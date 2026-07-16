const snow=document.getElementById("snow");

for(let i=0;i<100;i++){

    const flake=document.createElement("div");

    flake.className="flake";

    let size=Math.random()*7+3;

    flake.style.width=size+"px";
    flake.style.height=size+"px";

    flake.style.left=Math.random()*100+"vw";

    flake.style.opacity=Math.random()*0.7+0.2;

    flake.style.filter="blur("+Math.random()*2+"px)";

    flake.style.animationDuration=Math.random()*6+6+"s";

    flake.style.animationDelay=Math.random()*6+"s";

    snow.appendChild(flake);

}


const login = document.getElementById("lg");
const formDN = document.getElementById("formLogin");
login.onclick = function(){
   formDN.classList.toggle("show");
   document.querySelector(".background").classList.toggle("zoom");


}
function dangNhap(){
   let user = document.getElementById("user").value;
   let pass = document.getElementById("pass").value;

   try {
      if(user !="admin") {
         setTimeout(()=>{
            document.getElementById("kq_login").innerHTML="Tên đăng nhập không hợp lệ"
         })
         
      }
      if(pass!="123456"){
          document.getElementById("kq_login").innerHTML="Pass đăng nhập không hợp lệ"
          return;
      }
      alert("Đăng nhập thành công");
      window.location.href="index.html";
   } catch (error) {
     document.getElementById("kq_login").innerHTML=error.message;
   }
}