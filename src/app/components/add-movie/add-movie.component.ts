import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  ratingTypes: string[] = [
    'directing',
    'acting',
    'costumeDesign',
    'editing',
    'music',
    'visualEffects',
    'screenplay',
  ];
  title: string = '';
  director: string = '';
  writers: string = '';
  year: string = '';
  stars: string = '';
  imgUrl: string = '';
  review: string = '';
  constructor() {}

  ngOnInit(): void {}
}