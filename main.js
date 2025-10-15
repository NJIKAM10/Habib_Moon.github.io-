// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle) {
	navToggle.addEventListener('click', () => {
		nav.classList.toggle('open');
		navToggle.classList.toggle('open');
	});
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
	nav.classList.remove('open');
	navToggle.classList.remove('open');
}));

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// contact submission
document.getElementById('sendBtn')?.addEventListener('click', () => {
	window.location.href = "mailto:njikamndamrahaman@gmail.com";
});

function ouvrirMail(){
	window.location.href = "mailto:njikamndamrahaman@gmail.com";
}


