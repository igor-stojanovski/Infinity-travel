import styled from "@emotion/styled";
import { Button, Form, InputGroup } from "react-bootstrap";

const SearchBar: React.FC = () => {
  return (
    <SearchBarStyle className="my-3">
      <Form.Control aria-label="search bar" aria-describedby="search bar" />
      <Button variant="outline-secondary" id="button-addon2">
        <i className="fa-solid fa-magnifying-glass "></i>
      </Button>
    </SearchBarStyle>
  );
};

export default SearchBar;

const SearchBarStyle = styled(InputGroup)`
  border: 1px solid #667080;
  border-radius: 6px;

  & button {
    background-color: #210d2f;
    border-radius: 5px !important;
  }

  & i {
    font-size: 20px;
    color: white;
  }
`;
