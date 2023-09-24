import { Injectable } from '@angular/core';
import {from, map, Observable, shareReplay, switchMap, take, tap} from "rxjs";
import {Photo} from "../models/photo";
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  #hasLoaded = false;

  storage$ = from (this.ionicStorage.create()).pipe(shareReplay(1));
  load$: Observable<Photo[]> = this.storage$.pipe(
    switchMap((storage) => from(storage.get('photos'))),
    map((photos) => photos ?? []),
    tap(() => (this.#hasLoaded = true)),
    shareReplay(1)
  );

  constructor(private ionicStorage: Storage) { }

  save(photos: Photo[]) {
    if(this.#hasLoaded) {
      this.storage$.pipe(take(1)).subscribe((storage) => {
        storage.set('photos', photos);
      });
    }
  }
}
