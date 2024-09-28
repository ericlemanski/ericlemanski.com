const iconLinks = document.querySelectorAll('.icon-wrapper a');
const hoverText = document.getElementById('hover-text');

iconLinks.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        switch (icon.className) {
            case 'icon-linkedin':
                hoverText.innerText = "Connect With Me On LinkedIn!";
                hoverText.style.color = '#0077B5';
                break;
            case 'icon-resume':
                hoverText.innerText = "View My Resume!";
                hoverText.style.color = '#ED2224';
                break;
            case 'icon-github':
                hoverText.innerText = "Check Out My GitHub!";
                hoverText.style.color = '#1B1F24';
                break;
            case 'icon-realtreks':
                hoverText.innerText = "Visit My Outdoors Website!";
                hoverText.style.color = 'rgb(11, 109, 34)';
                break;
        }
        hoverText.style.display = 'block'; // Show the hover text
    });

    icon.addEventListener('mouseleave', () => {
        hoverText.style.display = 'none'; // Hide the hover text when not hovering
    });
});
