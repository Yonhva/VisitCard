import { Component, output } from '@angular/core';
import { EducationCardComponent } from "./education-card/education-card.component";
import {TuiAccordion} from '@taiga-ui/kit';
import { ITextCardData } from '../../text-card/interfaces/i-text-card-data';
import { TextCardComponent } from "../../text-card/text-card.component";

@Component({
    selector: 'app-education-and-info',
    standalone: true,
    imports: [EducationCardComponent, TuiAccordion, TextCardComponent],
    templateUrl: './education-and-info-card.component.html',
    styleUrl: './education-and-info-card.component.less'
})
export class EducationInfoComponent {

    public readonly educationData: ITextCardData[] = [
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

    public readonly locationData: ITextCardData = {
        title: 'Место проживания',
        subtitle: 'г. Шуя',
        description: 'Ивановская область',
        icon: 'map-pin-house',
    }

}
