    const dossiers = {
    'Dossier 1': {
        description: "Toutes les “mayo” ne sont pas de véritables mayonnaises.<br>Selon la FDA (Food and Drug Administration), une sauce doit contenir du jaune d'œuf et au moins 65 % d’huile végétale pour mériter pleinement cette appellation. Hellmann’s coche toutes ces cases, et pourtant, les gens appellent la ***Real Mayonnaise*** d’Hellmann’s « mayo ». Il est temps que ça change. <br> Pour remédier à cela, la marque lance la campagne « Ain’t Your “Mayo” », où elle abandonne temporairement son étiquette classique afin de rappeler la véritable nature de son produit, gage d'excellence culinaire. Ceux qui ont osé parler sur X de la mayonnaise d'Hellmann’s en utilisant le terme “mayo” sont exposés sur un billboard à Times Square et doivent s’excuser publiquement pour en disparaître. <br>Grâce à cette activation, tout le monde se souviendra qu'il faut appeler la mayonnaise Hellmann's par son nom complet.<br> Parce que la mayonnaise Hellmann's n’est pas de la simple “mayo”. C’est de la Vraie Mayonnaise.",
        images: ['photo/hellmanns/Board_1 copie.jpg', 'photo/hellmanns/Board_2 copie.jpg', 'photo/hellmanns/Board_3 copie.jpg','photo/hellmanns/Board_4 copie.jpg','photo/hellmanns/Board_5 copie.jpg', 'photo/miniature/hellmann.png'],
        type: 'ACTIVATION',
        video: 'https://youtu.be/X-5ET_ffby4', // Remplace par ton lien YouTube
        poster:'photo/miniature/hellmann.png',
        projectFamily: 'Case',
        projectName: 'Ain‘t Your "Mayo"',  // Nom du projet
        likedByBrand: true,

    },
    'Dossier 2': {
        description: 'Laïka est la première chienne à avoir été envoyée dans l’espace. Elle a été choisie car contrairement à un chien, elle ne doit pas lever la patte pour faire ses besoins, économisant ainsi de la place.<br>Pour la chienne, la NASA a reconnu que la femelle avait des avantages que le chien n’avait pas. Imaginez qu’on valorise les atouts d’une chienne et pas ceux d’une femme, ça serait fou non ?<br>Laïka œuvre pour plus de présence féminine dans le secteur de l’aérospatial en présentant une vidéo absurde et décalée, se moquant des clichés sexistes.',
        type: 'vidéo',
        video: 'https://youtu.be/rlr9gjpPX3Q',
        poster:'photo/miniature/laika_miniature.png',
        projectName: 'Steinkrebse',  // Nom du projet
    },

   'Dossier 3': {
    description: "EasyJet veut remédier à sa baisse drastique des réservations de vol hors-saison, et décide de lancer une campagne sur un réseau social.\n\nPendant les périodes estivales, il y a toujours du monde et ça pose le problème de la concurrence amoureuse.\nNous avons voulu satisfaire nos jeunes célibataires connectés qui rentrent bredouille de vacances, sans avoir réussi à pécho.<br> La campagne “Easy Love Story” est en partenariat avec LE réseau social où il y a le plus de concurrence amoureuse… Tinder.<br> <br>Easy Love Story met en avant les voyages hors saison pour rencontrer votre amour de vacances en dehors des périodes touristiques, sans compétition, car finalement les meilleures vacances pour pécho sont quand les autres n’y sont pas !",
    type: 'Activation',
    videos: [  
        'videos/DATECAM_easy.mp4',
        'videos/caseeasy.mp4',
        'videos/easyjet_interface.mp4',
    ],
    posters: [  // Ajoute les miniatures correspondantes
        'photo/miniature/date_cam.png',
        'photo/miniature/easy_case.png',
        'photo/miniature/easy_interface.png',
        ],

    projectFamily: [
        'Activation - Caméra Cachée',
        'Case',
        'Interface',
    ],

    projectName: 'Easy Love Story',
    // videoSize: { width: '800px', height: '450px' }  // Taille pour toutes les vidéos ou tu peux spécifier des tailles différentes
    videosPositions: [ // Positions spécifiques pour chaque vidéo
            { top: "50px", left: "575px" },
            { top: "125px", left: "625px" },
            { top: "150px", left: "990px" }
        ]
},


    'Dossier 4': {
    description: "Série d’affiches pour le Vintage Computer Festival 2024 à Berlin. Pour ces affiches promotionnelles, j’ai préconisé une esthétique qui mêle des éléments 3D et numériques. J’ai intentionnellement préservé et introduit des bugs et des glitchs, apparus pendant le traitement de l’image. Les typos et effets choisis évoquent l’époque célébrée par le festival.",
    images: ['photo/VCF1.png', 'photo/VCF2.png', 'photo/VCF3.png','photo/VCF4.png'],
    type: 'Affiches',
    projectName: 'Vintage Computer Festival'  // Nom du projet
    
},


    'Dossier 5': {
        description: "Participation au concours Mlle Pitch 2025, dans la catégorie Communication 360. <br> Cet édition avait pour but de faire connaître et de récolter des fonds pour le Samu Social. <br> Beaucoup de personnes ont des à priori sur les sans abris : bons à rien, sans avenir, incompétents... Pourtant, 1 sans-abris sur 2 était inséré dans la vie active avant d’être en situation de précarité. Comme toute personne, les personnes sans abris possèdent des compétences, des qualités et des talents uniques qui méritent d’être reconnus. Nous avons donc inventé “Les Talentueux“, une campagne de communication qui met en lumière celles et ceux qui sont bien trop souvent passés sous silence. “Les Talentueux du Samu Social“ permet de combattre les préjugés et d'encourager les dons.",
        images: ['photo/samusocial0.jpg', 'photo/samusocial1.png'],
        projectName: 'Les Talentueux',  // Nom du projet
        type: 'CAMPAGNE 360',
        video: 'https://youtu.be/23Voos-MeHY',
        poster:'photo/miniature/samusocial.png',
        projectFamily: 'Case',

    },


    'Dossier 6': {
        description: "Projet personnel de réalisation de visuels publicitaires pour le lip oil de la marque Fenty Skin. Réalisés entièrement en 3D sur Blender, ces visuels s'imprègnent de l'esprit estival, rafraîchissant et coloré que la marque met en avant sur ces réseaux sociaux. Ici, j'ai voulu faire un parallèle et par métaphore faire paraître le lip oil aussi rafraîchissant et agréable que le fait de boire un cocktail en été.",
        type: 'Visuels 3D',
        images: [ 'photo/fenty/liquid0.png', 'photo/fenty/liquid1.png', 'photo/fenty/liquid2.png' ],
        projectName: 'Fenty Skin'// Nom du projet
    },

   // 'Dossier 7': {
    //    description: 'Application de rencontre',
    //    image: 'photo/steinkrebse.png',
    //    projectName: 'Odla'  // Nom du projet
   // },

   'Dossier 8': {
        description: "Réalisation de visuels publicitaires pour le nouveau hot gloss de la marque Martine Cosmetics. Réalisés entièrement en 3D sur Blender, ces visuels jouent sur l'oxymore qui existe entre le nom du gloss et l'effet rafraîchissant qu'il a une fois appliqué sur les lèvres. J'ai fait correspondre ces visuels à la direction artistique du Instagram de la marque.",
        type: 'Visuels 3D',
        images: [ 'photo/martine/hotgloss14.png', 'photo/martine/hotgloss52.png', 'photo/martine/hotgloss102.png', 'photo/martine/hotgloss162.png' ],
        projectName: 'Martine Cosmetics'  // Nom du projet
    },

         'Dossier 9': {
        description: "Réalisation de visuels publicitaires pour la mousse bronzante Coco And Eve. Les visuels s'allignent avec la direction artistique de la marque : des couleurs fraîches et des mises en scène estivales et paradisiaques.",
        type: 'Visuels 3D',
        images: [ 'photo/coco/coco8.png', 'photo/coco/cocoandeve.gif'],
        projectName: 'Coco and Eve'  // Nom du projet
    },


    'Dossier 20': {
        projectName: 'Contact'  // Nom du projet
    },

 "Dossier 21": {
  projectName: "About",
  description: [
      "Me faire un virement <input type='number' id='virementAmount' placeholder='Montant à envoyer' style='width: 100px; padding: 5px;'> € <button id='envoyerButton' onclick='envoyerVirement()' style='padding: 5px 10px; margin-left: 10px;'>Envoyer</button>",
    "Après un DNMADE Graphisme - Image de Communication à l’ELMAD Auguste Renoir, j'ai suivi le DSAA DSC (le meilleur du monde) à Estienne. Mes formations m’ont permis de faire mes premiers pas dans l’univers de la communication visuelle mais également de me familiariser avec les structurations et les démarches de réalisation de projet dont je suis tombée amoureuse. Je prends réellement beaucoup de plaisir à pratiquer le design : j’aime produire, mais j’aime également apprendre et penser (par) le design graphique. Au travers de ce site, vous découvrirez un avant-goût de ma personnalité :)"
    
  ]
}

};

    

