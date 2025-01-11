// ==UserScript==
// @name         Auto Login to Komga (Dynamic, SPA Support)
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Automatically POST login to Komga and redirect dynamically, supporting SPAs
// @author       wanhuz
// @match        *://yourwebsite.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Credentials, this is plain text and easy to leak, run at your own risk
    const username = "youremail@email.com";
    const password = "password";
    const encodedCredentials = btoa(`${username}:${password}`);

    const currentUrl = window.location.href;
    const baseUrl = window.location.origin;  

    const apiEndpoint = `${baseUrl}/api/v2/users/me`;
    const redirectUrl = `${baseUrl}/dashboard`; 

    const msToWaitAfterLogin = 1000;

    // Flag to ensure login is attempted only once
    let loginAttempted = false;

    function attemptLogin(newUrl) {

        if (loginAttempted) {
            return;
        }

        if (newUrl.includes(`${baseUrl}/login`)) {
            console.log("Matched login URL:", currentUrl);

            fetch(apiEndpoint, {
                method: "GET", 
                headers: {
                    "Authorization": `Basic ${encodedCredentials}`,
                    "Content-Type": "application/json"
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Login successful:", data);

                loginAttempted = true;

                setTimeout(() => {
                    window.location.href = redirectUrl;
                }, msToWaitAfterLogin); 
            })
            .catch(error => {
                console.error("Error during login:", error);
            });
        }
    }

    // Observe changes in the DOM to handle SPA navigation
    const observer = new MutationObserver(() => {
        const newUrl = window.location.href;
        
        if (newUrl !== currentUrl) {
            attemptLogin(newUrl);  
        }
    });

    observer.observe(document.body, {
        childList: true,      
        subtree: true         
    });

    attemptLogin(currentUrl);

})();
