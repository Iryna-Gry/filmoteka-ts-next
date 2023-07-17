import React from 'react'

function SearchBar() {
  return (
    <div className="mt-10 md:w-84 mx-auto">
      <form className="w-full border-b-1 border-white" id="search-form">
        <input
          className="bg-transparent border-0 py-2 px-3 w-full text-white-text-color md:w-82 my-0 mx-auto placeholder:font-normal placeholder:text-sm placeholder:tracking-wide placeholder:text-white-text-color"
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Movie search"
        />
        <button type="submit" className="border-0 pb-1 bg-transparent" onClick={()=>{}}>
          <svg width="20" height="20">
            <use href="@/public/sprite.svg#icon-search-1"></use>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default SearchBar