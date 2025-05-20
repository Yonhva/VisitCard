/**
 * Модель данных карточки образования.
 */
export interface IEducationData {
    /**
     * Уровень образования.
     */
    readonly educationLevel: string;

    /**
     * Институт.
     */
    readonly institution: string;

    /**
     * Ученая степень.
     */
    readonly direction: string;

    /**
     * Профиль подготовки.
     */
    readonly profile: string;

    /**
     * Год выпуска.
     */
    readonly yearGraduate: string;
}