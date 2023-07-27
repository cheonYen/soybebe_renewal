//[변수] FAQ ///////////////////////////////////////
let tabWrap = document.querySelector('.tabWrap'),
    tabMenu = tabWrap.querySelector('.tabMenu'), //ul.tabMenu
    tabMenuLi = tabMenu.querySelectorAll('.tabMenu li'),
    tabActiveBg = tabMenu.querySelector('.activeTab'), //움직일 탭 배경
    faqWrap = document.querySelector('.faqWrap'), //각 케어라인 질답리스트(ul)을 감싸고 있는 부모 요소
    faqList = faqWrap.querySelectorAll('.faqWrap ul'), //질답리스트[모이스처, 선, 라이프]
    faqListLi = faqWrap.querySelectorAll('.faqWrap ul li');

//console.log(tabWrap, tabMenu, tabMenuLi, tabActiveBg);
//console.log(tabMenuLi.length - 1);
//console.log('질문리스트: ' + faqList.length);

//[실행문] FAQ 질문 여닫기//////////////////////////////////////
let quest = faqWrap.querySelectorAll('.question'),
    answer = faqWrap.querySelectorAll('.answer');

/**
 * [for] 질문 클릭 이벤트: 답변 여닫기
*/
for(let i = 0; i < quest.length; i++){
  quest[i].addEventListener('click', function(){
    if(this.classList.contains('open')){
      this.classList.remove('open');
      this.nextElementSibling.classList.remove('open');
    }else{
      closeAll();
      this.classList.add('open');
      answer[i].classList.add('open');
    }
  })
}
/**
 * [function] closeAll 질문 모두 닫기
*/
function closeAll(){
  for(let a = 0; a < quest.length; a++){
    quest[a].classList.remove('open');
    answer[a].classList.remove('open');
  }
}


//[for] 탭메뉴 클릭 이벤트///////////////////////////////////////
for (let b = 0; b < tabMenuLi.length - 1; b++){
  tabMenuLi[b].addEventListener('click', function(e){
    e.preventDefault();
    activeTab(b);
    showFaq(b);
  });
}

/**
 * activeTab
 * 1) 클릭된 메뉴의 왼쪽 값에 맞춰 배경 이동시키기
 * 2) 클릭 메뉴 active 클래스 추가 
 * 3) 비클릭 메뉴 active 클래스 없애기
*/
function activeTab(num){
  moveActiveBg(num); //1)
  for(let c = 0; c < tabMenuLi.length; c++){
    tabMenuLi[c].classList.remove('active'); //3)
  }
  tabMenuLi[num].classList.add('active'); //2) 
}
/**
 * moveActiveBg
 * 1) 변수: [num]번째 탭메뉴의 left값 불러오기
 * 2) [num]번째 탭메뉴의 왼쪽 값에 맞춰 배경 이동시키기
*/
function moveActiveBg(num){
  let tabLeft = tabMenuLi[num].offsetLeft; //1)
  tabActiveBg.style.left = tabLeft + 'px'; //2)
}
/**
 * activeBgRespon
 * 1) 브라우저의 사이즈가 바뀔 때마다 
 * 2) 탭메뉴.active의 left값을 맞춰 tabActiveBg가 자동으로 따라올 수 있도록 하기
*/
function activeBgRespon(num){
  for(let d = 0; d < tabMenuLi.length; d++){
    if(tabMenuLi[d].classList.contains('active')){
      moveActiveBg(d); //2)
    }
  }
}
window.addEventListener('resize', activeBgRespon); //1)


/**
 * showFaq 질문 탭 활성화
 * 1) 비활성화된 질답리스트는 비가시화
 * 2) 탭한 메뉴의 질답리스트는 가시화
 * 3) 비활성화된 질답은 모두 닫힌다.
 */
function showFaq(num){
  faqList.forEach(function(item){
    item.style.display = 'none'; //1)
    closeAll(); //3)
  });
  faqList[num].style.display = 'block'; //2)
}
