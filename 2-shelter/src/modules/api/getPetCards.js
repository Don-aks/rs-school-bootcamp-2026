import PETS_URL from '@/modules/constants/PETS_URL';

import fetchJSON from './fetchJSON';

const getPetCards = () => fetchJSON(PETS_URL);

export default getPetCards;
