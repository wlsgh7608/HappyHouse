window.onload = function(){
	initForm();
}

async function initForm(){
	let data = await getInfo();
	document.querySelector("#uId").value = data["infoId"];
	document.querySelector("#uPw").value = data["infoPw"];
	document.querySelector("#uName").value = data["infoName"];
}

async function getInfo(){
	let data = JSON.stringify({sign:"getInfo"});
	data = await fetch("main",{method:"POST",body:data});
	data = await data.text();
	data = JSON.parse(data);
	return data;
}

async function updateInfo(){
//	let uInfo = await getInfo();
	let uId = document.querySelector("#uId").value;
	let uPw = document.querySelector("#uPw").value;
	let uName = document.querySelector("#uName").value;
	let data = JSON.stringify({sign:"memberUpdate",uId,uPw,uName});
	data = await fetch("main",{method:"POST",body:data});
    data = await data.text();
    data = JSON.parse(data);
    alert(data.msg);
    window.close();
    opener.location.reload();
}

async function memberDelete(){
	let answer = confirm("정말로 지우실건가요??")
	if(answer){
		let uId = document.querySelector("#uId").value;
		let data = JSON.stringify({sign:"memberDelete",uId});
		data = await fetch("main",{method:"POST",body:data});
		data = await data.text();
	    data = JSON.parse(data);
	    alert(data.msg);
	    window.close();
	    if(data.msg=="delete Success"){
	    	$.removeCookie("loginId"); 
	    	let cookie =  $.cookie("loginId");
	    	opener.location.reload();
	    }
		
	}
}
