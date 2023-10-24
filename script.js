const dropdown = document.getElementById("dropdown");
      dropdown.addEventListener("change", function () {
        const selectedColor = dropdown.value;
        const colorMap = {
          Default: "#ffcc33",
          Grey: "#999999",
          Green: "#b3ffb3",
          Blue: "#6666ff",
        };
        const backgroundColor = colorMap[selectedColor];
        document.body.style.backgroundColor = backgroundColor;
      });
      function changeColorBox() {
        const textOfBackgroundColor = document.querySelector(
          ".textOfBackgroundColor"
        );
        if (window.innerWidth <= 768) {
          textOfBackgroundColor.textContent = "Choose";
        } else {
          textOfBackgroundColor.textContent = "Select a Color Theme";
        }
      }

      window.addEventListener("resize", changeColorBox);

      changeColorBox();

      const light = document.getElementById("light");

      document.addEventListener("mousemove", (e) => {
        const newX = e.clientX;
        const newY = e.clientY;
        light.style.transition = "all 0.09s linear";
        light.style.filter = "blur(5px)";
        light.style.backgroundColor = "white";
        light.style.opacity = 2;

        light.style.left = newX + "px";
        light.style.top = newY + "px";
      });
      const emailInput = document.getElementById("email");

      emailInput.addEventListener("input", function () {
        if (emailInput.validity.typeMismatch) {
          emailInput.setCustomValidity(
            "Please include an '@' in the email address."
          );
        } else {
          emailInput.setCustomValidity("");
        }
      });