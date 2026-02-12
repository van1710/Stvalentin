// --- DÉCLARATIONS DES ÉLÉMENTS ---
const namePopup = document.getElementById('namePopup');
const dynamicTitle = document.getElementById('dynamicTitle');
const nameDisplay = document.getElementById('nameDisplay');
const userNameInput = document.getElementById('userName');
const ouiBtn = document.getElementById('oui');
const nonBtn = document.getElementById('non');
const success = document.getElementById('success');
const bgMusic = document.getElementById('bgMusic');
const finalMessage = document.getElementById('finalMessage');
const finalGif = document.querySelector('#success img');
const finalVideo = document.getElementById('finalVideo'); // AJOUTÉ : Indispensable pour éviter le blocage

// --- BASE DE DONNÉES LOCALE ---
const baseDeDonnees = {
    "oliano": {
        gif: "tilixia-summer-gesture-1674_512.gif", 
        son: "Ayra Starr - Bloody Samaritan",
        message: "Mon cher Oli, <br><br> En cette Saint-Valentin, j'ai eu envie de repenser à nous. Je repense à cette vidéo que tu m'avais envoyée juste après mon anniversaire, alors qu'on ne se connaissait même pas encore... <br><br> Depuis ce jour, tu es devenu bien plus qu'un meilleur ami. Tu es ma personne, mon rire quand je vais mal, mon complice de toujours. <br><br> Je suis là. Je porte ta peine avec toi. Ta force m'impressionne, et je suis tellement fière de l'homme que tu es. <br><br> Merci d'être dans ma vie, Oli. Je t'aime fort."
    },
    "wilfried": {
        gif: "will&van.mp4", 
        son: "I love you by Dadju, and Tayc", 
        message: "Babe ! <br><br> En cette Saint-Valentin, mon esprit s'est envolé vers ce jour où tu m'as parlé pour la première fois à l'église. <br><br> Depuis le 30 décembre 2020, on a traversé tellement de choses. On se parle peut-être moins avec la distance, mais je veux que tu saches que je pense à toi tout autant. <br><br> Tu me manques, ton rire me manque, et j'ai hâte qu'on n'ait plus besoin d'un écran pour se voir. Joyeuse Saint-Valentin, je t'aime."
    }
};

const messages = [
    "Tu es sûre ? 🤨",
    "Réfléchis encore... 🙄",
    "Dommage, j'avais un cadeau ! 🎁",
    "C'est ton dernier mot ? 😱",
    "Allez, clique sur l'autre bouton ! ❤️"
];

// 1. DÉMARRER L'EXPÉRIENCE
function startValentine() {
    const name = userNameInput.value.trim();
    if (name === '') {
        alert('Entre ton prénom stp 💕');
        return;
    }

    const nameKey = name.toLowerCase();
    // Chargement de la musique personnalisée ou par défaut
    if (baseDeDonnees[nameKey] && baseDeDonnees[nameKey].son) {
        bgMusic.src = `media/${baseDeDonnees[nameKey].son}.mp3`;
    } else {
        // Correction du nom de fichier exact selon tes images
        bgMusic.src = "media/poorartistt-zouk-amp-hypnosis-music-no-copyright-370486 (1).mp3";
    }

    bgMusic.play().catch(e => console.log("Audio en attente..."));

    namePopup.classList.add('hidden');
    nameDisplay.textContent = name;
    dynamicTitle.classList.remove('hidden');
    ouiBtn.classList.remove('hidden');
    nonBtn.classList.remove('hidden');
    
    positionButtons();
}

// 2. FONCTIONS UTILITAIRES
function positionButtons() {
    const isMobile = window.innerWidth < 768;
    const spacing = isMobile ? 10 : 20;
    ouiBtn.style.left = `calc(50% - ${130 + spacing}px)`;
    ouiBtn.style.top = 'calc(50% + 30px)';
    nonBtn.style.left = `calc(50% + ${spacing}px)`;
    nonBtn.style.top = 'calc(50% + 30px)';
}

function moveNonButton() {
    const maxX = window.innerWidth - nonBtn.offsetWidth;
    const maxY = window.innerHeight - nonBtn.offsetHeight;
    nonBtn.style.position = 'fixed';
    nonBtn.style.left = Math.random() * maxX + 'px';
    nonBtn.style.top = Math.random() * maxY + 'px';

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    dynamicTitle.innerHTML = `<span id="nameDisplay">${userNameInput.value}</span>, ${randomMessage}`;
}

function growOuiButton() {
    const currentScale = parseFloat(ouiBtn.getAttribute('data-scale') || 1);
    if (currentScale < 3) {
        const newScale = currentScale + 0.2;
        ouiBtn.setAttribute('data-scale', newScale);
        ouiBtn.style.transform = `scale(${newScale})`;
    }
}

// 3. ÉVÉNEMENTS
nonBtn.addEventListener('mouseenter', moveNonButton);
nonBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNonButton();
    growOuiButton();
});

ouiBtn.addEventListener('mouseenter', growOuiButton);

// 4. ACTION FINALE
ouiBtn.addEventListener('click', () => {
    const nameEntered = userNameInput.value.trim();
    const nameKey = nameEntered.toLowerCase();

    ouiBtn.classList.add('hidden');
    nonBtn.classList.add('hidden');
    dynamicTitle.classList.add('hidden');
    
    finalGif.src = 'media/misskalem-heart-25660_512.gif';
    finalGif.classList.remove('hidden');
    finalMessage.textContent = "Attends... 🥰";
    success.classList.remove('hidden');

    setTimeout(() => {
        finalGif.classList.add('hidden');
        finalVideo.classList.add('hidden');

        if (baseDeDonnees[nameKey]) {
            const perso = baseDeDonnees[nameKey];
            
            if (perso.gif.endsWith('.mp4')) {
                finalVideo.src = `media/${perso.gif}`;
                finalVideo.classList.remove('hidden');
                finalVideo.style.width = "500%";      
            finalVideo.style.maxWidth = "350px";   
            finalVideo.style.height = "500px";
            finalVideo.style.marginBottom = "20px"; 
            
                finalVideo.play();

            } else {
                const fileName = perso.gif.includes('.') ? perso.gif : `${perso.gif}.gif`;
                finalGif.src = `media/${fileName}`;
                finalGif.classList.remove('hidden');
                finalGif.style.width = "80%";
            finalGif.style.maxWidth = "350px"
            }
            
            finalMessage.innerHTML = perso.message;
            
            // Styles pour longs messages
            finalMessage.style.display = "block"; 
            finalMessage.style.fontSize = "1.05rem"; 
            finalMessage.style.textAlign = "center"; 
            finalMessage.style.lineHeight = "1.6"; 
            finalMessage.style.maxWidth = "90%";
            finalMessage.style.maxHeight = "50vh"; 
            finalMessage.style.overflowY = "auto";
        } else {
            // CAS PAR DÉFAUT
            finalGif.src = 'media/kuzu420-valentine-17405_512.gif';
            finalGif.classList.remove('hidden');
            finalMessage.innerHTML = `Wow ! Tu as réussi à attraper le bouton 'Oui' ! 🎉<br><br>Ton agilité est impressionnante. <br><br> Pour la peine, tu as droit à une pluie de cœurs virtuels !❤️`;
        }
    }, 4000);
});

userNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') startValentine();
});