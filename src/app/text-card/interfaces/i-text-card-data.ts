/**
 * Модель данных текстовой карточки.
 */
export interface ITextCardData {
    /**
     * Заголовок.
     */
    readonly title: string;

    /**
     * Подзаголовок.
     */
    readonly subtitle: string;

    /**
     * Описание.
     */
    readonly description: string;

    /**
     * Иконка.
     */
    readonly icon: string;
}