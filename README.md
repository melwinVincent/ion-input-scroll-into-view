# ion-input-scroll-into-view

A thin directive bundled with the scroll-into-view-if-needed ponyfill for scrolling the ion-input into the view on focus event. The element is scrolled into view only if needed and this directive can be attached to ion-input and ion-textarea. Built for both Ionic 2 & 3 applications.

# Install

` npm install ion-input-scroll-into-view --save `

# Usage 

## Step-1

### attach the ion-input-scroll-into-view directive to the ion-input or ion-textarea as follows.

` <ion-input ion-input-scroll-into-view></ion-input> `

` <ion-textarea ion-input-scroll-into-view></ion-textarea> `

## Step-2

### you have to import the IonInputScrollIntoViewModule in the module.ts of your parent component as follows
```
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentPage } from './parent';
import { IonInputScrollIntoViewModule } from 'ion-input-scroll-into-view';

@NgModule({
  declarations: [
    ParentPage
  ],
  imports: [
    IonicPageModule.forChild(ParentPage),
    IonInputScrollIntoViewModule
  ],
})
export class ParentPageModule {}

```

## Contact
gmail : melwin.vincent.90@gmail.com