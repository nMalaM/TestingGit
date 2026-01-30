document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    document.getElementById("output").textContent = "Name cannot be empty!";
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").textContent = `Hello, ${name}!`;
    document.getElementById("output").style.color = "green";
  }
});
