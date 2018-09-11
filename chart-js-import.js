const loadScript = () => new Promise((resolve) => {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js';

  script.onload = resolve;

  head.appendChild(script);
  return script;
});

export { loadScript as default };