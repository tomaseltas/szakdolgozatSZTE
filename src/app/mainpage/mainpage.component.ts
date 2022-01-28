import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faCarrot, faCoffee, faHeartbeat, faPhotoVideo, faPills, faRunning, faSmile } from '@fortawesome/free-solid-svg-icons';  
import { ExerciseComponent } from './exercise/exercise.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  videoIcon:string = "./assets/images/play.png";
  play:string = "Play";
  videodisabled:boolean = true;
  

  changeImg(){
    if(this.play == "Play")
    {
      this.play = "Pause",
      this.videoIcon = "./assets/images/pause.png",
      this.videodisabled = false
    }
    else
    {
      this.videoIcon = "./assets/images/play.png",
      this.play = "Play",
      this.videodisabled = true
    }
  }

  

  running = faRunning;
  food = faCarrot;
  smile = faSmile;
  coffee = faCoffee;
  pills = faPills;
  exercise = faHeartbeat;
  fullscreen = faPhotoVideo;

  typesOfShoes: string[] = ['5 km futás', '2500 kalória bevitele', 'Vitaminok bevitele', '2 csésze kávé', 'Sample','Sample', 'Sample', 'Sample', 'Sample', 'Sample'];

  ngOnInit(): void {

    
  }

  onCreate() {
    this.dialog.open(ExerciseComponent);
  }


  //COUNTEROK
  //VITAMIN COUNTER
  vitamincount: number = 0;
  vitamincountstop:any = setInterval(()=>{
    this.vitamincount++;
    if(this.vitamincount == 125){
      clearInterval(this.vitamincountstop);
    }
  }
  ,10)
  //MÉRFÖLD COUNTER
  merfoldcount: number = 0;
  merfoldcountstop:any = setInterval(()=>{
    this.merfoldcount++;
    if(this.merfoldcount == 95){
      clearInterval(this.merfoldcountstop);
    }
  }
  ,10)
  //KÁVÉ COUNTER
  kavecount: number = 0;
  kavecountstop:any = setInterval(()=>{
    this.kavecount++;
    if(this.kavecount == 32){
      clearInterval(this.kavecountstop);
    }
  }
  ,50)
  //NAP COUNTER
  napcounter: number = 0;
  napcounterstop:any = setInterval(()=>{
    this.napcounter++;
    if(this.napcounter == 23){
      clearInterval(this.napcounterstop);
    }
  }
  ,80)
  //PULZUS COUNTER
  pulzuscount: number = 0;
  pulzuscountstop:any = setInterval(()=>{
    this.pulzuscount++;
    if(this.pulzuscount == 164){
      clearInterval(this.pulzuscountstop);
    }
  }
  ,10)

}
