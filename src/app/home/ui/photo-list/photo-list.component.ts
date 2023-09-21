import {ChangeDetectionStrategy, Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {Photo} from "../../../shared/models/photo";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoListComponent  implements OnInit {

  @Input() photos!: Photo[];

  constructor() { }

  trackByFn(index: number, photo: Photo) {
    return photo.name;
  }

  ngOnInit() {}

}

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [PhotoListComponent],
  exports: [PhotoListComponent]
})
export class PhotoListComponentModule { }
