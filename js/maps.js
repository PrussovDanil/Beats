let myMap;
 
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [59.935274, 30.312388],
   zoom: 7
 });
};
 
ymaps.ready(init);