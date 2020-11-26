import React from 'react'
import Header from '../../components/Header'
import {Container, InputGroup, FormControl, Button, Alert, Spinner} from 'react-bootstrap'
import  {ContentContainer, Form} from './styles'
import Shortner from '../../services/shortner'

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

handlerSubmit = async(event) => {
   event.preventDefault()

   const {url} = this.setState

   console.log(url)

   // console.log(url)

   this.setState({isLoading: true, errorMessage: ''})

   if(!url){
      this.setState({isLoading:false, errorMessage:'Informe uma URL para encurtar.'})
   } else {
      try {
      const service = new Shortner()
      const result = await service.generate({url})


      this.setState({isLoading: false, code: result.code})


         
      } catch (error) {
         this.setState({isLoading:false, errorMessage: 'Ops, ocorreu um erro.'})
      }
   }

}

copyToClipboard = () => {
   const element = this.inputURL
   element.select()
   document.execCommand('copy')
}

   render(){
      const {isLoading, errorMessage, code, url} = this.state;

      return (
         <Container>
            <Header>Seu novo encurtador de URL. :)</Header>
            <ContentContainer>
               <Form onSubmit={this.handlerSubmit}>
                  <InputGroup className="mb-3">

                     <FormControl
                     placeholder="Digite a url para encurtar"
                     defaultValue=""
                     onChange={e => this.setState({url: e.target.value}, console.log(url))}
                     />  

                     <InputGroup.Append>  
                        <Button variant="primary" type="submit">Encurtar</Button>
                     </InputGroup.Append> 
                  </InputGroup>

                  {isLoading ? (
                     <Spinner animation="border"/>
                  ) : (
                     code && (
                        <>
                     <InputGroup>
                        <FormControl
                        autofocus={true}
                        defaultValue={`https://shortify.la/${code}`}
                        ref={(input) => this.inputURL = input}
                        /> 
                        <InputGroup.Append>  
                           <Button variant="outline-secondary" onClick={() => this.copyToClipboard()}>Copiar</Button>
                        </InputGroup.Append> 
                        </InputGroup>
                        <p>Para acompanhar as estatísticas, acesse http://localhost:3000/{code}/stats</p>
                        </>
                     )
                  )}

                  {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
               </Form>
            </ContentContainer>
         </Container>
      )
   }
}

export default Home;