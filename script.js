document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const modoBtn = document.getElementById("modoBtn");
    const bienvenida = document.getElementById("bienvenida");
    const cerrarBienvenida = document.getElementById("cerrarBienvenida");
    const saludoBtn = document.getElementById("saludoBtn");
    const saludo = document.getElementById("saludo");
    const reloj = document.getElementById("reloj");
    const formulario = document.getElementById("contactForm");
    const mensajeFormulario = document.getElementById("mensajeFormulario");
    const detalleProyecto = document.getElementById("detalleProyecto");
    const cerrarDetalle = document.getElementById("cerrarDetalle");
    const tituloDetalle = document.getElementById("tituloDetalle");
    const textoDetalle = document.getElementById("textoDetalle");
    const tecnologiasDetalle = document.getElementById("tecnologiasDetalle");

    let idioma = "es";
    let proyectoActual = null;

    const proyectos = {
        windows: {
            es: {
                titulo: "Instalación de Windows",
                texto: "Instalación de Windows en una computadora y preparación básica del equipo para su funcionamiento.",
                tecnologias: ["Windows", "PC", "Configuración"]
            },
            en: {
                titulo: "Windows Installation",
                texto: "Installing Windows on a computer and carrying out the basic setup needed to prepare it for use.",
                tecnologias: ["Windows", "PC", "Installation"]
            }
        },

        formateo: {
            es: {
                titulo: "Formateo y configuración",
                texto: "Formateo y configuración de un sistema operativo para dejar el equipo preparado para su uso.",
                tecnologias: ["Windows", "PC", "Configuración"]
            },
            en: {
                titulo: "Formatting and Configuration",
                texto: "Formatting and configuring an operating system to prepare the computer for use.",
                tecnologias: ["Windows", "PC", "Configuration"]
            }
        }
    };

    const traducciones = {
        es: {
            idioma: "🇺🇸 English",
            modoOscuro: "🌙 Modo oscuro",
            modoClaro: "☀️ Modo claro",

            logo: "Mi Portafolio",

            menu: [
                "Inicio",
                "Sobre mí",
                "Formación",
                "Conocimientos",
                "Proyectos",
                "Galería",
                "Contacto"
            ],

            inicioEtiqueta: "PORTAFOLIO WEB PERSONAL",
            inicioTitulo: "Hola, me llamo",
            inicioNombre: "Cristofer Ivan",
            inicioTexto: "Te doy la bienvenida a mi portafolio personal. En este espacio comparto mis datos, trayectoria académica, destrezas, conocimientos en informática y los proyectos que he desarrollado.",
            conocerme: "Conocerme",
            verProyectos: "Ver proyectos",

            sobreEtiqueta: "SOBRE MÍ",
            sobreTitulo: "¿Quién soy?",
            sobreParrafos: [
                "Mi nombre es Cristofer Ivan Condori Cori, y tengo 17 años. Soy un muchacho responsable, concentrado e inteligente, cualidades que me permiten mantener una actitud positiva frente a los distintos desafíos que se presentan.",
                "Me caracterizo por ser detallado, comprometido y servicial en las actividades que realizo. Disfruto aprender cosas nuevas, adquirir conocimientos y perfeccionar constantemente mis habilidades.",
                "También me interesa la tecnología y el mantenimiento de computadoras, áreas en las que sigo ampliando mis conocimientos a través del estudio y la práctica constante."
            ],

            datos: [
                ["Nombre", "Cristofer Ivan Condori Cori"],
                ["Edad", "17 años"],
                ["Área de interés", "Tecnología e informática"],
                ["Cualidades", "Responsable, concentrado e inteligente"]
            ],

            formacionEtiqueta: "FORMACIÓN",
            formacionTitulo: "Mi formación",
            formacion: [
                [
                    "Formación académica",
                    "Formación orientada al aprendizaje y desarrollo de conocimientos informáticos y tecnológicos."
                ],
                [
                    "Área informática",
                    "Desarrollo de conocimientos relacionados con computadoras, sistemas operativos y herramientas informáticas."
                ]
            ],

            conocimientosEtiqueta: "CONOCIMIENTOS",
            conocimientosTitulo: "Conocimientos informáticos",
            conocimientos: [
                [
                    "Computación",
                    "Conocimientos básicos de computadoras, mantenimiento y configuración de equipos."
                ],
                [
                    "Ofimática",
                    "Manejo de herramientas de oficina para la elaboración de trabajos y actividades."
                ],
                [
                    "Sistemas operativos",
                    "Conocimientos relacionados con la instalación y configuración básica de sistemas operativos."
                ]
            ],

            proyectosEtiqueta: "PROYECTOS",
            proyectosTitulo: "Mis proyectos",
            proyectosTexto: "En esta sección se presentan los trabajos realizados durante mi formación informática.",
            mostrarMas: "Mostrar más",
            categoriaSistemas: "SISTEMAS",
            instalacion: "Instalación",
            configuracion: "Configuración",

            galeriaEtiqueta: "GALERÍA",
            galeriaTitulo: "Imágenes de mis trabajos",
            galeriaTexto: "Algunas imágenes relacionadas con mis actividades y trabajos informáticos.",

            contactoEtiqueta: "CONTACTO",
            contactoTitulo: "Si te gusto, puedes contactarme.",
            contactoTexto: "Si deseas comunicarte conmigo, puedes utilizar la siguiente información o completar el formulario.",
            telefono: "Teléfono",
            correoTitulo: "Correo electrónico",
            correoTexto: "Disponible mediante el formulario",
            nombre: "Nombre",
            correo: "Correo electrónico",
            mensaje: "Mensaje",
            enviar: "Enviar mensaje",
            placeholderNombre: "Escribe tu nombre",
            placeholderCorreo: "ejemplo@correo.com",
            placeholderMensaje: "Escribe tu mensaje...",

            finalTitulo: "Gracias por visitar mi portafolio",
            finalTexto: "Este sitio presenta parte de mi formación, mis habilidades y los trabajos realizados.",
            saludoBoton: "Mostrar mensaje",

            bienvenidaTitulo: "¡Bienvenida!",
            bienvenidaTexto: "Gracias por visitar mi pagina.",

            completar: "Completa todos los campos.",
            mensajeEnviado: "¡Gracias, {nombre}! Tu mensaje ha sido preparado correctamente.",

            saludos: [
                "¡Gracias por visitar mi portafolio!",
                "¡Espero que hayas disfrutado la visita!",
                "¡Gracias por conocer mi trabajo!",
                "¡Cada proyecto representa una parte de mi aprendizaje!",
                "¡Sigue explorando y descubre más sobre mi trabajo!"
            ],

            imagenes: [
                "Trabajo informático",
                "Actividad informática",
                "Instalación de Windows",
                "Configuración del sistema"
            ]
        },

        en: {
            idioma: "🇪🇸 Español",
            modoOscuro: "🌙 Dark mode",
            modoClaro: "☀️ Light mode",

            logo: "My Portfolio",

            menu: [
                "Home",
                "About Me",
                "Education",
                "Knowledge",
                "Projects",
                "Gallery",
                "Contact"
            ],

            inicioEtiqueta: "PERSONAL WEB PORTFOLIO",
            inicioTitulo: "Hello, I am",
            inicioNombre: "Cristofer Ivan",
            inicioTexto: "Welcome to my personal portfolio. Here I share my information, academic background, skills, computer knowledge and the projects I have developed.",
            conocerme: "Get to know me",
            verProyectos: "View projects",

            sobreEtiqueta: "ABOUT ME",
            sobreTitulo: "Who am I?",
            sobreParrafos: [
                "My name is Cristofer Ivan Condori Cori, and I am 17 years old. I consider myself responsible, focused and intelligent, qualities that help me maintain a positive attitude when facing different challenges.",
                "I am detail-oriented, committed and helpful in the activities I take on. I enjoy learning new things, gaining knowledge and continually improving my skills.",
                "I am also interested in technology and computer maintenance, areas in which I continue expanding my knowledge through study and regular practice."
            ],

            datos: [
                ["Name", "Cristofer Ivan Condori Cori"],
                ["Age", "17 years old"],
                ["Area of interest", "Technology and computing"],
                ["Qualities", "Responsible, focused and intelligent"]
            ],

            formacionEtiqueta: "EDUCATION",
            formacionTitulo: "My education",
            formacion: [
                [
                    "Academic education",
                    "Education focused on learning and developing computer and technological knowledge."
                ],
                [
                    "Computer area",
                    "Development of knowledge related to computers, operating systems and computer tools."
                ]
            ],

            conocimientosEtiqueta: "KNOWLEDGE",
            conocimientosTitulo: "Computer knowledge",
            conocimientos: [
                [
                    "Computing",
                    "Basic knowledge of computers, maintenance and equipment configuration."
                ],
                [
                    "Office tools",
                    "Knowledge of office tools for creating assignments and activities."
                ],
                [
                    "Operating systems",
                    "Knowledge related to the basic installation and configuration of operating systems."
                ]
            ],

            proyectosEtiqueta: "PROJECTS",
            proyectosTitulo: "My projects",
            proyectosTexto: "This section presents the work completed during my computer studies.",
            mostrarMas: "Show more",
            categoriaSistemas: "SYSTEMS",
            instalacion: "Installation",
            configuracion: "Configuration",

            galeriaEtiqueta: "GALLERY",
            galeriaTitulo: "Images of my work",
            galeriaTexto: "Some images related to my computer activities and work.",

            contactoEtiqueta: "CONTACT",
            contactoTitulo: "If you liked my portfolio, you can contact me.",
            contactoTexto: "If you would like to contact me, you can use the following information or complete the form.",
            telefono: "Phone",
            correoTitulo: "Email",
            correoTexto: "Available through the form",
            nombre: "Name",
            correo: "Email",
            mensaje: "Message",
            enviar: "Send message",
            placeholderNombre: "Write your name",
            placeholderCorreo: "example@email.com",
            placeholderMensaje: "Write your message...",

            finalTitulo: "Thank you for visiting my portfolio 💜",
            finalTexto: "This site presents part of my education, skills and the projects I have completed.",
            saludoBoton: "Show message",

            bienvenidaTitulo: "Welcome! 💜",
            bienvenidaTexto: "Thank you for visiting my page.",

            completar: "Please complete all fields.",
            mensajeEnviado: "Thank you, {nombre}! Your message has been prepared successfully.",

            saludos: [
                "Thank you for visiting my portfolio! ✨",
                "I hope you enjoyed the visit! 💜",
                "Thank you for checking out my work! 🚀",
                "Every project represents a part of my learning! 💻",
                "Keep exploring and discover more about my work! 🌟"
            ],

            imagenes: [
                "Computer work",
                "Computer activity",
                "Windows installation",
                "System configuration"
            ]
        }
    };

    let idiomaBtn = document.getElementById("idiomaBtn");

    if (!idiomaBtn && modoBtn) {
        idiomaBtn = document.createElement("button");
        idiomaBtn.id = "idiomaBtn";
        idiomaBtn.className = "modo-btn";
        idiomaBtn.type = "button";
        modoBtn.insertAdjacentElement("afterend", idiomaBtn);
    }

    function activarAnimacion(elemento) {
        if (!elemento) return;

        elemento.classList.remove("animacion-entrada");

        requestAnimationFrame(() => {
            elemento.classList.add("animacion-entrada");
        });
    }

    function mostrarBienvenida() {
        if (!bienvenida) return;

        const vistaAnterior =
            sessionStorage.getItem("bienvenidaMostrada");

        if (!vistaAnterior) {
            setTimeout(() => {
                bienvenida.classList.add("mostrar");
                sessionStorage.setItem(
                    "bienvenidaMostrada",
                    "true"
                );
            }, 700);
        }
    }

    function cerrarVentanaBienvenida() {
        if (!bienvenida) return;

        bienvenida.classList.remove("mostrar");
        bienvenida.classList.add("cerrando");

        setTimeout(() => {
            bienvenida.classList.remove("cerrando");
        }, 500);
    }

    function traducirPagina() {
        const t = traducciones[idioma];

        document.documentElement.lang = idioma;

        if (idiomaBtn) {
            idiomaBtn.textContent = t.idioma;
        }

        if (modoBtn) {
            modoBtn.textContent = body.classList.contains("modo-oscuro")
                ? t.modoClaro
                : t.modoOscuro;
        }

        const logo =
            document.querySelector(".logo span");

        if (logo) {
            logo.textContent = t.logo;
        }

        if (menu) {
            const enlaces =
                menu.querySelectorAll("a");

            enlaces.forEach((enlace, indice) => {
                if (t.menu[indice]) {
                    enlace.textContent =
                        t.menu[indice];
                }
            });
        }

        const inicio =
            document.getElementById("inicio");

        if (inicio) {
            const etiqueta =
                inicio.querySelector(".etiqueta");

            const titulo =
                inicio.querySelector("h1");

            const texto =
                inicio.querySelector(".hero-text p");

            const botones =
                inicio.querySelectorAll(
                    ".hero-buttons .btn"
                );

            if (etiqueta) {
                etiqueta.textContent =
                    t.inicioEtiqueta;
            }

            if (titulo) {
                titulo.innerHTML =
                    `${t.inicioTitulo} <strong>${t.inicioNombre}</strong>`;
            }

            if (texto) {
                texto.textContent =
                    t.inicioTexto;
            }

            if (botones[0]) {
                botones[0].textContent =
                        t.conocerme;
            }

            if (botones[1]) {
                botones[1].textContent =
                    t.verProyectos;
            }
        }

        const sobre =
            document.getElementById("sobre");

        if (sobre) {
            const etiqueta =
                sobre.querySelector(".etiqueta");

            const titulo =
                sobre.querySelector("h1");

            const parrafos =
                sobre.querySelectorAll(
                    ":scope > p"
                );

            if (etiqueta) {
                etiqueta.textContent =
                    t.sobreEtiqueta;
            }

            if (titulo) {
                titulo.textContent =
                    t.sobreTitulo;
            }

            parrafos.forEach((parrafo, indice) => {
                if (t.sobreParrafos[indice]) {
                    parrafo.textContent =
                        t.sobreParrafos[indice];
                }
            });

            const datos =
                sobre.querySelectorAll(".dato");

            datos.forEach((dato, indice) => {
                const strong =
                    dato.querySelector("strong");

                const span =
                    dato.querySelector("span");

                if (t.datos[indice]) {
                    if (strong) {
                        strong.textContent =
                            t.datos[indice][0];
                    }

                    if (span) {
                        span.textContent =
                            t.datos[indice][1];
                    }
                }
            });
        }

        const formacion =
            document.getElementById("formacion");

        if (formacion) {
            const etiqueta =
                formacion.querySelector(".etiqueta");

            const titulo =
                formacion.querySelector("h1");

            const items =
                formacion.querySelectorAll(
                    ".timeline-item"
                );

            if (etiqueta) {
                etiqueta.textContent =
                    t.formacionEtiqueta;
            }

            if (titulo) {
                titulo.textContent =
                    t.formacionTitulo;
            }

            items.forEach((item, indice) => {
                if (!t.formacion[indice]) return;

                const h3 =
                    item.querySelector("h3");

                const p =
                    item.querySelector("p");

                if (h3) {
                    h3.textContent =
                        t.formacion[indice][0];
                }

                if (p) {
                    p.textContent =
                        t.formacion[indice][1];
                }
            });
        }

        const habilidades =
            document.getElementById("habilidades");

        if (habilidades) {
            const etiqueta =
                habilidades.querySelector(".etiqueta");

            const titulo =
                habilidades.querySelector("h1");

            const items =
                habilidades.querySelectorAll(
                    ".habilidad"
                );

            if (etiqueta) {
                etiqueta.textContent =
                    t.habilidadesEtiqueta;
            }

            if (titulo) {
                titulo.textContent =
                    t.habilidadesTitulo;
            }

            items.forEach((item, indice) => {
                const tituloHabilidad =
                    item.querySelector(
                        ".habilidad-titulo > span:not(.icono-texto)"
                    );

                if (
                    tituloHabilidad &&
                    t.habilidades[indice]
                ) {
                    tituloHabilidad.textContent =
                        t.habilidades[indice];
                }
            });
        }

        const conocimientos =
            document.getElementById(
                "conocimientos"
            );

        if (conocimientos) {
            const etiqueta =
                conocimientos.querySelector(
                    ".etiqueta"
                );

            const titulo =
                conocimientos.querySelector(
                    "h1"
                );

            const tarjetas =
                conocimientos.querySelectorAll(
                    ".conocimiento-card"
                );

            if (etiqueta) {
                etiqueta.textContent =
                    t.conocimientosEtiqueta;
            }

            if (titulo) {
                titulo.textContent =
                    t.conocimientosTitulo;
            }

            tarjetas.forEach((tarjeta, indice) => {
                if (!t.conocimientos[indice]) {
                    return;
                }

                const h3 =
                    tarjeta.querySelector("h3");

                const p =
                    tarjeta.querySelector("p");

                if (h3) {
                    h3.textContent =
                        t.conocimientos[indice][0];
                }

                if (p) {
                    p.textContent =
                        t.conocimientos[indice][1];
                }
            });
        }

        const proyectosSeccion =
            document.getElementById("proyectos");

        if (proyectosSeccion) {
            const etiqueta =
                proyectosSeccion.querySelector(
                    ".etiqueta"
                );

            const titulo =
                proyectosSeccion.querySelector(
                    "h1"
                );

            const texto =
                proyectosSeccion.querySelector(
                    ":scope > p"
                );

            if (etiqueta) {
                etiqueta.textContent =
                    t.proyectosEtiqueta;
            }

            if (titulo) {
                titulo.textContent =
                    t.proyectosTitulo;
            }

            if (texto) {
                texto.textContent =
                    t.proyectosTexto;
            }

            const tarjetas =
                proyectosSeccion.querySelectorAll(
                    ".proyecto"
                );

            tarjetas.forEach(tarjeta => {
                const boton =
                    tarjeta.querySelector(
                        ".ver-mas"
                    );

                if (boton) {
                    boton.textContent =
                        t.mostrarMas;
                }

                const categoria =
                    tarjeta.querySelector(
                        ".categoria"
                    );

                if (categoria) {
                    categoria.textContent =
                        t.categoriaSistemas;
                }

                const identificador =
                    boton
                        ? boton.dataset.proyecto
                        : null;

                if (
                    identificador &&
                    proyectos[identificador]
                ) {
                    const datos =
                        proyectos[
                            identificador
                        ][idioma];

                    const h3 =
                        tarjeta.querySelector("h3");

                    const p =
                        tarjeta.querySelector(
                            ".card-content > p"
                        );

                    if (h3) {
                        h3.textContent =
                            datos.titulo;
                    }

                    if (p) {
                        p.textContent =
                            datos.texto;
                    }

                    const tecnologias =
                        tarjeta.querySelectorAll(
                            ".tecnologias span"
                        );

                    datos.tecnologias.forEach(
                        (tecnologia, indice) => {
                            if (tecnologias[indice]) {
                                tecnologias[
                                    indice
                                ].textContent =
                                    tecnologia;
                            }
                        }
                    );
                }
            });
        }

        const galeria =
            document.getElementById("galeria");

        if (galeria) {
            const etiqueta =
                galeria.querySelector(".etiqueta");

            const titulo =
                galeria.querySelector("h1");

            const texto =
                galeria.querySelector(
                    ":scope > p"
                );

            if (etiqueta) {
                etiqueta.textContent =
                    t.galeriaEtiqueta;
            }

            if (titulo) {
                titulo.textContent =
                    t.galeriaTitulo;
            }

            if (texto) {
                texto.textContent =
                    t.galeriaTexto;
            }

            const imagenes =
                galeria.querySelectorAll(
                    ".imagen-item img"
                );

            imagenes.forEach((imagen, indice) => {
                if (t.imagenes[indice]) {
                    imagen.alt =
                        t.imagenes[indice];
                }
            });
        }

        const contacto =
            document.getElementById("contacto");

        if (contacto) {
            const etiqueta =
                contacto.querySelector(
                    ".etiqueta"
                );

            const titulo =
                contacto.querySelector("h1");

            const texto =
                contacto.querySelector(
                    ":scope > p"
                );

            if (etiqueta) {
                etiqueta.textContent =
                    t.contactoEtiqueta;
            }

            if (titulo) {
                titulo.textContent =
                    t.contactoTitulo;
            }

            if (texto) {
                texto.textContent =
                    t.contactoTexto;
            }

            const contactoItems =
                contacto.querySelectorAll(
                    ".contacto-item"
                );

            if (contactoItems[0]) {
                const strong =
                    contactoItems[0].querySelector(
                        "strong"
                    );

                if (strong) {
                    strong.textContent =
                        t.telefono;
                }
            }

            if (contactoItems[1]) {
                const strong =
                    contactoItems[1].querySelector(
                        "strong"
                    );

                const p =
                    contactoItems[1].querySelector(
                        "p"
                    );

                if (strong) {
                    strong.textContent =
                        t.correoTitulo;
                }

                if (p) {
                    p.textContent =
                        t.correoTexto;
                }
            }

            const labels =
                contacto.querySelectorAll(
                    "form label"
                );

            if (labels[0]) {
                labels[0].textContent =
                    t.nombre;
            }

            if (labels[1]) {
                labels[1].textContent =
                    t.correo;
            }

            if (labels[2]) {
                labels[2].textContent =
                    t.mensaje;
            }

            const nombre =
                document.getElementById(
                    "nombre"
                );

            const correo =
                document.getElementById(
                    "correo"
                );

            const mensaje =
                document.getElementById(
                    "mensaje"
                );

            if (nombre) {
                nombre.placeholder =
                    t.placeholderNombre;
            }

            if (correo) {
                correo.placeholder =
                    t.placeholderCorreo;
            }

            if (mensaje) {
                mensaje.placeholder =
                    t.placeholderMensaje;
            }

            const enviar =
                contacto.querySelector(
                    "button[type='submit']"
                );

            if (enviar) {
                enviar.textContent =
                    t.enviar;
            }
        }

        const final =
            document.querySelector(".final");

        if (final) {
            const titulo =
                final.querySelector("h2");

            const texto =
                final.querySelector("p");

            if (titulo) {
                titulo.textContent =
                    t.finalTitulo;
            }

            if (texto) {
                texto.textContent =
                    t.finalTexto;
            }

            if (saludoBtn) {
                saludoBtn.textContent =
                    t.saludoBoton;
            }
        }

        if (bienvenida) {
            const titulo =
                bienvenida.querySelector("h2");

            const texto =
                bienvenida.querySelector("p");

            if (titulo) {
                titulo.textContent =
                    t.bienvenidaTitulo;
            }

            if (texto) {
                texto.textContent =
                    t.bienvenidaTexto;
            }
        }

        if (
            detalleProyecto &&
            proyectoActual &&
            proyectos[proyectoActual]
        ) {
            const datos =
                proyectos[
                    proyectoActual
                ][idioma];

            if (tituloDetalle) {
                tituloDetalle.textContent =
                    datos.titulo;
            }

            if (textoDetalle) {
                textoDetalle.textContent =
                    datos.texto;
            }

            if (tecnologiasDetalle) {
                tecnologiasDetalle.innerHTML = "";

                datos.tecnologias.forEach(
                    tecnologia => {
                        const elemento =
                            document.createElement(
                                "span"
                            );

                        elemento.textContent =
                            tecnologia;

                        tecnologiasDetalle.appendChild(
                            elemento
                        );
                    }
                );
            }
        }
    }

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("mostrar");
            menuBtn.classList.toggle("activo");

            menuBtn.textContent =
                menu.classList.contains("mostrar")
                    ? "×"
                    : "☰";
        });
    }

    if (menu) {
        menu.querySelectorAll("a").forEach(
            enlace => {
                enlace.addEventListener(
                    "click",
                    () => {
                        menu.classList.remove(
                            "mostrar"
                        );

                        if (menuBtn) {
                            menuBtn.classList.remove(
                                "activo"
                            );

                            menuBtn.textContent =
                                "☰";
                        }
                    }
                );
            }
        );
    }

    if (modoBtn) {
        modoBtn.addEventListener(
            "click",
            () => {
                body.classList.toggle(
                    "modo-oscuro"
                );

                traducirPagina();
            }
        );
    }

    if (idiomaBtn) {
        idiomaBtn.addEventListener(
            "click",
            () => {
                idioma =
                    idioma === "es"
                        ? "en"
                        : "es";

                traducirPagina();
            }
        );
    }

    if (cerrarBienvenida) {
        cerrarBienvenida.addEventListener(
            "click",
            cerrarVentanaBienvenida
        );
    }

    if (bienvenida) {
        bienvenida.addEventListener(
            "click",
            evento => {
                if (
                    evento.target === bienvenida
                ) {
                    cerrarVentanaBienvenida();
                }
            }
        );
    }

    document.addEventListener(
        "keydown",
        evento => {
            if (evento.key === "Escape") {
                cerrarVentanaBienvenida();

                if (detalleProyecto) {
                    detalleProyecto.classList.remove(
                        "mostrar"
                    );
                }

                if (menu) {
                    menu.classList.remove(
                        "mostrar"
                    );
                }

                if (menuBtn) {
                    menuBtn.classList.remove(
                        "activo"
                    );

                    menuBtn.textContent =
                        "☰";
                }
            }

            if (
                evento.key.toLowerCase() === "d"
            ) {
                if (modoBtn) {
                    modoBtn.click();
                }
            }

            if (
                evento.key.toLowerCase() === "i"
            ) {
                const inicio =
                    document.getElementById(
                        "inicio"
                    );

                if (inicio) {
                    inicio.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        }
    );

    const filtros =
        document.querySelectorAll(".filtro");

    const tarjetasProyecto =
        document.querySelectorAll(".proyecto");

    filtros.forEach(filtro => {
        filtro.addEventListener(
            "click",
            () => {
                filtros.forEach(item => {
                    item.classList.remove(
                        "activo"
                    );
                });

                filtro.classList.add(
                    "activo"
                );

                const categoria =
                    filtro.dataset.filtro;

                tarjetasProyecto.forEach(
                    (tarjeta, indice) => {
                        const pertenece =
                            categoria === "todos" ||
                            tarjeta.dataset.categoria ===
                                categoria;

                        if (pertenece) {
                            tarjeta.style.display =
                                "";

                            tarjeta.style.animation =
                                "aparecerProyecto 0.6s ease forwards";

                            tarjeta.style.animationDelay =
                                `${indice * 0.08}s`;
                        } else {
                            tarjeta.style.display =
                                "none";
                        }
                    }
                );
            }
        );
    });

    const botonesProyecto =
        document.querySelectorAll(
            ".ver-mas"
        );

    botonesProyecto.forEach(boton => {
        boton.addEventListener(
            "click",
            () => {
                const identificador =
                    boton.dataset.proyecto;

                const proyecto =
                    proyectos[
                        identificador
                    ];

                if (
                    !proyecto ||
                    !detalleProyecto
                ) {
                    return;
                }

                proyectoActual =
                    identificador;

                const datos =
                    proyecto[idioma];

                if (tituloDetalle) {
                    tituloDetalle.textContent =
                        datos.titulo;
                }

                if (textoDetalle) {
                    textoDetalle.textContent =
                        datos.texto;
                }

                if (tecnologiasDetalle) {
                    tecnologiasDetalle.innerHTML =
                        "";

                    datos.tecnologias.forEach(
                        tecnologia => {
                            const elemento =
                                document.createElement(
                                    "span"
                                );

                            elemento.textContent =
                                tecnologia;

                            tecnologiasDetalle.appendChild(
                                elemento
                            );
                        }
                    );
                }

                detalleProyecto.classList.add(
                    "mostrar"
                );

                detalleProyecto.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                activarAnimacion(
                    detalleProyecto
                );
            }
        );
    });

    if (cerrarDetalle) {
        cerrarDetalle.addEventListener(
            "click",
            () => {
                if (detalleProyecto) {
                    detalleProyecto.classList.remove(
                        "mostrar"
                    );
                }
            }
        );
    }

    if (formulario) {
        formulario.addEventListener(
            "submit",
            evento => {
                evento.preventDefault();

                const nombre =
                    document.getElementById(
                        "nombre"
                    );

                const correo =
                    document.getElementById(
                        "correo"
                    );

                const mensaje =
                    document.getElementById(
                        "mensaje"
                    );

                if (
                    !nombre ||
                    !correo ||
                    !mensaje
                ) {
                    return;
                }

                const nombreValor =
                    nombre.value.trim();

                const correoValor =
                    correo.value.trim();

                const mensajeValor =
                    mensaje.value.trim();

                if (
                    !nombreValor ||
                    !correoValor ||
                    !mensajeValor
                ) {
                    mensajeFormulario.textContent =
                        traducciones[
                            idioma
                        ].completar;

                    return;
                }

                mensajeFormulario.textContent =
                    traducciones[
                        idioma
                    ].mensajeEnviado.replace(
                        "{nombre}",
                        nombreValor
                    );

                mensajeFormulario.classList.add(
                    "mostrar-mensaje"
                );

                formulario.reset();

                setTimeout(() => {
                    mensajeFormulario.classList.remove(
                        "mostrar-mensaje"
                    );
                }, 5000);
            }
        );
    }

    if (saludoBtn && saludo) {
        saludoBtn.addEventListener(
            "click",
            () => {
                const mensajes =
                    traducciones[
                        idioma
                    ].saludos;

                const mensaje =
                    mensajes[
                        Math.floor(
                            Math.random() *
                            mensajes.length
                        )
                    ];

                saludo.textContent =
                    mensaje;

                saludo.classList.remove(
                    "mostrar-saludo"
                );

                requestAnimationFrame(() => {
                    saludo.classList.add(
                        "mostrar-saludo"
                    );
                });
            }
        );
    }

    function actualizarReloj() {
        if (!reloj) return;

        const ahora =
            new Date();

        const horas =
            String(
                ahora.getHours()
            ).padStart(2, "0");

        const minutos =
            String(
                ahora.getMinutes()
            ).padStart(2, "0");

        const segundos =
            String(
                ahora.getSeconds()
            ).padStart(2, "0");

        reloj.textContent =
            `${horas}:${minutos}:${segundos}`;
    }

    actualizarReloj();

    setInterval(
        actualizarReloj,
        1000
    );

    const secciones =
        document.querySelectorAll(
            ".section"
        );

    const observador =
        new IntersectionObserver(
            entradas => {
                entradas.forEach(
                    entrada => {
                        if (
                            entrada.isIntersecting
                        ) {
                            entrada.target.classList.add(
                                "visible"
                            );
                        }
                    }
                );
            },
            {
                threshold: 0.12
            }
        );

    secciones.forEach(
        seccion => {
            observador.observe(
                seccion
            );
        }
    );

    const imagenes =
        document.querySelectorAll(
            "img"
        );

    imagenes.forEach(
        imagen => {
            imagen.addEventListener(
                "mouseenter",
                () => {
                    imagen.classList.add(
                        "imagen-activa"
                    );
                }
            );

            imagen.addEventListener(
                "mouseleave",
                () => {
                    imagen.classList.remove(
                        "imagen-activa"
                    );
                }
            );
        }
    );

    document
        .querySelectorAll(".card")
        .forEach(card => {
            card.addEventListener(
                "mouseenter",
                () => {
                    card.classList.add(
                        "card-activa"
                    );
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {
                    card.classList.remove(
                        "card-activa"
                    );
                }
            );
        });

    document
        .querySelectorAll(".habilidad")
        .forEach(habilidad => {
            habilidad.addEventListener(
                "mouseenter",
                () => {
                    habilidad.classList.add(
                        "habilidad-activa"
                    );
                }
            );

            habilidad.addEventListener(
                "mouseleave",
                () => {
                    habilidad.classList.remove(
                        "habilidad-activa"
                    );
                }
            );
        });

    document
        .querySelectorAll(
            ".conocimiento-card"
        )
        .forEach(card => {
            card.addEventListener(
                "mouseenter",
                () => {
                    card.classList.add(
                        "conocimiento-activo"
                    );
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {
                    card.classList.remove(
                        "conocimiento-activo"
                    );
                }
            );
        });

    document
        .querySelectorAll(
            ".galeria-imagenes .imagen-item"
        )
        .forEach(item => {
            item.addEventListener(
                "click",
                () => {
                    const imagen =
                        item.querySelector(
                            "img"
                        );

                    if (!imagen) return;

                    const ventana =
                        document.createElement(
                            "div"
                        );

                    ventana.className =
                        "visor-imagen";

                    ventana.innerHTML = `
                        <button class="cerrar-visor">×</button>
                        <img src="${imagen.src}" alt="${imagen.alt}">
                        <p>${imagen.alt}</p>
                    `;

                    document.body.appendChild(
                        ventana
                    );

                    requestAnimationFrame(
                        () => {
                            ventana.classList.add(
                                "mostrar"
                            );
                        }
                    );

                    const cerrar =
                        ventana.querySelector(
                            ".cerrar-visor"
                        );

                    cerrar.addEventListener(
                        "click",
                        () => {
                            ventana.classList.remove(
                                "mostrar"
                            );

                            setTimeout(
                                () => {
                                    ventana.remove();
                                },
                                300
                            );
                        }
                    );

                    ventana.addEventListener(
                        "click",
                        evento => {
                            if (
                                evento.target ===
                                ventana
                            ) {
                                ventana.classList.remove(
                                    "mostrar"
                                );

                                setTimeout(
                                    () => {
                                        ventana.remove();
                                    },
                                    300
                                );
                            }
                        }
                    );
                }
            );
        });

    let ultimaPosicion =
        window.scrollY;

    window.addEventListener(
        "scroll",
        () => {
            const posicionActual =
                window.scrollY;

            if (
                posicionActual >
                ultimaPosicion
            ) {
                body.classList.add(
                    "desplazando-abajo"
                );
            } else {
                body.classList.remove(
                    "desplazando-abajo"
                );
            }

            ultimaPosicion =
                posicionActual;
        }
    );

    window.addEventListener(
        "mousemove",
        evento => {
            const x =
                (
                    evento.clientX /
                    window.innerWidth -
                    0.5
                ) * 8;

            const y =
                (
                    evento.clientY /
                    window.innerHeight -
                    0.5
                ) * 8;

            const perfil =
                document.querySelector(
                    ".perfil"
                );

            if (perfil) {
                perfil.style.transform =
                    `translate(${x}px, ${y}px)`;
            }
        }
    );

    window.addEventListener(
        "mouseleave",
        () => {
            const perfil =
                document.querySelector(
                    ".perfil"
                );

            if (perfil) {
                perfil.style.transform =
                    "translate(0, 0)";
            }
        }
    );

    traducirPagina();

    mostrarBienvenida();
});

function animarParrafo(parrafo) {
    if (
        !parrafo ||
        parrafo.dataset.animado === "true"
    ) {
        return;
    }

    const texto =
        parrafo.textContent;

    parrafo.textContent = "";

    parrafo.dataset.animado =
        "true";

    [...texto].forEach(
        (letra, i) => {
            const span =
                document.createElement(
                    "span"
                );

            span.textContent =
                letra;

            span.style.display =
                "inline";

            span.style.opacity =
                "0";

            span.style.transform =
                "translateY(12px)";

            span.style.filter =
                "blur(3px)";

            span.style.transition =
                "opacity .3s ease, filter .3s ease";

            if (letra === " ") {
                span.textContent =
                    "\u00A0";
            }

            parrafo.appendChild(
                span
            );

            setTimeout(
                () => {
                    span.style.opacity =
                        "1";

                    span.style.filter =
                        "blur(0)";
                },
                300 + i * 18
            );
        }
    );
}

const parrafoHero =
    document.querySelector(
        ".hero-text p"
    );

if (parrafoHero) {
    animarParrafo(
        parrafoHero
    );
}