document.getElementById("donorForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("successMessage").classList.remove("d-none");
    this.reset();
  });
  