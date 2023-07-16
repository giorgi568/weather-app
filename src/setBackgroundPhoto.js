import { createClient } from 'pexels';

function setBackgroundPhoto() {
  const client = createClient(
    'wD8qsuf1WHFi4fT9RDQspOOpXHcRliLiLiQrv5Y6MyqkIPYhmIbvZOVX'
  );
  const query = `${localStorage.getItem('city')}`;
  client.photos.search({ query, per_page: 1, mode: 'cors' }).then((photos) => {
    const bg = document.getElementById('content');
    const iconUrl = `url('${photos.photos[0].src.landscape}')`;
    bg.style.backgroundImage = iconUrl;
    // console.log(photos.photos[0].src.landscape);
  });
}
export {setBackgroundPhoto}