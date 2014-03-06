function renderExercise4() {
  var data = {
  	employees: [
      {
      	"name": "Fred Smith",
      	"skills": ["PHP", "MySQL", "Python"],
      	"cellnum": "07590 538686",
      	"email": "fred@smith.com"
      }
  	]
  }

var template = $("#exercise4-template").html();
var html = Mustache.render(template, data);
$("#exerciseContent").html(html);

}

