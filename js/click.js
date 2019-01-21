function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello!") {
    x.innerHTML = "I am Ikhda Muhammad Wildani";
  } else if (x.innerHTML === "I am Ikhda Muhammad Wildani") {
      x.innerHTML = 'And this is my resume';
  } else {
    x.innerHTML = "Hello!";
  }
}