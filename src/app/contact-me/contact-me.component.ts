import { Component } from '@angular/core';
import { ContactCardComponent } from "./contact-card/contact-card.component";
import { TuiIcon } from '@taiga-ui/core';
import { ILinkCardData } from '../link-card/interfaces/i-link-card-data';
import { LinkCardComponent } from '../link-card/link-card.component';

@Component({
    selector: 'app-contact-me',
    standalone: true,
    imports: [ContactCardComponent, TuiIcon, LinkCardComponent],
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.less'
})
export class ContactMeComponent {

    public readonly contactData: ILinkCardData[] = [
        {
            icon: '/telegram.svg',
            title: 'Alyona Aleksandrovna Bartul',
            link: 'https://t.me/AlexBb568',
        },
        {
            icon: '/vkontakte.svg',
            title: 'Алёна Бартуль',
            link: 'https://vk.com/theater_of_the_absurd_0',
        },
        {
            icon: '/mail.svg',
            title: 'tan-bokova@yandex.ru',
            link: 'mailto:tan-bokova@yandex.ru'
        },
        {
            icon: 'phone-call.svg',
            title: '+7(910)694-08-23',
            link: 'tel:+79106940823'
        },
    ]
}
