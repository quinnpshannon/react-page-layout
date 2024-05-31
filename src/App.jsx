import HomePage from './HomePage'
import EmployeePage from './EmployeePage'
import styled from 'styled-components';
import './App.css'

const AppBody = styled.main`
background: Yellow;
padding: 5px;
display: flex;
justify-content: center;
`;


function App() {
  return (
    <AppBody>
      <HomePage />
      <EmployeePage />
    </AppBody>
  )
}

export default App
