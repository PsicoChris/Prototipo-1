document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('signInBtn');
    
    if (signInButton) {
        signInButton.addEventListener('click', (e) => {
            e.preventDefault(); 
            signInButton.textContent = 'Cargando...';
            signInButton.disabled = true;

            setTimeout(() => {
                alert('Simulación de inicio de sesión completada: ¡Proceso de autenticación exitoso (visual)!');
                signInButton.textContent = 'Sign in';
                signInButton.disabled = false;
            }, 1500);
        });
    }

    const arrows = document.querySelectorAll('.carousel-arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            console.log('Flecha de carrusel pulsada. (Funcionalidad de desplazamiento pendiente)');
        });
    });

    const addToCartBtn = document.getElementById('addToCartBtn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            alert('¡Producto añadido al carrito! (Simulación)');
        });
    }

    const storageButtons = document.querySelectorAll('.storage-options .option-btn');
    storageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            storageButtons.forEach(btn => btn.classList.remove('active-option'));
            e.target.classList.add('active-option');
            console.log(`Opción de Almacenamiento seleccionada: ${e.target.textContent}`);
        });
    });

    const colorCircles = document.querySelectorAll('.color-circle');
    colorCircles.forEach(circle => {
        circle.addEventListener('click', (e) => {
            colorCircles.forEach(c => c.classList.remove('selected-color'));
            e.target.classList.add('selected-color');
            console.log(`Color seleccionado: ${e.target.style.backgroundColor}`);
        });
    });
});