import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt, FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const Star = ({ stars, reviews }) => {
    const ratingstar = Array.from({ length: 5 }, (_, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className='staricon' />
                ) : stars >= number ? (
                    <FaStarHalfAlt className='staricon' />
                ) : (
                    <AiOutlineStar className='emptyicon' />
                )}
            </span>
        );
    });

    return (
        <Wrapper>
            <div className="icon-style">
                {ratingstar}
                <p>({reviews} customer reviews)</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .icon-style {
        display: flex;
        gap: 0.2rem;
        align-items: center;
        justify-content: flex-start;
    }
    .staricon {
        font-size: 1rem;
        color: orange;
    }
    .emptyicon {
        font-size: 1rem;
    }
    p {
        margin: 0;
        padding-left: 1.2rem;
    }
`;

export default Star;
