const https = require('https');

const urls = [
  'https://res.cloudinary.com/dre8hlhdo/image/upload/img-hidrografia',
  'https://res.cloudinary.com/dre8hlhdo/image/upload/img-hidrografia.png',
  'https://res.cloudinary.com/dre8hlhdo/image/upload/img-hidrografia.jpg',
  'https://res.cloudinary.com/dre8hlhdo/image/upload/v1/img-hidrografia',
  'https://res.cloudinary.com/dre8hlhdo/image/upload/v1/img-hidrografia.png'
];

urls.forEach(url => {
  https.request(url, { method: 'HEAD' }, (res) => {
    console.log(`${res.statusCode} - ${url}`);
  }).on('error', err => console.error(err)).end();
});
