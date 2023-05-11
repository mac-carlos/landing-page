const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".btn-hover");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
  let addAnimation = false;
  if (element.classList[1] == "FLASH") {
    element.addEventListener("animationend", e => {
      element.classList.remove(ANIMATEDCLASSNAME);
    });
    addAnimation = true;
  }

  if (!ELEMENTS_SPAN[index])
    ELEMENTS_SPAN[index] = element.querySelector("span");

  element.addEventListener("mouseover", e => {
    ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
    ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

    if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
  });

  element.addEventListener("mouseout", e => {
    ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
    ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
  });
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function mascaraTelefone(event) {
  let tecla = event.key;
  let telefone = event.target.value.replace(/\D+/g, "");

  if (/^[0-9]$/i.test(tecla)) {
    telefone = telefone + tecla;
    let tamanho = telefone.length;

    if (tamanho >= 12) {
      return false;
    }

    if (tamanho > 10) {
      telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (tamanho > 5) {
      telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (tamanho > 2) {
      telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      telefone = telefone.replace(/^(\d*)/, "($1");
    }

    event.target.value = telefone;
  }

  if (!["Backspace", "Delete", "Tab"].includes(tecla)) {
    return false;
  }
}