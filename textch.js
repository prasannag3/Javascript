$(function(){
$("#title").text("Text changed by Jquery");
$("#first").html("Text modified");
$("#first").prepend("<h2>Text changed by prepend</h2>");
$("#first").append("<h2>Text changed by append</h2>");

//$("#second").addClass("highlight");

//$('p,.l').addClass("highlight");

//$('li:contains("three")').prev().addClass("highlight");
//$('li:contains("three")').next().addClass("highlight");
//$('li:contains("three")').siblings().addClass("highlight");
//$('li:contains("three")').parent().addClass("highlight");

//$('p[id!="second"]').addClass("highlight");
$('p').not('[id="second"]').addClass("highlight");

}
);
