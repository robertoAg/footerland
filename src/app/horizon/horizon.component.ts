import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizon',
  templateUrl: './horizon.component.html',
  styleUrls: ['./horizon.component.scss']
})
export class HorizonComponent implements OnInit {
  buildings: Array<any> = [];
  world = {
    position: 1
  }
  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<100; i++){
      let building = {
        position: {
          start: Math.floor(Math.random()*100),
          bottom: 0,
          left: Math.floor(Math.random()*100)
        },
        size: {
          height: 100,
          width: 40
        },
        opacity: 0
      }
      this.buildings.push(building)
    }
  }

  @HostListener('mousewheel', ['$event']) 
  onMousewheel(event: any) {
    if(event.wheelDelta<0){
      this.world.position++;
      this.move(true);
    }else{
      this.world.position--;
      if(this.world.position<0)
        this.world.position = 0;
      // this.move(false);
    }
  }

  move(directionDown: boolean) {
    this.buildings.forEach(building => {
      if(directionDown && this.world.position > building.position.start && this.world.position < building.position.start+30){
        building.opacity += 0.03;
        building.position.bottom++;
        building.size.width++;
        building.size.height++;
      }else if(this.world.position > building.position.start+30){
        building.position.bottom--
        building.size.width++;
      }
      if(building.position.left<50 && this.world.position > building.position.start && this.world.position < building.position.start+100){
        building.position.left -= (50-building.position.left)/200;
      }
      if(building.position.left>50 && this.world.position > building.position.start && this.world.position < building.position.start+100){
        building.position.left += (building.position.left-50)/200;
      }
      console.log(building.position.bottom)
    });
  }
}
