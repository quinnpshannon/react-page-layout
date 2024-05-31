import EmployeeListItem from '../components/EmployeeListItem'
import Header from '../components/Header'
import styled from 'styled-components';
import './App.css'

const AppBody = styled.main`
background: orange;
padding: 5px;
display: flex;
flex-direction: column;
`;


function EmployeePage() {
  return (
    <AppBody>
      <Header />
      <EmployeeListItem />
    </AppBody>
  )
}

export default EmployeePage