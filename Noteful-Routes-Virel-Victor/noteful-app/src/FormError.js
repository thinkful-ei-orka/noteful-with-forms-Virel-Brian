import React from 'react';
import {reportError} from '.'

export default class FormError extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        error:null,
          hasError: false
        };
      }

      static getDerivedStateFromError(error) {
        console.error(error);
        return { hasError: true };
      }


      componentDidCatch(error, info) {
        //This is from react documentation. I don't know what logComponentStackToMyService is supposed to be. componentStack is a key, info is info object?
        logComponentStackToMyService(info.componentStack);
      }

      // componentDidCatch(error,info){
      //   this.setState({hasError:true})
      //   reportError(error,info)
      // }

      render() {
        if (this.state.hasError) {      
          return (
            <h2>Could not display Add Info page.</h2>
          );
        }
        return this.props.children;
      }  
}

// function reportError() {
//   return Promise.resolve({success: true})
// }