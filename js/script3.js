function renderExercise3() {
  var person = {
      fname: "Joe",
      lname: "Smith",
      cellnum: "07123 456789",
      skills: ["PHP", "Python", "jQuery", "CSS"]
  };

  var template = $("#skillsText").html();
  var html = Mustache.render(template, person);

  document.getElementById("exerciseContent").innerHTML = html;

}

