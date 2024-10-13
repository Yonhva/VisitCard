import { Component, Input } from '@angular/core';
import { IImageData } from './interfaces/i-image-data';

@Component({
    selector: 'app-image-container',
    standalone: true,
    imports: [],
    templateUrl: './image-container.component.html',
    styleUrl: './image-container.component.less'
    })
export class ImageContainerComponent {
    @Input()
        data!: IImageData;
}
