import { Component, output, OutputEmitterRef } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core/components/icon';

/**
 * Компонент карточки профиля.
 */
@Component({
    standalone: true,
    selector: 'app-profile-card',
    imports: [TuiIcon],
    templateUrl: './profile-card.component.html',
    styleUrl: './profile-card.component.less'
})
export class ProfileCardComponent {
    /**
     * Сигнал о том, что необходимо совершить прокрутку вниз.
     */
    public scrollDown: OutputEmitterRef<void> = output();
}
