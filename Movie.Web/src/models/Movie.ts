export type Movie = {
    backdropPath: string;
    id: number;
    orginalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    title: string;
    voteAverage: number;
    voteCount: number;
    budget: number;
    runtime: number;
    revenue: number;
};

export type Movies = {
    page: number;
    results: Movie[];
    totalPages: number;
    totalResults: number;
};