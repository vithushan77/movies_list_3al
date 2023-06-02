import React, { useEffect, useMemo, useRef, useState } from "react"
import Select from 'react-select'

const getOptions = (categories, categoryFilter) => {
    const optionsTab = [];
    for (let i = 0; i < categories.length; i++) {
        if(!categoryFilter.includes(categories[i])) {
            optionsTab.push({
                label: categories[i],
                value: categories[i]
            })
        }
    }
    return optionsTab;
}

const Category = ({ movies, categories, handleChange }) => {

    const categoryFilter  = useMemo(() => {
        const cat = [];
        categories.forEach(category => {
            if(!movies.find(movie => movie.category === category)) {
                cat.push(category);
            }
        })
        return cat;
    }, [categories, movies]);
    const selectEl = useRef(null);
    const [options, setOptions] = useState([]);

    useEffect((() => {
        setOptions(getOptions(categories, categoryFilter));
        selectEl.current.state.value = '';
    }), [movies, categoryFilter, categories])

    const handler = (filters) => {
        const filteredMovies = [];
        filters.forEach(filter => movies.forEach(movie => {
            if(movie.category === filter.value) {
                filteredMovies.push(movie);
            }
        }));
        if(filteredMovies.length === 0 && filters.length === 0) {
            handleChange(movies)
        } else {
            handleChange(filteredMovies);
        }
    }

    return (
        <div>
            <Select options={options} isMulti onChange={(filters, actions) => handler(filters, actions)} ref={selectEl} />
        </div>
    )
}

export default Category;