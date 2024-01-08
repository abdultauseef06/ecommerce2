import React from 'react';
import { useFilterContext } from '../context/Filtercontext';

const FilterSection = () => {
  const { filters: { text, category, color }, updateFilterValue, all_products } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    if (property === "colors") {
      newVal = newVal.flat();
    }

    if (property === "colors") {
      return ['All', ...new Set(newVal)];
    } else {
      return ['All', ...new Set(newVal)];
    }
  };

  const categoryData = getUniqueData(all_products, 'category');
  const companyData = getUniqueData(all_products, 'company');
  console.log("company",all_products);
  const colorsData = getUniqueData(all_products, 'colors');

  const handleInputChange = (e) => {
    updateFilterValue(e);
    // Additional logic or function call on submit can be added here
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* FilterSection */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <div className="search-container" style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <input
            name="text"
            type="text"
            placeholder=" Search..."
            value={text}
            onChange={handleInputChange}
            style={{
              padding: '5px 0 0 0',
              border: '1px solid black',
              height: '40px',
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%',
              borderRadius: '18px',
              marginLeft: '20px',
            }}
          />
        </div>
        <div className="filter-category" style={{ display: 'flex' }}>
          {categoryData.map((curElem, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={curElem}
              onClick={updateFilterValue}
              style={{
                backgroundColor: curElem === 'All' ? 'transparent' : 'black',
                color: 'white',
                marginTop: '5px',
                padding: '5px',
                margin: '5px',
                width: 'auto',
                border: '1px solid black',
                textDecoration: category === curElem ? "underline" : "none",
              }}
            >
              {curElem} <br />
            </button>
          ))}
          <div className="filter-company" style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="company" className="brand-label" style={{ marginRight: '8px', color: 'white', marginLeft: "7px" }}>
              Brand
            </label>
            <select
              name="company"
              id="company"
              className="filter-company-select"
              onChange={updateFilterValue}
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              {companyData.map((curElem, index) => (
                <option key={index} value={curElem}>
                  {curElem}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-color" style={{ display: 'flex', gap: '5px', marginLeft: "5px", alignItems: 'center' }}>
            <label htmlFor="color" className="brand-label" style={{ marginRight: '8px', color: 'white', marginLeft: "7px" }}>
              Sort by Colors:
            </label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            {colorsData.map((curColor, index) => (
  curColor === 'All' ? (
    // Render this structure if curColor is 'All'
    <button
      type="button"
      key={index}
      style={{
        padding: '15px 1px 15px 1px',
        height: '20px',
        width: '50px',
        marginLeft:"-7px",
        textDecoration: color.includes(curColor) ? 'underline' : 'none',
        backgroundColor: 'transparent',
        color:"white",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border:"1px solid black"
      }}
      name="color"
      id="color"
      className="btn-style"
      value={curColor}
      onClick={() => updateFilterValue({ target: { name: 'color', value: curColor } })}
    >
      {curColor}
    </button>
  ) : (
    // Render this structure if curColor is not 'All'
    <button
        type='button'
        style={{
            backgroundColor: curColor,
            padding: '5px 5px 5px 5px',
            borderRadius: "90%",
            height: "20px",
            width: "20px",
            border: `${color.includes(curColor) ? '3px' : '1px'} solid ${color.includes(curColor) ? 'grey' : 'white'}`,
            marginLeft: "8px",
            textDecoration: color.includes(curColor) ? "underline" : "none",
        }}
        name="color"
        id="color"
        className="btn-style"
        value={curColor}
        key={index}
        onClick={() => updateFilterValue({ target: { name: 'color', value: curColor } })}
    >
        {color.includes(curColor) ? "" : null}
    </button>
  )
))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
