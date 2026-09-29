/*Hecho por dante novoa el martes 25 de agosto */

const productos = [
    { id:1, marca:'nike', nombre:'Mercurial Superfly IX', tipo:'Velocidad', precio:285000, tag:'Nuevo', desc:'Placa de carbono reactiva y upper Flyknit 2.0 para velocidad pura.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKO1vLLjphcvKD28nW2uPP45WfuhSmoczoJYHPh5_iZw&s', video:'https://www.youtube.com/watch?v=A1IG7SS8H6Y&pp=ygUrbWVyY3VyaWFsIHN1cGVyZmx5IElYIGVsaXRlIHZpZGUgZGUgbXVlc3RyYQ%3D%3D'},
    { id:2, marca:'nike', nombre:'Phantom GX 2', tipo:'Control', precio:260000, tag:'Popular', desc:'Grip Knit 2.0 para toque y control superior en cualquier condición.', img:'data:image/jpeg;base64,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' },
    { id:3, marca:'nike', nombre:'Tiempo Legend 10', tipo:'Clásico', precio:245000, tag:null, desc:'Cuero premium FlyTouch Plus para el toque clásico reinventado.', img:'data:image/webp;base64,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' },
    { id:4, marca:'adidas', nombre:'Predator Edge+', tipo:'Potencia', precio:270000, tag:'Nuevo', desc:'ZONE SKIN 2.0 con elementos de agarre para disparos devastadores.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_1L7PB9UiUdoiajVTUDGGokMrqZH1V3GjJ4XxfwCSw&s10' },
    { id:5, marca:'adidas', nombre:'X Speedportal', tipo:'Velocidad', precio:255000, tag:null, desc:'CARBITEX SPEEDFRAME para aceleración explosiva en cada sprint.', img:'data:image/webp;base64,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' },
    { id:6, marca:'adidas', nombre:'Copa Pure II', tipo:'Toque', precio:240000, tag:null, desc:'STRIKESKIN upper con tecnología de toque suave para profesionales.', img:'https://th.bing.com/th/id/OIP.940sD4UO5okstv0lQ-L5-QHaHa?w=193&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
    { id:7, marca:'puma', nombre:'Future 8', tipo:'Creatividad', precio:235000, tag:'Nuevo', desc:'FUZIONFIT+ adaptativo con NETFIT para un ajuste personalizado total.', img:'https://th.bing.com/th/id/OIP.FCIroXVquUXhm0O_ZNp8NQHaHa?w=215&h=215&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
    { id:8, marca:'puma', nombre:'Ultra Ultimate', tipo:'Velocidad', precio:250000, tag:'Popular', desc:'Pebax SpeedUnit outsole ultraligero para velocidad máxima.', img:'https://th.bing.com/th/id/OIP.Lbu_Kd5IdpsctGQLxGkvVQHaHa?w=279&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
    { id:9, marca:'puma', nombre:'King Platinum', tipo:'Clásico', precio:225000, tag:null, desc:'Cuero K-Better premium con suela de estudiantes para líderes.', img:'https://th.bing.com/th/id/OIP.8vqm43a3OL8Ru-CRzHt54AHaHa?w=220&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
    { id:10, marca:'new balance', nombre:'Tekela v4', tipo:'Control', precio:230000, tag:null, desc:'Kinetic Stitch upper para un toque de balón preciso y consistente.', img:'https://th.bing.com/th/id/OIP.rAfeVCiZJ6cg5gBTFnpIKAHaHa?w=220&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
    { id:11, marca:'new balance', nombre:'Furon v7', tipo:'Velocidad', precio:245000, tag:'Nuevo', desc:'Hypoknit superior con placa de nylon para velocidad natural.', img:'https://th.bing.com/th/id/OIP.OZtxBcLWNYDx7K9gogDZbwHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
];

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btn-musica");

if (btnMusica) {
    btnMusica.addEventListener("click", () => {
        if (musica.paused) {
            musica.play();
            btnMusica.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        } else {
            musica.pause();
            btnMusica.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        }
    });
}
/* funcionamiento de el carrusel en js facu y dante */
const imagenes = document.querySelectorAll('.carrusel-img');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let indiceActual = 0;

function mostrarImagen(indice) {
  imagenes.forEach((img, i) => {
    img.classList.toggle('activa', i === indice);
  });
}

btnNext.addEventListener('click', () => {
  indiceActual = (indiceActual + 1) % imagenes.length;
  mostrarImagen(indiceActual);
});

btnPrev.addEventListener('click', () => {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indiceActual);
});

const marcas = ['todas', 'nike', 'adidas', 'puma', 'new balance'];
const tallas = [38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 45];

let carritoCount = 0;
let filtroActual = 'todas';
let tallaSeleccionada = null;
let productoModalActual = null;

function initPreloader() {
    const fill = document.querySelector('.preloader-bar-fill');
    const percent = document.querySelector('.preloader-percent');
    const letters = document.querySelectorAll('.preloader-text span');
    const preloader = document.getElementById('preloader');

    gsap.to(letters, {
        y: 0, duration: 0.6, stagger: 0.04, ease: 'power3.out', delay: 0.2
    });

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress > 100) progress = 100;
        fill.style.width = progress + '%';
        percent.textContent = Math.floor(progress) + '%';
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                gsap.to(preloader, {
                    yPercent: -100, duration: 0.8, ease: 'power4.inOut', delay: 0.5,
                    onComplete: () => {
                        preloader.style.display = 'none';
                        initHeroAnimation();
                        initScrollAnimations();
                    }
                });
            }, 300);
        }
    }, 120);
}

