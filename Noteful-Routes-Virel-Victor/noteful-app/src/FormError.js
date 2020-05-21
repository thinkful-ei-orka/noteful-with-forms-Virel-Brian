import React from 'react';


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


      render() {
        if (this.state.hasError) {      
          return (
            <h2>Could not display Add Info page.</h2>
          );
        }
        return this.props.children;
      }  
}