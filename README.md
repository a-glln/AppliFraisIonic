# Application Frais Mobile (Ionic + PHP)
<p>
<img align="left" width="175" alt="1" src="http://www.adam-guillon.fr/img/gsb/mobile/connexion.png">
  <img align="left" width="175" alt="2" src="http://www.adam-guillon.fr/img/gsb/mobile/menu.png">
<img align="left" width="175" alt="2" src="http://www.adam-guillon.fr/img/gsb/mobile/detail.png">
</p>
Dans ce projet vous trouvez un exemple d'application frais mobile avec les fonctionnalités suivantes :

- Page de connexion
- Page de la liste des fiches de frais de l'utilisateur connecté
- Page de détail d'une fiche de frais selectionnée
- Page de paramètrage (rappel des données de l'utilisateur + déconnexion)
<br><br><br><br><br><br><br>
# Installation

1. Cloner le projet dans **WAMP** ou **MAMP**
2. Ouvrir le terminal puis naviguer jusqu'au dossier **ApplicationFraisMobile**
3. Entrer la commande `npm install`
4. Modifier la variable **url** dans le fichier api.ts de l'application Ionic pour la faire correspondre avec l'arborescence de vos fichiers.

#### Emplacement du fichier :
```shell
ApplicationFraisMobile > src > providers > api
  ```

#### Variable à modifier :
```php
url = 'http://localhost:8888/ApplicationFrais/ApplicationFraisWeb/';
  ```

5. Base de données 
      - Installer si vous ne l’avez pas le logiciel Wamp puis placer le dossier AppliFrais dans le dossier www situé : wamp64/www/
      
      -	Dans le dossier AppliFrais vous trouverez un fichier : " gsb_frais.sql " 
        ce sont les requêtes nécessaire pour créer la base de données
        et les différentes tables.
        Importer ce fichier sql dans phpMyAdmin et votre Base de Données 
        est fonctionnel.
