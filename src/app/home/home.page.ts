import { Component } from '@angular/core';
interface ImageCard {
  imgUrl: string;
  step: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageCards: ImageCard[] = [
    {
      imgUrl: '/assets/images/subscribe.svg',
      step: 'Step 1:',
      title: 'Subscribe',
      description:
        "Select a subscription plan that suits your child's learning needs and preferences.",
    },
    {
      imgUrl: '/assets/images/tools.svg',
      step: 'Step 2:',
      title: 'Personalise Your Box',
      description:
        "Tell us about your child's age, interests, and learning goals, and we'll customize their surprise box accordingly.",
    },
    {
      imgUrl: '/assets/images/box.svg',
      step: 'Step 3:',
      title: 'Receive Your Surprise Box',
      description:
        'Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.',
    },
  ];

  constructor() {}
}
