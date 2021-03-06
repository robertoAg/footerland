import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gooey',
  templateUrl: './gooey.component.html',
  styleUrls: ['./gooey.component.scss']
})
export class GooeyComponent implements OnInit {

  gooeyFooterColor: string = '#000';
  gooeyBubbleColor: string = '#000';
  bubbles: any = [];

  constructor() {
    this.changeColor(this.gooeyFooterColor, '--gooeyFooterColor'); // Set default theme
    this.changeColor(this.gooeyBubbleColor, '--gooeyBubbleColor'); // Set default theme
  }

  changeColor(gooeyFooterColor: string, propertyName: string) {
    document.documentElement.style.setProperty(propertyName, gooeyFooterColor);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['myInput'].currentValue);
  }

  ngOnInit(): void {
    setInterval(()=>{
      if(Math.random()>0.95){
        this.addBubble();
      }
    }, 100)
  }

/*
  @HostListener('document:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    //console.log(event)
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
          console.log(verticalOffset)
  }
*/

  @HostListener('mousewheel', ['$event']) 
  onMousewheel(event: any) {
    if(event.wheelDelta<0){
      this.addBubble()
    }
  }

  addBubble() {
    if(this.bubbles.length<100){
      const bubble = {
        position: {
          bottom: 0 + Math.floor(Math.random()*15),
          left: Math.floor(Math.random()*100)
        },
        size: {
          width: Math.floor(Math.random()*10)
        },
        autodestroy: function(bubbles: any){
          setTimeout(() =>{
            bubble.position.bottom += Math.random()*100 + 20;
          }, 2000)
          setTimeout(() =>{
            bubbles.splice(bubbles.indexOf(this), 1); 
          }, 6000)
        }
      }
      bubble.autodestroy(this.bubbles);
      this.bubbles.push(bubble);
    }
  }
}
