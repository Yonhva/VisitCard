import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    private readonly scroll: Subject<number> = new Subject<number>;

    public readonly indexToScroll$: Observable<number> = this.scroll.asObservable();

    public scrollToStart(): void {
        this.scroll.next(0);
    }
}
