import { Component, Input, output } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TuiChip } from '@taiga-ui/kit';

@Component({
    selector: 'app-skills-card',
    standalone: true,
    imports: [TuiChip, TuiIcon],
    templateUrl: './skills-card.component.html',
    styleUrl: './skills-card.component.less'
})
export class SkillsCardComponent {
    public scrollTo = output<number>();

    @Input() index!:number;
}
