import {
  SLIDER_CARDS_COUNT,
  LIST_CARDS_COUNT,
} from '@/modules/constants/RENDER_COUNT';
import arrayToClassName from '@/modules/utilities/arrayToClassName';

class PetCardsRenderer {
  constructor() {
    this.sliders = document.querySelectorAll('.js-pet-cards-slider');
    this.lists = document.querySelectorAll('.js-pet-cards-list');

    const hasContainer = this.sliders.length || this.lists.length;
    if (!hasContainer) return;

    this.initialized = true;
  }

  renderAll(allCards) {
    this.cards = allCards;
    this.#renderCards(this.sliders, SLIDER_CARDS_COUNT, [
      'slider__slide',
      'js-slider-slide',
    ]);

    this.#renderCards(this.lists, LIST_CARDS_COUNT);
  }

  #renderCards(containers, count, additionalClasses = []) {
    const cards = this.cards.slice(0, count);

    containers.forEach((container) => {
      cards.forEach((card, index) => {
        container.appendChild(
          this.#createCardElement(card, index, additionalClasses),
        );
      });
    });
  }

  #createCardElement = (card, index, additionalClasses = []) => {
    const cardElement = document.createElement('li');

    cardElement.className = arrayToClassName([
      'pets__item',
      'js-pet-card',
      ...additionalClasses,
    ]);

    cardElement.dataset.index = index;
    cardElement.innerHTML = `
      <article class="pet-card pets__pet-card">
        <figure class="pet-card__figure">
          <img
            class="pet-card__image"
            src="${card.img}"
            alt="${card.imgAlt}"
          />
          <figcaption class="pet-card__name">${card.name}</figcaption>
        </figure>

        <button class="btn btn--secondary pet-card__btn" type="button">
          Learn more
        </button>
      </article>
    `;

    return cardElement;
  };
}

export default PetCardsRenderer;
