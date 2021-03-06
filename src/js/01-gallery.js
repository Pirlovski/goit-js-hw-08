// Add imports 
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery'); 


// 1. Создание и рендер разметки по массиву данных galleryItems

const galleryMarkup = galleryItems
    .map(({ original, preview, description }) => `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>
            </div>`)
    .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(galleryEl);


//  3. Инициализация библиотеки после того, как элементы галереи созданы и добавлены в `div.gallery`.

const simplelightboxOptions = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};

const simplelightboxGallery = new SimpleLightbox(".gallery a", simplelightboxOptions);
console.log(galleryItems);