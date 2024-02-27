const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const mobileModalBtnOpen = document.querySelector(".mobile-modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
mobileModalBtnOpen.addEventListener("click", toggleModal);

const form = document.getElementById("form");
form.addEventListener("submit", formSend);

async function formSend(event) {
  event.preventDefault();

  let error = formValidate(form);

  let formData = new FormData(form);

  if (error === 0) {
    form.classList.add("_sending");
    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
      form.classList.remove("_sending");
    } else {
      alert("Стався збій при відправці даних. Будь ласка, повторіть спробу.");
      form.classList.remove("_sending");
    }
  } else {
    alert("Введіть дані в форму");
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll("._req");

  for (let i = 0; i < formReq.length; i++) {
    const input = formReq[i];
    formRemoveError(input);

    if (input.classList.contains("_email")) {
      if (emailTest(input)) {
        formAddError(input);
        error++;
      }
    } else if (input.value === "") {
      formAddError(input);
      error++;
    }
  }
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
}

function formRemoveError(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
