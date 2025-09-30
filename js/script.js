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


    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            console.log('El mouse está sobre un miembro del equipo. Se activa el efecto CSS.');
        });
        card.addEventListener('click', () => {
            alert('¡Tarjeta de equipo pulsada! Aquí podrías mostrar un modal con más información.');
        });
    });
});