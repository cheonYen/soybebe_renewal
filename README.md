![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=소이베베%20리뉴얼%20프로젝트&fontAlign=50&fontAlignY=40&fontSize=55&color=23D1EC)

# [개인 프로젝트] 소이베베 웹사이트 리뉴얼

## 목차
1. [프로젝트 소개 및 목적](#프로젝트-소개-및-목적)
1. [프로젝트 목표](#프로젝트-목표)
1. [개발 기간](#개발-기간)
1. [기술 스택](#기술-스택)
1. [주요 기능](#주요-기능)
1. [페이지 구성](#페이지-구성)
1. [호스팅 사이트](#호스팅-사이트)
1. [산출물](#산출물)

<br>

## 프로젝트 소개 및 목적
### 소이베베 브랜드 웹사이트 리뉴얼
  - 소이베베 웹사이트 리뉴얼 개인 프로젝트입니다.
  - '소이베베'는 영유아 스킨케어 브랜드입니다. [기존 소이베베 웹사이트](https://www.soybebe.co.kr/Default.aspx)는 해당 웹사이트에서 제품을 바로 구매하는 서비스는 제공하지 않고 네이버 스토어 등 타 플랫폼으로 연계하고 있었으며, 자사 제품을 소개 및 홍보하는 브랜드 웹사이트입니다. 하지만, 정확한 목적을 알 수 없는 섹션과 가장 중요한 콘텐츠인 제품 상세 정보가 모바일 환경에서 부재하는 등의 아쉬운 점을 발견할 수 있었습니다. 본 프로젝트는 이러한 점을 개선해 브랜드 정체성에 부합하는 웹사이트로 리뉴얼하는 것이 목적입니다.

<br>

## 프로젝트 목표
1. 반응형 퍼블리싱
1. 웹사이트 타겟층을 고려한 콘텐츠 배치
1. 동적인 웹사이트 제작으로 사용자의 흥미 유도
1. 브랜드 정체성에 부합하도록 디자인 개선

<br>

## 개발 기간
2023-06-20 ~ 2023-07-28

<br>

## 기술 스택
 - 개발 환경 : <img src="https://img.shields.io/badge/Windows10-0078D6?style=flat-square&logo=Windows10&logoColor=white"> <img src="https://img.shields.io/badge/macOS-000000?style=flat-square&logo=macOS&logoColor=white">
 - 사용 프로그램 : <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"> <img src="https://img.shields.io/badge/Adobe Photoshop-31A8FF?style=flat-square&logo=AdobePhotoshop&logoColor=white"/> <img src="https://img.shields.io/badge/Adobe Illustrator-FF9A00?style=flat-square&logo=AdobeIllustrator&logoColor=white"/>
 - 사용된 기술 : <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=Swiper&logoColor=white">

<br>

## 주요 기능
**1. data- 속성**<br/>
    : data-* 속성을 활용해 특정 요소에 클릭 이벤트 발생 시, 클릭한 요소의 data-* 속성 값을 불러와 특정 영역에 표시되는 기능을 추가하였습니다.
    <br/>
**2. Swiper 슬라이드 플러그인**<br/>
    : Swiper 플러그인을 사용하여 가로 폭이 좁은 화면에서는 터치 슬라이드 기능을 추가해 공간을 효율적으로 활용하고자 하였습니다.
    <br/>
**3. 스크롤 이벤트**<br/>
    : 메인 페이지뿐만 아니라 서브 페이지 1~2에서도 스크롤 이벤트를 추가하여 전반적으로 동적인 웹사이트를 구현하고자 하였습니다.

<br/>

## 페이지 구성
### 메인 페이지
  |소이베베 영상존 섹션|
  |:---|
  |<img src="https://github.com/cheonYen/soybebe_renewal/assets/139948936/8c733d2a-3542-4a87-a8f4-73ef2aa2c2a0">|
  |data- 속성을 사용하여 썸네일을 클릭 시, 해당 영상의 src와 date, title 값을 왼쪽 'bigVideoWrap' 영역에서 불러와 표시될 수 있도록 구현한 탭 형식의 소이베베 영상 감상 영역입니다.|
<br>

### 서브 페이지1 모이스처 케어 라인
  |메인 비주얼 섹션|
  |:---|
  |<img src="https://github.com/cheonYen/soybebe_renewal/assets/139948936/8337ef63-e944-4e3e-9ed4-14ad00c005dc">|
  |스크롤 이벤트로 일정 스크롤 양에 따라 메인 비주얼의 형태가 유기적으로 변화되며, 물결이 차오르는 듯한 애니메이션 효과를 추가해 사용자의 흥미를 돋우고 모이스처 케어 라인을 잘 표현하는 비주얼을 보여줍니다.|

<br>

## 호스팅 사이트
  - ### [메인페이지](https://cheonyen.github.io/soybebe_renewal/)
  - ### [서브페이지1 모이스처 케어 라인](https://cheonyen.github.io/soybebe_renewal/sub_%20moisture.html)
  - ### [서브페이지2 제품 상세](https://cheonyen.github.io/soybebe_renewal/sub_%20moisture_product01.html)
<br>

## 산출물
  - [프레젠테이션](https://drive.google.com/file/d/19oNfKNWaRand5jc494-iZOHHWHBwVWFv/view?usp=sharing) 
  - [기획 - 브레인스토밍](https://www.figma.com/file/FmZqiiHoTEq6nIconhzR4j/%EC%86%8C%EC%9D%B4%EB%B2%A0%EB%B2%A0-%EB%A6%AC%EB%89%B4%EC%96%BC-%EA%B8%B0%ED%9A%8D?type=whiteboard&node-id=0%3A1&t=1csFo3L0QVDFmEjp-1) 
  - [와이어프레임 및 디자인 시안](https://www.figma.com/file/34HUvWhaeYR5WWcHSZCMUX/%EC%86%8C%EC%9D%B4%EB%B2%A0%EB%B2%A0-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?type=design&node-id=0%3A1&mode=design&t=kxQij0alkbn9x62I-1)
  - [스타일 가이드](https://www.figma.com/file/34HUvWhaeYR5WWcHSZCMUX/%EC%86%8C%EC%9D%B4%EB%B2%A0%EB%B2%A0-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?type=design&node-id=1%3A2&mode=design&t=kxQij0alkbn9x62I-1)

<br>

<img src="https://github.com/cheonYen/soybebe_renewal/assets/139948936/c6678af9-627f-4fb0-876b-0264bb461c63">