const hoverImg = document.createElement('img');
hoverImg.id = 'hover-image';
document.body.appendChild(hoverImg);


let openWindows = [];
let highestZIndex = 999;

function bringToFront(windowElement) {
    highestZIndex++;  // Augmente le z-index pour que cette fenêtre soit au-dessus des autres
    windowElement.style.zIndex = highestZIndex;
}

// Ouvre les fenêtres avec différents types de contenu
function openWindow(dossierName) {
    const dossier = dossiers[dossierName];


    // Fenêtre de texte
    const descriptions = Array.isArray(dossier.description)
    ? dossier.description
    : [dossier.description]; // Assure-toi qu'il s'agit d'un tableau

  descriptions.forEach((desc, index) => {
    const windowText = document.createElement("div");
    windowText.classList.add("window");
    windowText.style.top = `${100 + index * 40}px`; // Décale un peu les fenêtres
    windowText.style.left = `${100 + index * 400}px`;
    windowText.style.zIndex = 999;
    windowText.onclick = () => bringToFront(windowText);
    openWindows.push(windowText);



    windowText.innerHTML = `
      <div class="window-header" onmousedown="startDrag(event, this.parentNode)">
          <div class="buttons">
              <div class="close" onclick="closeWindow(this)"></div>
              <div class="minimize"></div>
              <div class="maximize"></div>
          </div>
          <span class="window-title">${dossier.projectName} </span>
      </div>
      <div class="window-content">
          <p>${desc}</p>
      </div>
       <div class="window-footer">
                <p class="footer-text">${dossier.type}</p>
                ${dossier.likedByBrand ? `<p class="footer-text liked-text"> D&AD New Blood Winner 2025</p>` : ''}
            </div>
    `;

    document.body.appendChild(windowText);
  });
  



   


   // Fenêtre de vidéo
if (dossier.video) {
    const windowVideo = document.createElement("div");
    windowVideo.classList.add("window-video2");
    windowVideo.style.zIndex = 900; // Défini bas par défaut
    windowVideo.onclick = () => bringToFront(windowVideo);
    document.body.appendChild(windowVideo);
    openWindows.push(windowVideo);

    // Applique les positions personnalisées si elles existent
    if (dossier.videoPosition) {
        windowVideo.style.top = dossier.videoPosition.top;
        windowVideo.style.left = dossier.videoPosition.left;
    } else {
        windowVideo.style.top = "50px";
        windowVideo.style.left = "650px";
    }

    // Vérifie si la vidéo est un lien YouTube ou une vidéo locale
    if (dossier.video.includes("youtube.com") || dossier.video.includes("youtu.be")) {
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = dossier.video.match(regex);

        if (match && match[1]) {
            const videoId = match[1]; // L'ID de la vidéo YouTube
            const iframe = document.createElement("iframe");
            iframe.width = "560";
            iframe.height = "315";
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;

            // Remplacer le contenu de la fenêtre par l'iframe YouTube
            windowVideo.innerHTML = `
                <div class="window-header" onmousedown="startDrag(event, this.parentNode)">
                    <div class="buttons">
                        <div class="close" onclick="closeWindow(this)"></div>
                        <div class="minimize"></div>
                        <div class="maximize"></div>
                    </div>
                    <span class="window-title">${dossier.projectFamily}</span> <!-- Affiche le projectName -->
                </div>
                <div class="window-content video">
                    ${iframe.outerHTML} <!-- Ajoute l'iframe YouTube -->
                </div>
            `;
        } else {
            console.error("L'ID de la vidéo YouTube n'a pas pu être extrait.");
        }
    } else {
        // Si ce n'est pas un lien YouTube, utilise une balise <video> classique
        windowVideo.innerHTML = `
            <div class="window-header" onmousedown="startDrag(event, this.parentNode)">
                <div class="buttons">
                    <div class="close" onclick="closeWindow(this)"></div>
                    <div class="minimize"></div>
                    <div class="maximize"></div>
                </div>
                <span class="window-title">${dossier.projectFamily}</span> <!-- Affiche le projectName -->
            </div>
            <div class="window-content video">
                <video controls poster="${dossier.poster}">
                    <source src="${dossier.video}" type="video/mp4">
                </video>
            </div>
        `;
    }

    document.body.appendChild(windowVideo);
    openWindows.push(windowVideo);
}


// Fenêtre de vidéo pour plusieurs vidéos dans un dossier
if (dossier.videos && dossier.videos.length > 0) {
    console.log(`Dossier ${dossierName} contient ${dossier.videos.length} vidéos`);

    // Fenêtres de vidéo (multiples vidéos si nécessaire)
    dossier.videos.forEach((videoSrc, index) => {
        const windowVideo = document.createElement("div");
        windowVideo.classList.add("window-video2");
        windowVideo.style.zIndex = 900; // Défini bas par défaut
        windowVideo.onclick = () => bringToFront(windowVideo);
        document.body.appendChild(windowVideo);
        openWindows.push(windowVideo);

        // Vérifie si une position spécifique existe pour cette vidéo
        if (dossier.videosPositions && dossier.videosPositions[index]) {
            windowVideo.style.top = dossier.videosPositions[index].top;
            windowVideo.style.left = dossier.videosPositions[index].left;
        } else {
            windowVideo.style.top = `${50 + index * 100}px`;  // Fallback : Décalage standard
            windowVideo.style.left = `${500 + index * 50}px`;
        }

        // Vérifie si c'est un lien YouTube ou une vidéo locale
        if (videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be")) {
            const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const match = videoSrc.match(regex);

            if (match && match[1]) {
                const videoId = match[1]; // L'ID de la vidéo YouTube
                const iframe = document.createElement("iframe");
                iframe.width = "560";
                iframe.height = "315";
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.frameBorder = "0";
                iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;

                // Remplacer le contenu de la fenêtre par l'iframe YouTube
                windowVideo.innerHTML = `
                    <div class="window-header" onmousedown="startDrag(event, this.parentNode)">
                        <div class="buttons">
                            <div class="close" onclick="closeWindow(this)"></div>
                            <div class="minimize"></div>
                            <div class="maximize"></div>
                        </div>
                        <span class="window-title">${dossier.projectFamily[index]}</span> <!-- Titre personnalisé ici -->
                    </div>
                    <div class="window-content video">
                        ${iframe.outerHTML} <!-- Ajoute l'iframe YouTube -->
                    </div>
                `;
            } else {
                console.error("L'ID de la vidéo YouTube n'a pas pu être extrait.");
            }
        } else {
            // Si ce n'est pas un lien YouTube, utilise une balise <video> classique
            windowVideo.innerHTML = `
                <div class="window-header" onmousedown="startDrag(event, this.parentNode)">
                    <div class="buttons">
                        <div class="close" onclick="closeWindow(this)"></div>
                        <div class="minimize"></div>
                        <div class="maximize"></div>
                    </div>
                    <span class="window-title">${dossier.projectFamily[index]}</span> <!-- Titre personnalisé ici -->
                </div>
                <div class="window-content video">
                    <video controls poster="${dossier.posters[index]}">
                        <source src="${videoSrc}" type="video/mp4">
                    </video>
                </div>
            `;
        }

        document.body.appendChild(windowVideo);
        openWindows.push(windowVideo);
    });
}




    // Fenêtre d'images avec diaporama (si présent)
    if (dossier.images && dossier.images.length > 0) {
        const windowGallery = document.createElement("div");
        windowGallery.classList.add("window-photo");
        windowGallery.style.zIndex = 900; // Défini bas par défaut
        windowGallery.onclick = () => bringToFront(windowGallery);
        document.body.appendChild(windowGallery);
        openWindows.push(windowGallery);

        windowGallery.style.top = "155px";
        windowGallery.style.left = "350px";
        windowGallery.innerHTML = `
            <div class="window-header" onmousedown="startDrag(event, this.parentNode)">
                <div class="buttons">
                    <div class="close" onclick="closeWindow(this)"></div>
                    <div class="minimize"></div>
                    <div class="maximize"></div>
                </div>
                <span class="window-title">Galerie - ${dossier.projectName}</span>
            </div>
        
            <div class="window-content">
                <div class="slideshow-container">
                    ${dossier.images.map((imgSrc, index) => `
                        <div class="slideshow-images" id="slide${index}">
                            <img src="${imgSrc}" alt="Image ${index}">
                        </div>
                    `).join('')}
                    <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
                    <button class="next" onclick="moveSlide(1)">&#10095;</button>
                </div>
            </div>
        `;
        document.body.appendChild(windowGallery);
        openWindows.push(windowGallery);
    }

    

 // Vérifie si le bouton "Fermer tout" existe déjà
const existingCloseAllNavItem = document.getElementById("close-all-nav-item");
if (!existingCloseAllNavItem) {
    // Trouve la liste de navigation
    const navUl = document.querySelector("nav ul");

    // Crée le nouvel élément <li>
    const closeAllLi = document.createElement("li");
    closeAllLi.id = "close-all-nav-item"; // utile pour éviter les doublons

    // Ajoute le lien dedans
    closeAllLi.innerHTML = `
        <a href="#" class="li a fermer" onclick="closeAllWindows()">Fermer les fenêtres</a>
    `;

    // Ajoute à la fin de la liste de navigation
    navUl.appendChild(closeAllLi);

    // Optionnel : garder une trace si tu as un système comme openWindows
    openWindows.push(closeAllLi);
}


        
        // Forcer un recalcul du style pour que les images s'affichent correctement
        setTimeout(() => {
            const images = windowGallery.querySelectorAll('.slideshow-images img');
            images.forEach(image => {
                image.style.objectFit = 'contain'; // Ou cover si nécessaire
                image.style.maxWidth = '100%';
                image.style.maxHeight = '500px';
            });
        }, 100);


}


        function closeAllWindows() {
    openWindows.forEach(window => {
        window.remove(); // Supprime chaque fenêtre
    });
    openWindows = []; // Vide la liste des fenêtres ouvertes
    // Supprime le bouton du nav
    const closeAllNavItem = document.getElementById("close-all-nav-item");
    if (closeAllNavItem) {
        closeAllNavItem.remove();
    }
}
     






        function closeWindow(button) {
        const windowDiv = button.closest(".window, .window-music, .window-photo, .window-video, .window-video2, .window-contact"); // Sélectionne aussi les fenêtres musicales
        if (windowDiv) {
        windowDiv.style.transform = "scale(0.9)";
        windowDiv.style.opacity = "0";
        setTimeout(() => windowDiv.remove(), 500);
        }
        }

        

       // Fonction pour gérer le déplacement des fenêtres ou des icônes
       function startDrag(event, element) {
            event.preventDefault();
            let startX = event.clientX;
            let startY = event.clientY;
            let elementX = element.offsetLeft;
            let elementY = element.offsetTop;

            function moveAt(e) {
                let newX = elementX + (e.clientX - startX);
                let newY = elementY + (e.clientY - startY);

                const container = document.querySelector('#desktop');
                const maxX = container.clientWidth - element.clientWidth - 20;
                const maxY = container.clientHeight - element.clientHeight - 20;

                newX = Math.max(20, Math.min(newX, maxX));
                newY = Math.max(20, Math.min(newY, maxY));

                element.style.left = `${newX}px`;
                element.style.top = `${newY}px`;

                // Vérifier si le dossier est proche de la corbeille
                checkCorbeilleProximity(element);
            }

            function onMouseMove(e) {
                moveAt(e);
            }

            document.addEventListener("mousemove", onMouseMove);

            element.onmouseup = function () {
                document.removeEventListener("mousemove", onMouseMove);
                element.onmouseup = null;
            };
        }

        // Fonction pour déplacer la corbeille quand un dossier est proche
        function checkCorbeilleProximity(dossier) {
            const corbeille = document.getElementById('corbeille');
            const corbeilleRect = corbeille.getBoundingClientRect();
            const dossierRect = dossier.getBoundingClientRect();

            // Calculer la distance entre la corbeille et le dossier
            const distanceX = Math.abs(corbeilleRect.left - dossierRect.left);
            const distanceY = Math.abs(corbeilleRect.top - dossierRect.top);

            // Si le dossier est proche de la corbeille (dans un rayon de 20px)
            if (distanceX <= 20 && distanceY <= 20) {
                // Déplacer la corbeille à une nouvelle position dans le body sans qu'elle ne dépasse
                let newX = Math.random() * (window.innerWidth - corbeille.clientWidth);
                let newY = Math.random() * (window.innerHeight - corbeille.clientHeight);

                // S'assurer que la corbeille reste visible dans le body
                newX = Math.max(0, Math.min(newX, window.innerWidth - corbeille.clientWidth));
                newY = Math.max(0, Math.min(newY, window.innerHeight - corbeille.clientHeight));

                corbeille.style.left = `${newX}px`;
                corbeille.style.top = `${newY}px`;
            }
        }
        

         

 // Ouvre la fenêtre de contact
 function openContactWindow() {
    const windowDiv = document.createElement("div");
    windowDiv.classList.add("window-contact");
    windowDiv.style.top = "300px";
    windowDiv.style.right = "100px";
    windowDiv.innerHTML = `
        <div class="window-header" onmousedown="startDrag(event, this.parentNode)">
            <div class="buttons">
                <div class="close" onclick="closeWindow(this)"></div>
                <div class="minimize"></div>
                <div class="maximize"></div>
            </div>
            <span class="window-title">Contact</span>
        </div>
        <div class="window-content">
        
       Mail : leia.bessad@gmail.com <br>Instagram : <a href="https://www.instagram.com/leia_kin/" target="_blank"> leia_kin </a> <br> Linkedin : <a href="https://www.linkedin.com/in/leïa-bessad" target="_blank"> Leïa </a> <br> Onlyfan : <a href="lien" > Leyo </a>

        </div>
        </div>
    `;
    document.body.appendChild(windowDiv);
}



        // Ouvre la fenêtre de la playlist
