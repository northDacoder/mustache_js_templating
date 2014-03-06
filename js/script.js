function renderExercise1() {
  var person = {
      fname: "Mike",
      lname: "Smith",
      cellnum: "01234 56789"
  };

  var template = '<h2>Exercise 1</h2><h3>{{fname}} {{lname}}</h3><p>{{cellnum}}</p>';
  var html = Mustache.render(template, person);

  document.getElementById("exerciseContent").innerHTML = html;

}

