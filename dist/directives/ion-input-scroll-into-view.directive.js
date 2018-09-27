import { Directive, ElementRef, HostListener } from '@angular/core';
import scrollIntoView from 'scroll-into-view-if-needed';
var IonInputScrollIntoViewDirective = (function () {
    function IonInputScrollIntoViewDirective(elementRef) {
        this.elementRef = elementRef;
    }
    IonInputScrollIntoViewDirective.prototype.ionFocus = function (event) {
        var _this = this;
        setTimeout(function () {
            scrollIntoView(_this.elementRef.nativeElement, {
                scrollMode: 'if-needed',
                block: 'nearest',
                inline: 'nearest',
            });
        }, 250);
    };
    IonInputScrollIntoViewDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ion-input-scroll-into-view]'
                },] },
    ];
    /** @nocollapse */
    IonInputScrollIntoViewDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    IonInputScrollIntoViewDirective.propDecorators = {
        "ionFocus": [{ type: HostListener, args: ['ionFocus', ['$event'],] },],
    };
    return IonInputScrollIntoViewDirective;
}());
export { IonInputScrollIntoViewDirective };
//# sourceMappingURL=ion-input-scroll-into-view.directive.js.map