import { Component } from '@angular/core';
import {PhotoService} from "./data-access/photo.service";
import {map} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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

  constructor(public photoService: PhotoService, private sanitizer: DomSanitizer) {}

}
