import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.less'
})
export class ContactCardComponent {
  
  @Input()
  public icon!:string;

  @Input() 
  public socialMediaNick!: 'yonhva' | 'Алёна Бартуль' | 'Alyona Aleksandrovna Bartul' | '+7(910)694-08-23' | 'tan-bokova@yandex.ru';

  @Input() 
  public link!: string;

}
