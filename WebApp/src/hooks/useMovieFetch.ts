import { useEffect, useState, useCallback } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";
import { MovieState } from "../models/Movie";

export const useMovieFetch = (id: string) => {
    const [state, setState] = useState<MovieState>({} as MovieState);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchMovie = useCallback(async () => {
        try {
            const movie = await API.fetchMovie(id);
            const credits = await API.fetchCredits(id);

            const directors = credits.crew.filter(
                member => member.job === 'Director'
            );

            setState({
                ...movie,
                actors: credits.cast,
                directors
            });

            setIsLoading(false);

        } catch (error) {
            setError(true)
        };
    }, [id])

    useEffect(() => {
        const sessionState = isPersistedState(id)

        if (sessionState) {
            setState(sessionState);
            setIsLoading(false);
            return;
        }

        fetchMovie();
    }, [fetchMovie, id]);

    useEffect(() => {
        sessionStorage.setItem(id, JSON.stringify(state));
    }, [id, state])


    return { state, isLoading, error }
}