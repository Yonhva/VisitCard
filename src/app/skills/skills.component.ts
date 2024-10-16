import { Component } from '@angular/core';
import { BaseExtendScrollingComponent } from '../abstracts/base-extend-scrolling/base-extend-scrolling/base-extend-scrolling.component';
import { WaIntersectionObserver } from '@ng-web-apis/intersection-observer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [WaIntersectionObserver, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.less'
})
export class SkillsComponent extends BaseExtendScrollingComponent{

}
