import { createClient } from 'pexels';

function setBackgroundPhoto() {
  const bg = document.getElementById('content');
  const photographer = document.getElementById('photographer');
  const client = createClient(
    'wD8qsuf1WHFi4fT9RDQspOOpXHcRliLiLiQrv5Y6MyqkIPYhmIbvZOVX'
  );
  const query = `${localStorage.getItem('city')} city, Architecture`;
  client.photos
    .search({ query, per_page: 1, mode: 'cors' })
    .then((photos) => {
      // console.log(photos);
      const iconUrl = `url('${photos.photos[0].src.landscape}')`;
      bg.style.backgroundImage = iconUrl;
      photographer.textContent = `Photograph by ${photos.photos[0].photographer}`;

      photographer.style.backgroundColor = photos.photos[0].avg_color;
      
      const footer = document.getElementById('footer');
      footer.style.backgroundColor = photos.photos[0].avg_color
    })
    .catch((err) => {
      console.log(err);
      bg.style.backgroundImage = '';
      bg.style.backgroundColor = 'black';
      photographer.textContent = '';
    });
}
export { setBackgroundPhoto };
