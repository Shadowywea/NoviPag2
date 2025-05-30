document.addEventListener('DOMContentLoaded', function() {

    const cursorImage = new Image();
    cursorImage.src = '/img/cursor.cur';
    
    cursorImage.onerror = function() {
        console.error('Error: No se pudo cargar el cursor.cur');
        document.body.style.cursor = 'default';
    };

    cursorImage.onload = function() {
     
        const cursorStates = [
            'url("/img/cursor.cur") 16 16, auto',
            'url("/img/cursor.cur") 18 18, auto',
            'none',
            'url("/img/cursor.cur") 14 14, auto',
            'url("/img/cursor.cur") 16 20, auto'
        ];

        let currentState = 0;
        let glitchInterval;

        function applyGlitch() {
            document.body.style.cursor = cursorStates[currentState];
            currentState = (currentState + 1) % cursorStates.length;
        }


        glitchInterval = setInterval(applyGlitch, 80); 

 
        document.querySelectorAll('.album, a').forEach(el => {
            el.addEventListener('mouseenter', () => {
                clearInterval(glitchInterval);
                document.body.style.cursor = 'url("/img/cursor.cur") 16 16, pointer';
            });
            
            el.addEventListener('mouseleave', () => {
                clearInterval(glitchInterval);
                glitchInterval = setInterval(applyGlitch, 80);
            });
        });

   
        console.log('Efecto glitch activado. Estados:', cursorStates);
    };
});