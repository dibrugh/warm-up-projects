const btnNode = document.querySelector('.js-btn');
const trafficLightNode = document.querySelector('.js-traffic-light');

initLight(trafficLightNode);

// Реализовываю смену класса по клику
btnNode.addEventListener('click', () => {
    switchLight(trafficLightNode);
});

