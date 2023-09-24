import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {PhotoListComponentModule} from "./ui/photo-list/photo-list.component";
import {SlideshowModule} from "../slideshow/slideshow.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PhotoListComponentModule,
    SlideshowModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
