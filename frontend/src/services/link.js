const URL = import.meta.env.VITE_BACKEND_URL;

export const shorten = (data, token) => {
    return fetch(`${URL}/api/links/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(data),
        credentials: 'include'
    });
};

export const getDashboardLinkDetails = (token) => {
    return fetch(`${URL}/api/links/dashboard`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    });
};

export const getLinks = (sortConfig, searchQuery, page, token) => {

    return fetch(`${URL}/api/links/linksPage?sortBy=${sortConfig.sortBy}&order=${sortConfig.order}&page=${page}&limit=10&q=${searchQuery}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })
}

export const getLinkAnalytics = (sortConfig, page, token) => {
    return fetch(`${URL}/api/links/analytics?sortBy=${sortConfig.sortBy}&order=${sortConfig.order}&page=${page}&limit=10`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })
}


export const updateLinks = (id, data, token) => {
    return fetch(`${URL}/api/links/edit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(data),
    })
}

export const deleteLink = (id, token) => {
    return fetch(`${URL}/api/links/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })
}

export const getLinkDetails = (id, token) => {
    return fetch(`${URL}/api/links/getLinkDetails/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })
}
