import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, concatMap, delay, from, of, switchMap} from "rxjs";
import {Photo} from "../shared/models/photo";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent  implements OnInit {

  currentPhotos$ = new BehaviorSubject<Photo[]>([]);
  currentPhoto$ = this.currentPhotos$.pipe(
    // emit one photo at a time
    switchMap((photos) => from(photos)),
    concatMap((photo) =>
      // create new stream for each photo. Concat map to wait for inner observable to finish
      of(photo).pipe(
        // delay start of the stream for each photo
        delay(1500)
      )
    )
  );

  constructor(protected modalCtrl: ModalController) { }

  @Input() set photos(value: Photo[]) {
    this.currentPhotos$.next([...value].reverse());
  }

  ngOnInit() {}

}