function openPlaylistWindow() {
    const windowDiv = document.createElement("div");
    windowDiv.classList.add("window");
    windowDiv.style.top = "300px";
    windowDiv.style.right = "100px";
    windowDiv.innerHTML = `
        <div class="window-header" onmousedown="startDrag(event, this.parentNode)">
            <div class="buttons">
                <div class="close" onclick="closeWindow(this)"></div>
                <div class="minimize"></div>
                <div class="maximize"></div>
            </div>
            <span class="window-title">Ma Playlist</span>
        </div>
        <div class="window-content-playlist">
            <div class="file-item" onclick="openMusicPlayer('son/ABBA.mp3', 'ABBA - The winner takes it all', 'photo/playlist/ABBA.png')">ABBA - The winner takes it all</div>
            <div class="file-item1" onclick="openMusicPlayer('son/ben.mp3', 'Ben l’Oncle Soul ft. Roseaux - I Am Going Home', 'photo/playlist/roseaux.jpeg')">Ben l'Oncle Soul ft. Roseaux - I Am Going Home</div>
            <div class="file-item" onclick="openMusicPlayer('son/Aline.mp3', 'Christophe - Aline', 'photo/playlist/christophe.jpeg')">Christophe - Aline</div>
            <div class="file-item1" onclick="openMusicPlayer('son/marina.mp3', 'Marina and the Diamonds - Teen Idle', 'photo/playlist/marina.jpeg')">Marina and the Diamonds - Teen Idle</div>
            <div class="file-item" onclick="openMusicPlayer('son/scott.mp3', 'Phoebe Bridgers - Scott Street', 'photo/playlist/scott.jpeg')">Phoebe Bridgers - Scott Street</div>
            <div class="file-item1" onclick="openMusicPlayer('son/LoveMeNot.mp3', 'Ravyn Lenae - Love Me Not', 'photo/playlist/ravyn.jpeg')">Ravyn Lenae - Love Me Not</div>
            <div class="file-item" onclick="openMusicPlayer('son/tame.mp3', 'Tame Impala - The Less I Know The Better', 'photo/playlist/tame.jpeg')">Tame Impala - The Less I Know The Better</div>
            <div class="file-item1" onclick="openMusicPlayer('son/THEODORA - FNG.mp3', 'Theodora - FNG', 'photo/playlist/Theodora.png')">Theodora - FNG</div>
            <div class="file-item" onclick="openMusicPlayer('son/zola.mp3', 'Zola Jesus - Skin', 'photo/playlist/zola.jpeg')">Zola Jesus - Skin</div>
        </div>
    `;
    document.body.appendChild(windowDiv);
}

