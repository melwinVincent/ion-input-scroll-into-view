import { NgModule } from '@angular/core';
import { IonInputScrollIntoViewDirective } from './directives/ion-input-scroll-into-view.directive';
import { IonicModule } from 'ionic-angular';
var IonInputScrollIntoViewModule = (function () {
    function IonInputScrollIntoViewModule() {
    }
    IonInputScrollIntoViewModule.forRoot = function () {
        return {
            ngModule: IonInputScrollIntoViewModule
        };
    };
    IonInputScrollIntoViewModule.decorators = [
        { type: NgModule, args: [{
                    imports: [IonicModule],
                    declarations: [IonInputScrollIntoViewDirective],
                    exports: [IonInputScrollIntoViewDirective]
                },] },
    ];
    /** @nocollapse */
    IonInputScrollIntoViewModule.ctorParameters = function () { return []; };
    return IonInputScrollIntoViewModule;
}());
export { IonInputScrollIntoViewModule };
//# sourceMappingURL=ion-input-scroll-into-view.module.js.map