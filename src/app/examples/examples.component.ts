import { Component } from '@angular/core';
import { ImageContainerComponent } from "./image-container/image-container/image-container.component";
import { IImageData } from './image-container/image-container/interfaces/i-image-data';
import { TimeLineComponent } from './time-line/time-line.component';
import { TimeLineEvent } from './time-line/interfaces/i-time-line-data';
import { TuiScrollbar } from '@taiga-ui/core';

@Component({
    selector: 'app-examples',
    standalone: true,
    imports: [ImageContainerComponent, TimeLineComponent, TuiScrollbar],
    templateUrl: './examples.component.html',
    styleUrl: './examples.component.less'
})
export class ExamplesComponent {
    public readonly imageCardData: IImageData[] = [
        {
            imageLink: '/profile-image.jpg',
        },
    ]

}
