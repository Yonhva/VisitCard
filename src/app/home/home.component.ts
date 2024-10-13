import { Component } from '@angular/core';
import { TextCardComponent } from "../text-card/text-card.component";
import { ITextCardData } from '../text-card/interfaces/i-text-card-data';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [TextCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.less'
})
export class HomeComponent {
   
}
