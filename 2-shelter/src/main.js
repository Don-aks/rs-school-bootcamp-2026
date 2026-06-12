import SELF_EVALUATION from '@/modules/constants/SELF_EVALUATION';

import DocumentClickHandler from '@/modules/services/DocumentClickHandler';
import Preloader from '@/modules/Preloader';

import getPetCards from '@/modules/api/getPetCards';

import PetCardsRenderer from '@/modules/features/PetCardsRenderer';
import CopyToClipboardController from '@/modules/features/CopyToClipboardController';

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

console.log(SELF_EVALUATION);

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

const copyToClipboardController = new CopyToClipboardController();
const clickHandler = new DocumentClickHandler();

clickHandler.register(copyToClipboardController);
