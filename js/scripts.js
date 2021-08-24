//Business
function Ticket (movie, time, age) {
  this.movie = movie;
  this.time =  time;
  this.age = age;
  this.cost = 5.00;
}

Ticket.prototype.movieTime = function () {
  if (this.time >= 17) {
    this.cost += 2.50;
  }
};

Ticket.prototype.movieType = function () {
  if (this.movie === "spy") {
    this.cost += 2.00;
  } else if (this.movie === "horror") {
    this.cost += 4.00;
  }
};

Ticket.prototype.viewerAge = function () {
  if (this.age <= 12 || this.age >= 65) {
    this.cost -= 1.50;
  }
};

// UI logic

$(document).ready(function() {
  $("#ticket").submit(function(event) {
    event.preventDefault();
    const inputtedMovie = $("select#movie").val();
    const inputtedTime = parseFloat($("select#time").val());
    const inputtedAge = parseFloat($("input#age").val());
    let ticket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    ticket.movieTime();
    ticket.movieType();
    ticket.viewerAge();
    console.log(ticket);
    $("#ticket-price").html("Your ticket is $" + ticket.cost.toFixed(2));
  });
});