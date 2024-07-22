// get layouts/header.html
fetch("/layouts/header.html")
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

// get layouts/footer.html
fetch("/layouts/footer.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("footerContent").innerHTML = data;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// get company/profile/section-1.html
fetch("/pages/company/profile/section-1.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("section-1Content").innerHTML = data;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// get company/profile/section-2.html
fetch("/pages/company/profile/section-2.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("section-2Content").innerHTML = data;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
