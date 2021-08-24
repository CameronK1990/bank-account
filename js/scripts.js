//Business

function Account (amount) {
  this.amount = amount;
}

Account.prototype.deposit = function (add) {
  this.amount += add;
}

Account.prototype.withdraw = function (subtract) {
  this.amount -= subtract;
}

// UI logic
let userAccount = new Account(0)

$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();
    const initialAmount = parseFloat($("input#initial-amount").val());
    userAccount.deposit(initialAmount);
    $("#balance").html("Your balance is $" + userAccount.amount.toFixed(2));
    $("#new-account").hide();
    $("#accountmgmt").show();
  });
  $("#deposit").submit(function(event) {
    event.preventDefault();
    const add = parseFloat($("input#add").val());
    userAccount.deposit(add);
    $("#balance").html("Your balance is $" + userAccount.amount.toFixed(2));
  });
  $("#withdraw").submit(function(event) {
    event.preventDefault();
    const subtract = parseFloat($("input#subtract").val());
    userAccount.withdraw(subtract);
    $("#balance").html("Your balance is $" + userAccount.amount.toFixed(2));
  });
});