function initCursor() {
    if (window.innerWidth < 768) return;
    const cursor = document.getElementById('cursor');
    const dot = document.getElementById('cursor-dot');
    let mx = 0, my = 0, cx = 0, cy = 0;

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    function updateCursor() {
        cx += (mx - cx) * 0.12;
        cy += (my - cy) * 0.12;
        cursor.style.left = cx + 'px';
        cursor.style.top = cy + 'px';
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    const observer = new MutationObserver(() => {
        document.querySelectorAll('.product-card, .filtro-btn, .talla-btn, a, button, .search-input').forEach(el => {
            el.removeEventListener('mouseenter', addActive);
            el.removeEventListener('mouseleave', removeActive);
            el.addEventListener('mouseenter', addActive);
            el.addEventListener('mouseleave', removeActive);
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    function addActive() { cursor.classList.add('active'); }
    function removeActive() { cursor.classList.remove('active'); }
}

function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let w, h, particles = [], mouse = { x: -1000, y: -1000 };

    function resize() {
        w = canvas.width = canvas.offsetWidth;
        h = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const count = Math.min(80, Math.floor((w * h) / 15000));
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * w, y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.5 + 0.1
        });
    }

    document.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    function draw() {
        ctx.clearRect(0, 0, w, h);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;

            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                const force = (150 - dist) / 150 * 0.8;
                p.x += (dx / dist) * force;
                p.y += (dy / dist) * force;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(204,255,0,${p.alpha})`;
            ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(204,255,0,${0.06 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(draw);
    }
    draw();
}

function initHeroAnimation() {
    const title = document.getElementById('hero-title');
    const text = 'BOTINES';
    title.innerHTML = ''; 
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = char;
        title.appendChild(span);
    });

    const tl = gsap.timeline();
    tl.to('.hero-title .letter', {
        y: 0, rotateX: 0, opacity: 1,
        duration: 0.9, stagger: 0.06, ease: 'power4.out'
    })
    .to('#hero-line', {
        width: 80, opacity: 1, duration: 0.6, ease: 'power2.out'
    }, '-=0.3')
    .to('#hero-sub', {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out'
    }, '-=0.3')
    .to('#hero-cta', {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out'
    }, '-=0.3');
}

function initMarquee() {
    const row1 = document.getElementById('marquee-row-1');
    const row2 = document.getElementById('marquee-row-2');
    const brands = ['NIKE', 'ADIDAS', 'PUMA', 'NEW BALANCE', 'TOPPER', 'UMBRO'];
    const dot = '<span class="marquee-dot">★</span>';

    let html1 = '', html2 = '';
    for (let r = 0; r < 4; r++) {
        brands.forEach(b => { html1 += `<span class="marquee-item">${b} ${dot}</span>`; });
        [...brands].reverse().forEach(b => { html2 += `<span class="marquee-item">${b} ${dot}</span>`; });
    }
    row1.innerHTML = html1;
    row2.innerHTML = html2;
}

function initFiltros() {
    const container = document.getElementById('filtros');
    marcas.forEach(marca => {
        const btn = document.createElement('button');
        btn.className = 'filtro-btn' + (marca === 'todas' ? ' active' : '');
        btn.textContent = marca === 'todas' ? 'Todas' : marca.toUpperCase();
        btn.dataset.marca = marca;
        btn.addEventListener('click', () => filtrarProductos(marca));
        container.appendChild(btn);
    });
}

function filtrarProductos(marca) {
    filtroActual = marca;
    document.querySelectorAll('.filtro-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.marca === marca);
    });

    const cards = document.querySelectorAll('#productos-grid .product-card');
    gsap.to(cards, {
        opacity: 0, y: 30, scale: 0.95,
        duration: 0.3, stagger: 0.03,
        onComplete: () => {
            renderProductos();
            setTimeout(() => {
                document.querySelectorAll('#productos-grid .product-card').forEach((card, i) => {
                    setTimeout(() => card.classList.add('visible'), i * 60);
                });
            }, 50);
        }
    });
}

function renderProductos() {
    const grid = document.getElementById('productos-grid');
    const countEl = document.getElementById('productos-count');
    const filtrados = filtroActual === 'todas'
        ? productos
        : productos.filter(p => p.marca === filtroActual);

    countEl.textContent = filtrados.length + ' producto' + (filtrados.length !== 1 ? 's' : '');

    if (filtrados.length === 0) {
        grid.innerHTML = `<div class="no-productos"><i class="fa-regular fa-futbol"></i><p>No hay productos para esta marca.</p></div>`;
        return;
    }

    grid.innerHTML = filtrados.map(p => `
        <article class="product-card" data-id="${p.id}" onclick="abrirModal(${p.id})">
            <div class="card-img-wrap">
                <img src="${p.img}" alt="${p.nombre}" loading="lazy">
                <div class="card-img-overlay"></div>
                ${p.tag ? `<span class="card-badge">${p.tag}</span>` : ''}
                <span class="card-marca-badge">${p.marca.toUpperCase()}</span>
            </div>
            <div class="card-body">
                <h3 class="card-nombre">${p.nombre}</h3>
                <p class="card-tipo">${p.tipo}</p>
                <div class="card-footer">
                    <span class="card-precio">$${p.precio.toLocaleString('es-AR')} <small>ARS</small></span>
                    <button class="card-btn" aria-label="Ver ${p.nombre}" onclick="event.stopPropagation(); abrirModal(${p.id})">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join('');

    initTiltCards();
}

function initTiltCards() {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
        });
    });
}

