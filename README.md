# Démo Adonis JS ORM

  

## Introduction

**AdonisJS** est un framework Web Node.js avec une syntaxe élégante axée sur la productivité des développeurs. Il est conçu pour créer des applications Web complètes, des API et des microservices. AdonisJS offre un écosystème robuste avec des fonctionnalités telles que :

-  **ORM (Lucid)** : Facilite l'interaction avec les bases de données.

-  **Système de routage** : Définit les points de terminaison de l'application.

-  **Moteur de template (Edge)** : Crée des vues dynamiques.

-  **Système d'authentification** : Sécurise l'application.

-  **Tests** : Assure la qualité du code.

  

## Objectifs pédagogiques

Dans cet exercice de démo, nous allons explorer le concept d'***ORM*** avec **Lucid** dans **AdonisJS** en créant une application simple. Nous allons apprendre à :

- Configurer un projet **AdonisJS**.

- Définir des **routes** et des **contrôleurs**.

- Définir des **models** et des **migrations** avec ***Lucid***.

- Créer des **vues** avec le **moteur de template Edge**.

  

> À la fin de cet exercice, vous aurez une compréhension de base du fonctionnement d'**AdonisJS** et vous serez en mesure de développer des applications Web plus complexes.

  

## Prérequis

Avant de commencer cet exercice de démo, assurez-vous que vous avez les éléments suivants :

-  **Node.js** et **npm** installé sur votre ordinateur.

- Un éditeur de code (par exemple, **Visual Studio Code**).

- Des bonnes bases en **html**, **css**, **JavaScript** et **TypeScript**.

- Des bonnes bases en **Base de données**


## Installation

Pour installer ce projet d'exercice de démo, suivez les étapes suivantes. :

  

- Ouvrez donc le terminal à l'emplacement du dossier dans lequel vous voulez créer votre application et exécutez la commande suivante :

	```

	git clone https://github.com/kadea-academy-learners/adonis-js-orm-demo.git

	```

- Dirigez-vous dans le dossier cloné :

	```

	cd adonis-js-orm-demo

	```

- Créez une nouvelle branche :

	```

	git checkout -b nom-de-ma-branche

	```

  

- Installez les dépendances du projet :

	```

	npm install

	```

- Commencez à coder :

	```

	code .

	``` 


- Créez un fichier **.env**

- Copier le contenu de **.env.exemple** et coller dans le fichier **.env** sauf la variable **APP_KEY** qui dois être générer en tapant la commande :
    ```
    node ace generate:key
    ``` 

## Base de données

### Note

> Ce Projet **Adonis Js** a été initialisé pour être lié avec une base de données ***SqlLite*** et ne nécessite pas l'installation d'un **SGBD** pour pouvoir fonctionner correctement.

> Vous devez créer un dossier ***tmp*** a la racine de votre projet. C'est dans ce dossier que vas être stockée la base de données **SqlLite**, qui seras généré automatiquement avec les commandes de migrations.
  
### Création de la base de données

Pour créer la base de données, vous devez taper la commande :

```

node ace migration:run

```

## Lancez votre projet

Pour lancer votre projet en mode développement tapez la commande :

```

npm run dev

```

Ensuite rendez-vous dans votre navigateur et tapez ce qui suis dans votre barre d'adresse URL :

```

http://localhost:3333

```