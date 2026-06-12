import "./styles.css";

const root = document.documentElement;

function updatePlaceholder() {
  const input = document.querySelector(".beta-form input");
  if (!input) return;
  input.placeholder =
    window.innerWidth < 640 ? input.dataset.mobilePlaceholder : input.dataset.desktopPlaceholder;
}

document.querySelector(".copy-button")?.addEventListener("click", async () => {
  await navigator.clipboard?.writeText("clara@gigi.co");
  root.dataset.copied = "true";
  window.setTimeout(() => {
    delete root.dataset.copied;
  }, 1100);
});

document.querySelector(".beta-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  if (input?.value) {
    event.currentTarget.dataset.sent = "true";
  }
});

window.addEventListener("resize", () => {
  updatePlaceholder();
});

updatePlaceholder();
