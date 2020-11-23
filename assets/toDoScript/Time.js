'use strict';
/**
 * To set time in the do-to page 
 */
(function () {
    startUpdatingTimeIn(".current-time");

    function startUpdatingTimeIn(selector) {
        const containers = document.querySelectorAll(selector);

        for (const container of containers) {
            setInterval(function updateTime() {
                const now = new Date();

                const hours = padNumber(now.getHours());
                const minutes = padNumber(now.getMinutes());
                const seconds = padNumber(now.getSeconds());

                const time = `${hours}:${minutes}:${seconds} Uhr`;

                container.innerHTML = time;
            }, 100);
        }
    }

    function padNumber(n) {
        return `${n}`.padStart(2, "0");
    }
})();