
      import React from 'react';
      
      
      class Album extends React.Component{
        render(){
         const {handleSubmit} = this.props
         return (
             <form onSubmit= {handleSubmit}>
                <label>
                    Artist:
                    <input type ="text" album ="album" />
                    </label> 
                    <input type ="submit"
                    value = "Submit" />
             </form>
         );
 
        }
            
             
       }
       

export default Album;
