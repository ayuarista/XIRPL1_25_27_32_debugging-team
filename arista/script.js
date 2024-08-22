document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });

  document
    .querySelector(".card-wrapper")
    .addEventListener("click", function (e) {
      const target = e.target.closest("a");

      if (target) {
        e.preventDefault();
        const targetID = target.getAttribute("href").substring(1);

        document.querySelectorAll("section").forEach((section) => {
          section.style.display = "none";
        });

        document.getElementById(targetID).style.display = "block";
      }
    });
});
