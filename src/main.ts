export {};

function main() {
  const dialog = document.querySelector(
    "[navigation-dialog]"
  ) as HTMLDialogElement;
  const dialogOpenTrigger = document.querySelector(
    "[dialog-open-trigger]"
  ) as HTMLButtonElement;
  const dialogCloseTrigger = document.querySelector(
    "[dialog-close-trigger]"
  ) as HTMLButtonElement;

  dialogOpenTrigger.addEventListener("click", () => {
    dialog.showModal();
    dialogOpenTrigger.setAttribute("aria-expanded", "true");
  });

  dialogCloseTrigger.addEventListener("click", () => {
    dialog.close();
    dialogOpenTrigger.setAttribute("aria-expanded", "false");
  });
}

main();
