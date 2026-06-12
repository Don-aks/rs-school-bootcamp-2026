import InfoMessage from '@/modules/InfoMessage';

class CopyToClipboardController {
  constructor({ clickHandlerService } = {}) {
    this.clickHandlerService = clickHandlerService;
    this.subscriptionSelector = '.js-copy-to-clipboard';
  }

  handleClick = (matchedElement) => {
    this.handleClickOnCopyBtn(matchedElement);
  };

  handleClickOnCopyBtn = (btn) => {
    const text = btn.dataset.text ?? btn.innerText;
    navigator.clipboard.writeText(text);

    new InfoMessage({ message: 'Copied to clipboard!' });
  };

  destroy() {
    this.clickHandlerService.unregister(this);
  }
}

export default CopyToClipboardController;
