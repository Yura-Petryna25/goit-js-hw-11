const API_KEY = '47428851-5b047435bdffa798507e52955';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 12) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  return response.json();
}
// // fetchImages(query, page);
// then(({ hits, totalHits }) => {
//   toggleLoader(false);
//   if (hits.length === 0) {
//     iziToast.error({
//       title: 'Error',
//       message: 'No images found. Please try again!',
//     });
//     return;
//   }

//   gallery.insertAdjacentHTML('beforeend', renderGallery(hits));
//   lightbox.refresh();
// }).catch(error => {
//   toggleLoader(false);
//   iziToast.error({ title: 'Error', message: 'Failed to fetch images.' });
// });
