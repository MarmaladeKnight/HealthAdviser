"use strict";

function LoginMotion() {
    if (document.body.offsetWidth > document.getElementById("login").offsetLeft) {
        document.getElementById("login").animate([
            { left: "calc(100% - 300px)", offset: 0 },
            { left: "100%", offset: 1 }
        ], {
            duration: 500,
            iteration: 1,
            easing: "ease",
            fill: "forwards"
        });
    } else {
        document.getElementById("login").animate([
            { left: "100%", offset: 0 },
            { left: "calc(100% - 300px)", offset: 1 }
        ], {
            duration: 500,
            iteration: 1,
            easing: "ease",
            fill: "forwards"
        });
    }
}