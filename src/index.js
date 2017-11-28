
import React from 'react';
import ReactDOM from 'react-dom';
// test 666
function Hello() {
return (
    <div>Hello</div>
);
}


function ValidIndicator() {
    var isValid = true;
    return (
       
    <span>
    { /* here is a comment */}
    {isValid ? 'valid' : 'not valid'}</span>
    );
    }

    

function World() {
    return  1+2;
    /* here is a comment */
    }
    
function SubmitButton()
{
    var buttonLablel = "Submit";
    return(
        /* here is a comment */
        <button>{buttonLablel}</button>
    )
}

    function HelloWorld() {
        return (
         <div>
             <Hello/>  <World/>
             <ValidIndicator/>
             
        </div>
        );
        }
        
/* here is a comment */
ReactDOM.render(<HelloWorld/>,document.querySelector('#root'));