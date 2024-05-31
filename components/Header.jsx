import styled from 'styled-components';
// Styled Components

const HeaderText = styled.h1`
    margin:0;
`;

function Header() {
    return (
        <HeaderText>Employee Directory</HeaderText>
    );
}

export default Header;