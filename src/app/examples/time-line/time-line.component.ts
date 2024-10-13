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
            date: 'kjjjklj',
            icon: 'string',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'string',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'string',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'string',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'string',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'string',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'string',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'string',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'string',
            image: 'string',
            description: 'string',
        },
        {
            date: 'kjjjklj',
            icon: 'string',
            image: 'string',
            description: 'string',
        },
    ];
}
