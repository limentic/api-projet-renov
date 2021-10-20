# API Projet Renov

Cette API REST réalisée avec [Koa.js](https://koajs.com/) à pour but d'être utilisée dans un projet de groupe de l'université de la rochelle, pour réaliser une application sur les rénovations énergetiques.

## Téléchargement

Pour installer ce repo vous devez :

### Prérequis

- Avoir installé au préalable [NodeJS](https://nodejs.org/en/) *(De préference avec [NVM](https://github.com/nvm-sh/nvm))*.
- Avoir installé et configuré [PostgreSQL](https://www.postgresql.org/).

### Configuration

Après avoir cloné le projet, exécutez :

`npm install`

Voilà, vous avez récupéré les dépendances du projet.
Maintenant, il faut définir une variable d'environement NODE_ENV_RENOV *(Je vous laisse le soin de regarder comment le faire sur votre système)* respectant cette structure :

`'{"env":"dev","username":"xxx","database":"xxx","password":"xxx","host":"0.0.0.0:0000","dialect":"postgres"}'`

Cette variable est très importante car elle permet à l'API d'établir le lien avec la base de données.

Verifiez que vous êtes bien à la racine du projet et exécutez:

`sequelize-cli db:create`

`sequelize-cli db:migrate`

Cela permettra de lancer la création et la migration de la table User *(table démo)*.

### Exécution

Pour lancer l'API exécutez :

`npm run dev`

## Contributeurs

Ce repository est mainetenu par :
- [LOCHON Nathan](https://github.com/limentic)
- [PARIS Emilien](https://github.com/eparisLR)
- [LEMONNIER Baptiste](https://github.com/BaptisteKSP)
- [DEMART Erwan](https://github.com/edemart)
- [GONCALVES Denis](https://github.com/dgoncalv1)
- [FARIK Mehdi](https://github.com/farikmehdi)
