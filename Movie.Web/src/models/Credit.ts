export type Cast = {
    character: string;
    creditId: string;
    name: string;
    profilePath: string;
};

export type Crew = {
    job: string;
    name: string;
    creditId: number;
}

export type Credits = {
    id: number;
    cast: Cast[];
    crew: Crew[];
};