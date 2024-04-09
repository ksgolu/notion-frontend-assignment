import { Component, OnInit, Input } from '@angular/core';
interface ImageCard {
  imgUrl: string;
  step: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent implements OnInit {
  @Input() data: ImageCard = {
    imgUrl: '',
    step: '',
    title: '',
    description: '',
  };
  constructor() {}

  ngOnInit() {}
}
