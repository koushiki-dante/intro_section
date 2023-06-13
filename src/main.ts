export {};

function setDialog() {
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

function accordion(accordionRoot: HTMLDivElement) {
  const accordionTrigger = accordionRoot.querySelector(
    "[data-accordion-trigger]"
  );

  if (!accordionTrigger) {
    return;
  }

  accordionTrigger.addEventListener("click", () => {
    const accordionState = accordionRoot.getAttribute("data-accordion-state");

    if (accordionState === "closed") {
      accordionRoot.setAttribute("data-accordion-state", "open");
    } else if (accordionState === "open") {
      accordionRoot.setAttribute("data-accordion-state", "closed");
    }
  });
}

function setAccordions() {
  const accordionRoots = document.querySelectorAll("[data-accordion-root]");

  accordionRoots.forEach((root) => {
    if (!(root instanceof HTMLDivElement)) {
      return;
    }

    accordion(root);
  });
}

function main() {
  setDialog();
  setAccordions();
}

main();
