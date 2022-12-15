import { Component } from '@angular/core';

@Component({
  selector: 'app-moduls-home',
  templateUrl: './moduls-home.component.html',
  styleUrls: ['./moduls-home.component.css']
})
export class ModulsHomeComponent {
   showModal: boolean = false

  ngChangeModal(){
    this.showModal = !this.showModal
  }
}
