class Preloader {
  constructor() {
    this.STATE_CLASSES = {
      hidden: 'preloader--hidden',
      error: 'preloader--error',
      carHidden: 'car--hidden',
    };

    this.element = document.querySelector('.preloader');
    this.car = this.element.querySelector('.car');
  }

  remove() {
    document.body.removeAttribute('aria-busy');

    this.element.classList.add(this.STATE_CLASSES.hidden);
    this.car.classList.add(this.STATE_CLASSES.carHidden);

    const onTransitionEnd = () => {
      this.car.removeEventListener('transitionend', onTransitionEnd);
      this.element.remove();
    };

    requestAnimationFrame(() => {
      this.element.addEventListener('transitionend', onTransitionEnd);
    });
  }

  showError(errorText) {
    this.element.classList.add(this.STATE_CLASSES.error);

    const errorElement = document.createElement('p');
    errorElement.className = 'preloader__error';
    errorElement.textContent = errorText;

    this.element.appendChild(errorElement);
  }
}

export default Preloader;
