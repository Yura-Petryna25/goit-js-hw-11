// import { fetchImages } from './js/pixabay-api';
// import { renderGallery } from './js/render-functions';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const form = document.querySelector('#search-form');
// const gallery = document.querySelector('.gallery');
// const loader = document.querySelector('.loader');
// let lightbox;

// async function handleSearch(event) {
//   event.preventDefault();
//   const query = form.elements.searchQuery.value.trim();

//   if (!query) {
//     iziToast.warning({
//       title: 'Warning',
//       message: 'Please enter a search query!',
//     });
//     return;
//   }

//   gallery.innerHTML = '';
//   loader.classList.add('visible');

//   try {
//     const data = await fetchImages(query);
//     loader.classList.remove('visible');

//     if (data.hits.length === 0) {
//       iziToast.info({ title: 'Info', message: 'No results found.' });
//       return;
//     }

//     gallery.innerHTML = renderGallery(data.hits);

//     if (!lightbox) {
//       lightbox = new SimpleLightbox('.gallery a');
//     } else {
//       lightbox.refresh();
//     }
//   } catch (error) {
//     // loader.classList.add('hidden');
//     toggleLoader(false);
//     iziToast.error({
//       title: 'Error',
//       message: 'Failed to fetch images. Please try again later.',
//     });
//   }
// }
// // catch (error) {
// //   iziToast.error({ title: 'Error', message: 'Something went wrong!' });
// // }

// form.addEventListener('submit', handleSearch);
import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;

function toggleLoader(show) {
  loader.classList.toggle('visible', show);
}

async function handleSearch(event) {
  event.preventDefault();
  const query = form.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  gallery.innerHTML = '';
  toggleLoader(true); // Показуємо завантажувач

  try {
    const data = await fetchImages(query);
    toggleLoader(false); // Приховуємо завантажувач

    if (data.hits.length === 0) {
      iziToast.info({ title: 'Info', message: 'No results found.' });
      return;
    }

    gallery.innerHTML = renderGallery(data.hits);

    if (!lightbox) {
      lightbox = new SimpleLightbox('.gallery a');
    } else {
      lightbox.refresh();
    }
  } catch (error) {
    toggleLoader(false); // Приховуємо завантажувач
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
  }
}

form.addEventListener('submit', handleSearch);
