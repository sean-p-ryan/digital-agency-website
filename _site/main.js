var mobileButton = document.querySelector('.mobile-button'); // Access to hamburger button
var mobileNav = document.querySelector('.mobile-nav'); // Access to mobile nav menu

function openMobile() {
	mobileNav.classList.add('mobile-nav-open');
	// mobileNav.style.display = 'flex';
}

function closeMobile() {
	mobileNav.classList.remove('.mobile-nav-open');
}

mobileButton.addEventListener('click', openMobile);
mobileNav.addEventListener('click', closeMobile);