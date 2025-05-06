export default class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        button: '[data-js-header-burger-button]'
    }

    stateClasses = {
        isActive: 'is-active'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlay = this.rootElement.querySelector(this.selectors.overlay);
        this.button = this.rootElement.querySelector(this.selectors.button);
        this.bindEvents();
        console.log(this.rootElement, this.overlay, this.button);
    }

    onBurgerButtonClick = () => {
        //this.button.classList.toggle(this.stateClasses.isActive);
        this.overlay.classList.toggle(this.stateClasses.isActive);
    }

    bindEvents() {
        this.button.addEventListener('click', this.onBurgerButtonClick);
    }

};