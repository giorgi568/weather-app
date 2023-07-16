import { createClient } from 'pexels';

function setBackgroundPhoto() {
  const bg = document.getElementById('content');
  const photographer = document.getElementById('photographer');
  const client = createClient(
    'wD8qsuf1WHFi4fT9RDQspOOpXHcRliLiLiQrv5Y6MyqkIPYhmIbvZOVX'
  );
  const query = `${localStorage.getItem('city')} city center`;
  client.photos
    .search({ query, per_page: 1, mode: 'cors' })
    .then((photos) => {
      const iconUrl = `url('${photos.photos[0].src.landscape}')`;
      bg.style.backgroundImage = iconUrl;
      photographer.textContent = `Photograph by ${photos.photos[0].photographer}`;
      // console.log(photos.photos[0].photographer);
    })
    .catch((err) => {
      console.log(err);
      bg.style.backgroundImage = '';
      bg.style.backgroundColor = 'black';
      photographer.textContent = '';
    });
}
export { setBackgroundPhoto };