function abrirModal(id) {
    const p = productos.find(pr => pr.id === id);
    if (!p) return;
    productoModalActual = p;
    tallaSeleccionada = null;

    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-img').alt = p.nombre;
    document.getElementById('modal-marca').textContent = p.marca.toUpperCase();
    document.getElementById('modal-nombre').textContent = p.nombre;
    document.getElementById('modal-tipo').textContent = p.tipo;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal-precio').textContent = '$' + p.precio.toLocaleString('es-AR');

    const tallasContainer = document.getElementById('modal-tallas');
    tallasContainer.innerHTML = tallas.map(t =>
        `<button class="talla-btn" data-talla="${t}" onclick="seleccionarTalla(this, ${t})">${t}</button>`
    ).join('');

    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

function seleccionarTalla(btn, talla) {
    document.querySelectorAll('.talla-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    tallaSeleccionada = talla;
}

document.getElementById('modal-close').addEventListener('click', cerrarModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) cerrarModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarModal(); });

document.getElementById('modal-add-btn').addEventListener('click', () => {
    if (!tallaSeleccionada) {
        document.querySelectorAll('.talla-btn').forEach(b => {
            b.style.borderColor = '#CCFF00';
            setTimeout(() => b.style.borderColor = '', 800);
        });
        return;
    }
    agregarAlCarrito(productoModalActual.nombre + ' - Talla ' + tallaSeleccionada);
    cerrarModal();
});

