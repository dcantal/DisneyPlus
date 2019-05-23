export const fetchMovies = () => {
    debugger
    return (
        $.ajax({
            method: 'GET',
            url: 'api/movies',
        })
    );
};

export const fetchMovie = (id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/movies/${id}`
        })
    );
};

export const createMovie = (movie) => {
    return (
        $.ajax({
            method: 'POST',
            url: 'api/movies',
            data: { movie },
        })
    );
};

export const updateMovie = (movie) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `api/movies/${movie.id}`,
            data: { movie },
        })
    );
};

export const deleteMovie = id => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/movies/${id}`
        })
    );
};