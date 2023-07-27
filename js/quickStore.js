//퀵메뉴 스크롤 이벤트//////////////////////
/**
 * 1) 스토어 바로가기 섹션이 화면 밖으로 넘어갈 때 퀵메뉴 가시화 
 * 2) 스토어 바로가기 섹션이 화면에서 보이면 퀵메뉴 비가시화
 * 3) 화면 768px 이하일 때
 */
let quickMenuWrap = document.querySelector('.quickMenuWrap');

window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  if(window.scrollY > 1000){
    quickMenuWrap.classList.add('visible');  //1)   
  } else{
    quickMenuWrap.classList.remove('visible'); //2)
  }
  if(mediaViewWidth.matches == true){ //3)
    if(window.scrollY > 900){
      quickMenuWrap.classList.add('visible');  //1)   
    } else{
      quickMenuWrap.classList.remove('visible'); //2)
    }
  } 
});