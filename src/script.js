const letter = document.querySelector('#icon');
const text_8 = document.querySelector('#text_8');
const router_4 = document.querySelector('#router_4')
const info_5 = document.querySelector('#info_5');
const info_6 = document.querySelector('#info_6');
const click_me_2 = document.querySelector('#Click_me_2');
const infobit_4 = document.querySelector('#infobit_4');
const switch_2 = document.querySelector('#switch_2');
const router_4_with_infosign = document.querySelector('#router_4_with_infosign');
const switch_2_with_infosign = document.querySelector('#switch_2_with_infosign');
const click_me = document.querySelector('#click_me');
const pfeil1 = document.querySelector('#pfeil1');
const pfeil2 = document.querySelector('#pfeil2');
letter.addEventListener('click', move);
router_4_with_infosign.addEventListener('click', router_show);
switch_2_with_infosign.addEventListener('click', show_text);

//Functions

function move(event){
  event.preventDefault();
  letter.classList.add('move');
  text_8.classList.add('i_see_you');
}

function router_show(event){
  event.preventDefault();
  console.log('Hello');
  click_me.classList.add('turn_invisible');
  pfeil1.classList.add('turn_invisible'); 
  info_5.classList.add('i_see_you');
  click_me_2.classList.add('i_see_you');
  switch_2.classList.add('i_see_you');
  pfeil2.classList.add('i_see_you');
  infobit_4.classList.add('move_to_site'); 
}

function show_text(event){
  event.preventDefault();
  info_6.classList.add('i_see_you');
  pfeil2.classList.add('turn_invisible');
  click_me_2.classList.add('turn_invisible');
}

function scroll_to_end_of_site(){
  $('.slide').last().get(0).scrollIntoView();
}

