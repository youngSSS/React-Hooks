// Hookless
// But, helpful to functional programming

export const usePreventLeave = () => {
  const listner = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listner);
  const disablePrevent = () => window.addEventListener("beforeunload", listner);
  return { enablePrevent, disablePrevent };
};