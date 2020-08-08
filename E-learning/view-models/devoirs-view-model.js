/**
 * Module DevoirsViewModel
 * Objet permettant de stocker l'état de la vue devoirs.html
 * et de réagir au comportement de l'utilisateur.
 */
var DevoirsViewModel = (function () {
    var _onInit = function () {
        console.log('DevoirsViewModel::onInit()');
    };

    var _onDestroy = function () {
        console.log('DevoirsViewModel::onDestroy()');
    };

    return {
        onInit: _onInit,
        onDestroy: _onDestroy
    };
})();