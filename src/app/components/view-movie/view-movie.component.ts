import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Movie } from 'src/app/Movie';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css'],
})
export class ViewMovieComponent implements OnInit {
  movieToUpdate!: Movie;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<MovieComponent>,
    @Inject(MAT_DIALOG_DATA) public movie: Movie
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
    return null;
  }

  onDelete(movie: Movie) {
    return { action: 'delete', data: movie };
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      height: '95%',
      width: '80%',
      data: this.movie,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //console.log('result in view movie: ', result);
        //this.movieToUpdate = result;

        //this.updateMovieEvent.emit(result);
        this.dialogRef.close({ action: 'update', data: result });
        //return result;
      }
    });
  }

  rates = Object.keys(this.movie.ratings).map((key) => {
    let a: Record<string, number> = this.movie.ratings;
    return [key, a[key]];
  });

  avg =
    this.rates.reduce((prev, cur) => {
      return prev + Number(cur[1]);
    }, 0) / this.rates.length;
}
