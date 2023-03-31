import '../scss/egodesign.modal.scss';
import { vanillaFade } from "./modules/tools";

class EgoModal {
    constructor({ element, animation, lockScrollOnOpen, onOpen, onClose }) {
        this.modal = element,
        this.lockScrollOnOpen = lockScrollOnOpen || true,
        this.box = element.querySelector('.modal__box'),
        this.content = element.querySelector('.modal__box__content'),
        this.onOpen = onOpen,
        this.onClose = onClose,
        this.state = false,
        this.animation = animation || '';

        this.runChecks()
            .then(() => {
                this.declareHandlers();
            });
    }

    setAnimationType() {
        switch (this.animation) {
            case 'rise':
                this.box.style.top = '15px';
                this.box.style.transition = 'top .2s ease-in-out';
                break;
            
            case 'sink':
                this.box.style.bottom = '15px';
                this.box.style.transition = 'bottom .2s ease-in-out';
                break;
            
            case 'grow':
                this.box.style.transform = 'scale(.95)';
                this.box.style.transition = 'transform .2s ease-in-out';
                break;
            
            case 'shrink':
                this.box.style.transform = 'scale(1.05)';
                this.box.style.transition = 'transform .2s ease-in-out';
                break;
        
            default:
                break;
        }
    }

    animate(open) {
        switch (this.animation) {
            case 'rise':
                if (open) this.box.style.top = '0';
                else this.box.style.top = '15px';
                break;
            
            case 'sink':
                if (open) this.box.style.bottom = '0';
                else this.box.style.bottom = '15px';
                break;
            
            case 'grow':
                if (open) this.box.style.transform = 'scale(1)';
                else this.box.style.transform = 'scale(.95)';
                break;
            
            case 'shrink':
                if (open) this.box.style.transform = 'scale(1)';
                else this.box.style.transform = 'scale(1.05)';
                break;
        
            default:
                break;
        }
    }

    open(callback) {
        this.lockScroll();
        vanillaFade({
            element: this.modal, 
            enter: true, 
            duration: 250, 
            displayType: 'block', 
            callback: callback
        });
        setTimeout(() => {
            this.animate(true);
            this.modal.classList.add('--open');
        }, 20);
        this.state = true;
        if (typeof this.onOpen === 'function') this.onOpen();
    }

    close(callback) {
        vanillaFade({
            element: this.modal, 
            enter: false, 
            duration: 250, 
            displayType: 'block', 
            callback: callback
        });
        this.animate(false);
        this.modal.classList.remove('--open');
        this.lockScroll(false);
        this.state = false;
        if (typeof this.onClose === 'function') this.onClose();
    }

    lockScroll(lock = true) {
        if (!this.lockScrollOnOpen) return false;
        
        let body = document.getElementsByTagName('body')[ 0 ];
        if (lock) body.style.overflow = 'hidden';
        else body.style.removeProperty('overflow');
    }

    inyectContent(content, callback) {
        this.content.innerHTML = content;
        if (typeof callback === 'function') callback();
    }

    runChecks() {
        const self = this;
        return new Promise((resolve, reject) => {
            let goOn = true;
            if (!self.modal) throw new Error(`There's no modal element.`);
            if (!self.box) throw new Error(`There's no modal box element.`);
            if (goOn) resolve();
            else reject();
        });
    }

    declareHandlers() {
        const self = this;
        self.modal.addEventListener('click', () => self.close());
        self.box.addEventListener('click', (e) => e.stopImmediatePropagation());

        self.modal.querySelectorAll('.modal__close').forEach(btn => {
            btn.addEventListener('click', e => {
                self.close();
            });
        });

        this.setAnimationType(this.animation);
    }
}

export default EgoModal;