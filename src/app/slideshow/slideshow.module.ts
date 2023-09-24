import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowImageComponentModule } from "./ui/slideshow-image/slideshow-image.component";
import {SlideshowComponent} from "./slideshow.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  imports: [
    CommonModule,
    SlideshowImageComponentModule,
    IonicModule,
  ],
  declarations: [SlideshowComponent],
  exports: [
    SlideshowComponent
  ],
})
export class SlideshowModule { }
