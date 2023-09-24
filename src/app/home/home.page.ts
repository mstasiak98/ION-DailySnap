import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PhotoService} from "./data-access/photo/photo.service";
import {BehaviorSubject, combineLatest, map} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {IonRouterOutlet} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  photos$ = this.photoService.photos$.pipe(
    map((photos) =>
      photos.map((photo) => ({
        ...photo,
        safeResourceUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
          photo.path
        ),
      }))
    )
  );

  modalIsOpen$ = new BehaviorSubject(false);

  vm$ = combineLatest([
    this.photos$,
    this.photoService.hasTakenPhotoToday$,
    this.modalIsOpen$
  ]).pipe(
    map(([photos, hasTakenPhotoToday, modalIsOpen]) => ({
      photos,
      hasTakenPhotoToday,
      modalIsOpen
    }))
  );

  constructor(public photoService: PhotoService, private sanitizer: DomSanitizer, public routerOutlet: IonRouterOutlet) {}



}
