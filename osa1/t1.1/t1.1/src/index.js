import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
      ]
    }
  
    return (
      <div>
        <Otsikko kurssi={kurssi.nimi} />
        <Sisalto osat={kurssi.osat} />
        <Yhteensa osat={kurssi.osat} />
      </div>
    )
  }


const Otsikko = (param) => {
    return (
      <div>
        <h1>{param.kurssi}</h1>
      </div>
    )
}

const Sisalto = (p) => {
    return (
      <div>
        <Osa o={p.osat[0].nimi} t={p.osat[0].tehtavia}/>
        <Osa o={p.osat[1].nimi} t={p.osat[1].tehtavia}/>
        <Osa o={p.osat[2].nimi} t={p.osat[2].tehtavia}/>
      </div>
    )
}

  const Osa = (p) => {
    return (
      <div>
        <p>{p.o} {p.t}</p>
      </div>
    )
  }

const Yhteensa = (t) => {
    return (
      <div>
        <p>yhteensä {t.osat[0].tehtavia + t.osat[1].tehtavia + t.osat[2].tehtavia} tehtävää</p>
      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)