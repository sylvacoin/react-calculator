import React, { Component } from 'react';
import Button from './components/Button';
import './css/App.css'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentInput:'0',
       memory:"",
       nextIsReset: false
    };

    this.buttons = [
      {symbol:'C', col:3, action:this.reset},
      {symbol:'/', col:1, action:this.addSymbol},
      {symbol:'7', col:1, action:this.addSymbol},
      {symbol:'8', col:1, action:this.addSymbol},
      {symbol:'9', col:1, action:this.addSymbol},
      {symbol:'*', col:1, action:this.addSymbol},
      {symbol:'4', col:1, action:this.addSymbol},
      {symbol:'5', col:1, action:this.addSymbol},
      {symbol:'6', col:1, action:this.addSymbol},
      {symbol:'-', col:1, action:this.addSymbol},
      {symbol:'1', col:1, action:this.addSymbol},
      {symbol:'2', col:1, action:this.addSymbol},
      {symbol:'3', col:1, action:this.addSymbol},
      {symbol:'+', col:1, action:this.addSymbol},
      {symbol:'0', col:2, action:this.addSymbol},
      {symbol:'.', col:1, action:this.addSymbol},
      {symbol:'=', col:1, action:this.calculate}
    ]
  }
  
  reset = () => {
    this.setState({
      currentInput:'0',
      memory:"",
      nextIsReset: false
    });
  }

  addSymbol = (symbol) => {
    if (  ['*','-','+','=','/'].indexOf(symbol) > -1){
      let {memory} = this.state;
      this.setState({ memory: memory + this.state.currentInput + symbol, nextIsReset:true});
    }else{
      if ((this.state.currentInput === "0" && symbol !== ".") || this.state.nextIsReset){
        this.setState({
          currentInput: symbol,
          nextIsReset: false
        })
      }else{
        this.setState({
          currentInput: this.state.currentInput + symbol
        })
      }
    }
  }

  calculate = () => {
    let { memory, currentInput } = this.state;
    this.setState({
      currentInput: eval(`${memory} ${currentInput}`),
      memory:[],
      nextIsReset: true
    })
  }
  
  render(){
    const { currentInput, memory } = this.state;
    return (
      <div className="App">
        <h1 className="centered">Calculator</h1>
        <div className="calculator">
          <div className="memory">{ memory.length > 0 ? memory.toString(): null }</div>
          <input type="text" className="result" value={currentInput} readOnly/>
          <div className="calc-buttons">
          {
            (this.buttons).map((button, index)=>(
              <Button key={index} symbol={button.symbol} col={button.col} action={(symbol) => button.action(symbol) }/>
            ))
          }
          </div>
          <p className="centered">Developed by Gandhiberry & powered by react</p>
        </div>
      </div>
    );
  }
}

export default App;
