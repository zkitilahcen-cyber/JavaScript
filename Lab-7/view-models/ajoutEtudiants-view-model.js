/**
 * Module AjoutEtudiantsViewModel
 * Objet permettant de stocker l'état de la vue ajoutEtudiants.html
 * et de réagir au comportement de l'utilisateur.
 */
var AjoutEtudiantsViewModel = (function () {
    var _onInit = function () {
        console.log('AjoutEtudiantsViewModel::onInit()');
    };

    var _onDestroy = function () {
        console.log('AjoutEtudiantsViewModel::onDestroy()');
    };

    return {
        onInit: _onInit,
        onDestroy: _onDestroy
    };
})();