import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Profile } from '../types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile!: Profile[];

  @Output() profileNameClicked: EventEmitter<string> = new EventEmitter<string>();

  someHtmlText!: SafeHtml;
hue:number=0;
isVisible:boolean=true;
awards: string[]=['PadmaBhushna','BharatRatna','DadaSahebPhalke'];

  constructor(private sanitizer: DomSanitizer) {
    setInterval(()=>{this.hue++},20)
    
  }
  ngOnInit(): void {
    var stu:string[];
    fetch('https://api.github.com/users').then(response => response.json()).then(data=> this.profile=data);
  }
 toggleVisibility(){
  this.isVisible= !this.isVisible;
 }
  notifyParent() {
    // this.profileNameClicked.emit(this.profile.any);
  }

  // // 1. Self - Called when the input properties have changed
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log((new Date()).toString(), 'ngOnChanges', changes);
  // }

  // // 2. Self - Called on initialization i.e., After the First Change Detection cycle.
  // ngOnInit(): void {
  //   console.log((new Date()).toString(), 'ngOnInit');
  //   this.someHtmlText = this.sanitizer.bypassSecurityTrustHtml(`<h6>From API</h6>`);
  // }

  // // 3. Self - Developer’s custom change detection
  // ngDoCheck(): void {
  //   console.log((new Date()).toString(), 'ngDoCheck');
  // }

  // // 4. Children - After component content initialized, i.e., Called when the component’s content ngContent is initialized
  // ngAfterContentInit(): void {
  //   console.log((new Date()).toString(), 'ngAfterContentInit');
  // }

  // // 5. Children - After every check of component content, i.e., Called when the component’s content is updated or checked for updates
  // ngAfterContentChecked(): void {
  //   console.log((new Date()).toString(), 'ngAfterContentChecked');
  // }

  // // 6. Children - After a component's views are initialized, i.e., Called when the component’s projected view has been initialized
  // ngAfterViewInit(): void {
  //   console.log((new Date()).toString(), 'ngAfterViewInit');
  // }

  // // 7. Children - After every check of a component's views, i.e., Called after the projected view has been checked
  // ngAfterViewChecked(): void {
  //   console.log((new Date()).toString(), 'ngAfterViewChecked');
  // }

  // // 8. Self - Just before the Component is destroyed.
  // ngOnDestroy(): void {
  //   console.log((new Date()).toString(), 'ngOnDestroy');
  // }
}

