#  Valentine's Surprise - Expérience Interactive

Une application web interactive et personnalisée conçue pour la Saint-Valentin. Ce projet utilise une logique de "nom d'utilisateur" pour offrir une expérience unique (messages, musiques et médias) à des personnes spécifiques, tout en proposant une version ludique pour les autres visiteurs.

## Fonctionnalités

* **Personnalisation Dynamique** : Affichage de messages, musiques (MP3) et médias (GIF ou Vidéo MP4) spécifiques selon le prénom saisi.
* **Interface Ludique** : Un bouton "Non" intelligent qui se déplace aléatoirement pour éviter d'être cliqué, forçant l'utilisateur à choisir le "Oui".
* **Gestion Multimédia Avancée** : Détection automatique du type de fichier (vidéo vs image) pour un rendu optimal.
* **Design Responsive** : Entièrement optimisé pour mobile et desktop grâce à Tailwind CSS.

##  Technologies Utilisées

* **HTML5 & CSS3** : Structure et mise en forme.
* **Tailwind CSS** : Framework utilitaire pour un design moderne et rapide.
* **JavaScript (Vanilla)** : Logique de programmation, manipulation du DOM et gestion des événements.

##  Structure du Projet

```text
├── media/               # Stockage des fichiers MP3, GIF et MP4
├── index.html           # Structure principale de l'application
├── script.js            # Logique métier et base de données locale
└── style.css            # Styles personnalisés complémentaires
