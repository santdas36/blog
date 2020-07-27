function cl() {
  var d = new Date(), h = d.getHours(), m = d.getMinutes(), s = d.getSeconds(),  tm="", dy = d.getDay(), mo = d.getMonth(), dt = d.getDate(), yr = d.getFullYear();
  var week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  if (h>12) { h-=12; tm="pm";} else {tm="am";};
  if (h<10) { h="0"+h};
  if (m<10) { m="0"+m};
  if (s<10) { s="0"+s};
  document.getElementById("init").innerHTML="[ By SantDas ]";
  function pt(name,value)
  {
  document.getElementById(name).innerHTML = value;
  }
  pt("hh",h);
  pt("mm",m);
  pt("ss",s);
  pt("pm",tm);
  pt("dy",week[dy]);
  pt("date",dt+", "+month[mo]+" "+yr);
};
setTimeout(function(){setInterval(cl,1000)},3000);


  var bgcol = ["#8D00D1","#008FFF","#FFFE0F","#FF0090","#151515","#fff"];
  var txtcol = ["#FFFE06","#FFFFFF","#734200","#00C4FF","#fff","#151515"]
  var i=0;
  function theme() {
  document.body.style.setProperty("background-color",bgcol[i]);
  document.body.style.setProperty("color",txtcol[i]);
  document.body.style.setProperty("text-shadow","#333 1px 1px 2px");
  i+=1;
  if (i==bgcol.length){i=0;};  
};
function dk() {
  document.body.style.setProperty("background-color","#202020");
  document.body.style.setProperty("color","#fff");
};
function wt() {
  document.body.style.setProperty("background-color","#fff");
  document.body.style.setProperty("color","#333");
  document.body.style.setProperty("text-shadow","#999 1px 1px 1px");
};
function dq() {
  document.body.classList.add("wp");
  var clock=document.getElementById("clock");
  clock.classList.add("hide"); 
  setTimeout(function(){clock.style.setProperty("display","none")},500);
  var inf = document.getElementById("info");
  setTimeout(function(){inf.style.setProperty("visibility","visible");inf.classList.add("show");inf.classList.remove("hide");},550);
};
function back() {
  document.body.classList.remove("wp");
  var inf = document.getElementById("info");
  inf.classList.remove("show");
  inf.classList.add("hide");
  var clock=document.getElementById("clock");
  clock.classList.remove("hide");
  setTimeout(function(){inf.style.setProperty("visibility","hidden");clock.style.setProperty("display","flex");},550); 
};