// Fonction pour ouvrir un lecteur de musique avec une image
function openMusicPlayer(file, title, image) {
    const windowDiv = document.createElement("div");
    windowDiv.classList.add("window-music");
    windowDiv.style.top = "150px";
    windowDiv.style.right = "400px";
    windowDiv.innerHTML = `
        <div class="window-header" onmousedown="startDrag(event, this.parentNode)">
            <div class="buttons">
                <div class="close" onclick="closeWindow(this)"></div>
                <div class="minimize"></div>
                <div class="maximize"></div>
            </div>
            <span class="window-title">Lecteur de musique</span>
        </div>
        
        <div class="window-content">
            <div class="music-player">
                <img src="${image}" alt="${title}" class="song-image">
                <p><strong> ${title} </strong></p>
                <audio id="audio-player" src="${file}" controls preload="auto"></audio>
            </div>
        </div>
    `;
    document.body.appendChild(windowDiv);
}


        // Fonction pour lire/mettre en pause la musique
        function playPause() {
            const player = document.getElementById('audio-player');
            const button = document.querySelector('.music-player button');
            if (player.paused) {
                player.play();
                button.innerHTML = 'Pause';
            } else {
                player.pause();
                button.innerHTML = 'Play';
            }
        }



// Fonction pour faire défiler les images
let currentSlide = 0;
        function moveSlide(step) {
            const slides = document.querySelectorAll('.slideshow-images');
            slides[currentSlide].style.display = "none";
            currentSlide = (currentSlide + step + slides.length) % slides.length;
            slides[currentSlide].style.display = "block";
        }

        // Initialisation du diaporama
        function initSlideshow() {
            const slides = document.querySelectorAll('.slideshow-images');
            if (slides.length > 0) {
                slides[currentSlide].style.display = "block"; // Afficher la première image
            }
        }

        // Attendre le chargement des fenêtres
        window.onload = initSlideshow;

        

       
   

