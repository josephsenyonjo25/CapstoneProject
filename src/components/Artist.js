
import React from 'react';

      
      class Artist extends React.Component{
       render(){
        const {handleSubmit} = this.props
        return (
            <form onSubmit= {handleSubmit}>
               <label>
                   Artist:
                   <input type ="text" artist ="artist" />
                   </label> 
                   <input type ="submit"
                   value = "Submit" />
            </form>
        );

       }
           
            
      }
      
      
      
      
      export default Artist;

