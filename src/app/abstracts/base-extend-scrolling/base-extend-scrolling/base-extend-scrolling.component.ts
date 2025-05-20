import { ChangeDetectionStrategy, Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY_QUERY } from '@taiga-ui/cdk';
import { ScrollService } from '../../../services/scroll.service';
import { INTERSECTION_ROOT } from '@ng-web-apis/intersection-observer';

/**
 * Абстрактный компонент прокрутки страницы.
 */
@Component({
    standalone: true,
    selector: 'app-base-extend-scrolling',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: INTERSECTION_ROOT, useValue: ElementRef }],
})
export abstract class BaseExtendScrollingComponent {
    /**
     * Список элементов разметки.
     */
    @ViewChildren('block', { read: ElementRef })
    private readonly blocks: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    /**
     * Признак того, можем ли совершать прокрутку.
     */
    private isCanScrolling: boolean = true;

    /**
     * Текущий индекс прокрутки.
     */
    public currentScrollIndex: number = 0;

    /**
     * Сервис прокрутки.
     */
    private readonly scrollService: ScrollService = inject(ScrollService);

    /**
     * Инициализирует экземпляр класса {@link BaseExtendScrollingComponent}.
     */
    public constructor() {
        this.scrollService.indexToScroll$.pipe(takeUntilDestroyed()).subscribe((index: number) => {
            this.scrollToIndex(index);
        });
    }

    /**
     * Вызывается при пересечении блока с экраном.
     * 
     * @param isIntersecting Признак того, что пересечение произошло.
     * @param index Порядковый номер блока, который пересекает экран.
     */
    public onIntersection([{ isIntersecting }]: IntersectionObserverEntry[], index: number): void {
        if (isIntersecting && this.currentScrollIndex !== index && this.isCanScrolling) {
            this.currentScrollIndex = index;
        }
    }

    /**
     * Прокручивает на один блок вниз.
     */
    public scrollingDown(): void {
        this.currentScrollIndex += 1;
    }

    /**
     * Прокручивает до назначенного индекса.
     * 
     * @param index Индекс, до которого необходимо совершить прокрутку.
     */
    public scrollToIndex(index: number): void {
        this.isCanScrolling = false;
        this.currentScrollIndex = index;
        this.blocks.get(index)?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => { this.isCanScrolling = true }, 500);
    }
}
