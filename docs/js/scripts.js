const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--dev-page-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

window.addEventListener("resize", navigationDisplay);
function navigationDisplay() {
  if ($(window).width() < 992) {
    $("aside.tb-navbar").addClass("hide");
    $("aside.tb-navbar").removeClass("show");
  } else {
    if (localStorage.NavStatus == "0") {

    } else {
      $("aside.tb-navbar").addClass("show");
      $("aside.tb-navbar").removeClass("hide");
    }
  }
}

$(document).ready(function () {
  if ($(window).width() < 992) {
    $("aside.tb-navbar").addClass("hide");
    $("aside.tb-navbar").removeClass("show");
  } else {
    if (localStorage.NavStatus == "0") {
      $("aside.tb-navbar").addClass("hide");
      $("aside.tb-navbar").removeClass("show");
    } else {
    }
  }
});

$(document).on("click", ".navbar-toggler", function (e) {
  if ($("aside.tb-navbar").hasClass("show")) {
    $("aside.tb-navbar").addClass("hide");
    $("aside.tb-navbar").removeClass("show");
    localStorage.setItem("NavStatus", "0");
  } else {
    $("aside.tb-navbar").addClass("show");
    $("aside.tb-navbar").removeClass("hide");
    localStorage.setItem("NavStatus", "1");
  }
});

(function () {
  let lightSwitch = document.getElementById("lightSwitch");
  if (lightSwitch) {
    darkMode();
    lightSwitch.addEventListener("change", () => {
      lightMode();
    });
    function darkMode() {
      let isSelected =
        localStorage.getItem("lightSwitch") !== null &&
        localStorage.getItem("lightSwitch") === "dark";

      if (isSelected) {
        document.body.classList.add("tb-dark-mode");
        lightSwitch.checked = true;
      }
    }
    function lightMode() {
      if (lightSwitch.checked) {
        localStorage.setItem("lightSwitch", "dark");
        darkMode();
      } else {
        localStorage.removeItem("lightSwitch");
        document.body.classList.remove("tb-dark-mode");
      }
    }
  }
})();

(function () {
  let boxSwitch = document.getElementById("boxSwitch");
  if (boxSwitch) {
    initial();
    boxSwitch.addEventListener("change", () => {
      fluidMode();
    });
    function initial() {
      let isSelected =
        localStorage.getItem("boxSwitch") !== null &&
        localStorage.getItem("boxSwitch") === "box";
      if (isSelected) {
        boxSwitch.checked = true;
        $("body > .wrapper-fluid").addClass("wrapper");
        $("body > .wrapper").removeClass("wrapper-fluid");

        $("body > .container-fluid").addClass("container");
        $("body > .container").removeClass("container-fluid");
      } else {
        localStorage.setItem("boxSwitch", "fluid");
      }
    }
    function fluidMode() {
      let isSelected =
        localStorage.getItem("boxSwitch") !== null &&
        localStorage.getItem("boxSwitch") === "fluid";

      if (isSelected) {
        $("body > .wrapper-fluid").addClass("wrapper");
        $("body > .wrapper").removeClass("wrapper-fluid");

        $("body > .container-fluid").addClass("container");
        $("body > .container").removeClass("container-fluid");

        localStorage.setItem("boxSwitch", "box");
        boxSwitch.checked = true;
      } else {
        $("body > .wrapper").addClass("wrapper-fluid");
        $("body > .wrapper-fluid").removeClass("wrapper");

        $("body > .container").addClass("container-fluid");
        $("body > .container-fluid").removeClass("container");
        localStorage.setItem("boxSwitch", "fluid");
      }
    }
  }
})();
/*
fetch("_navigation.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("aside").innerHTML = data;
  })*/