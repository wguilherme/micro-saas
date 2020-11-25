import React from 'react'
import {Container} from 'react-bootstrap'

import Header from '../../components/Header'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Home extends React.Component {
   constructor(props){
      super(props);
   }

   render(){
      return (
         <Container>

         <Header>Seu novo encurtador de URL. :)</Header>

      <FontAwesomeIcon icon="check-square"/>URL Shortner

         </Container>
      )
   }
}

export default Home;