import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IWeather} from '../models/IWeather';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherItemComponent {
  @Input() public weather: IWeather;
}
