export const fetchStudios = () => {
    debugger
    return (
        $.ajax({
            method: 'GET',
            url: 'api/studios',
        })
    );
};

export const fetchStudio = (id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/studios/${id}`
        })
    );
};

export const createStudio = (studio) => {
    return (
        $.ajax({
            method: 'POST',
            url: 'api/studios',
            data: { studio },
        })
    );
};

export const updateStudio = (studio) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `api/studios/${studio.id}`,
            data: { studio },
        })
    );
};

export const deleteStudio = id => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/studios/${id}`
        })
    );
};