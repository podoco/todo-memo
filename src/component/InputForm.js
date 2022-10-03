import { useState } from 'react';
import styled from 'styled-components';
import { fetchCreate } from '../util/api';

const Form = styled.form`
display: flex;
padding-top:8px;
`;
const Input = styled.input`
width: 100%;
padding: 8px 12px;
margin-right: 16px;
color: rgb(107 114 128);
border-radius: 4px;

`;
const InputButton = styled.input`
color: rgb(96,165,250);
border-color: (96,165,250);
border-radius: 4px;

&:hover{
  color: white;
  background-color: aqua;
}

`;


const InputForm = () => {

  const [title, setValue] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title }
    fetchCreate("http://localhost:3001/memo/", data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder='해야할일을 입력하세요'
        required
        value={title}
        onChange={(e) => setValue(e.target.value)}
      />
      <InputButton
        type="submit"
        value="입력"
      />
    </Form>
  );

}
export default InputForm