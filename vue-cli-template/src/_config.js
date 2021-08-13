export const process = {
  dev: true
}

export const site = {
  home: process.dev ? 'http://localhost:8080/' : 'http://tocode.ru',
  app: process.dev ? 'http://app.localhost:8080/' : 'http://app.tocode.ru'
};


export const app = {
  title: 'Template'
};

export const links = [
  {
    title:'Home',
    alias: 'home',
    url: '/'
  },
  {
    title:'About',
    alias: 'home',
    url: '/about'
  }
];