//Image hoover bouge
let dx = (Math.random() * 4) + 2; // Vitesse aléatoire X
let dy = (Math.random() * 4) + 2; // Vitesse aléatoire Y
let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let moving = false;

document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('mouseenter', () => {
        const imageSrc = folder.getAttribute('data-image');
        if (imageSrc) {
            hoverImg.src = imageSrc;
            hoverImg.style.opacity = "1"; // L’image apparaît

            if (!moving) {
                moving = true;
                moveHoverImage(); // Lance le mouvement
            }
        }
    });

    folder.addEventListener('mouseleave', () => {
        hoverImg.style.opacity = "0"; // L’image disparaît
        moving = false;
    });
});

let rotation = 0; // Angle de rotation initial

function moveHoverImage() {
    if (!moving) return;

    x += dx;
    y += dy;
    rotation += 2; // Ajuste la vitesse de rotation (2° par frame ici)

    // Collision avec les bords
    if (x + hoverImg.width >= window.innerWidth || x <= 0) {
        dx = -dx; // Inverse la direction X
    }
    if (y + hoverImg.height >= window.innerHeight || y <= 0) {
        dy = -dy; // Inverse la direction Y
    }

    hoverImg.style.left = `${x}px`;
    hoverImg.style.top = `${y}px`;

    // 🌀 Rotation continue fluide
    hoverImg.style.transform = `rotate(${rotation}deg)`;

    requestAnimationFrame(moveHoverImage);
}



