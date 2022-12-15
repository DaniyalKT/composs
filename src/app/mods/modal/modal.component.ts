import { Component, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() onClose =new  EventEmitter()
  
  constructor( private el: ElementRef){}

  
  ngOnInit(): void {
      document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(): void {
    //document.body.removeChild(this.el.nativeElement)
     this.el.nativeElement.remove()
  }

  onCloseModal(){
    this.onClose.emit()
  }

}
