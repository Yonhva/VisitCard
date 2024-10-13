import { Component, Input } from '@angular/core';
import { TimeLineEvent } from '../../interfaces/i-time-line-data';
import { TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-time-line-card',
  standalone: true,
  imports: [TuiIcon],
  templateUrl: './time-line-card.component.html',
  styleUrl: './time-line-card.component.less'
})
export class TimeLineCardComponent {
  
  @Input() event!: TimeLineEvent;
}
