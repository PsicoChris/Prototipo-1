document.addEventListener('DOMContentLoaded', () => {
    
    const loadServices = async () => {
        const container = document.getElementById('service-cards-container');

        if (!container) return; 

        try {

            const response = await fetch('data.json');
            if (!response.ok) {

                throw new Error('Error al cargar data.json: ' + response.statusText);
            }
            const services = await response.json();


            services.forEach(service => {
                const cardHtml = `
                    <div class="service-card" data-service-id="${service.id}">
                        <img src="${service.imagen_placeholder}" alt="${service.nombre}" class="card-img">
                        <h3>${service.nombre}</h3>
                        <p>${service.descripcion_corta}</p>
                        <a href="${service.url_detalle}" class="nav-button">Ver Detalles</a>
                    </div>
                `;

                container.innerHTML += cardHtml;
            });

        } catch (error) {
            console.error('Fallo al cargar los servicios:', error);
            if (container) {

                container.innerHTML = '<p style="color: red;">Error: No se pudieron cargar los datos de los servicios. (Verifica que usas un Live Server para evitar problemas de CORS)</p>';
            }
        }
    };
 
    loadServices();


    const signInButton = document.getElementById('signInBtn');

    if (signInButton) {
        signInButton.addEventListener('click', (e) => {
            e.preventDefault(); 
            

            signInButton.textContent = 'Verificando...';
            signInButton.disabled = true;

            setTimeout(() => {

                window.location.href = 'admin-panel.html';
            }, 1500);
        });
    }

    const addToCartBtn = document.getElementById('addToCartBtn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            alert('¡Acción de carrito/cotización disparada! (Simulación)');
        });
    }


    const storageButtons = document.querySelectorAll('.storage-options .option-btn');
    storageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            storageButtons.forEach(btn => btn.classList.remove('active-option'));
            e.target.classList.add('active-option');
        });
    });

    const colorCircles = document.querySelectorAll('.color-circle');
    colorCircles.forEach(circle => {
        circle.addEventListener('click', (e) => {
            colorCircles.forEach(c => c.classList.remove('selected-color'));
            e.target.classList.add('selected-color');
        });
    });
    

    const arrows = document.querySelectorAll('.carousel-arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            console.log('Flecha de carrusel pulsada. (Funcionalidad de desplazamiento pendiente)');
        });
    });
});