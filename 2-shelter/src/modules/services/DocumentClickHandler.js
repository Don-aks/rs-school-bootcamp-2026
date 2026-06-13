class DocumentClickHandler {
  constructor() {
    this.subscribers = new Set();

    this.handleClick = this.handleClick.bind(this);
    document.addEventListener('click', this.handleClick);
  }

  register(instance) {
    if (!instance?.handleClick) {
      throw new Error('Instance must implement handleClick()');
    }

    this.subscribers.add(instance);
  }

  unregister(instance) {
    this.subscribers.delete(instance);
  }

  handleClick(event) {
    for (const sub of this.subscribers) {
      const matchedElement = event.target.closest(sub.subscriptionSelector);

      if (sub.subscriptionSelector && !matchedElement) {
        continue;
      }

      try {
        sub.handleClick(matchedElement, event);
      } catch (error) {
        console.error(error);
      }
    }
  }

  destroy() {
    document.removeEventListener('click', this.handleClick);
    this.subscribers.clear();
  }
}

export default DocumentClickHandler;
