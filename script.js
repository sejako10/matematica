document.querySelector('.regulament').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.02)';
    this.style.boxShadow = '0px 0px 15px rgba(255, 165, 0, 0.5)';
});

document.querySelector('.regulament').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
});
