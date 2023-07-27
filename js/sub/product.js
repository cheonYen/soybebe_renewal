//[breadCrumbs 영역] 클릭 이벤트 //////////////////////
/**
 * 1) 클릭한 요소에 open 클래스 추가
 * 2) 클릭한 요소 닫기
 * 3) 클래스 전부 삭제
*/
let breadCrumbs = document.querySelector('.breadCrumbs'),
    selectMenu = breadCrumbs.querySelectorAll('.selectMenu'),
    breadSubMenu = document.querySelectorAll('.subMenu');

if(mediaViewWidth.matches == false){
  for(let i = 0; i < selectMenu.length; i++){
    selectMenu[i].addEventListener('click', function(){
      if(selectMenu[i].classList.contains('open')){
        this.classList.remove('open'); //2)
      } else{
        closeBrdCrmMenu(); //3)
        this.classList.add('open'); //1)
      }
    });
  }
  function closeBrdCrmMenu(){ //3)
    for(let a = 0; a < selectMenu.length; a++){
      selectMenu[a].classList.remove('open');    
    };
  }
}


//[keypoint 영역] 클릭 이벤트 //////////////////////
/**
 * 1) 클릭한 요소에 focus 클래스 추가
 * 3) 클래스 전부 삭제
*/
let pointContainer = document.querySelector('.pointContainer'),
  pointLi = pointContainer.querySelectorAll('li');

for(let ii = 0; ii < pointLi.length; ii++){
  pointLi[ii].addEventListener('click', function(){
    closePointLi(); //2)
    if(!this.classList.contains('focus')){
      this.classList.add('focus'); //1)
    }
  });
}
function closePointLi(){ //2)
  for(let a = 0; a < pointLi.length; a++){
    pointLi[a].classList.remove('focus');
  }
}


//스크롤 이벤트//////////////////////
/**
 * 1) 화면 768px 이하일 때
 * 2) 화면 769px 이상 1050px 이하일 때
 * 3) 화면 1051px 이상일 때
*/
let recVisual = document.querySelector('.recommend .visualWrap'),
    highlight = document.querySelector('.recommend .heading h2 strong'),
    checkmarkStoke = document.querySelectorAll('.recommend .checkList li .checkmarkStoke'),
    keyPointHeading = document.querySelector('.keypoint .heading'),
    factCheckHeading = document.querySelector('.factCheck .heading'),
    howToUseHeading = document.querySelector('.howToUse .heading'),
    factLi = document.querySelectorAll('.factList li'),
    howToUseLi = document.querySelectorAll('.howToUse .tutorial li');

window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  //1) 768px 이하 ******
  if(mediaViewWidth.matches == true){
    if(window.scrollY > 300){
      recVisual.classList.add('slideUp');
      highlight.classList.add('highlight');
      for(let b = 0; b < checkmarkStoke.length; b++){
        checkmarkStoke[b].classList.add('checking');
      }

      if(window.scrollY > 900){
        keyPointHeading.classList.add('slideUp');
        if(window.scrollY > 1500){
          factCheckHeading.classList.add('slideUp');
          for(let c = 0; c < factLi.length; c++){
            factLi[c].classList.add('slideUp');
          }
          if(window.scrollY > 2400){
            howToUseHeading.classList.add('slideUp');
            for(let d = 0; d < howToUseLi.length; d++){
              howToUseLi[d].classList.add('slideUp');
            }
          }else{
            howToUseHeading.classList.remove('slideUp');
            for(let d = 0; d < howToUseLi.length; d++){
              howToUseLi[d].classList.remove('slideUp');
            }
          }
        }else{
          factCheckHeading.classList.remove('slideUp');
          for(let c = 0; c < factLi.length; c++){
            factLi[c].classList.remove('slideUp');
          }
        }
      }else{
        keyPointHeading.classList.remove('slideUp');
      }
    }else{
      highlight.classList.remove('highlight');
      for(let b = 0; b < checkmarkStoke.length; b++){
        checkmarkStoke[b].classList.remove('checking');
      }
    }
  }
  //1)**********************************
  //2) 769px 이상 1050px 이하 ******
  else if(mediaViewWidth.matches < mediaViewWidth1050.matches == true){
    if(window.scrollY > 500){
      recVisual.classList.add('slideWidth');
      highlight.classList.add('highlight');
      for(let b = 0; b < checkmarkStoke.length; b++){
        checkmarkStoke[b].classList.add('checking');
      }

      if(window.scrollY > 800){
        keyPointHeading.classList.add('slideUp');
        if(window.scrollY > 1500){
          factCheckHeading.classList.add('slideUp');
          for(let c = 0; c < factLi.length; c++){
            factLi[c].classList.add('slideUp');
          }
          if(window.scrollY > 2600){
            howToUseHeading.classList.add('slideUp');
            for(let d = 0; d < howToUseLi.length; d++){
              howToUseLi[d].classList.add('slideUp');
            }
          }else{
            howToUseHeading.classList.remove('slideUp');
            for(let d = 0; d < howToUseLi.length; d++){
              howToUseLi[d].classList.remove('slideUp');
            }
          }
        }else{
          factCheckHeading.classList.remove('slideUp');
          for(let c = 0; c < factLi.length; c++){
            factLi[c].classList.remove('slideUp');
          }
        }
      }else{
        keyPointHeading.classList.remove('slideUp');
      }
    }else{
      highlight.classList.remove('highlight');
      for(let b = 0; b < checkmarkStoke.length; b++){
        checkmarkStoke[b].classList.remove('checking');
      }
    }
  } 
  //2)**********************************
  //3) 1051px 이상 *****
  else{
    if(window.scrollY > 650){
      highlight.classList.add('highlight');
      for(let b = 0; b < checkmarkStoke.length; b++){
        checkmarkStoke[b].classList.add('checking');
      }
      if(window.scrollY > 1000){
        keyPointHeading.classList.add('slideUp');
        if(window.scrollY > 1700){
          factCheckHeading.classList.add('slideUp');
          for(let c = 0; c < factLi.length; c++){
            factLi[c].classList.add('slideUp');
          }
          if(window.scrollY > 2500){
            howToUseHeading.classList.add('slideUp');
            for(let d = 0; d < howToUseLi.length; d++){
              howToUseLi[d].classList.add('slideUp');
            }
          }else{
            howToUseHeading.classList.remove('slideUp');
            for(let d = 0; d < howToUseLi.length; d++){
              howToUseLi[d].classList.remove('slideUp');
            }
          }
        }else{
          factCheckHeading.classList.remove('slideUp');
          for(let c = 0; c < factLi.length; c++){
            factLi[c].classList.remove('slideUp');
          }
        }
      }else{ 
        keyPointHeading.classList.remove('slideUp');
      }
    } else if(window.scrollY > 500){
      recVisual.classList.add('slideWidth');
    } else{
      highlight.classList.remove('highlight');
      for(let b = 0; b < checkmarkStoke.length; b++){
        checkmarkStoke[b].classList.remove('checking');
      }
    }
  }
  //3)**********************************
});