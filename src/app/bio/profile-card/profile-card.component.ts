import { Component, output } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core/components/icon';

@Component({
    selector: 'app-profile-card',
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './profile-card.component.html',
    styleUrl: './profile-card.component.less'
})
export class ProfileCardComponent {
    
    public scrollDown = output();
    
}
