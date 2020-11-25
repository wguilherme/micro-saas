import React from 'react'
import Header from '../../components/Header'
import {Container, InputGroup, FormControler, Button, Alert} from 'react-bootstrap'
import  {ContentContainer, Form} from './styles'

class Home extends React.Component {
   constructor(props){
      super(props);
   }

   render(){
      return (
         <Container>

         <Header>Seu novo encurtador de URL. :)</Header>
         <ContentContainer>


         </ContentContainer>
         </Container>
      )
   }
}

export default Home;