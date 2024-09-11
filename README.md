# mbti-test

## 설치 패키지

-   프로젝트 세팅 : yarn create vite --template react
    -   실행 : yarn dev
-   json-server 설치 : yarn add json-server
    -   실행 : yarn json-server db.json --port 4000
-   tanstack query 설치 : yarn add @tanstack/react-query @tanstack/react-query-devtools
-   axios 설치 : yarn add axios
-   tailwind css 설치 : yarn add -D tailwindcss postcss autoprefixer
    -   tailwind.config.js 파일 생성 : npx tailwindcss init -p
-   react-router-dom 설치 : yarn add react-router-dom

## 필수 기능 구현

### **1. 회원가입 / 로그인 / 프로필 관리 기능 구현**

-   JWT 인증 서버를 사용하여 회원가입, 로그인, 프로필 수정을 구현합니다.
-   프로필 이미지는 사용하지 않으며, 회원가입 시 아이디와 비밀번호만 입력받습니다.
-   인증이 되지 않은 사용자는 서비스를 이용할 수 없도록 설정합니다.

### **2. MBTI 테스트 제공**

-   로그인한 사용자가 MBTI 테스트를 진행할 수 있도록 합니다.
-   총 20개의 문항으로 구성된 테스트를 `question.js` 파일에 저장하여 관리합니다.
-   사용자는 문항에 대한 답변을 선택하여 테스트를 완료할 수 있습니다.

### **3. 테스트 결과 계산 및 저장**

-   사용자가 MBTI 테스트를 완료하면, 결과를 계산하여 json-server에 저장합니다.
-   MBTI 결과는 `E/I`, `S/N`, `T/F`, `J/P` 네 가지 지표를 기반으로 계산됩니다.
-   테스트 결과는 기본적으로 공개(true)로 설정됩니다.

### **4. 테스트 결과 관리 기능**

-   사용자는 자신의 테스트 결과를 삭제할 수 있습니다.
-   또한, 테스트 결과의 공개 여부를 변경할 수 있는 기능을 추가하여, 다른 사용자가 자신의 테스트 결과를 볼 수 없도록 설정할 수 있습니다.
-   모든 사용자가 다른 사용자의 공개된 테스트 결과를 볼 수 있는 페이지를 구현합니다.

## 트러블 슈팅

https://rjw0105.tistory.com/40

## 상세 노션

https://teamsparta.notion.site/React-6-CH-4-e9354ce48146494083f7f643e54d9212#13259c450cc84baca2ae416b403c9cf6
