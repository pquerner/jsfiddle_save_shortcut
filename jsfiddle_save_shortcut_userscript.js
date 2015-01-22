/**
 * Created by p.querner on 22.01.2015.
 * Edit by jemiloii on 22.01.2015
 */
// ==UserScript==
// @name       My Fancy New Userscript
// @namespace  https://github.com/pquerner
// @version    0.1
// @description  enter something useful
// @match      http://*.jsfiddle.net/*/*
// @match      http://*.jsfiddle.net
// @copyright  2015, Me
// @updateURL https://github.com/pquerner/jsfiddle_save_shortcut/jsfiddle_save_shortcut_userscript.js
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
