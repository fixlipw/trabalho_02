import React from "react";

const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const request = React.useCallback(async (url, options = {}) => {
        let response = null;
        let json = null;
        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
            if (!response.ok) {
                console.error(json.message || "Erro desconhecido");
            }
        } catch (err) {
            json = null;
            setError(err.message || "Erro desconhecido");
        } finally {
            setData(json);
            setLoading(false);
        }
        return {response, json};
    }, []);

    return {data, loading, error, request};
};

export default useFetch;
