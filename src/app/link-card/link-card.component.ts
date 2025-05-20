import { Component, input, InputSignal } from '@angular/core';
import { ILinkCardData } from './interfaces/i-link-card-data';

/**
 * Компонент карточки контакта.
 */
@Component({
    standalone: true,
    selector: 'app-link-card',
    templateUrl: './link-card.component.html',
    styleUrl: './link-card.component.less'
})
export class LinkCardComponent {
    /**
     * Данные контакта.
     */
    public data: InputSignal<ILinkCardData> = input.required<ILinkCardData>();
}
