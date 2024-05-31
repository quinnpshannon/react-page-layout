import styled from 'styled-components';
import EmployeeListItem from './EmployeeListItem';
// Styled Components

const EmployeeListBody = styled.div`
    display: flex;
    flex-direction: column;
    background: green;
`;
function EmployeeList() {
    return (
        <EmployeeListBody>
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
        </EmployeeListBody>
    );
}

export default EmployeeList;