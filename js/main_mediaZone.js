//[변수] mediaWrap ///////////////////////////////////////
let mediaTabWrap = document.querySelector('.mediaCategory'), //ul.mediaCategory
    mediaTabMenu = mediaTabWrap.querySelectorAll('.mediaCategory li'), //ul.mediaCategory li
    mediaTabActiveBg = mediaTabWrap.querySelector('.activeCatecory'), //움직일 탭 배경
    videoTab = document.querySelectorAll('.videoTab'); //썸네일리스트[.thumb1, .thumb2]


//탭메뉴 클릭 이벤트: 1. 탭메뉴 클릭///////////////////////
/**
 * 1) 썸네일리스트 비가시화
 * 2) 썸네일리스트 가시화
 * 3) 클릭한 메뉴 클래스 추가
 * 4) 액티브 배경 이동시키기
 * 5) 가시화된 썸네일리스트의 초기값은 무조건 첫번째 썸네일의 영상을 불러온다.
*/
for (let a = 0; a < mediaTabMenu.length - 1; a++){
  mediaTabMenu[a].addEventListener('click', function(e){
    e.preventDefault();
    for(let aa = 0; aa < videoTab.length; aa++){
      videoTab[aa].classList.remove('active');  //1)
    }
    mediaActiveTab(a); //3), 4)
    videoTab[a].classList.add('active'); //2)
    defaultMedia(); //5)
  });
}


//탭메뉴 클릭 이벤트: 2. 클릭한 메뉴로 액티브 배경 이동////
/**
 * mediaActiveTab
 * 1) 클릭된 메뉴의 왼쪽 값에 맞춰 배경 이동시키기
 * 2) 클릭 메뉴 active 클래스 추가 
 * 3) 비클릭 메뉴 active 클래스 없애기
*/
function mediaActiveTab(num){
  moveMediaActiveBg(num); //1)
  for(let c = 0; c < mediaTabMenu.length; c++){
    mediaTabMenu[c].classList.remove('active'); //3)
  }
  mediaTabMenu[num].classList.add('active'); //2) 
}

/**
 * moveMediaActiveBg
 * 1) 변수: [num]번째 탭메뉴의 left값 불러오기
 * 2) [num]번째 탭메뉴의 왼쪽 값에 맞춰 배경 이동시키기
 * 3) 변수: [num]번째 탭메뉴의 top값 불러오기
 * 4) 768 이하 화면에서는 top값을 맞춰 mediaTabActiveBg가 자동으로 따라올 수 있도록 하기
 * 5) 769 이상 화면에서는 mediaTabActiveBg의 top값은 0px
*/
function moveMediaActiveBg(num){
  let tabLeft = mediaTabMenu[num].offsetLeft; //1)
  mediaTabActiveBg.style.left = tabLeft + 'px'; //2)
  let activeHeight = mediaTabMenu[num].clientHeight; //3)
  if(mediaViewWidth.matches == true){
    mediaTabActiveBg.style.top = activeHeight * num + 'px'; //4)
  } else{
    mediaTabActiveBg.style.top = 0 + 'px'; //5)
  }
}


//탭메뉴 클릭 이벤트: 3. 반응형에 따른 액티브배경 자동 팔로우////////
/**
 * mediaActiveBgRespon
 * 1) 브라우저의 사이즈가 바뀔 때마다 
 * 2) 탭메뉴.active의 left값, top값을 맞춰 mediaTabActiveBg가 자동으로 따라올 수 있도록 하기
*/
function mediaActiveBgRespon(num){
  for(let b = 0; b < mediaTabMenu.length -1; b++){
    if(mediaTabMenu[b].classList.contains('active')){
      moveMediaActiveBg(b); //2)
    }
  }
}
window.addEventListener('resize', function(){ //1)
  mediaActiveBgRespon();
});




//썸네일 클릭 이벤트: 1. 썸네일 클릭///////////////////////
//[변수] 썸네일li//////////////////////////////////////////
let videoThumb = document.querySelectorAll('.videoTab ul li'); //미리보기 썸네일
for(let ii = 0; ii < videoThumb.length; ii++){
  videoThumb[ii].addEventListener('click', function(e){ //1)
    e.preventDefault();
    closeAllThumb();
    videoThumb[ii].classList.add('active'); //1)
    loadVideo(ii);
  })
}

/**
 * colseAllThumb
 * 1) 모든 videoThumb의 active 클래스를 지우기
*/
function closeAllThumb(){
  for(let a = 0; a < videoThumb.length; a++){
    videoThumb[a].classList.remove('active'); //1)
  }
}
/**
 * defaultMedia
 * : .videoTab.active이면 무조건 첫번째 썸네일이 액티브되어 있기
 * 1) 모든 videoThumb의 active 클래스를 지우기
 * 2) 가시화된 썸네일리스트의 초기값은 무조건 첫번째 썸네일의 영상을 불러온다.
*/
function defaultMedia(){
  let activeVideoTab = document.querySelector('.videoTab.active'),
      activeVideoTab1st = activeVideoTab.querySelector('.thumb1'),
      activeVideoTab2nd = activeVideoTab.querySelector('.thumb2'),
      activeVideoThumb = activeVideoTab.querySelectorAll('ul li'); //미리보기 썸네일 재생 이미지
  
  if(activeVideoTab1st){
    closeAllThumb(); //1)
    activeVideoThumb[0].classList.add('active'); //2)
    loadVideo(0); //2) 
  } else if(activeVideoTab2nd){
    closeAllThumb(); //1)
    activeVideoThumb[0].classList.add('active'); //2)
    loadVideo(3); //2) 
  }
}






//썸네일 클릭 이벤트: 2. 영상 불러오기///////////////////////
//[변수] ////////////////////////////////////////////////////
let bigVideo = document.querySelector('.videoArea iframe'), //src가 변경될 요소 지정
    videoInfoTitle = document.querySelector('.bigVideoWrap .videoInfo h4'), //제목이 변경될 요소 지정
    videoInfoDate = document.querySelector('.bigVideoWrap .videoInfo .date'); //날짜가 변경될 요소 지정

/**
 * loadVideo
 * 조건: active 썸네일의 data값을 활용한다.
 * 1) 큰 영상의 src 속성값 변경
 * 2) 큰 영상의 제목 변경
 * 3) 큰 영상의 날짜 변경
*/
function loadVideo(num){
  if(videoThumb[num].classList.contains('active')){
    let choiceMedia = videoThumb[num].getAttribute('data-media'),
        choiceTitle = videoThumb[num].getAttribute('data-title'),
        choiceDate = videoThumb[num].getAttribute('data-date');
    bigVideo.setAttribute('src', choiceMedia); //1)
    videoInfoTitle.innerHTML = choiceTitle; //2)
    videoInfoDate.innerHTML = choiceDate; //3)
  }
}


//썸네일 타이틀 생성하기///////////////////////
/**
 * 1) 변수: videoThumb의 data-title 불러오기
 * 2) videoThumb의 자식요소로 p태그 생성하기
 * 3) 생성된 p태그 내용은 data-title 값으로 채워주기
*/
for(let l = 0; l < videoThumb.length; l++){
  let choiceTitle = videoThumb[l].getAttribute('data-title'), //1)
      createP = document.createElement('p'),
      videoThumbP = videoThumb[l].querySelector('p');
  createP.innerHTML = choiceTitle; //3)
  videoThumb[l].append(createP); //2)
}
