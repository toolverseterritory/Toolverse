function comingSoon(tool){
    alert(tool + " feature is under development!");
}
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (!button.hasAttribute("onclick")) {
        alert("🚀 This tool will be available soon!");
      }
    });
  });
});
