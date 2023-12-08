declare module "*.svg" {
    const svg: SvgIcon;
    export default svg;
}

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
