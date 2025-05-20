import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * Сервис прокрутки.
 */
@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    /**
     * {@link Subject} Индекс прокрутки.
     */
    private readonly scrollIndex$: Subject<number> = new Subject<number>;

    /**
     * {@link Observable} Прокрутки к индексу.
     */
    public readonly indexToScroll$: Observable<number> = this.scrollIndex$.asObservable();

    /**
     * Инициирует прокрутку к нулевому индексу.
     */
    public scrollToStart(): void {
        this.scrollIndex$.next(0);
    }
}
