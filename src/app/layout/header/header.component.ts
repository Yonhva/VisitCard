import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TuiDialog, TuiIcon } from '@taiga-ui/core';
import { ScrollService } from '../../services/scroll.service';

/**
 * Компонент заголовка.
 */
@Component({
    standalone: true,
    selector: 'app-header',
    imports: [CommonModule, TuiIcon, TuiDialog],
    templateUrl: './header.component.html',
    styleUrl: './header.component.less'
})
export class HeaderComponent {
    /**
     * Выбранная страница.
     */
    protected selectPage: 'home' | 'bio' | 'skills' | 'examples' | 'contact-me' = 'home';

    /**
     * Сервис навигации.
     */
    private readonly router: Router = inject(Router);

    /**
     * Сервис прокрутки.
     */
    private readonly scrollService: ScrollService = inject(ScrollService);

    /**
     * Сервис обнаружения изменений.
     */
    private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

    /**
     * Признак того, открыт ли диалог.
     */
    protected open: boolean = false;

    /**
     * Изменяет страницу.
     * 
     * @param newPage Идентификатор новой страницы.
     */
    protected changePage(newPage: 'home' | 'bio' | 'skills' | 'examples' | 'contact-me'): void {
        this.selectPage = newPage;

        const newRoute = newPage === 'home' ? '' : newPage;
        void this.router.navigate([newRoute]);
    }

    /**
     * Прокручивает в начало.
     */
    protected scrollToStart(): void {
        this.scrollService.scrollToStart();
    }

    /**
     * Открывает диалог.
     */
    protected showDialog(): void {
        this.open = true;
        this.cdr.markForCheck();
    }
}
