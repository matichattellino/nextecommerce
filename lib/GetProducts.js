export const getProducts = () => {
    return fetch(`${process.env.URL}/products`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
};