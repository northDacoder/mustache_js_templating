function renderExercise() {
  var person = {
      fname: "Mike",
      lname: "Smith",
      cellnum: "01234 56789"
  };

  var template = '<p>Hi {{fname}} {{lname}}</p>';
  var html = Mustache.render(template, person);

  document.getElementById("#exerciseContent").append(html);

}
