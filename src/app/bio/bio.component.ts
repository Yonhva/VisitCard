import { Component } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { EducationInfoComponent } from './education-info/education-and-info-card.component';
import { WaIntersectionObserver } from '@ng-web-apis/intersection-observer';
import { BaseExtendScrollingComponent } from '../abstracts/base-extend-scrolling/base-extend-scrolling/base-extend-scrolling.component';


@Component({
    selector: 'app-bio',
    standalone: true,
    imports: [ProfileCardComponent, EducationInfoComponent, WaIntersectionObserver],
    templateUrl: './bio.component.html',
    styleUrl: './bio.component.less',
})
export class BioComponent extends BaseExtendScrollingComponent {

}