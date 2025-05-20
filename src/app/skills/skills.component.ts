import { Component } from '@angular/core';
import { BaseExtendScrollingComponent } from '../abstracts/base-extend-scrolling/base-extend-scrolling/base-extend-scrolling.component';
import { WaIntersectionObserver } from '@ng-web-apis/intersection-observer';
import { CommonModule } from '@angular/common';
import { SkillsCardComponent } from './skills-card/skills-card.component';

/**
 * Компонент страницы навыков.
 */
@Component({
    standalone: true,
    selector: 'app-skills',
    imports: [WaIntersectionObserver, CommonModule, SkillsCardComponent],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.less'
})
export class SkillsComponent extends BaseExtendScrollingComponent {
    /**
     * Список карточек навыков.
     */
    protected readonly skillsCards: {
        title: string;
        skills: string[];
        image: string;
    }[] = [
            {
                title: 'Development',
                skills: [
                    'Angular 16+',
                    'HTML5',
                    'LESS',
                    'TypeScript',
                    'JavaScript',
                    'RxJS',
                    'TaigaUI',
                    'Adaptive design',
                    'TailWind',
                    'REST API',
                    'SOLID'
                ],
                image: '/programmer.jpg'
            },
            {
                title: 'Digital Art',
                skills: [
                    'Pixel Art',
                    'Figma',
                    'Krita',
                    'Photoshop',
                    'Adobe Illistration',
                    'Animation',
                    'Tiles'
                ],
                image: '/artist.jpg'
            },
            {
                title: 'Education',
                skills: [
                    'Gamification',
                    'Online-education',
                    'Primary School',
                    'Robotech'
                ],
                image: '/teacher.png'
            },
        ];
}
