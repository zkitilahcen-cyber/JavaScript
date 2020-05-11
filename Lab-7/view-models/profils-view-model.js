/**
 * Module ProfilsViewModel
 * Objet permettant de stocker l'état de la vue profils.html
 * et de réagir au comportement de l'utilisateur.
 */
var ProfilsViewModel = (function () {
    var _onInit = function () {
        console.log('ProfilsViewModel::onInit()');
    };

    var _onDestroy = function () {
        console.log('ProfilsViewModel::onDestroy()');
    };

    return {
        onInit: _onInit,
        onDestroy: _onDestroy
    };
})();