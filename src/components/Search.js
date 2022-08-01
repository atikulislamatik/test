import React from "react";

const SearchBar = ({
    query,
    loading,
    setQuery
}) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 mb-5 mt-5">
                        <form>
                            <input
                                value={query}
                                className="form-control"
                                placeholder="Search products"
                                name="query"
                                onChange={(event) => setQuery(event.target.value)}
                            />

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SearchBar;