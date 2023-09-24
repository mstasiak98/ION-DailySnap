import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-slideshow-image',
  templateUrl: './slideshow-image.component.html',
  styleUrls: ['./slideshow-image.component.scss'],
})
export class SlideshowImageComponent  implements OnInit {
  @Input() safeResourceUrl!: SafeResourceUrl | undefined;
  constructor() { }

  ngOnInit() {}

}

@NgModule({
  declarations: [SlideshowImageComponent],
  exports: [SlideshowImageComponent]
})
export class SlideshowImageComponentModule { }
