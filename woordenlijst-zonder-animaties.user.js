// ==UserScript==
// @name         woordenlijst.org zonder letteranimaties
// @namespace    https://anthe.sevenants.net
// @version      2025-02-10
// @description  Verbeter de prestaties van woordenlijst.org met deze extensie
// @author       Anthe Sevenants
// @match        https://woordenlijst.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=woordenlijst.org
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Overriding user agent to block animations");

    navigator.__defineGetter__('userAgent', function(){
        return 'Chrome' // customized user agent
    });

    navigator.__defineGetter__('platform', function(){
        return 'Mac' // customized user agent
    });

})();