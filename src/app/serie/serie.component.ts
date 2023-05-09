import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {


  series: Array<Serie>=[];

  constructor(private serieService:SerieService) {

  }
  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }
  calcularPromedio(): string{
    let promedio = 0;
    this.series.forEach(s => promedio += s.seasons);
    promedio /= this.series.length;
    let promedioT = Math.round(promedio);
    return promedioT.toString();
}
  ngOnInit() {

    this.getSeries();
  }

}
