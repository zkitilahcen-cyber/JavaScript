/**
 * main.js
 * Ce fichier sert à démarrer l'application.
 */
var routes = [
  {
      path: 'participant', // http://localhost:8080/#Home
      view: 'participant', // Vue = /views/home.html
      viewModel: ParticipantViewModel, // Voir /view-models/home-view-model.js
      isDefault: true // Si aucune route ne correspond, charger cette vue
  },
  {
    path: 'profils',
    view: 'profils',
    viewModel: ProfilsViewModel
  },
  {
    path: 'ajoutEtudiants',
    view: 'ajoutEtudiants',
    viewModel: AjoutEtudiantsViewModel
  },
  {
    path: 'devoirs',
    view: 'devoirs',
    viewModel: DevoirsViewModel 
  },
  {
    path:'discussion',
    view:'discussion',
    viewModel: DiscussionViewModel
  }
];

/**
* Module Application
* Démarre l'application en initialisant le routeur
*/
var Application = (function (router, routes) {
  router.initializeRoutes(routes);

  /**
   * Exposition des membres publiques
   */
  return {

  };
})(ApplicationRouter, routes);
