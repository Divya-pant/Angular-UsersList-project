import { Directive, HostListener, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Profile } from './types';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  @Input() hoverColor: string = 'yellow';

  @HostListener('mouseenter')

  onmouseenter(){
  this.setBgColor(this.hoverColor);
  }
  @HostListener('mouseleave')

  onmouseleave(){
  this.setBgColor('white');
  }
  
  setBgColor(color:string){
   this.elRef.nativeElement.style.backgroundColor=color;
  }
  constructor(private elRef: ElementRef) { 
   
  }

}
