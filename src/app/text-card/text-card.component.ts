import { Component, input, InputSignal } from '@angular/core';
import { ITextCardData } from './interfaces/i-text-card-data';
import { TuiIcon } from '@taiga-ui/core';

/**
 * Компонент текстовой карточки.
 */
@Component({
    standalone: true,
    selector: 'app-text-card',
    imports: [TuiIcon],
    templateUrl: './text-card.component.html',
    styleUrl: './text-card.component.less'
})
export class TextCardComponent {
    /**
     * Данные текстовой карточки.
     */
    public data: InputSignal<ITextCardData> = input.required<ITextCardData>();
}
