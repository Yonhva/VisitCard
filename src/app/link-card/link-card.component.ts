import { Component, Input } from '@angular/core';
import { ILinkCardData } from './interfaces/i-link-card-data';

@Component({
    selector: 'app-link-card',
    standalone: true,
    imports: [],
    templateUrl: './link-card.component.html',
    styleUrl: './link-card.component.less'
})
export class LinkCardComponent {
    @Input()
    data!: ILinkCardData;
}
