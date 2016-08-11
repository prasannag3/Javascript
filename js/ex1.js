var a = {
  status : "Ready",
   abc : function() {
      document.write("Inside the ananymous function");
      }
}

/*if(a.status == "Ready")
{
  a.abc();
}

var utilities = {
    PrintAll : function(Obj){
      for(i in Obj){
        document.write("<br />" + Obj[i]);
      }
    }
}

utilities.PrintAll(a);*/

var content = {
  id :64,
  name : "content name",
  faction : {
    factionId : 32,
    name : "Faction name",
    notification: function(){
      document.write("Inside the notification Function ..! ");
    }
  },
  cities : [
    { LocId:601, name : "TPT"},
    { LocId:14, name : "Vellore"},
    { LocId:48, name : "Chennai"}
  ]
};
//content.faction.notification();
//document.write(content.cities[1].LocId);
/*
for(i in content){
  document.write("<br>" + i + "-->" +content[i]);
}
*/

function car(make,model,year)
{
  this.make = make;
  this.model = model;
  this.year = year;
}
var myCar = new car("Audi", "A4", 1995);
var myCar1 = new car("BMW", "X1", 1998);
alert(myCar.make);
alert(myCar1.make);
