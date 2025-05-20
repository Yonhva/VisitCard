import { Component, inject } from '@angular/core';
import { TuiAccordion, TuiCarousel, TuiPagination } from '@taiga-ui/kit';
import { ITextCardData } from '../../text-card/interfaces/i-text-card-data';
import { TextCardComponent } from "../../text-card/text-card.component";
import { TUI_IS_MOBILE } from '@taiga-ui/cdk';

/**
 * Компонент, представляющий информацию об уровнях образования.
 */
@Component({
    standalone: true,
    selector: 'app-education-info',
    imports: [TuiAccordion, TextCardComponent, TuiCarousel, TuiPagination],
    templateUrl: './education-info.component.html',
    styleUrl: './education-info.component.less'
})
export class EducationInfoComponent {
    /**
     * Признак, что приложение открыто с мобильного устройства.
     */
    protected readonly isMobile: boolean = inject(TUI_IS_MOBILE);

    /**
     * Индекс карусели.
     */
    protected index: number = 0;

    /**
     * Список данных об образовании.
     */
    protected readonly educationData: ITextCardData[] = [
        {
            title: 'ФГБОУ ВО "Шуйский филиал ИвГУ"',
            subtitle: 'Бакалавриат - 2019 - 2023',
            description: 'Педагогическое (начальное) образование: Учитель начальных классов',
            icon: 'graduation-cap',
        },
        {
            title: 'ФГБОУ ВО "Шуйский филиал ИвГУ"',
            subtitle: 'Дополнительное образование - 2023 - 2024',
            description: 'Педагогическое образование: Педагог дополнительного образования',
            icon: 'graduation-cap',
        },
        {
            title: 'ФГБОУ ВО "Шуйский филиал ИвГУ"',
            subtitle: 'Дополнительное образование - 2023 - 2024',
            description: 'Педагогическое образование: Преподаватель по робототехнике',
            icon: 'graduation-cap',
        },
        {
            title: 'ФГБОУ ВО "Шуйский филиал ИвГУ"',
            subtitle: 'Магистратура - 2023 - 2025',
            description: 'Педагогическое образование: Информационные технологии в профессиональной деятельности педагога',
            icon: 'graduation-cap',
        },
    ];

    /**
     * Данные о месте проживания.
     */
    protected readonly locationData: ITextCardData = {
        title: 'Место проживания',
        subtitle: 'г. Шуя',
        description: 'Ивановская область',
        icon: 'map-pin-house',
    }
}
