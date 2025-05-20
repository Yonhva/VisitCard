import { Component } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { EducationInfoComponent } from './education-info/education-info.component';
import { WaIntersectionObserver } from '@ng-web-apis/intersection-observer';
import { BaseExtendScrollingComponent } from '../abstracts/base-extend-scrolling/base-extend-scrolling/base-extend-scrolling.component';

/**
 * Компонент профиля.
 */
@Component({
    standalone: true,
    selector: 'app-bio',
    imports: [ProfileCardComponent, EducationInfoComponent, WaIntersectionObserver],
    templateUrl: './bio.component.html',
    styleUrl: './bio.component.less',
})
export class BioComponent extends BaseExtendScrollingComponent { }