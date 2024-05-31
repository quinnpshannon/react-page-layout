import EmployeeList from '../components/EmployeeList'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import styled from 'styled-components';
import './App.css'

const LeftBody = styled.main`
background: orange;
padding: 5px;
margin-right: 5px;
display: flex;
flex-direction: column;
`;


function HomePage() {
  return (
    <LeftBody>
      <Header />
      <SearchBar />
      <EmployeeList />
    </LeftBody>
  )
}

export default HomePage