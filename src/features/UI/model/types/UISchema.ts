// <Адрес страницы, позиция скролла>
export type ScrollSchema = Record<string, number>;

export interface UIschema {
    scroll: { [path: string]: number };
}
