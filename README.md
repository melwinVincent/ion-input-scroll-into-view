# ion-input-scroll-into-view

A simple directive for scrolling the input into the view on focus event for Ionic 2/3 applications. Can be attached to ion-input and ion-textarea. The element is scrolled into view only if needed. 
A thin Ionic3 directive bundled with the scroll-into-view-if-needed ponyfill.

# Install

` npm install ion-input-scroll-into-view --save `

# Usage 

## Step-1

### attach the ion-input-scroll-into-view directive to the <ion-input> or <ion-textarea> as follows.
```
    <ion-item>
        <ion-label> <ion-icon name="person"></ion-icon></ion-label>
        <ion-input ion-input-scroll-into-view type="text" [(ngModel)]="loginObj.username"></ion-input>
    </ion-item>
```

```
    <ion-item>
        <ion-textarea ion-input-scroll-into-view></ion-textarea>
    </ion-item>
```

## Step-2

### you have to import the StarRatingModule in the module.ts of your parent component as follows
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