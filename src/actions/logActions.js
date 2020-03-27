import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, UPDATE_LOG, SEARCH_LOGS, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT } from './types';

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoadinG();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     }
// };

// Get Logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoadinG();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Add New Log
export const addLog = (log) => async dispatch => {
    try {
        setLoadinG();

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Delete Log from server
export const deleteLog = (id) => async dispatch => {
    try {
        setLoadinG();

        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Update log on server
export const updateLog = log => async dispatch => {
    try {
        setLoadinG();

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

//Seacrch server Logs
export const searchLogs = (text) => async dispatch => {
    try {
        setLoadinG();

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Set Curent Log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
};

// Clear current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
};


// Set Loading to true
export const setLoadinG = () => {
    return {
        type: SET_LOADING
    };
};