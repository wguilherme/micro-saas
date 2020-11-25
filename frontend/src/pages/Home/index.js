import React from 'react'
import Header from '../../components/Header'
import {Container, InputGroup, FormControl, Button, Alert} from 'react-bootstrap'
import  {ContentContainer, Form} from './styles'

class Home extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         isLoading: false,
         url: '',
         shortenedURL: '',
         errorMessage: ''
      }
   }

   render(){
      return (
         <Container>
            <Header>Seu novo encurtador de URL. :)</Header>
            <ContentContainer>
               <Form>
                  <InputGroup>
                  <FormControl
                  placeholder="Digite a url para encurtar"
                  defaultValue=""
                  onChange={e=>this.setState({url: e.target.value})}
                  /> 
                  <InputGroup.Append>  
                     <Button variant="primary" type="submit">Encurtar</Button>
                  </InputGroup.Append> 
                  </InputGroup>
               </Form>
            </ContentContainer>
         </Container>
      )
   }
}

export default Home;