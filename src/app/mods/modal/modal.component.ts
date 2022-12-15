import { Component, ElementRef, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() onClose =new  EventEmitter()
  @Input() isExistFooter: boolean = true
  @Input() defaultButton: boolean = true
  @Input() newButton:boolean = false
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
