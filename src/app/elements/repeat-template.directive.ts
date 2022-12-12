import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeatTemplate]'
})
export class RepeatTemplateDirective {
  @Input('appRepeatTemplate') set render(times: number) {
    for (let i = 0; i < times; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {})
    }
  }
  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
