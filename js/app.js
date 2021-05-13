const about = document.getElementById("about");
const aboutContent = document.getElementById("about-content");

about.addEventListener("click", () => {
  const about = new WinBox({
    title: "About me",
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#0a0");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
