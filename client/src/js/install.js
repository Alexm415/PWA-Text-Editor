const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visable";
  butInstall.addEventListener("click", async () => {
    event.prompt();
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed";
  });
});

// TODO: Implement a click event handler on the `butInstall` element

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("👍", "appinstalled", event);
});
