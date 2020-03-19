import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from './redux/cake/action';

function App(props) {
    console.log(props.numOfCake)
  return (
    <div className="App">
          <h1>El numero que hay de pasteles en el alamacen es: {props.numOfCake}  </h1>
          <button onClick={()=>{props.buyCake(5)}}>Comprar cake</button>
    </div>
  );
}

function mapStateToProps(state) {
    return {
        numOfCake:state.cake.numOfCake
    }
}

function mapDispatchToProps(dispatch){
    return{
        buyCake:(num)=>dispatch( buyCake(num))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
