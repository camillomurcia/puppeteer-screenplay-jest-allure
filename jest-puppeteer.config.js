module.exports = {
  launch: {
    headless: true,
    args: ['--start-maximized', '--single-process'],
    defaultViewport: null,
    slowMo: 0 //Esto agrega un tiempo de espera por cada interaccion Tiempo en milisegundos
  }
};
