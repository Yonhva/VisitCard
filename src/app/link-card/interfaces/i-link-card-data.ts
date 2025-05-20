/**
 * Модель карточки контакта.
 */
export interface ILinkCardData {
    /**
     * Иконка.
     */
    readonly icon: string;

    /**
     * Заголовок.
     */
    readonly title: string;

    /**
     * Ссылка.
     */
    readonly link?: string;
}