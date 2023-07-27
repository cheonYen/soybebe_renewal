//[헤더] 1. 스크롤 시 헤더요소 색상 변경//////////////////////
/**
 * 1) 헤더 요소를 #fff로 바꾸기
 * 2) 헤더 요소를 메인컬러로 바꾸기
 * 3) 화면 769px 이상 1050px 이하일 때
 *    3-1) 특정 스크롤값일 때 #fff로 변경
 * 4) 화면 768px 이하일 때
 *    4-1) 스크롤 이벤트 X. 메인컬러로 유지
*/
window.addEventListener('scroll', function(){
  if(mediaViewWidth.matches < mediaViewWidth1050.matches == true){ //3)
    if(window.scrollY > 80){
      ChangeWhiteColor(); //1)
    } else{
      ChangeMainColor(); //2)
    }
  } else if(mediaViewWidth.matches == true){ //4)
    ChangeMainColor(); //2)
  } else{
    if(window.scrollY > 80){
      headerLogo.src = 'img/logo-white.svg'; //1)   
    } else{
      headerLogo.src = 'img/logo-mainColor.svg'; //2)
    }
  }
});

/**
 * ChangeMainColor
 * : 헤더 요소[로고, 트리거] 색상을 soyBlue로 변경
 * 1) 헤더 로고를 메인컬러로 바꾸기
 * 2) 트리거를 메인컬러로 바꾸기
*/
function ChangeMainColor(){
  let triggerSpan = trigger.querySelectorAll('span');
  headerLogo.src = 'img/logo-mainColor.svg'; //1)
  for(let i = 0; i < triggerSpan.length; i++){
    triggerSpan[i].style.backgroundColor = 'var(--soyBlue)'; //2)
  }
}
/**
 * ChangeWhiteColor
 * : 헤더 요소[로고, 트리거] 색상을 #fff로 변경
 * 1) 헤더 로고를 #fff로 바꾸기
 * 2) 트리거를 #fff로 바꾸기
*/
function ChangeWhiteColor(){
  let triggerSpan = trigger.querySelectorAll('span');
  headerLogo.src = 'img/logo-white.svg'; //1)   
  for(let i = 0; i < triggerSpan.length; i++){
    triggerSpan[i].style.backgroundColor = '#fff'; //2)
  }
}


//[메인비주얼] 스크롤 시 라운드값 변경//////////////////////
/**
 * 1) 특정 스크롤 값 이상이면 메인비주얼 라운드 클래스 추가
 * 2) 특정 스크롤 값 이하이면 메인비주얼 라운드 클래스 삭제
*/
let mainVisual = document.querySelector('.mainVisual'),
    productLi = document.querySelector('.product:nth-child(1) a');

function mainVisualScrollEvent(){
  if(window.scrollY > 100){
    mainVisual.classList.add('round'); //1)
  } else{ 
    mainVisual.classList.remove('round'); //2)
  }
}

window.addEventListener('scroll', function(){
  mainVisualScrollEvent();
  console.log(window.scrollY);
  //1) 768px 이하 ******
  if(mediaViewWidth.matches == true){
    if(window.scrollY > 90){
      productLi.classList.add('invisible');
    } else{ 
      productLi.classList.remove('invisible');
    }
  }
  //1)**********************************
  //2) 769px 이상 1050px 이하 ******
  else if(mediaViewWidth.matches < mediaViewWidth1050.matches == true){
    if(window.scrollY > 140){
      productLi.classList.add('invisible');
    } else{ 
      productLi.classList.remove('invisible');
    }
  } 
  //2)**********************************
})