function agregarAlCarrito(nombre) {
    carritoCount++;
    const countEl = document.getElementById('cart-count');
    countEl.textContent = carritoCount;
    countEl.classList.add('show');

    gsap.fromTo(countEl, { scale: 1.5 }, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.4)' });

    showToast(nombre + ' agregado al carrito');
}

function showToast(text) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    toastText.textContent = text;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function initNavbar() {
    const nav = document.getElementById('navbar');
    const progressBar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        nav.classList.toggle('scrolled', scrollY > 50);
        progressBar.style.width = (scrollY / docHeight * 100) + '%';
    });
}

function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.catalogo-titulo', {
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.catalogo-titulo', start: 'top 85%' }
    });
    gsap.from('.catalogo-count', {
        y: 40, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: '.catalogo-titulo', start: 'top 85%' }
    });
    gsap.from('#filtros', {
        y: 30, opacity: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '#filtros', start: 'top 90%' }
    });
    
    const searchContainer = document.querySelector('.search-container');
    if(searchContainer) {
        gsap.from('.search-container', {
            y: 30, opacity: 0, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: '.search-container', start: 'top 90%' }
        });
    }

    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const index = [...card.parentNode.children].indexOf(card);
                setTimeout(() => card.classList.add('visible'), index * 70);
                gridObserver.unobserve(card);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('#productos-grid .product-card').forEach(card => gridObserver.observe(card));

    gsap.from('.destacado-content', {
        x: -80, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '#destacado', start: 'top 70%' }
    });

    document.querySelectorAll('.beneficio-card').forEach((card, i) => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setTimeout(() => card.classList.add('visible'), i * 120);
                observer.unobserve(card);
            }
        }, { threshold: 0.2 });
        observer.observe(card);
    });

    gsap.from('#marquee', {
        opacity: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: '#marquee', start: 'top 95%' }
    });
}

