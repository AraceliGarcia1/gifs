import { Component,Input, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit{
  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is requiered')
  }
  @Input()
  public gif!:Gif;
}
