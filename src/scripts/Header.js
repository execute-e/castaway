class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.isMenuOpen = !this.isMenuOpen;

        this.overlayElement.classList.toggle(this.stateClasses.isActive);

        this.burgerButtonElement.setAttribute('aria-expanded', this.isMenuOpen);
        this.overlayElement.setAttribute('aria-hidden', !this.isMenuOpen);

        
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }
}

export default Header;