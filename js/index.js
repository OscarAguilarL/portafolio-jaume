const $form = document.querySelector("#form");
const $buttonMailTo = document.querySelector("#sendMail");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  let str = `mailto:aguilop.oscar@gmail.com?subject=${form.get(
    "name"
  )} - (${form.get("email")})&body=${form.get("message")}`;
  $buttonMailTo.setAttribute("href", str);
  $buttonMailTo.click();
}
