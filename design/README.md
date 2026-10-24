# design/

Matière première pour **décider** du design. Rien ici n'est publié sur le site,
et rien ici ne doit être copié dans `public/` ni importé dans `src/`.

- `inspiration/` : captures (Dribbble, thème WordPress, sites de référence…).
  Nomme chaque fichier selon ce qu'il illustre : `hero-split.png`,
  `pricing-cards.png`, pas `shot1.png`. Ajoute un `notes.md` par source si utile.
- `media-direction/` : exemples du style photo ou vidéo visé.

Ce qu'on retient de chaque fichier est écrit dans la section « Références »
de `DESIGN.md`. Une capture qui n'y figure pas ne sert pas de référence.

## Les images de ce dossier ne sont pas versionnées

Le `.gitignore` exclut les images, vidéos et PDF de `design/` : ces captures
appartiennent à leurs auteurs, et un dépôt public les publierait. Les notes
(`.md`) restent versionnées.

Conséquence : sur un autre ordinateur, ou dans une session Claude qui clone le
dépôt, les captures sont absentes. Si ton dépôt de projet est **privé** et que
tu veux les partager, supprime les lignes correspondantes du `.gitignore`.