async function buscarAPI() {
    const campoBusqueda = document.getElementById('campoBusqueda');
    const contenedorResultados = document.getElementById('resultados');

    if (!campoBusqueda || !contenedorResultados) return;

    const textoBuscado = campoBusqueda.value.trim().toLowerCase();

    if (textoBuscado === '') {
        contenedorResultados.innerHTML = '';
        return;
    }

    contenedorResultados.innerHTML = `
        <div class="buscando">
            <p>Buscando Pokémon...</p>
        </div>
    `;

    try {
        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${textoBuscado}`
        );

        if (!respuesta.ok) {
            contenedorResultados.innerHTML = `
                <div class="no-productos">
                    <p>❌ No encontramos ese Pokémon.</p>
                </div>
            `;
            return;
        }

        const pokemon = await respuesta.json();

        const nombre = pokemon.name;
        const imagen = pokemon.sprites.other['official-artwork'].front_default;
        const tipos = pokemon.types
            .map(tipo => tipo.type.name)
            .join(' / ');

        contenedorResultados.innerHTML = `
            <article class="product-card visible">

                <div class="card-img-wrap">
                    <img 
                        src="${imagen}" 
                        alt="${nombre}"
                    >
                </div>

                <div class="card-body">
                    <h3 class="card-nombre">
                        ${nombre.toUpperCase()}
                    </h3>

                    <p class="card-tipo">
                        Tipo: ${tipos}
                    </p>

                    <p>
                        Pokémon #${pokemon.id}
                    </p>

                    <p>
                        Altura: ${pokemon.height / 10} m
                    </p>

                    <p>
                        Peso: ${pokemon.weight / 10} kg
                    </p>
                </div>

            </article>
        `;
        
    } catch (error) {
        contenedorResultados.innerHTML = `
            <div class="no-productos">
                <p>❌ Ocurrió un error al buscar el Pokémon.</p>
            </div>
        `;
    }
}

function initSearch() {
    const campoBusqueda = document.getElementById('campoBusqueda');
    const botonBuscar = document.getElementById('botonBuscar');
    
    if (campoBusqueda) {
        campoBusqueda.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                buscarAPI();        
            }
        });
    }
    if (botonBuscar) {
        botonBuscar.addEventListener('click', buscarAPI);     
    }
}
async function cargarJuegoPokemon() {

    const imagenPokemon = document.getElementById('pokemon-imagen');
    const opcionesPokemon = document.getElementById('opciones-pokemon');
    const mensajePokemon = document.getElementById('mensaje-pokemon');

    if (!imagenPokemon || !opcionesPokemon) return;

    mensajePokemon.textContent = 'Adiviná el Pokémon';

    imagenPokemon.innerHTML = '<p>Cargando Pokémon...</p>';
    opcionesPokemon.innerHTML = '';

    // Elegimos un Pokémon al azar
    const numeroPokemon = Math.floor(Math.random() * 151) + 1;

    const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`
    );

    const pokemonCorrecto = await respuesta.json();

    // Imagen del Pokémon
    const imagen = pokemonCorrecto.sprites.other['official-artwork'].front_default;

    imagenPokemon.innerHTML = `
        <img 
            src="${imagen}" 
            alt="Pokemon para adivinar"
        >
    `;

    // Guardamos el nombre correcto
    const nombreCorrecto = pokemonCorrecto.name;

    // Creamos dos números diferentes al correcto
    let numeroIncorrecto1;
    let numeroIncorrecto2;

    do {
        numeroIncorrecto1 = Math.floor(Math.random() * 151) + 1;
    } while (numeroIncorrecto1 === numeroPokemon);

    do {
        numeroIncorrecto2 = Math.floor(Math.random() * 151) + 1;
    } while (
        numeroIncorrecto2 === numeroPokemon ||
        numeroIncorrecto2 === numeroIncorrecto1
    );

    // Buscamos los dos Pokémon incorrectos
    const respuesta1 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${numeroIncorrecto1}`
    );

    const respuesta2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${numeroIncorrecto2}`
    );

    const pokemonIncorrecto1 = await respuesta1.json();
    const pokemonIncorrecto2 = await respuesta2.json();

    // Creamos las tres opciones
    let opciones = [
        nombreCorrecto,
        pokemonIncorrecto1.name,
        pokemonIncorrecto2.name
    ];

    // Mezclamos las opciones
    opciones.sort(() => Math.random() - 0.5);

    opcionesPokemon.innerHTML = '';

    opciones.forEach(nombre => {

        const boton = document.createElement('button');

        boton.textContent = nombre.toUpperCase();

        boton.addEventListener('click', () => {

            if (nombre === nombreCorrecto) {
                mensajePokemon.textContent = '¡Correcto! 🎉';
            } else {
                mensajePokemon.textContent =
                    `Incorrecto. Era ${nombreCorrecto.toUpperCase()}`;
            }

        });

        opcionesPokemon.appendChild(boton);
    });
}
const botonNuevoPokemon = document.getElementById('nuevo-pokemon');

if (botonNuevoPokemon) {
    botonNuevoPokemon.addEventListener('click', cargarJuegoPokemon);
}

cargarJuegoPokemon();
function initJuego() {
    
}

function init() {
    initPreloader();
    initCursor();
    initParticles();
    initMarquee();
    initFiltros();
    renderProductos();
    initNavbar();
    initSearch();
    initJuego();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}