import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name = 'Klaus Löffler';
  job = 'Rechtsanwalt';
  subHead = 'Ich bin der Anwalt deines Vertrauens';
  introduction = 'Hey ich bin ein cooler Anwalt für cooles Zeug!!!';
  services = 'Ich mache dies und das außerdem dings';
  aboutme = 'ich bin ein geiler boi und habe viel erfahrung';

  scroll(el) {
    el.scrollIntoView({behavior: "smooth"});
  }
  
  constructor() { }

  ngOnInit() {

    
  }

}
