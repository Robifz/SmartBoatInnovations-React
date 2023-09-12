import { Component, Input } from '@angular/core'

@Component({
  selector: 'navbar-interactive',
  templateUrl: 'navbar-interactive.component.html',
  styleUrls: ['navbar-interactive.component.css'],
})
export class NavbarInteractive {
  @Input()
  text8: string = 'Code'
  @Input()
  text7: string = 'Services'
  @Input()
  text2: string = 'Services'
  @Input()
  text9: string = 'Contact'
  @Input()
  text: string = 'Home'
  @Input()
  text4: string = 'Contact'
  @Input()
  text1: string = 'About'
  @Input()
  text5: string = 'Home'
  @Input()
  text3: string = 'Code'
  @Input()
  text6: string = 'About'
  constructor() {}
}
