"use strict";


class Time {

    constructor () {
        this.currentTimeElement = document.getElementById('current-time');

        setInterval(() => this.update(), 1000);
        this.update();
    }

    update() {
        const seconds = Math.floor((new Date()).getTime() / 1000);
        this.currentTimeElement.innerText = seconds;
    }
}

new Time();
