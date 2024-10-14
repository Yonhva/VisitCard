import { Component, Input } from '@angular/core';
import { TimeLineEvent } from './interfaces/i-time-line-data';
import { TuiIcon } from '@taiga-ui/core';
import { TimeLineCardComponent } from "./time-line-card/time-line-card/time-line-card.component";

@Component({
    selector: 'app-time-line',
    standalone: true,
    imports: [TuiIcon, TimeLineCardComponent],
    templateUrl: './time-line.component.html',
    styleUrl: './time-line.component.less'
})
export class TimeLineComponent {
    @Input() event!: TimeLineEvent[];

    timelineEvents: TimeLineEvent[] = [
        {
            date: '2023',
            icon: 'brush',
            image: '/examples/Main_scene_2.1.png',
            description: 'Сцена тронного зала для игры "The King Choice"',
        },
        {
            date: 'kjjjklj',
            icon: 'brush',
            image: '/examples/Main_scene_2.1.png',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'brush',
            image: '/examples/Main_scene_2.1.png',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'brush',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'brush',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'brush',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'brush',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'brush',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'brush',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'brush',
            image: 'string',
            description: 'string',
        },
    ];
}
