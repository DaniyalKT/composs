import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() data = []
  activeClass: number = 0

  onChangeClass(value: number) {

    if (value == this.activeClass) {
      this.activeClass = -1
    } else {
      this.activeClass = value
    }
  }

}
