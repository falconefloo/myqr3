import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { AnimationController } from '@ionic/angular';



interface Character {
  name: string;
  image: string;
  id: string;
  species: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  animations: [
    trigger('rainbow', [
      state('red', style({ color: 'red' })),
      state('orange', style({ color: 'orange' })),
      state('yellow', style({ color: 'yellow' })),
      state('green', style({ color: 'green' })),
      state('blue', style({ color: 'blue' })),
      state('indigo', style({ color: 'indigo' })),
      state('violet', style({ color: 'violet' })),
      transition('* => *', animate('1s'))
    ])
  ]
})
export class InicioPage implements OnInit{
  personajes: Character[] = [];
  nombreUsuario = localStorage.getItem('nombreUsuario');
  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  currentColor = 0;
  constructor(
    private animationCtrl: AnimationController, 
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe((res: any) => {
      console.log(res);
      this.personajes = res.results as Character[]; // Usar la interfaz Character
    });
  }


}

