// ==UserScript==
// @name         Captcha's not hot
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Replaces the text of Google reCAPTCHA's with Man's not robot
// @author       JonnyB
// @match        *://*/*
// @license MIT
// ==/UserScript==

var text = "Man's not robot";

(function() {
    'use strict';
    window.onload = init;

    function init() {
        var item = document.getElementById("recaptcha-anchor-label");
        //window.alert(item.innerHTML);
        if (item) {
            item.innerHTML = text;
        }
    }
})();