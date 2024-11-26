const acceptBtn = document.getElementById('accept-btn');
acceptBtn.addEventListener('click', () => {
    alert('Convite aceito! Prepare-se para uma noite de arrepiar!');
});
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
const declineBtn = document.getElementById('decline-btn');
declineBtn.addEventListener(isMobile ? 'touchstart' : 'mouseenter', () => {
    if (isMobile) {
        alert("Você não pode recusar o convite! 😈");
    } else {
        const randomX = Math.random() * (window.innerWidth - declineBtn.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - declineBtn.offsetHeight);

        declineBtn.style.position = 'absolute';
        declineBtn.style.left = `${randomX}px`;
        declineBtn.style.top = `${randomY}px`;
    }
});