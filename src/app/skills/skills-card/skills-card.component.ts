import { Component, Input, output } from '@angular/core';

@Component({
    selector: 'app-skills-card',
    standalone: true,
    imports: [],
    templateUrl: './skills-card.component.html',
    styleUrl: './skills-card.component.less'
})
export class SkillsCardComponent {
    public scrollTo = output<number>();

    @Input() index!:number;
}
