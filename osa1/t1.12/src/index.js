import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      eniten: 0
    }
  }

  metodi = () => {
    lista[this.state.selected] +=1;
    this.setState({})
    var suurin = 0;
    var ind = 0;
    lista.forEach(function(item, index, array) {
        if (item >= suurin) {
            suurin = item
            ind = index
        }
    })
    this.state.eniten = ind
}



  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <div>
        ääniä {this.props.lista[this.state.selected]}
        </div>
      <div>
        <button onClick={() => this.setState({ selected: Math.floor(Math.random() * (anecdotes.length-1)) + 1})}>
          uusi quote
        </button>
        <button onClick={() => this.metodi() }>
          äänestä
        </button>
        </div>
        <div>
            <h1>Eniten ääniä</h1>
            {this.props.anecdotes[this.state.eniten]}
            <div>
            ääniä {this.props.lista[this.state.eniten]}
            </div>
        </div>
      </div>
    )
  }
}

const lista = [0, 0, 0, 0, 0, 0]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} lista={lista} />,
  document.getElementById('root')
)