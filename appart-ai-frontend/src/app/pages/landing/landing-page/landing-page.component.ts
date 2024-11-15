import { Component } from '@angular/core';
import { Image } from '../../../intefaces/image.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  images: Image[] = [
    {
      src: 'assets/images/appart1.png',
      alt: 'appart1',
    },
    {
      src: 'assets/images/appart2.png',
      alt: 'appart2',
    },
    {
      src: 'assets/images/appart3.png',
      alt: 'appart3',
    },
    {
      src: 'assets/images/appart4.png',
      alt: 'appart4',
    },
  ];
}
