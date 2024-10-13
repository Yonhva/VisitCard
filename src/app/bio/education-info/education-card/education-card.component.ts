import { Component, Input } from '@angular/core';
import { IEducationData } from '../interfaces/i-education-data';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    selector: 'app-education-card',
    standalone: true,
    imports: [TuiAccordion],
    templateUrl: './education-card.component.html',
    styleUrl: './education-card.component.less'
})
export class EducationCardComponent {

    @Input()
    data!: IEducationData;
}
