// get layous/header.html
fetch("layouts/header.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("headerContent").innerHTML = data;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// get home.html
fetch("pages/home.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("homeContent").innerHTML = data;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// get about.html
fetch("pages/about.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("aboutContent").innerHTML = data;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

//get jennifer-home.html
fetch("pages/jennifer-home.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("jenniferHomeContent").innerHTML = data;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

//get how-to.html
fetch("pages/how-to.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("howToContent").innerHTML = data;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Event listener untuk gambar yg mengikuti cursor
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("mousemove", function (e) {
    var x = (e.clientX / window.innerWidth) * 100;
    var y = (e.clientY / window.innerHeight) * 100;
    var homeSection = document.querySelector(".home-section::after");
    if (homeSection) {
      homeSection.style.transform = `translate(-${x}px, -${y}px)`;
    }
  });
});
