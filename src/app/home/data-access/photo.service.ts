import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Photo} from "../../shared/models/photo";
import {Platform} from "@ionic/angular";
import {Camera, CameraResultType, CameraSource, ImageOptions} from "@capacitor/camera";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  #photos$ = new BehaviorSubject<Photo[]>([])
  photos$ = this.#photos$.asObservable();

  constructor(private platform: Platform) { }


  async takePhoto() {
    const options: ImageOptions = {
      quality: 50,
      width: 600,
      allowEditing: false,
      resultType: this.platform.is('capacitor')
        ? CameraResultType.Uri
        : CameraResultType.DataUrl,
      source: CameraSource.Camera
    };

    try {
      const photo = await Camera.getPhoto(options);

      if(photo.path) {
        this.addPhoto(Date.now().toString(), photo.path)
      } else if (photo.dataUrl) {
        this.addPhoto(Date.now().toString(), photo.dataUrl)
      }
    } catch (error) {
      console.log('error', error);
      throw new Error('Could not save the photo');
    }
  }

  private addPhoto(fileName: string, filePath: string) {
    const newPhotos = [
      {
        name: fileName,
        path: filePath,
        dateTaken: new Date().toISOString()
      },
      ...this.#photos$.value
    ];

    this.#photos$.next(newPhotos);
  }
}
