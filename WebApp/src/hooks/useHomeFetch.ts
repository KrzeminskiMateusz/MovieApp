import { useState, useEffect } from "react";
import API from '../API'
import { Movie } from "../models/Movie"
import { isPersistedState } from "../helpers";

const initialState = {
    page: 0,
    results: [] as Movie[],
    total_pages: 0,
    total_results: 0,
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page: number, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(page, searchTerm);

            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
            }));
        }
        catch {
            setError(true);
        }

        setLoading(false);
    }

    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                setState(sessionState);
                return;
            }
        }

        setState(initialState)
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        if (!isLoadingMore) return

        fetchMovies(state.page + 1, searchTerm)
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page])

    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));

    }, [searchTerm, state])

    return { state, error, loading, searchTerm, setSearchTerm, setIsLoadingMore };
}
