import { Component, Input } from '@angular/core';
import { TimeLineEvent } from '../../interfaces/i-time-line-data';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiPreview, TuiPreviewDialogDirective } from '@taiga-ui/kit';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

@Component({
  selector: 'app-time-line-card',
  standalone: true,
  imports: [TuiIcon, TuiPreview, TuiPreviewDialogDirective, PolymorpheusOutlet, PolymorpheusTemplate, TuiButton],
  templateUrl: './time-line-card.component.html',
  styleUrl: './time-line-card.component.less'
})
export class TimeLineCardComponent {
  
  @Input() event!: TimeLineEvent;

  public isOpen: boolean = false;
}
