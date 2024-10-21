import { Component } from '@angular/core';
import { BaseExtendScrollingComponent } from '../abstracts/base-extend-scrolling/base-extend-scrolling/base-extend-scrolling.component';
import { WaIntersectionObserver } from '@ng-web-apis/intersection-observer';
import { CommonModule } from '@angular/common';
import { SkillsCardComponent } from './skills-card/skills-card.component';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [WaIntersectionObserver, CommonModule, SkillsCardComponent],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.less'
})
export class SkillsComponent extends BaseExtendScrollingComponent {
    
}
