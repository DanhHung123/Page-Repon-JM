const btnTeam = document.querySelectorAll(".ourTeam__switch__lay--btn");

btnTeam.forEach((item) => {
	item.addEventListener("click", (e) => {
		btnTeam.forEach((value) => {
			value.classList.remove("active");
		});
		e.target.classList.add("active");
	});
});

const swichBtn = document.querySelector("#swich-button");
const closeBtn = document.querySelector("#close-button");
const sideBar = document.querySelector(".header__nav--lastRight");
const overlay = document.querySelector(".mask-overlay");

function swichSidebar() {
	sideBar.classList.toggle("active");
	overlay.classList.toggle("active");
}

swichBtn.addEventListener("click", () => {
	swichSidebar();
});
closeBtn.addEventListener("click", () => {
	swichSidebar();
});
overlay.addEventListener("click", () => {
	swichSidebar();
});
