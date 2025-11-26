# React Tic-Tac-Toe
[Liens du Vercel](https://react-tic-tac-toe-psi-two.vercel.app/)

Une implémentation moderne du jeu classique Tic-Tac-Toe (Morpion) construite avec React et Vite. Ce projet propose une interface utilisateur propre et interactive avec un gameplay fluide et démontre les concepts fondamentaux de React incluant la gestion d'état, la composition de composants et la gestion des événements.

## Fonctionnalités

- **Mode Deux Joueurs** : Jouez contre un ami en local
- **Plateau de Jeu Interactif** : Cliquez pour placer les marqueurs X ou O
- **Détection de Victoire** : Détecte automatiquement les combinaisons gagnantes
- **Historique de Partie** : Suivez tous les coups joués pendant la partie
- **Voyage dans le Temps** : Revenez à n'importe quel coup précédent
- **Design Responsive** : Fonctionne parfaitement sur ordinateur et mobile
- **Interface Moderne** : Interface propre et intuitive

## Stack Technique

- **React** - Bibliothèque UI pour construire des interfaces à base de composants
- **Vite** - Outil de build frontend nouvelle génération pour un développement rapide
- **TypeScript/TSX** - Langage de programmation principal
- **TAILWINDCSS** - Stylisation et animations
- **ESLint** - Qualité et cohérence du code

## Démarrage

### Prérequis

Assurez-vous d'avoir installé les éléments suivants sur votre machine :

- Node.js (version 14 ou supérieure)
- npm ou yarn comme gestionnaire de paquets

### Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/TheKings294/react_tic_tac_toe.git
cd react_tic_tac_toe
```

2. Basculez vers la branche dev :
```bash
git checkout dev
```

3. Installez les dépendances :
```bash
npm install
```

### Lancer le Serveur de Développement

Démarrez le serveur de développement avec rechargement à chaud :

```bash
npm run dev
```

Ouvrez votre navigateur et allez sur `http://localhost:5173` pour voir l'application en cours d'exécution.

### Build de Production

Créez un build de production optimisé :

```bash
npm run build
```

La sortie du build sera dans le dossier `dist`.

### Prévisualiser le Build de Production

Prévisualisez le build de production localement :

```bash
npm run preview
```

## Structure du Projet

```
react_tic_tac_toe/
├── public/          # Ressources statiques
├── src/
│   ├── components/  # Composants React
│   ├── index.css    # Styles de l'application
│   └── main.tsx     # Point d'entrée de l'application
├── index.html       # Template HTML
├── package.json     # Dépendances et scripts du projet
├── vite.config.js   # Configuration Vite
└── README.md        # Documentation du projet
```

## Comment Jouer

1. Le jeu commence avec le Joueur X
2. Les joueurs jouent à tour de rôle en cliquant sur les cases vides pour placer leur marqueur (X ou O)
3. Le premier joueur à aligner trois de ses marqueurs (horizontalement, verticalement ou en diagonale) gagne
4. Si toutes les cases sont remplies sans qu'aucun joueur n'ait gagné, la partie est nulle
5. Utilisez l'historique de la partie pour revoir ou revenir aux coups précédents
6. Cliquez sur "Recommencer" pour démarrer une nouvelle partie

## Règles du Jeu

- Le jeu se joue sur une grille de 3×3
- Le Joueur X commence toujours en premier
- Les joueurs alternent les tours en plaçant leurs marqueurs
- Un joueur gagne en plaçant trois marqueurs alignés :
    - Horizontalement (rangée du haut, du milieu ou du bas)
    - Verticalement (colonne de gauche, du milieu ou de droite)
    - En diagonale (haut-gauche vers bas-droite ou haut-droite vers bas-gauche)
- Si les 9 cases sont remplies sans gagnant, la partie se termine par un match nul

## Développement

### Scripts Disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Build pour la production
- `npm run preview` - Prévisualiser le build de production
- `npm run lint` - Exécuter ESLint pour vérifier la qualité du code

### Qualité du Code

Ce projet utilise ESLint avec des règles spécifiques à React pour maintenir la qualité et la cohérence du code. La configuration inclut :

- Règles React Hooks
- React Refresh pour un développement rapide
- Standards JavaScript modernes

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer :

1. Forkez le dépôt
2. Créez une nouvelle branche (`git checkout -b feature/amelioration`)
3. Effectuez vos modifications
4. Commitez vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`)
5. Poussez vers la branche (`git push origin feature/amelioration`)
6. Créez une Pull Request

## Améliorations Futures

Fonctionnalités potentielles à ajouter :

- [ ] Niveaux de difficulté pour l'IA
- [ ] Animations pour les combinaisons gagnantes
- [ ] Effets sonores
- [ ] Basculement thème sombre/clair
- [ ] Support multijoueur en ligne

## Licence

Ce projet est open source et disponible sous la [Licence MIT](LICENSE).

## Remerciements

- Inspiré par le jeu classique Tic-Tac-Toe
- Construit en suivant les meilleures pratiques React
- Utilise Vite pour une expérience de développement optimale

## Contact

Pour toute question ou retour, veuillez ouvrir une issue sur le [dépôt GitHub](https://github.com/TheKings294/react_tic_tac_toe).

---

**Bon jeu avec Tic-Tac-Toe ! 🎮**
