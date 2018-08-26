const JEKYLL_URL_DEV = "http://127.0.0.1:8080";
const JEKYLL_URL_PRODUCTION= "http://127.0.0.1:8080";

const config = {
  data_url: process.env.NODE_ENV !== 'production'? JEKYLL_URL_DEV:JEKYLL_URL_PRODUCTION,
  layout: 'centered'
};

export default config;
