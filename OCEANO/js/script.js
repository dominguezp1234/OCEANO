document.addEventListener("DOMContentLoaded", function () {

    /* --- 1. Animación al hacer Scroll (Intersection Observer) --- */
    const elementos = document.querySelectorAll(".aparecer");

    const observar = new IntersectionObserver(
        function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observar.unobserve(entrada.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    elementos.forEach(function (elemento) {
        observar.observe(elemento);
    });

    /* --- 2. Menú Hamburguesa para Dispositivos Móviles --- */
    const nav = document.querySelector("nav");
    if (nav) {
        const botonMenu = document.createElement("button");
        botonMenu.classList.add("menu-hamburguesa");
        botonMenu.ariaLabel = "Abrir menú de navegación";
        botonMenu.innerHTML = "<span></span><span></span><span></span>";
        
        nav.appendChild(botonMenu);

        const menuLista = nav.querySelector("ul");

        botonMenu.addEventListener("click", function () {
            menuLista.classList.toggle("menu-abierto");
            botonMenu.classList.toggle("activo");
        });
    }

    /* --- 3. Buscador Dinámico (Principalmente para vida-marina.html) --- */
    const buscadorInput = document.getElementById("buscador-especies");
    if (buscadorInput) {
        buscadorInput.addEventListener("input", function (e) {
            const termino = e.target.value.toLowerCase().trim();
            const tarjetas = document.querySelectorAll(".tarjetas .tarjeta");

            tarjetas.forEach(function (tarjeta) {
                const titulo = tarjeta.querySelector("h3") ? tarjeta.querySelector("h3").textContent.toLowerCase() : "";
                const descripcion = tarjeta.querySelector("p") ? tarjeta.querySelector("p").textContent.toLowerCase() : "";

                if (titulo.includes(termino) || descripcion.includes(termino)) {
                    tarjeta.style.display = "block";
                } else {
                    tarjeta.style.display = "none";
                }
            });
        });
    }

    /* --- 4. Efecto de movimiento sutil en Hero --- */
    const hero = document.querySelector(".hero");

    if (hero) {
        hero.addEventListener("mousemove", function (evento) {
            const x = (evento.clientX / window.innerWidth - 0.5) * 8;
            const y = (evento.clientY / window.innerHeight - 0.5) * 8;
            const contenido = hero.querySelector(".hero-contenido");

            if (contenido) {
                contenido.style.transform = `translate(${x}px, ${y}px)`;
            }
        });

        hero.addEventListener("mouseleave", function () {
            const contenido = hero.querySelector(".hero-contenido");
            if (contenido) {
                contenido.style.transform = "translate(0, 0)";
            }
        });
    }
});