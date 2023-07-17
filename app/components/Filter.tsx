import React from 'react'

function Filter() {
  return (
    <div>
      <button className="filter__btn btn">
        <svg className="filter__icon" width="20" height="20">
          <use href="./images/sprite.svg#icon-filters"></use>
        </svg>
        FILTER
      </button>
      <button className="filter__reset btn is-hidden">
        RESET
      </button>
      <div className="page__action">
      <button type="button" className="page__theme"></button>
      <button type="button" className="page__reset">AUTO</button>
    </div>

    <div id="tags-genre" className="visually-hidden">
      <div className="tag">Action</div>
      <div className="tag">Adventure</div>
      <div className="tag">Animation</div>
      <div className="tag">Comedy</div>
      <div className="tag">Documentary</div>
    </div>
  </div>
  )
}

export default Filter