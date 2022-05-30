const ci = Boolean(process.env.CI || false);

const ciPipelineOptions = {
  launch: {
    executablePath: '/usr/bin/google-chrome-stable',
    headless: true,
        args: [
      '--ignore-certificate-errors',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--start-maximized',
      '--single-process'],
    defaultViewport: null,
    slowMo: 0 //Esto agrega un tiempo de espera por cada interaccion Tiempo en milisegundos
  }
};

const localOption = {
  launch: {
    headless: false,
        args: [
      '--ignore-certificate-errors',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--start-maximized',
      '--single-process'],
    defaultViewport: null,
    slowMo: 0 //Esto agrega un tiempo de espera por cada interaccion Tiempo en milisegundos
  }
};


module.exports = ci ? ciPipelineOptions : localOption;

