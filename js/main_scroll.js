//스크롤 이벤트//////////////////////
/**
 * 1) 화면 768px 이하일 때
 * 2) 화면 769px 이상 1050px 이하일 때
 * 3) 화면 1051px 이상일 때
*/
let mainVisualHeading = document.querySelector('.mainVisual .heading'),
    goToStoreLi = document.querySelectorAll('.goToStore ul li'),
    collaboHeading = document.querySelector('.collaboBanner .heading h2'),
    collaboBtn = document.querySelector('.collaboBtn'),
    careLineHeading = document.querySelector('.careLine .heading'),
    MediaHeading = document.querySelector('.mediaZone .heading'),
    faqHeading = document.querySelector('.faq .heading');

window.addEventListener('scroll', function(){
  //1) 768px 이하 ******
  if(mediaViewWidth.matches == true){
    if(window.scrollY > 500){
      collaboHeading.classList.add('slideUp');

      if(window.scrollY > 800){
        careLineHeading.classList.add('slideUp');

        if(window.scrollY > 1500){
          MediaHeading.classList.add('slideUp');
          
          if(window.scrollY > 2500){
            faqHeading.classList.add('slideUp');
          }else{
            faqHeading.classList.remove('slideUp');
          }
        }else{
          MediaHeading.classList.remove('slideUp');
        }
      }else{
        careLineHeading.classList.remove('slideUp');
      }
    }else{
      collaboHeading.classList.remove('slideUp');
    }
  }
  //1)**********************************
  //2) 769px 이상 1050px 이하 ******
  else if(mediaViewWidth.matches < mediaViewWidth1050.matches == true){
    if(window.scrollY > 50){
      for(let a = 0; a < goToStoreLi.length; a++){
        goToStoreLi[a].classList.add('slideUp');
      }
      if(window.scrollY > 900){
        collaboHeading.classList.add('slideL2R');
        collaboBtn.classList.add('slideUp');

        if(window.scrollY > 1100){
          careLineHeading.classList.add('slideUp');

          if(window.scrollY > 2300){
            MediaHeading.classList.add('slideUp');
            
            if(window.scrollY > 3150){
              faqHeading.classList.add('slideUp');
            }else{
              faqHeading.classList.remove('slideUp');
            }
          }else{
            MediaHeading.classList.remove('slideUp');
          }
        }else{
          careLineHeading.classList.remove('slideUp');
        }
      }else{
        collaboHeading.classList.remove('slideL2R');
        collaboBtn.classList.remove('slideUp');
      }
    }else{
      for(let a = 0; a < goToStoreLi.length; a++){
        goToStoreLi[a].classList.remove('slideUp');
      }
    }
  } 
  //2)**********************************
  //3) 1051px 이상 *****
  else{
    if(window.scrollY > 50){
      for(let a = 0; a < goToStoreLi.length; a++){
        goToStoreLi[a].classList.add('slideUp');
      }
      if(window.scrollY > 500){
        collaboHeading.classList.add('slideL2R');
        collaboBtn.classList.add('slideUp');

        if(window.scrollY > 900){
          careLineHeading.classList.add('slideUp');

          if(window.scrollY > 2100){
            MediaHeading.classList.add('slideUp');
            
            if(window.scrollY > 3100){
              faqHeading.classList.add('slideUp');
            }else{
              faqHeading.classList.remove('slideUp');
            }
          }else{
            MediaHeading.classList.remove('slideUp');
          }
        }else{
          careLineHeading.classList.remove('slideUp');
        }
      }else{
        collaboHeading.classList.remove('slideL2R');
        collaboBtn.classList.remove('slideUp');
      }
    }else{
      for(let a = 0; a < goToStoreLi.length; a++){
        goToStoreLi[a].classList.remove('slideUp');
      }
    }
  }
  //3)**********************************
});