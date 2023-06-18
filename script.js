document.getElementById("toggle").addEventListener("click", function() {
    var body = document.getElementsByTagName("body")[0];
    var lastName = document.getElementsByClassName("last-name")[0];
    var jobTitle = document.querySelector('.job-title');
    if (this.checked) {
      body.style.backgroundColor = "black";
      lastName.style.color = "white";
      jobTitle.style.color = "white";
    } else {
      body.style.backgroundColor = "white";
      lastName.style.color = "black";
      jobTitle.style.color = "blue"; //ou outra cor de sua escolha
    }
  });