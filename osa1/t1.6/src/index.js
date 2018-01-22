import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0,
        keskiarvo: 0,
        summa: 0,
        pos: 0
      }
    }

    asetaArvoon = (arvo) => {
        return () => {
        if(arvo === 1) {
            this.setState({hyva: this.state.hyva + 1 })
        }
        if(arvo === 0) {
            this.setState({neutraali: this.state.neutraali + 1 })
        }
        if(arvo === -1) {
            this.setState({huono: this.state.huono + 1 })
        }
        this.metodit()
        }
    }

    metodit = () => {
        this.sum()
        this.pos()
        this.ka()
    }

    pos = () => {
        this.setState((prevState) => ({ pos: (100 * prevState.hyva/prevState.summa).toFixed(1) }))
    }

    sum = () => {
        this.setState((prevState) => ({ summa: prevState.hyva + prevState.neutraali + prevState.huono}))
    }

    ka = () => {
        this.setState((prevState) => ({ keskiarvo: ((prevState.hyva - prevState.huono)/prevState.summa).toFixed(2) }))
    }
    
  
    render() {
        const Button = ({ handleClick, text }) => (
            <button onClick={handleClick}>
              {text}
            </button>
        )

        const Statistic = ({nimi, arvo}) => {
            return (
              <tr>
              <th>{nimi}</th>
              <th>{arvo}</th>
              </tr>
            )
          }

        const Statistics = () => {
            if (this.state.summa === 0) {
              return (
                <div>
                  <em>nolla palautetta</em>
                </div>
              )
            }
            return (
                <table>
                    <tbody>
                <Statistic
                nimi = "hyvä"
                arvo = {this.state.hyva}
                />
                <Statistic
                nimi = "neutraali"
                arvo = {this.state.neutraali}
                />
                <Statistic
                nimi = "huono"
                arvo = {this.state.huono}
                />
                <Statistic
                nimi = "keskiarvo"
                arvo = {this.state.keskiarvo}
                />
                <Statistic
                nimi = "positiivisia"
                arvo = {this.state.pos + " %"}
                />
                </tbody>
              </table>
            )
        }

      return (
        <div>
            <h1>anna palautetta</h1>
          <div>
          <Button
            handleClick={this.asetaArvoon(1)}
            text="hyvä"
          />
          <Button
            handleClick={this.asetaArvoon(0)}
            text="neutraali"
          />
          <Button
            handleClick={this.asetaArvoon(-1)}
            text="huono"
          />
          </div>
            <h1>statistiikka</h1>
            <Statistics/>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
    
  )