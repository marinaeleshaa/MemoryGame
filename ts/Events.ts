export function attachEvent(
  element: HTMLButtonElement | null,
  eventName: string,
  action :()=> void
) {
  element?.addEventListener(eventName, (event) => {
    action();
  });
}
