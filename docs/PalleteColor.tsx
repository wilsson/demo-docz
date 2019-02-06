import * as React from 'react';
import styled from 'styled-components';

export const StyledColor = styled.div`
    background-color: black;
    width: 150px;
    height: 150px;
`;

export const Color = () => (
    <div>
        <StyledColor />
        #fff
    </div>
)