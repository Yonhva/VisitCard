import { Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { EducationInfoComponent } from './education-info/education-and-info-card.component';
import { INTERSECTION_ROOT, IntersectionObserverModule } from '@ng-web-apis/intersection-observer';
import { ScrollService } from '../services/scroll.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY_QUERY } from '@taiga-ui/cdk';


@Component({
    selector: 'app-bio',
    standalone: true,
    imports: [ProfileCardComponent, EducationInfoComponent, IntersectionObserverModule],
    templateUrl: './bio.component.html',
    styleUrl: './bio.component.less',
    providers: [{ provide: INTERSECTION_ROOT, useValue: ElementRef }],
})
export class BioComponent {

    /**
     * Список ссылок на элементы блоков прокрутки.
     */
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
