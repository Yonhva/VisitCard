import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { LayoutComponent } from "./layout/layout.component";

/**
 * Главный компонент приложения.
 */
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [TuiRoot, LayoutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent { }
