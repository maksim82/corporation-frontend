type Mods = Record<string, boolean | string>;

export const classNames = (ctx: string, mods: Mods, additional: string[]) => {
    return [
        ctx,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([key, _]) => key),
        ].join(" ");
};
