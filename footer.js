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

    const buffer = 40;

    function handleScroll() {
      const footerRect = footer.getBoundingClientRect();
      const iconHeight = icon.offsetHeight;
      const distanceToFooter = window.innerHeight - footerRect.top;

      if (distanceToFooter > 0) {
        icon.style.bottom = `${distanceToFooter + buffer}px`;
      } else {
        // Default position
        icon.style.bottom = `${buffer}px`;
      }
    }
    window.addEventListener("scroll", handleScroll);

    handleScroll(); // Trigger once on load
  })
  .catch(err => console.error("Footer load error:", err));
