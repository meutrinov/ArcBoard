window.onload = () => {
    const canvas = document.getElementById('arcboard');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fragments = [];

    function createFragment(x, y, text) {
        return { x, y, width: 120, height: 80, text };
    }

    function drawFragments() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fragments.forEach(frag => {
            ctx.fillStyle = '#111';
            ctx.fillRect(frag.x, frag.y, frag.width, frag.height);

            ctx.fillStyle = '#fff';
            ctx.font = "16px monospace";
            ctx.fillText(frag.text, frag.x + 10, frag.y + 40);
        });
    }

    canvas.addEventListener('dblclick', (e) => {
        const text = prompt('Fragment text:');
        if (text) {
            fragments.push(createFragment(e.clientX - 60, e.clientY - 40, text));
            drawFragments();
        }
    });

    drawFragments();
};
