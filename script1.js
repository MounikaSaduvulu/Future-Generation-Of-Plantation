function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
var mybutton=document.getElementById("button");
window.onscroll=function()
{
  scrollFunction()
}
function scrollFunction(){

  if(document.body.scrollTop>10||document.documentElement.scrollTop>10)
{

   mybutton.style.display="block";

 }
else{
   mybutton.style.display="none";
 }

}
function lokesh(){
  document.body.scrollTop=30;
  document.documentElement.scrollTop=30;

}