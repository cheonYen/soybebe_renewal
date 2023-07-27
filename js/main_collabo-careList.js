/** 
 * slick js
*/
$('.careList.slide').slick({
  infinite: false, //무한 반복. 기본값은 true
  slidesToShow: 3, //한 번에 보여지는 개수
  arrows: false, //화살표 버튼 여부. 기본값은 true
  responsive: [
    {
      breakpoint: 1200, //width 1200일 때
      settings: {
          slidesToShow: 3
      }
    }, 
    {
      breakpoint: 768, //width 768일 때
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
      }
    }
  ]
});

/**
  * 화면 768 이하일 시, 새로고침 1번 실행 
*/
// let timer = null;
// window.onresize = function(){
//   clearTimeout(timer);
//   timer = setTimeout(function(){
//     if(window.innerWidth <= 768){
//       document.location.reload();
//     }
//   }, 100); 
// }

/**
 * 화면 너비가 768 이하일 때, careList li a에 i, p 추가하기
*/
if(mediaViewWidth.matches == true){
  let careListLink = document.querySelectorAll('.careList li a');
  $(careListLink).append('<i></i>');
  let careListLink1st = $(careListLink).get(0),
      careListLink2nd = $(careListLink).get(1),
      careListLink3rd = $(careListLink).get(2);
  $(careListLink1st).append('<p>모이스처 케어</p>');
  $(careListLink2nd).append('<p>선 케어</p>');
  $(careListLink3rd).append('<p>라이프 케어</p>');
}

/**
 * 콜라보배너 heading에 <br> 추가
*/
let collaboH2 = document.querySelector('.collaboBanner .heading h2');
if(mediaViewWidth.matches == true){
  collaboH2.innerHTML = '우리 아이가 더 좋아하는 <br>순한 스킨케어는?';
}