import { Component, Input } from '@angular/core'

@Component({
  selector: 'place-card',
  templateUrl: 'place-card.component.html',
  styleUrls: ['place-card.component.css'],
})
export class PlaceCard {
  @Input()
  image: string =
    'https://play.teleporthq.io/static/svg/placeholders/no-image.svg'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'image'
  @Input()
  city: string = 'City Name'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  constructor() {}
}
