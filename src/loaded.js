
import React, { Component } from 'react'
const  Loaded =(Component) =>{
  
   return class Loaded extends Component {
        render() {
            console.log(this.props.loaded)
            return (
                <div>
                    {this.props.loaded ? <div class="lds-hourglass"></div> 
                    :
                     <Component {...this.props}/>}
                </div>
            )
        }
    }
    
}

export default Loaded;
