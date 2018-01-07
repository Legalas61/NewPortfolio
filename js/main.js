onscroll = function () {
	window.scrolled = window.pageYOffset || document.documentElement.scrollTop;
	window.scr = parseInt(scrolled);
	if (window.scr > 45) {
		var header = document.querySelector("header"),
			headerMenu = document.querySelector("menu"),
			logo = document.querySelector("header img");
		header.classList.add("shadow");
		header.classList.add("menuAnim");
		headerMenu.classList.add("menuLi");
		logo.style.width = "7vw";
		logo.style.top = "33px";
	} else {
		var header = document.querySelector("header"),
			headerMenu = document.querySelector("menu"),
			headerMenu = document.querySelector("menu"),
			logo = document.querySelector("header img");
		header.classList.remove("shadow");
		header.classList.remove("menuAnim");
		headerMenu.classList.remove("menuLi");
		logo.style.width = "12vw";
		logo.style.top = "0";
	}
}

function frontEnd() {
	var front = document.querySelectorAll(".Front");
	for (i = 0; i < front.length; i++) {
		front[i].classList.toggle("view");
	}
	var link = document.querySelector(".FRONTEND");
	link.classList.toggle("active");
}

function WebDevelopment() {
	var web = document.querySelectorAll(".WebDevelopment");
	for (i = 0; i < web.length; i++) {
		web[i].classList.toggle("view");
	}
	var link = document.querySelector(".web");
	link.classList.toggle("active");
}

function Design() {
	var Design = document.querySelectorAll(".Design");
	for (i = 0; i < Design.length; i++) {
		Design[i].classList.toggle("view");
	}
	var link = document.querySelector(".Designs");
	link.classList.toggle("active");
}

function Software() {
	var Software = document.querySelectorAll(".Soft");
	for (i = 0; i < Software.length; i++) {
		Software[i].classList.toggle("view");
	}
	var link = document.querySelector(".Software");
	link.classList.toggle("active");
}

function All() {
	var AllWorks = document.querySelectorAll(".All");
	for (i = 0; i < AllWorks.length; i++) {
		AllWorks[i].classList.toggle("view");
	}
	var link = document.querySelector(".AllWorks");
	link.classList.toggle("active");
}

function openUp() {
	var PopUp = document.querySelector(".blackScrine").style.display = "block";
}

function closeUp() {
	var PopUp = document.querySelector(".blackScrine").style.display = "none";
	document.body.style.overflowY = "visible";
}

function openMenu() {
	var bottom = document.querySelector("menu").style.display = "block";
	var PopUp = document.querySelector(".blackScrine").style.display = "block";
	var contactForm = document.querySelector(".contactForm").style.display = "none";
	var sendvic = document.querySelector(".sendvic").style.display = "none";
}

function closeMenu() {
	var sendvic = document.querySelector(".sendvic").style.display = "flex";
	var PopUp = document.querySelector(".blackScrine").style.display = "none";
	var bottom = document.querySelector("menu").style.display = "none";
	var contactForm = document.querySelector(".contactForm").style.display = "block";
}

function openMe() {
	alert("df");
}

function openConMe() {
	if (window.screen.availWidth < 1130) {
		closeMenu();
		openUp();
	} else {
		openUp();
	};
	console.log(window.screen.availWidth);
}
