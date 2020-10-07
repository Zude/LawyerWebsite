import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name = 'Klaus Löffler';
  job = 'Rechtsanwalt';

  addressStreet = 'Waldweg 18';
  addressPLZCity = '22393 Hamburg (-Sasel)';
  addressCountry = 'Deutschland';

  number = '+4940/355323-0';
  fax = '+4940/355323-23';
  times = 'Mittwoch 09:00-13:00';
  mail = 'info@rechtsanwalthamburg.de';

  scroll(el) {
    el.scrollIntoView({behavior: "smooth"});
  }
  
  constructor() { }

  ngOnInit() {

    
  }

}