//image qui se seecoue quand on clique dessus
function shakeFolder(element) {
  element.classList.add('shake');

  // Supprime la classe après l’animation pour pouvoir la relancer
  setTimeout(() => {
    element.classList.remove('shake');
  }, 500); // même durée que dans l’animation CSS
}


//Notif website coded from scratch
function showNotif(message) {
  const notif = document.getElementById('fakeNotif');
  notif.innerHTML = `<p>${message}</p>`;
  notif.classList.remove('hidden');

  setTimeout(() => {
    notif.classList.add('hidden');
  }, 4000);
}
// Exemple d'utilisation
setTimeout(() => {
  showNotif("Website coded from scratch");
}, 3000);



//About qui se secoue
  setTimeout(() => {
    const folder = document.getElementById('aboutFolder');
    if (folder) {
      folder.classList.add('jump-alert');
    } else {
      console.log('Element not found!');
    }
  }, 40000);
  document.getElementById('aboutFolder').addEventListener('click', () => {
  document.getElementById('aboutFolder').classList.remove('jump-alert');
});





function envoyerVirement() {
  const montant = document.getElementById('virementAmount').value;
  
  if (montant && !isNaN(montant)) {
    alert(`Merci pour votre virement de ${montant} € ! 💸`);
  } else {
    alert("Veuillez entrer un montant valide ! 🙄");
  }
}
