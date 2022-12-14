import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: any[] = []
  @Input() header: any[] = []
  className: string = ''


  classNameData = [
    { name: 'Basic'},
    { name: 'Celled'},
    { name: 'Striped'}
  ]
  onChangeClassName(value: number) {
    switch (value) {
      case 2:
        this.className = 'striped'
        break;
      case 0:
        this.className = 'celled'
        break
      default:
        this.className = 'basic'
        break;
    }
  }


}
