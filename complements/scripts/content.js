const Mod_from_LocStor = localStorage.getItem("Module");
let Points = 0;

if (Mod_from_LocStor == null) {
  localStorage.setItem("Module", 1);
  location.reload();
}

const modules = Array.from(document.querySelectorAll(".container_func"));
const container_module_btns = document.querySelector(".container_module_btns");
const btnActive = document.querySelector(
  `[data-module='container_mod${Mod_from_LocStor}']`
);

openModule(btnActive);
function openModule(btn) {
  const module_actual = localStorage.getItem("Module");

  const btnBrothers = Array.from(btn.parentElement.children);

  btnBrothers.map((brother) => {
    brother.classList.remove("user");
    btn.classList.add("user");

    parseInt(brother.id) <= module_actual
      ? brother.classList.add("active_mod")
      : brother.classList.remove("active_mod");
  });

  const target = btn.getAttribute("data-module");

  modules.map((module) => {
    module.id == target
      ? module.classList.remove("hidden")
      : module.classList.add("hidden");
  });
}

const modules_active = Array.from(
  document.getElementsByClassName("active_mod")
);
const btns = document.querySelector(".buttons").children;
const last_module = modules_active[modules_active.length - 1];
const module_user = parseInt(last_module.id) + 1;

function checkAll() {
  const Points_from_LocStor = localStorage.getItem("Points", Points);

  if (Points_from_LocStor >= 3) {
    next_module()
  } else {
    localStorage.setItem("Points", "0");
    window.scrollTo(0, 0);
    document.querySelector(".danger").classList.remove("hidden");
  }
}

function next_module(){
    localStorage.setItem("Module", module_user);
    localStorage.setItem("Points", "0");
    window.scrollTo(0, 0);
    document.querySelector(".congratulations").classList.remove("hidden");
}

inative_btns_finish()
function  inative_btns_finish() {
const btn_finish = Array.from(document.querySelectorAll(".finish"));

btn_finish.map((item) => {
  const father_btn_finish = item.parentElement;

  if (father_btn_finish.id < module_user) {
    father_btn_finish.classList.add("form_inative");
  }
});
}

function to_certify() {
  const Points_from_LocStor = localStorage.getItem("Points", Points);
  if (Points_from_LocStor >= 3) {
    window.open("https://forms.gle/oFQHoJEA2MSCaUf38", '_blank')
  } else {
    localStorage.setItem("Points", "0");
    location.reload();
    document.querySelector(".danger").classList.remove("hidden");
    inative_btns_finish()
  }
}

const forms = Array.from(document.querySelectorAll(".form"));

Classfy();
function Classfy() {
  forms.map((form) => {
    form.id < Mod_from_LocStor
      ? form.classList.add("form_inative")
      : form.classList.remove("form_inative");
  });
  const answers = Array.from(document.querySelectorAll(".div_answer"));
  answers.map((answer) => {
    answer.id < Mod_from_LocStor
      ? answer.classList.remove("hidden")
      : answer.classList.add("hidden");
  });
}

//label select
function avaliation_label(choice_label) {
  const options_label = Array.from(choice_label.parentElement.children);

  options_label.map((item) => {
    item.classList.remove("option_selected");
  });
  choice_label.classList.add("option_selected");
}

const label_selected = Array.from(document.querySelectorAll(".option"));
label_selected.map((label) => {
  label.onclick = (event) => avaliation_label(event.target);
});

// radio select
function check_question(choice_radio) {
  const brothers = Array.from(choice_radio.parentElement.children);
  brothers.map((brother) => {
    brother.checked = false;
  });
  choice_radio.checked = true;

  const btns_answer = Array.from(document.querySelectorAll(".send_answer"));

  //Feedback
  function feedback(btn) {
    const form = btn.parentElement;
    const form_sel = form.getAttribute("data-question");
    if (btn.id == form_sel) {
      form.classList.add("form_inative");
    }

    if (choice_radio.classList.contains("true")) {
      Points = Points + 1;
      localStorage.setItem("Points", Points);
      const correct_answer_question = form.querySelector(
        `.correct_answer${btn.id}`
      );
      correct_answer_question.classList.remove("hidden");
    } else {
      const wrong_answer_question = form.querySelector(
        `.wrong_answer${btn.id}`
      );
      wrong_answer_question.classList.remove("hidden");
    }
  }
  btns_answer.map((btn) => {
    btn.onclick = function () {
      feedback(btn);
    };
  });
}
//Declaration
const radios = Array.from(document.querySelectorAll(".input_option"));
radios.map((radio) => {
  radio.onclick = (event) => check_question(event.target);
});
