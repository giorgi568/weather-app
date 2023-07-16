import { createClient } from 'pexels';

function setBackgroundPhoto() {
  const bg = document.getElementById('content');
  const client = createClient(
    'wD8qsuf1WHFi4fT9RDQspOOpXHcRliLiLiQrv5Y6MyqkIPYhmIbvZOVX'
  );
  const query = `${localStorage.getItem('city')}`;
  client.photos.search({ query, per_page: 1, mode: 'cors' }).then((photos) => {
    const iconUrl = `url('${photos.photos[0].src.landscape}')`;
    bg.style.backgroundImage = iconUrl;
    // bg.style.filter = 'blur(1px)'
    // console.log(photos);
  })
  .catch((err)=> {
    console.log(err, 555555555);
    bg.style.backgroundImage = '';
    bg.style.backgroundColor = 'black';
  })
}
export {setBackgroundPhoto}