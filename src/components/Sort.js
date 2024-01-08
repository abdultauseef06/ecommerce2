import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/Filtercontext';

// Styled components moved outside the functional component
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: Black;
  padding: 10px;
  margin: 5px;
  align-items: flex-start
  ;
`;

const Element = styled.div`
  border: 1px solid transparent;
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
`;

const SortButton = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
`;

const SelectElement = styled(Element)`
  /* Add any specific styles for the select element if needed */
`;



const Sort = () => {
  const { grid_view, setGridView, setListView, sorting } = useFilterContext();

  return (
    <>
      <Row > 
        <Element>
          <SortButton
            className={grid_view ? "active sortbutton" : "SortButton"}
            onClick={setGridView}
          >
            <BsFillGridFill className="ICON" />
          </SortButton>
          <SortButton
            className={grid_view ? "SortButton" : "active sortbutton"}
            onClick={setListView}
          >
            <BsList className="ICON" />
          </SortButton>
        </Element>
        <Element>Element 2</Element>
        <SelectElement>
          <select name='sort' id='sort' onClick={sorting}>
            <option value="Lowest">Price(Low-High)</option>
            <option value="Highest">Price(High-low)</option>
            <option value="a-z">A-Z</option>
          </select>
        </SelectElement>
      </Row>
    </>
  );
};

export default Sort;
