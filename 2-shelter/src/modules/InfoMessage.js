import '@/components/info-message.scss';

class InfoMessage {
  constructor({ message, timeout = 3000 } = {}) {
    this.message = message;
    this.timeout = timeout;

    this.CLASSES = {
      root: 'info-message',
      hidden: 'info-message--hidden',
    };

    this.init();
  }

  init() {
    this.messageElement = document.createElement('div');
    this.messageElement.className = this.CLASSES.root;
    this.messageElement.innerText = this.message;

    document.body.appendChild(this.messageElement);

    setTimeout(async () => {
      this.messageElement.classList.add(this.CLASSES.hidden);
      await new Promise((resolve) => requestAnimationFrame(resolve));

      const onAnimationEnd = () => {
        this.messageElement.removeEventListener('animationend', onAnimationEnd);
        this.destroy();
      };

      this.messageElement.addEventListener('animationend', onAnimationEnd);
    }, this.timeout);
  }

  destroy() {
    this.messageElement.remove();

    this.messageElement = null;
    this.message = null;
    this.timeout = null;
  }
}

export default InfoMessage;
