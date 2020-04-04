const fetchData = async (searchTerm) => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: '1dbb59c1',
            s: searchTerm
        }
    });
    console.log(response.data);
};


const input = document.querySelector("input");

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay)
    };
};

const onInput = event => {
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500));

/* SIMPLE SOLUTION */

// let timeoutId;
// const onInput = event => {
//     if (timeoutId) {
//         clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//         fetchData(event.target.value)
//     }, 500)
// }
// input.addEventListener("input", onInput);