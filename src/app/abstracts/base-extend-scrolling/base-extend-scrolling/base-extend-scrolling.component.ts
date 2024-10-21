import { Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY_QUERY } from '@taiga-ui/cdk';
import { ScrollService } from '../../../services/scroll.service';
import { INTERSECTION_ROOT } from '@ng-web-apis/intersection-observer';

@Component({
    selector: 'app-base-extend-scrolling',
    standalone: true,
    templateUrl: './base-extend-scrolling.component.html',
    styleUrl: './base-extend-scrolling.component.less',
    providers: [{ provide: INTERSECTION_ROOT, useValue: ElementRef }],
})
export abstract class BaseExtendScrollingComponent {
    @ViewChildren('block', { read: ElementRef })
    private readonly blocks: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    public isCanScrolling = true;

    public currentScrollIndex = 0;

    public scrollService = inject(ScrollService);
    
    constructor() {
        this.scrollService.indexToScroll$.pipe(takeUntilDestroyed()).subscribe((index: number) => {
            this.scrollToIndex(index);
        });
    }

    public onIntersection([{ isIntersecting }]: IntersectionObserverEntry[], index: number): void {
        if (isIntersecting && this.currentScrollIndex !== index && this.isCanScrolling) {
            this.currentScrollIndex = index;
        }
    }

    public scrollingDown()
    {
        this.currentScrollIndex += 1;
        console.log(this.currentScrollIndex);
    }

    public scrollToIndex(index: number)
    {
        this.isCanScrolling = false;
        this.currentScrollIndex = index;
        console.log(this.currentScrollIndex);
        this.blocks.get(index)?.nativeElement.scrollIntoView({behavior: 'smooth'});
        setTimeout(() => {this.isCanScrolling = true}, 500 );
    }
}
