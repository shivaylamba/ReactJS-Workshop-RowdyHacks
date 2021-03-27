import React, {Component} from 'react';
import ChildComponent from './childComponent';

class ParentComponent extends Component {

render(){
return ( <h1> Hello we are at Rowdy hacks 
    <ChildComponent text={"Hello I am the first child of the parent component"}/> 
    <ChildComponent text={"Hello I am the second child of the parent component"}/> 
    <ChildComponent text={"Hello I am the third child of the parent component"}/> 


</h1>
);
}

}

export default ParentComponent;