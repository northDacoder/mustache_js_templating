function renderExercise2() {
  var person = {
      fname: "Joe",
      lname: "Smith",
      cellnum: "07123 456789"
  };

  var template = '<h2>Exercise 2</h2><h3>{{fname}} {{lname}}</h3><p>Cell: {{cellnum}}</p>';
  var html = Mustache.render(template, person);

  document.getElementById("exerciseContent").innerHTML = html;

}

