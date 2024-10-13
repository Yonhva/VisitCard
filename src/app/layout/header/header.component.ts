import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TuiButton, CommonModule, TuiIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  public selectPage: 'home' |'bio' | 'skills' | 'examples' | 'contact-me' = 'home';

  private readonly router = inject(Router);

  public scrollService = inject(ScrollService);

  public changePage(newPage: 'home' | 'bio' | 'skills' | 'examples' | 'contact-me'): void {
    this.selectPage = newPage;

    const newRoute = newPage === 'home' ? '' : newPage;
    void this.router.navigate([newRoute]);
  }

  public scrollToStart() {
    this.scrollService.scrollToStart();
  }
}
