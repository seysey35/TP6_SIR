import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-issa-bak',
  templateUrl: './issa-bak.component.html',
  styleUrls: ['./issa-bak.component.css']
})
export class IssaBAKComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  id: string = '';
  MaListe : Pokemon[]=[
    {id: 1,nom :"Poklin" },
    {id: 2,nom :"MaiPoke" },
    {id: 3,nom :"Bista" },
    {id: 4,nom :"BahPokemon" },
    {id: 5,nom :"pokoko" },
  ]
 

}
