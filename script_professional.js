
document.addEventListener('DOMContentLoaded', function () {
    // Particle effects in the background
    let particles = [];

    function createParticle() {
        let particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.backgroundColor = 'lime';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.5;
        particle.style.width = Math.random() * 10 + 'px';
        particle.style.height = particle.style.width;

        document.body.appendChild(particle);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        particle.style.left = x + 'px';
        particle.style.top = y + 'px';

        let speedX = (Math.random() - 0.5) * 4;
        let speedY = (Math.random() - 0.5) * 4;

        function animate() {
            x += speedX;
            y += speedY;

            particle.style.left = x + 'px';
            particle.style.top = y + 'px';

            if (x < 0 || x > window.innerWidth || y < 0 || y > window.innerHeight) {
                document.body.removeChild(particle);
            } else {
                requestAnimationFrame(animate);
            }
        }

        animate();
    }

    setInterval(createParticle, 50);
});
