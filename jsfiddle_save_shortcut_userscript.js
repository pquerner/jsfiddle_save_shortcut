/**
 * Created by p.querner on 22.01.2015.
 * Edit by jemiloii on 22.01.2015
 */
// ==UserScript==
// @name       jsfiddle Save/Update Shortcut Fix
// @namespace  https://github.com/pquerner
// @version    0.2
// @description  Fixes jsfiddle error on Chrome when trying to save the current fiddle (either update or new fiddles)
// @match      http://*.jsfiddle.net/*/*
// @match      http://*.jsfiddle.net
// @copyright  2015, Me
// @updateURL https://raw.githubusercontent.com/pquerner/jsfiddle_save_shortcut/master/jsfiddle_save_shortcut_userscript.js
// @require https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.4.6/mousetrap.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.4.6/mousetrap-global-bind.min.js
// ==/UserScript==

Mousetrap.bindGlobal(['command+s', 'ctrl+s'], function() {
    if(document.getElementById('update') !== null) { //Update found
        document.getElementById('update').click(); //Emulate click
    }else{
        document.getElementById('savenew').click(); //Emulate click
    }
    // return false to prevent default browser behavior
    return false;
});
