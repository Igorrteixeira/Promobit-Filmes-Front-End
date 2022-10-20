import Pagination from '@mui/material/Pagination';
import {Container} from "./styled"
import { useContext } from 'react';
import {GlobalStateContext} from "../../global/GlobalStateContext"

export default function PaginationControlled() {
  const {page,setPage} = useContext(GlobalStateContext)
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0); 
  };

  return (
    <Container>
      <Pagination 
      count={10} 
      page={page} 
      onChange={handleChange} />
    </Container>
  );
}
