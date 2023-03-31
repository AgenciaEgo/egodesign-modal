# @egodesign/modal
<br/>

## Usage:
Import the **EgoModal** class into your file and then create as many instances as you need.
```js
import EgoModal from '@egodesign/modal';

const egoModal = new EgoModal({
    element: document.getElementById('egoModal')
});
```

### HTML minimal markup & class names:
```html
<dialog class="modal" id="egoModal">
    <div class="modal__box">
        <button class="modal__close" type="button">Close</button>
        <div class="modal__box__content">
            Modal content.
        </div>
    </div>
</dialog>
```

### Required class names:
| Class | Description |
| --- | ----------- |
| `modal` | This is the mail element that wraps the whole modal, cinluding the overlay. |
| `modal__box` | This is the box of the modal itself. |
| `modal__content` | This is the context body. When using the `injectContent()` method the content will be placed inside this element. |

### Optional class names:
| Class | Description |
| --- | ----------- |
| `modal__close` | Any element inside the modal which has this class will close the modal on click. |
<br/>

## Options:
| Name | Value | Required | Description |
| --- | --- | --- | ----------- |
| `element` | DOM element | &check; | The main dialog DOM element. |
| `lockScrollOnOpen` | boolean | | Wheather or not the body scroll should be hidden. Default: `true`. |
| `animation` | string | | Besides the default fade in and fade out effect, you can optionally add an extra native animation. Available options are `rise`, `sink`, `grow` or `shrink`. |
<br/>p

## Events:
| Name | Description |
| --- | ----------- |
| `onOpen` | Pass a function to be called when modal is opened. |
| `onClose` | Pass a function to be called when modal is closed. |
</br>

## Methods:
| Name | Description |
| --- | ----------- |
| `injectContent` | Add content to de `modal__content` element on the fly. The first parameter should be the HTML string, and it can also recieve a callback function as second parameter. |