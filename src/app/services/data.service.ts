import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface Video {
  title: string;
  url: SafeResourceUrl;
  isYoutube: boolean;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public videos: Video[] = [
    {
      // tslint:disable-next-line: max-line-length
      // <iframe width="853" height="480" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      title: 'Matt ChorseySons de animais | Aprender sons de animais em português',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/NBbICffDAEQ'),
      isYoutube: true,
      id: 1
    },
    {
      title: 'Video Aula (Experiment in English)',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1LbW2HiO8QD58l1lYRcnhU73mYPV9G5vd/preview'),
      isYoutube: true,
      id: 2
    },
    {
      title: 'Palavra Cantada | Assim Assado',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6O_cgx_IXPs'),
      isYoutube: true,
      id: 3
    },
    {
      title: 'VÍDEO - MANIFESTO DE AMOR (Yasmin e seus Avós)',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/f47FLeVZfbE'),
      isYoutube: true,
      id: 4
    },
    {
      title: 'História da Ressurreição - Professora Camila (Inf. 3)',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/0liwftRS8lE'),
      isYoutube: true,
      id: 5
    },
    {
      title: 'VÍDEO - MANIFESTO DE AMOR (Luiza Lobo e Júlia Lobo com sua avó)',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zfB7MtOdI28'),
      isYoutube: true,
      id: 6
    },
    {
      title: 'VÍDEO - MANIFESTO DE AMOR (Pedro Arthur e seus avós)',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3KWQ4LAsRYI'),
      isYoutube: true,
      id: 7
    },
    {
      title: 'A Partir do Pão',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1-BLbRdKnJ4q29Z2tWrxCmJ0L9dG9BW3c/preview'),
      isYoutube: true,
      id: 8
    },
    {
      title: 'Happy Easter',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1y4dEuat_s25SzcNac83sYE8MciKSv_Hi/preview'),
      isYoutube: true,
      id: 9
    },
    {
      title: 'Massinha de Modelar - Receita, Como fazer',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/pgc5yMjq6Hg'),
      isYoutube: true,
      id: 10
    },
    {
      title: 'A Santa Ceia e o Lava-Pés - Marcelino Câmara',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1WFRSyGg_hFEc87GP5gPAg4HrvvdG8akg/preview'),
      isYoutube: true,
      id: 11
    },
  ];

  constructor(private sanitizer: DomSanitizer) { }

  public getVideos(): Video[] {
    return this.videos;
  }

  public getVideoById(id: number): Video {
    return this.videos[id];
  }
}
