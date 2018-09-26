import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonInputScrollIntoViewDirective } from './directives/ion-input-scroll-into-view.directive';
import { IonicModule } from 'ionic-angular';
@NgModule({
    imports: [ IonicModule ],
    declarations: [ IonInputScrollIntoViewDirective ],
    exports: [ IonInputScrollIntoViewDirective ]
})
export class IonInputScrollIntoViewModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonInputScrollIntoViewModule
        };
    }
}