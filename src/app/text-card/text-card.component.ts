import { Component, Input } from '@angular/core';
import { ITextCardData } from './interfaces/i-text-card-data';
import { TuiIcon } from '@taiga-ui/core';

@Component({
    selector: 'app-text-card',
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './text-card.component.html',
    styleUrl: './text-card.component.less'
})
export class TextCardComponent {
    
    @Input()
    data!: ITextCardData;
}
