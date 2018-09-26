import { NgModule, ModuleWithProviders } from '@angular/core';
import { Ionic3InputScrollIntoViewDirective } from './directives/ionic3-input-scroll-into-view.directive';
import { IonicModule } from 'ionic-angular';
@NgModule({
    imports: [ IonicModule ],
    declarations: [ Ionic3InputScrollIntoViewDirective ],
    exports: [ Ionic3InputScrollIntoViewDirective ]
})
export class Ionic3InputScrollIntoViewModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Ionic3InputScrollIntoViewModule
        };
    }
}