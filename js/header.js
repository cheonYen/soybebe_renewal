//[변수] header ///////////////////////////////////////
let header = document.querySelector('.header'),
    menu = header.querySelector('.menu'),
    trigger = header.querySelector('.trigger'),
    wrap = document.querySelector('.wrap'),
    backDropBg = wrap.querySelector('.backDrop');

//console.log(header, menu, trigger, wrap);

/****************************************************
 * 풀이가 필요한 점
 * addEventListener()는 왜 getElementsBy~ 로 지정된 변수 사용 시 오류가 발생하는지?
 * 쿼리셀렉터는 잘 된다.
****************************************************/

//반응형 햄버거 버튼 활성화//////////////////////////
/****************************************************
 * 1) 햄버거 버튼에 active 클래스 추가
 * 2) 헤더에 active 클래스 추가
 * 3) 메뉴에 open 클래스 추가
 * 4) wrap에 filter 클래스 추가
 * 5) 로고 색상 변화
 */
trigger.addEventListener('click', function(){
  if(!this.classList.contains('active')){
    trigger.classList.add('active'); //1)
    header.classList.add('active'); //2)
    menu.classList.add('open'); //3) 
    wrap.classList.add('filter'); //4)
  } else{
    removeClass();
  }
  changeLogo(); //5)
})

//메뉴 영역 외 클릭 시 메뉴 닫힘//////////////////////
backDropBg.addEventListener('click', function(){
    removeClass();
    changeLogo();
})

/**
 * removeClass
 * 1) 추가된 클래스 삭제
*/
function removeClass(){
  trigger.classList.remove('active');
  header.classList.remove('active');
  menu.classList.remove('open');
  wrap.classList.remove('filter');
}

/** 
 * changeLogo
 * 1) 헤더에 active가 있다면 로고를 화이트로 바꾸기
 * 2) 헤더에 active가 없으면 로고를 메인컬러로 바꾸기
*/
let headerLogo = header.querySelector('.logo a img');
function changeLogo(){
  if (header.classList.contains('active')){ //1)
    headerLogo.src = '../img/logo-white.svg';
  } else{ //2)
    headerLogo.src = '../img/logo-mainColor.svg';
  }
}


/**
 * 1) 브라우저의 사이즈가 바뀌면
 * 2) 햄버거 메뉴 닫기
 * 3) 로고 색상 변경
 */
window.addEventListener('resize', function(){
  if(trigger.classList.contains('active')){
    removeClass(); //2)
    changeLogo(); //3)
  }
})

//반응형을 위한 변수 지정//////////////////////////////////////////
let mediaViewWidth = window.matchMedia('(max-width: 768px)'),
    mediaViewWidth1050 = window.matchMedia('(max-width: 1050px)');