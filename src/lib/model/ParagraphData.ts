export interface ParagraphData {
    texts: string[],
    animation: TEXT_ANIMATION,
}

export enum TEXT_ANIMATION {
    TYPEWRITER = "TYPEWRITER",
    FADE_IN = "FADE_IN",
}