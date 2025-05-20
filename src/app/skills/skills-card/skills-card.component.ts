import { Component, inject, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk';
import { TuiChip } from '@taiga-ui/kit';

/**
 * Компонент карточки навыков.
 */
@Component({
    standalone: true,
    selector: 'app-skills-card',
    imports: [TuiChip],
    templateUrl: './skills-card.component.html',
    styleUrl: './skills-card.component.less'
})
export class SkillsCardComponent {
    /**
     * Сигнал о необходимости завершить прокрутку к определенному индексу.
     */
    public scrollToIndex: OutputEmitterRef<number> = output<number>();

    /**
     * Порядковый номер карточки.
     */
    public index: InputSignal<number> = input.required<number>();

    /**
     * Заголовок.
     */
    public readonly title: InputSignal<string> = input.required<string>();

    /**
     * Список навыков.
     */
    public readonly skills: InputSignal<string[]> = input.required<string[]>();

    /**
     * Изображение.
     */
    public readonly image: InputSignal<string> = input.required<string>();

    /**
     * Признак того, что приложение открыто с мобильного устройства.
     */
    protected readonly isMobile: boolean = inject(TUI_IS_MOBILE);
}
