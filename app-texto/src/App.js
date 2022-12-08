import './App.css';
import { Text } from './components/text/text';
import { Button } from './components/button/button';

function App() {
  return (
      <div className='container'>
          <h2>Desafio 1</h2>
          <Text color='blueviolet'>
            Olá, meu nome é Vitor Lopes de Matos, desenvolvedor Front-end Jr
          </Text>

          <h2>Desafio 2</h2>
          <Button label='Baixar CV' />
      </div>
  );
}

export default App;
