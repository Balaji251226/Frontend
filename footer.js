fetch("./footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer-container").innerHTML = html;

    const icon = document.querySelector(".whatsapp");
    const footer = document.querySelector("#footer");

    if (!icon || !footer) return;

    // Fixed by default
    icon.style.position = "fixed";
    icon.style.right = "20px";
    icon.style.transition = "bottom 0.3s ease";

    window.addEventListener("scroll", () => {
      const footerRect = footer.getBoundingClientRect();
      const iconHeight = icon.offsetHeight;
      const buffer = 40;

      // Distance from bottom of viewport to top of footer
      const distanceToFooter = window.innerHeight - footerRect.top;

      if (distanceToFooter > 0) {
        // Footer is overlapping or very close
        icon.style.bottom = `${distanceToFooter + buffer}px`;
      } else {
        // Default position
        icon.style.bottom = `${buffer}px`;
      }
    });
  })
  .catch(err => console.error("Footer load error:", err));
