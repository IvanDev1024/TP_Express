# I - Introduction à ExpressJS
## Exercice 1
   Nous avons créé un serveur ExpressJS qui répond "Hello World" sur la route principale et affiche la date et l'heure actuelles sur la route "/date". Ci-dessous, les démos en images :
   - Route principale
     <img width="372" alt="image" src="https://github.com/user-attachments/assets/a2cc35e3-5d09-4a6c-90c7-6be9c7a7a230" />

   - Route "/date"
     <img width="374" alt="image" src="https://github.com/user-attachments/assets/cab53d3b-d993-4854-962c-2b71d2983ed5" />

## Exercice 2
 Nous avons créé un projet ExpressJS complet avec la structure de répertoires recommandée et l'avons configuré pour servir des fichiers statiques et gérer différentes routes.
 - Page d'accueil (Route principale)
   <img width="373" alt="image" src="https://github.com/user-attachments/assets/1c768210-f5ed-40eb-8bfd-a402a23dc522" />

 - Page d'affichage de l'heure (Route "/time")
   <img width="509" alt="image" src="https://github.com/user-attachments/assets/d7ba3f55-a87a-4927-8842-cce8103fd5b8" />

 - Page d'affichage de la liste (Route "/users")
   <img width="509" alt="image" src="https://github.com/user-attachments/assets/b0e61fef-6847-4d37-9937-1d55ae451fa4" />

# II - Routage avec ExpressJS
## Exercice 1
   Dans  cet exercice, nous avons créé une API RESTful pour gérer une liste de tâches avec les fonctionnalités suivantes :

- Créer une nouvelle tâche : pour ce faire il suffit de renseigner le nom de la tâche dans le champ dédié puis cocher la case "tâche complétée" (si c'est le cas, sinon la laisser décocher) avant de cliquer sur le bouton "créer".
  <img width="547" alt="image" src="https://github.com/user-attachments/assets/b00abcf2-5b88-4a82-9900-b251efdbc75b" />

- Récupérer une tâche spécifique : l'application gère la récupération d'une tâche automatiquement.
  <img width="575" alt="image" src="https://github.com/user-attachments/assets/6793f3e4-9f6c-47b3-872e-57fba7293a60" />

- Récupérer toutes les tâches : l'application gère la récupération de toutes les tâches automatiquement.
  <img width="580" alt="image" src="https://github.com/user-attachments/assets/72ca3e1a-a1e9-401c-84e2-a61289f435db" />

- Mettre à jour une tâche existante : pour ce faire il faut cliquer sur le bouton "Modifier" de la tâche concernée.
  Cela vous permettra de changer d'abord le titre de la tâche si le besoin se pose
  <img width="571" alt="image" src="https://github.com/user-attachments/assets/f9901d18-0f78-47e7-a7a8-19b0b81e6c7c" />

  et/ou  son statut : terminée ou inachevée.
  <img width="575" alt="image" src="https://github.com/user-attachments/assets/bcd9b4a2-2106-47ae-9b90-24cb87543343" />

  Dans cet exemple, "tache A" devient "tache D" et le statut, Complétée.
  <img width="566" alt="image" src="https://github.com/user-attachments/assets/d3137ba1-9346-412d-9407-ab478a45213f" />

- Supprimer une tâche :
  pour ce faire il suffit de cliquer sur le bouton "Supprimer" puis sur "OK" pour confirmer la suppression.
  <img width="566" alt="image" src="https://github.com/user-attachments/assets/826845ea-03aa-446b-bec3-5913f908499f" />

  Dans cet exemple, nous avons supprimé la tâche intitulée "tache B".
  <img width="549" alt="image" src="https://github.com/user-attachments/assets/22776aeb-48df-4358-b01c-98ebbd3fbc06" />


