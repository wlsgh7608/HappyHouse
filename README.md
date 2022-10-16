## HappyHouse 구해줘 홈즈

## 멤버

- 공진호
- 안려환

## 클래스 다이어그램

<img src="https://user-images.githubusercontent.com/62232531/196028458-d8ab31cf-872e-4557-820a-ce6221e5d9de.png">

## 주요 코드

| 제목    | 파일이름                                                                                                                                                     | 설명                     |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| html    | [index.html]                             | 메인 페이지              |
| js      | [assets/js/star.js]               | 관심지역과 관련된 js함수 |
| js      | [assets/js/apt.js]               | 아파트 관련 js           |
| js      | [assets/js/my.js]                 | 로그인 관련 js           |
| servlet | [DispatcherServlet.java] | 컨트롤러                 |

# 로그인 회원가입

### 회원가입

- 회원가입은 `id`, `pw`, `name`으로 회원가입이 가능하며 공백은 불가능하다.
- 회원가입 버튼은 `중복확인을 통과`해야만 클릭이 가능하다.  
  <img src="https://user-images.githubusercontent.com/62232531/192889183-faccd906-8d65-42ce-a24d-dd996cacd6bf.gif">

### 로그인

`id`와 `pw`을 이용하여 로그인이 가능하다.  
<img src ="https://user-images.githubusercontent.com/62232531/192888587-290427c2-2bcb-4d62-a9bd-b38175f087eb.png">

### 로그인 성공

<img src="https://user-images.githubusercontent.com/62232531/192889909-e1b759a5-4258-437b-a0e2-baee3e6a8eb0.png">

### 정보 수정

  <img src="https://user-images.githubusercontent.com/62232531/192890320-8a011367-60d6-4b82-b59b-43aae2cac301.png">

- 우측 상단의 이름으로 된 버튼을 클릭하여 정보 수정이 가능하다.
- `id`의 값은 변경할 수 없다.

<img src="https://user-images.githubusercontent.com/62232531/192890642-3cb39e66-c5fc-4307-a2e3-cac31183926f.png">

### 회원 삭제

<img src="https://user-images.githubusercontent.com/62232531/192891523-d6ac8911-49b1-4046-963d-4c3a00dbd879.png">
- 정보 수정 페이지에서 회원 삭제가 가능하다.
- 회원 삭제의 경우 확인(confirm)창을 눌러 회원정보를 삭제할 수 있다.

# 아파트 데이터

- 메인 화면에서 조회 기능  
  <img src="https://user-images.githubusercontent.com/62232531/188876200-a9e4c44b-4457-40b2-882e-8f3469a079ea.gif">

## 검색화면

| 구현 내용       | code                      |
| --------------- | ------------------------- |
| 메인페이지 html | [public/index.html]       |
| 아파트 검색 js  | [public/assets/js/apt.js] |

- 검색 페이지 결과  
  <img src="https://user-images.githubusercontent.com/62232531/188877823-a5f34d12-ab05-4610-9209-e1e7464a104e.png">
- 상세 정보  
  <img src="https://user-images.githubusercontent.com/62232531/188878037-c78e5e02-0c22-4d99-8231-463189a50417.png">

## 추가

- 테이블 클릭시 해당 아파트를 중심으로 맵 이동

  <img src="https://user-images.githubusercontent.com/62232531/188882059-9000d48e-3944-4865-89e7-acf7104751a0.gif">

- 마크에 마우스를 갖다 대면 상세정보

  <img src="https://user-images.githubusercontent.com/62232531/188878423-fc09afd6-5631-4c5a-904d-f6bbfaa6e816.png">

- 구현 영상  
  <img src="https://user-images.githubusercontent.com/62232531/188877564-9daba0b2-f939-465e-bd2d-86f799398f2e.gif">

# 관심지역

  <img src="https://user-images.githubusercontent.com/62232531/192887507-edde92c6-6763-4a8f-af85-dc298a8e9702.png">

- 관심지역은 `세션`을 이용하여 로그인한 유저만 이용 가능하다.
- 좌측 상단의 로고 옆에 관심목록을 눌러 확인할 수 있다.
- 시, 군 ,동을 선택하고 `별`을 클릭하여 관심목록에 등록하거나 취소할 수 있다.
- `동`까지 선택했을 때 유저가 등록한 관심지역이라면 `꽌찬별`을 관심지역이 아니라면 `빈 별`을 표시한다.
- 추가나 삭제가 일어날 시 바로 관심목록이 업데이트 된다.
- `꽉찬별`일 때 클릭을 하게되면 `취소` , `빈 별`일 때 클릭을 하면 `등록`이 발생하는 `토글` 형식으로 구현하였다.

  <img src ="https://user-images.githubusercontent.com/62232531/192886900-7a1314dd-a33b-418a-a5d7-f38f01746f9c.png">

### 관련코드

| 제목    | 파일이름                                                                                                                                                     | 설명                     |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| js      | [assets/js/star.js]              | 관심지역과 관련된 js함수 |
| servlet | [DispatcherServlet.java] | line 196 ~               |

### 구현화면

<img src="https://user-images.githubusercontent.com/62232531/192885162-e65f7b77-4d0a-4483-b3c3-0a0a9af046ec.gif">
