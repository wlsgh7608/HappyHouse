let cookie_loginId = $.cookie("loginId");
if(cookie_loginId){
	document.querySelector("#loginText").innerHTML =`<a class="btn btn-light m-2 order-1 order-lg-0" 
	onclick='window.open("member.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=800,height=600");'>`+cookie_loginId+`
    <svg class="bi bi-person-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
      fill="currentColor" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    </svg></a>` +`<a class="btn btn-light order-1 order-lg-0" id="logoutBtn" >logout	
    <svg class="bi bi-person-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
      fill="currentColor" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    </svg></a>`;
}else{
	document.querySelector("#loginText").innerHTML =  `<a class="btn btn-light order-1 order-lg-0" onclick='window.open("signup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=800,height=600");'>login	
    <svg class="bi bi-person-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
      fill="currentColor" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    </svg></a>`;
}

$(document).on("click","#loginBtn",login);
$(document).on("click","#logoutBtn",logout);

async function memberIdCheck(){
	let id = document.querySelector("#rId").value;
	let data = JSON.stringify({sign:"memberIdCheck",id});
	data = await fetch("main",{method:"POST",body:data});
	data = await data.text();
	data = JSON.parse(data);
	alert(data.msg);
	let btn = document.querySelector("#signUpBtn")
	if(data.code=='possible'){
		btn.innerHTML = "Sign up";
		btn.disabled = false;
		btn.className ="";
	}else{
		btn.innerHTML = "Sign Up(중복확인 필요!)";
		btn.disabled = true;
		btn.className ="btn btn-secondary";
		
		
		
	}
}


async function memberInsert(){
	console.log("추가버튼");
	let id = document.querySelector("#rId").value;
	let pw = document.querySelector("#rPw").value;
	let name = document.querySelector("#rName").value;
	
	let data = JSON.stringify({sign:"memberInsert",id,pw,name});
	data = await fetch("main",{method:"POST",body:data});
	data = await data.text();
	data = JSON.parse(data);
	alert(data.msg);
	window.close();
	opener.location.reload();
}

async function login(){
	let id  = document.querySelector("#lId").value;
	let pw  = document.querySelector("#lPw").value;
	
	let data = JSON.stringify({"sign":"login",id,pw});
	data = await fetch("main",{method:"post",body:data});
	data = await data.text();
	data = JSON.parse(data);
	console.log(data.loginId);
	if(data.loginId){
		$.cookie("loginId", data.loginId);
		window.close();
		 opener.location.reload();
	}
}

async function logout(){
	let data = JSON.stringify({"sign":"logout"});
	console.log(window.location.pathname);
	data = await fetch("main",{method:"POST",body:data});
	
	$.removeCookie("loginId"); 
	location.reload();

}