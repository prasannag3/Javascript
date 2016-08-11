var fs = require('fs');
//var arr = ["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
//for(var i=0;i<arr.length;i++){
//var data = fs.readFileSync("India2011.csv","utf-8");


var data = fs.readFileSync("India2011.csv");
var arrayOne= data.split("\n");
var header=arrayOne[0].split(",");
console.log(header);
var cnt_age = header.indexOf("Age-group");
var cnt_lit = header.indexOf("Literate - Persons");
var cnt_total = header.indexOf("Total/ Rural/ Urban");
var final_obj={};

for (var i = 1; i < arrayOne.length; i++) {
     var line=arrayOne[i].split(',');

  if(line[cnt_age] != "0-6" && line[cnt_age] != "All ages" && line[cnt_total] == "Total")
  {
    if(final_obj[line[cnt_age]]===undefined)
    {
      final_obj[line[cnt_age]]=parseInt(line[cnt_lit]);
    }

  else {

    final_obj[line[cnt_age]]+=parseInt(line[cnt_lit]);
    }
  }
}
var arr = [];
arr1 = Object.keys(final_obj);
//console.log(arr1.length);

for(i=0;i<arr1.length;i++)
{
  obj={};
  obj["Age-group"]=arr1[i];
  data = arr1[i];
  obj["Literates"] = obj[data];
  arr.push(obj);
}
//console.log(arr);
