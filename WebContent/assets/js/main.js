
console.log("HI");
let useName = localStorage.getItem("user_id");
let isLogin = document.querySelector(".isLogin");
let isLogout = document.querySelector(".isLogOut");

if (useName) {
  isLogout.style.display = "none";
  isLogin.style.display = "";
}
else {
  isLogout.style.display = "";
  isLogin.style.display = "none";
}


document.querySelector("#login").addEventListener("click", function () {
  let id = prompt("아이디 입력");
  let password = prompt("비밀번호 입력");

  if ((id != "ssafy") || (password != 1234)) {
    alert("로그인 실패!")
    return;
  }
  alert("로그인 성공!");
  localStorage.setItem("user_id", id);
  location.reload();
  return;
});
document.querySelector("#logOut").addEventListener("click", function () {
  localStorage.removeItem("user_id");
  alert("로그아웃!!");
  location.reload();
  return;
});


