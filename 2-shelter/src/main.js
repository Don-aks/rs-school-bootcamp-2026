import Preloader from '@/modules/Preloader';
import PetCardsRenderer from '@/modules/features/PetCardsRenderer';
import getPetCards from '@/modules/api/getPetCards';

import '@/styles/fonts.scss';
import '@/styles/reset.scss';
import '@/styles/variables.scss';
import '@/styles/utilities.scss';
import '@/styles/globals.scss';

import '@/components/preloader.scss';
import '@/components/logo.scss';
import '@/components/menu.scss';

import '@/components/layout/header.scss';
import '@/components/layout/footer.scss';

const preloader = new Preloader();
const petCardsRenderer = new PetCardsRenderer();

if (petCardsRenderer.initialized) {
  getPetCards()
    .then((cards) => {
      petCardsRenderer.renderAll(cards);

      setTimeout(() => {
        preloader.remove();
      }, 1000);
    })
    .catch((error) => {
      preloader.showError(error);
      throw error;
    });
}
