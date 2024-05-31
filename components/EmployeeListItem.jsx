import styled from 'styled-components';
import photo from '../src/assets/Tex_AnimeAva_03.png'
// Styled Components

const EmployeeListItemBody = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px black;
    margin-bottom: 2px;
    background: teal;
`;

const EmployeeListItemImage = styled.img`
    width: 50px;
    height: 50px;
    background-color: blue;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
`;

const EmployeeListNameBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const EmployeeListItemName = styled.h3`
    display:flex;
    margin:0;
    font-family: 'arial';
    color: purple;
    `;
    
const EmployeeListItemTitle = styled.h5`
    display:flex;
    font-family: 'arial';
    margin:0;
    padding: 0;
`;

function EmployeeListItem() {
    return (
        <EmployeeListItemBody>
            <EmployeeListItemImage src={photo} atl='some image'/>
            <EmployeeListNameBox>
                <EmployeeListItemName>Employee Name</EmployeeListItemName>
                <EmployeeListItemTitle>Employee Title</EmployeeListItemTitle>
            </EmployeeListNameBox>
        </EmployeeListItemBody>
    );
}

export default EmployeeListItem;