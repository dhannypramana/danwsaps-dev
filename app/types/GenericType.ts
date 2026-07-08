export type ObjectValues<Type> = Type[keyof Type];
export type ObjectKeys<Type> = keyof Type;
export type Nullable<Type> = Type | null;
export type Undefined<Type> = Type | undefined;
export type Theme = ObjectValues<typeof THEME>;
