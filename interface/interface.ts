export interface ValuesInterface {
    [key: string]: string;
}

export interface SkillInterface {
    key: string;
    value: string;
    id: number;
}

export interface GroupSkillInterface {
    id?: number;
    name?: string;
    description?: string;
    rating?: string;
    file?: string;
    isEditing: boolean;
}
