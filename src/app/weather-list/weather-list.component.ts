import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../models/IWeather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  @Input() public location: string;

  public weathers: IWeather[] = [
    {
      id: '1',
      location: 'Minsk',
      date: '1',
      temp: 1,
      wind: 1,
      pressure: 1,
    },
    {
      id: '2',
      location: 'Minsk',
      date: '1',
      temp: 1,
      wind: 1,
      pressure: 1,
    },
    {
      id: '2',
      location: 'London',
      date: '1',
      temp: 1,
      wind: 1,
      pressure: 1,
    },
  ];

  constructor() {
  }

  ngOnInit() {
    this.weathers = this.weathers.filter(item => item.location === this.location);
  }

  trackByFn(index: number, item: IWeather): string {
    return item.id;
  }

}
