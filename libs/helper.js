export function linkHepler(url){
  return process.env.NODE_ENV !== 'production'?encodeURIComponent(url):url;
}
