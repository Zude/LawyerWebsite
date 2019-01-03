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
  intro1 = 'Hier finden sie einen richtig guten Text, der sie sofort von dieser atemberaubenden Homepage und mir als anwalt total überzeugt. j Hier finden sie einen richtig guten Text, der sie sofort von dieser atemberaubenden Homepage und mir als anwalt total überzeugt. ja ich bin ein super coller typa ich bin ein super coller typ';

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

  scroll(el) {
    el.scrollIntoView({behavior: "smooth"});
  }
  
  constructor() { }

  ngOnInit() {

    
  }

}
