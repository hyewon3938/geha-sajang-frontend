<img src="https://user-images.githubusercontent.com/58355499/99148514-6767bb00-26cb-11eb-85ff-e043420ebf35.png" width="100%" height="8px"/>
<br>
<p align="center"><img src="https://user-images.githubusercontent.com/58355499/99148874-a565de80-26cd-11eb-8cb9-d66cf1205bca.png"/></p><br>

<p align="center"><strong>" 게스트하우스를 운영하는 호스트가 이용하는 게스트하우스 맞춤형 예약관리 서비스 '게하사장'입니다. "</strong></p>
<br>
<p align="center"><img src="https://user-images.githubusercontent.com/58355499/98966896-2e0a4080-254f-11eb-91a6-bd4b8704bf13.gif"/></p>
<br>
<br>

## 🛏프로젝트 진행 
- 기획 : 2020.07.06 ~ 2020.07.31 (약 한달)
- 개발 기간 : 2020.08.03 ~ 진행중  <br>
- 개발 인원 : FE(1명) BE(2명) iOS(1명) <br>
- 담당 : 프론트엔드 개발 (100%), 로고 및 UI 디자인 (100%)

<br>

## 🛏협업 방식
- **구글 스프레드 시트**에 간트차트를 이용해 백로그 작성 
→ [백로그 링크](https://docs.google.com/spreadsheets/d/1e4tcSdlB5U3dLUNJOyHfZPz_Nn3OvCKaT97NlnMxzH0/edit#gid=2058238240)<br>
- 팀원들이 데일리 스크럼을 작성하면 서로 코멘트를 달아주기도 하며 스크럼 진행 
→ [데일리 스크럼 링크](https://docs.google.com/spreadsheets/d/1B945f5OpvAnVp_VMJJGiSC4eJasXAm7N3PMtQKXVjYs/edit#gid=1362844403)<br>
- 매주 금요일 21시, **행아웃**에서 온라인 또는  주간 회고와 회의 진행 <br> 
- 의논할 사항이 생겼을 때, 휴일(토요일)을 제외하고 **슬랙**채널에서 상시 회의
- **노션**에 회의 기록 정리 → [노션 회의 기록 링크](https://www.notion.so/675d5c2a57ba4e859b5078fea664ea62)<br>
 
<br>

## 🛏개발 배경
　2019년 10월부터 약 두 달간 게스트하우스에서 스텝으로 일하면서 생각보다 많은 호스트들이 게스트의 예약관리를 어려운 방식으로 하고 있다는 걸 알았습니다. 휴대폰에서 제공하는 캘린더 어플에 메모 형식으로 예약을 관리하거나, 스마트폰 메모장, 엑셀 또는 수첩에 관리하는 등 **체계적인 툴을 사용하지 않아 예약관리가 복잡**해보였습니다.<br>
 
 그래서 게스트하우스만의 특징을 잡아 게스트하우스 맞춤형 예약관리 서비스가 있더면 보다 더 효율적으로 예약을 관리할 수 있지 않을까? 생각했습니다. 

> 제가 게스트하우스에서 일하며 느낀 게스트하우스의 특징은 다음과 같습니다.
> 1. 게스트하우스는 **규모가 작고**, 다른 숙박업체와 다르게 한 방에서 침대를 나눠 쓰는 **도미토리 형식의 숙박**이 많습니다. 
> 2. 도미토리 형식의 숙박은 같은 방을 사용해도 퇴실하는 사람이 있고 연박하는 사람이 있어 **청소와 침구 관리에 숙박정보가 필요**합니다.  
> 3. 숙박 예약 어플을 이용해 예약을 받기도 하지만, sns메시지, 카톡, 전화 등으로도 예약을 함께 받는 게스트하우스들이 많습니다. 
> 4. 요즘 게스트하우스는 저녁식사를 제공하거나 장비 대여 또는 액티비티 강습을 해주는 등 **다양한 서비스를 제공하는 추세**입니다. 따라서 다양한 서비스를 제공하는만큼 **숙박객의 서비스 이용 정보 관리가 추가적으로 필요**합니다.
> 5. 단순히 숙박만 하고 떠나는 것이 아닌 게스트하우스에는 주기적으로 **재방문하는 단골 손님**들이 종종 있습니다.
> 6. 게스트하우스 예약관리 서비스를 제공하는 다른 서비스가 있지만 서비스를 이용하기 위해서는 호스트가 직접 회사에 상담신청을 해야 이용할 수 있어 **접근성이 낮아**보였습니다.

<br>

- 예약 데이터를 체계적으로 받아 단순히 예약을 저장하고 확인하는 것보다 **의미있게 데이터를 활용**하여 
- 재방문 손님을 관리하고 방문 게스트의 정보를 분석해주는 등 **게스트하우스 맞춤형 기능**을 가지고 있고
- **접근성이 좋아** 호스트들이 부담없이 이용할 수 있는 서비스를 만들어 보자! 

라는 마음으로 '게하사장' 프로젝트를 시작했습니다. '게하사장'은 내년 초 실서비스를 목적으로 현재 개발을 진행 중입니다.  
<br>

## 🛏기획
- 서비스 기능 정리 → [기능 정리 노션링크](https://www.notion.so/565a86cf32434d15aee8d33d162fb8b8)
- 추가 기획 아이디어 → [추가 아이디어 노션링크](https://www.notion.so/b92144cdd7a64b609675b82bca546c70) 
<br>

<br>

<h2 align="center">✨ㅡ Front-end 위주로 기술합니다 ㅡ✨</h2>



## 🛏서비스 기능 (현재(2020.11.4)까지 개발된 기능)
### → ['게하사장' 사이트 링크](http://13.124.108.177/)
- 회원가입
- 이메일 인증 (인증 메일 재전송)
- 로그인/로그아웃
- 게스트하우스 기본 정보 등록 
- 게스트하우스 방정보 등록 
<br>


## 🛏사용 도구 및 기술
→ ``` React, Redux, Redux-thunk, styled-component, media query, axios, Webpack ```
<br>
- CRA(Create React App)을 사용하지 않고 직접 웹팩 개발환경을 구성했습니다.
- Redux로 상태관리를 하고, 미들웨어 redux-thunk를 이용해 비동기 서버통신을 합니다.
- styled-component를 이용해 미디어쿼리, 애니메이션 적용, 스타일 테마 관리를 합니다.
<br>


## 🛏설계 및 기능 구현
>  [Issues 링크](https://github.com/4INCENSE/geha-sajang-frontend/issues) →이슈에 개발해야 할 기능을 정리하고 기록하며 개발을 진행했습니다.


### 1.폴더구조 
```
    .
    ├─common
    │  ├─constants
    │  └─lib
    │      └─util
    ├─components
    │  ├─Footer
    │  ├─Header
    │  ├─LoadingIndicator
    │  ├─LogIn
    │  ├─Main
    │  ├─Modal
    │  ├─NotFound
    │  ├─Register
    │  ├─RegisterGuestHouse
    │  ├─Reservation
    │  ├─style
    │  └─UIComponents
    ├─img
    ├─redux
    │   ├─LogInLogOut
    │   │  ├─reducers
    │   │  ├─thunk
    │   │  └─type
    │   ├─Registration
    │   │  ├─actions
    │   │  ├─reducers
    │   │  ├─thunk
    │   │  └─type
    │   └─Reservation
    │   │  ├─actions
    │   │  ├─reducers
    │   │  ├─thunk
    │   │  └─type
    ├─ App.jsx 
    └─ index.jsx
 ```           
- component 폴더와 redux 폴더로 **컴포넌트와 상태관리 코드를 분리**하여 컴포넌트와 상태관리 코드가 한 곳에 복잡하게 있지 않도록 하였습니다.
  - **components** : 라우팅되는 페이지를 핵심 컴포넌트로 나누고 그 안에서 사용되는 컴포넌트들을 하위 폴더에 두었습니다. 
  - **redux(상태관리)** : 로그인/로그아웃, 등록, 예약 등 기능별로 폴더를 분리하여 각각 action, reudcers, type, 미들웨어 사용을 위한 thunk 폴더를 가지도록 구성했습니다.  
  - **common** : 상수값과 재사용 유틸함수를 관리합니다.
  
### 2. 비동기 통신, 데이터 관리
- ```axios```를 사용하여 비동기 통신을 합니다. 
- ```redux-thunk``` 미들웨어를 이용해 thunk 함수로 비동기 서버 통신 후 성공 여부에 따라 성공 시 데이터를, 실패 시 에러와 에러 메시지를 dispatch 하여 서버 통신 결과를 store에 저장한 후 컴포넌트에서 저장된 데이터를 이용합니다. 

### 3. 코드 재사용
- 매번 리듀서를 일일이 만들어주지 않고, 바로 리듀서를 init 할 수 있는 util 함수를 사용합니다.
- api 통신별 타입을 받아 데이터 통신 실패와 성공을 분기처리 하여 결과를 dispatch 해주는 미들웨어 util 함수를 매 통신마다 사용합니다.   
- 사이트 내에서 자주 사용하는 button, input 이나 파일 업로드 컴포넌트는 UI 컴포넌트로 제작해서 통일된 디자인으로 재사용합니다. 

### 4. 제한적 라우팅, 렌더링
- RestrictRoute 함수를 만들어 로그인 정보가 있을 경우 해당 페이지를 라우팅 하고, 로그인 정보가 없을 시 알림메시지와 함께 이전 페이지로 이동하는 fallback 함수를 실행합니다.
- 존재하지 않는 url 접근 시 ```keyframes```애니메이션 효과를 넣은 404페이지로 이동합니다.
  <p><img src="https://user-images.githubusercontent.com/58355499/99142692-d8db4580-269a-11eb-95ca-3b0c8958e484.gif"/></p>
- 게스트하우스의 기본정보 등록 컴포넌트와 방정보 등록 컴포넌트를 registerGuestHouse라는 **큰 컴포넌트 한 곳에서 제한적으로 렌더링** 합니다. ```localStorage```에 게스트하우스 정보 등록 진행상황(미등록, 진행중, 등록완료)을 저장해 그에 따라 SelectRegistrationType, GuestHouseInfo, RoomInfo 중 한 컴포넌트만을 렌더링합니다. 라우팅으로 사용자가 이미 등록한 정보 입력 페이지에 url로 접근하는 걸 방지하고, 가입 후 첫 로그인 시 한번 사용하는 컴포넌트를 하나하나의 url로 연결하고 싶지 않아 한 컴포넌트 내에서 제한적으로 렌더링 하는 방식을 선택했습니다.


### 5. UX를 고려한 개발
- 실서비스를 목적으로 개발을 진행하고 있기 때문에 ux를 생각한 개발에 초점을 많이 두었습니다. 사용자가 확실히 이해하고 넘어가야하는 알림창이 아닌 이상 메시지를 띄운뒤 스스로 사라지게 만들고, 회원가입 이메일인증 재전송 기능, 가격 입력 폼에는 자동으로 숫자 3자리 단위마다 콤마를 붙여주는 기능, 입력 가능 글자수 계산 기능 등 다양한 기능을 넣어 **사용자의 편의를 고려해 개발**하고 있습니다. 
  <br><br>
  - 남은 글자수 계산 기능
    <p><img src="https://user-images.githubusercontent.com/58355499/99147789-1229aa80-26c7-11eb-9eab-a88b8abe1926.gif"/></p>
  - 가격 입력 시 숫자 3자리 단위마다 ,(콤마) 찍어주는 기능 
    <p><img src="https://user-images.githubusercontent.com/58355499/99147794-1655c800-26c7-11eb-94f0-ac3802a8cb8a.gif"/></p>
  - 최대인원이 기본인원보다 적지 않도록 수정해주는 기능
    <p><img src="https://user-images.githubusercontent.com/58355499/99147799-1d7cd600-26c7-11eb-925b-d2270879beec.gif"/></p>
  - 사이트 기능에 대한 설명 
    <p><img src="https://user-images.githubusercontent.com/58355499/99149051-0f32b800-26cf-11eb-96f4-58c203e3ff2e.gif"/></p>
  - 인증 이메일 재전송 기능
    <p><img src="https://user-images.githubusercontent.com/58355499/99149058-1c4fa700-26cf-11eb-8648-1407f951b132.jpg" width="600px"/></p>    
- ```media query```를 이용해 반응형 페이지를 개발 중입니다. 현재는 로그인 화면에 적용되어 있습니다.
  <p><img src="https://user-images.githubusercontent.com/58355499/99142525-08894e00-2699-11eb-8a19-c1ce435ab8cc.gif"/></p>


<br>


## 🛏회고 (2020.11.4 기준)

- 팀 회의에서 적극적으로 의견을 제시하고 참여했고, 매주 진행한 데모를 성실히 준비했다.
<br>

- 평소에 UI를 만들고 사이트를 보기 좋게 구성하는 데에 흥미가 있어서 이번에 디자인까지 담당했는데, UI를 처음부터 끝까지 직접 만드는 게 매우 힘든 일이긴 했다. 하지만 UI디자인 트렌드 영상도 찾아
보고 다른 기업들의 사이트를 둘러보며 사이트를 계속 수정해나가다보니 점점 더 보기 좋은 사이트로 변해갔다. 매우 성취감을 느꼈었다.   
<br>

- 아직 개발 진행중인만큼 추가해야할 기능이나 리팩토링할 것들이 많다.
<br>

- RoomInfo를 등록하는 컴포넌트에서 이벤트함수에 등록한 함수 이름이 이벤트 이름인 경우가 많은데 이부분을 좀 더 함수 기능에 맞게 이름을 변경해줘야할 것 같다. 
<br>

- 만들어둔 UI 컴포넌트 중 input 컴포넌트의 다양한 버전을 하나의 컴포넌트로 만들어 props로 버전을 선택할 수 있게 한다면 코드가 더 간결해질 것 같다. 
<br>

- 현재 App.jsx에 라우팅 코드가 있는데 이를 라우팅을 담당하는 컴포넌트로 분리하는 게 더 좋을 것 같다. 
<br>

- 버튼에 hover 되었을 때 마우스를 pointer로 바꿔주는 코드를 전부 추가해줘야겠다. 
<br>

- 글꼴을 스타일 테마에 넣어 통일되게 사용할 수 있도록 해야겠다. 
<br>

<img src="https://user-images.githubusercontent.com/58355499/99148514-6767bb00-26cb-11eb-85ff-e043420ebf35.png" width="100%" height="8px"/>
<p align="center"><img src="https://user-images.githubusercontent.com/58355499/99148781-1062e580-26cd-11eb-826b-836e23cbcbd3.jpeg" width="120px"/></p>

