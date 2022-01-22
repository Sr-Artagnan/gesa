
//Dinamic buttons

  const toggleContent = (button, content_target) => {
    let btnBrothers = Array.from(button.parentElement.children);
    let pBrothers = Array.from(document.querySelector(`.${content_target}`).parentElement.children)

    pBrothers.map(item => {
      item.classList.add('hidden');
    })

    document.querySelector(`.${content_target}`).classList.remove('hidden');


   btnBrothers.map(item => {
     item.classList.remove('active');
   })

    button.classList.add('active');
  }


  const dinamicButtons = Array.from(document.querySelectorAll('.dinamic-btn'));

  dinamicButtons.map(item => {
    item.onclick = (event) => toggleContent(event.target, event.target.getAttribute('data-target'));
  })


// Learn more 

function show_info(btn) {
  const target_btn = document.querySelector(`#${btn.getAttribute("data-lrn_mr")}`)
  target_btn.classList.toggle('hidden')
}


// answers

const see_answer = Array.from(document.querySelectorAll(".see_answer"))

see_answer.map ((btn) => {
  btn.onclick = (event) => show_answer(event.target.id)
})

function show_answer( data_btn) {
  const ans = document.querySelector(`.${data_btn}`)
  ans.classList.toggle("hidden")
}


// alerts

function close_danger() {
    
  const danger = document.querySelector(".danger")
  const congrat = document.querySelector(".congratulations")
  danger.classList.add("hidden")
  congrat.classList.add("hidden")

}