export interface Skill {
    "name": string,
    "level": KnowledgeLevel,
    "icon": string,
}

export enum KnowledgeLevel {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    ADVANCED = "ADVANCED",
    EXPERT = "EXPERT",
}