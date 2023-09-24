import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {Photo} from "../../../shared/models/photo";
import {DaysAgoPipeModule} from "../days-ago/days-ago.pipe";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoListComponent  implements OnInit {

  @Input() photos!: Photo[];
  @Output() delete = new EventEmitter<string>();
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
    DaysAgoPipeModule
  ],
  declarations: [PhotoListComponent],
  exports: [PhotoListComponent]
})
export class PhotoListComponentModule { }
