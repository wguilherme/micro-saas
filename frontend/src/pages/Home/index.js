import React from 'react'
import {Container} from 'react-bootstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Home extends React.Component {
   constructor(props){
      super(props);
   }

   render(){
      return (
         <Container>

      <FontAwesomeIcon icon="check-square"/>URL Shortner

         </Container>
      )
   }
}

export default Home;