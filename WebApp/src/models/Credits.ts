export type Cast = {
    character: string;
    credit_id: string;
    name: string;
    profile_path: string;
};

export type Crew = {
    job: string;
    name: string;
    credit_id: number;
}

export type Credits = {
    id: number;
    cast: Cast[];
    crew: Crew[];
};