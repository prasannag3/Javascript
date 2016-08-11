window.onload = function(){
  //  var click = document.getElementById('submit');
    //click.onclick = runEx;
    var click = document.getElementById('submit').onclick=runEx;
}

function runEx()
{
//  alert("Running from runEx function");
  /*var ele = document.getElementById('sec').innerHTML = "Contents changed  by innerHTML";
  var m = document.getElementsByTagName('p');
  alert(m.length);
  //var ele1 = ele.nodeName;*/
  /*if(ele!=null)
  {
    alert(ele.innerHTML);
  }*/

  var anchor = document.getElementById('myAnchor');
  var dest = anchor.href;
  alert(dest);
  anchor.href="https://www.yahoo.com/";

}
