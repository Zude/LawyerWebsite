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
  introduction = 'Willkommen';
  intro1 = 'Herzlich willkommen auf meiner Homepage. Mein Name ist Klaus Löffler und ich bin seit über 30 Jahren erfolgreicher Rechtsanwalt. Ich stehe meinen Mandanten in zahlreichen Rechtsgebieten mit Rat und Tat zur Seite. Neben ausführlicher und fundierter Rechtsberatung vertrete ich sie sowohl außergerichtlich als auch bei allen Gerichten.';

  services = 'Leistungen';
  serv1 = 'Strafrecht';
  serv2 = 'Familienrecht';
  serv3 = 'Zivilrecht';
  serv4 = 'Andere';
  serv5 = 'Dies das Recht';
  serv1text = 'das thema ist super wichtig und ich bin voll gut daron';
  serv2text = 'das thema ist super wichtig und ich bin voll gut daron';
  serv3text = 'das thema ist super wichtig und ich bin voll gut daron';
  serv4text = 'das thema ist super wichtig und ich bin voll gut daron';
  serv5text = 'das thema ist super wichtig und ich bin voll gut daron';
  
  aboutme = 'Über mich';
  aboutme1 = 'hdufgbnaougosahgfhsoifhioahfioebfhajskdhfkshfjd dddsdsd jkjlkajslkdjalksdjadsjlakljdakldjaklsdjladdhfjksguobuigbiuafbesuof';
  aboutme2 = 'hdufgbnaougosahgfhsoifhioahfioebguobuigbiuafbesuof';
  aboutme3 = 'hdufgbnaougosahgfhsoifhioahfioebguobuigbiuafbesuof';
  aboutm4 = 'hdufgbnaougosahgfhsoifhioahfioebguobuigbiuafbesuof';

  addressHead = 'Anschrift';
  contactHead = 'Kontakt';
  addressAddress = 'Hermanstraße 123';
  addressPLZ = '12345';
  addressCity = 'Hamburg';
  addressCountry = 'Deutschland';

  number = '12345678';
  fax = '987654321';
  timesTitle = 'Sprechzeiten:';
  times = 'Mittwoch 09:00-13:00';

  scroll(el) {
    el.scrollIntoView({behavior: "smooth"});
  }
  
  constructor() { }

  ngOnInit() {

    
  }

}
