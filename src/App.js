import './normalize.css';
import './App.css';


import {
  Header,
  Footer,
  Block,
  List,
  Item,

  Review,
  Services,
  Discover,
  Subscribe
} from './components';

function App() {
  return (
    <>
      <Header />

      <Block>
        <Discover />
      </Block>

      <Block title="Lacinia quis vel eros tempor orci.">
        <List>
          <Item number="01." title="Arcu non odio" description="Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium." />
          <Item number="02." title="Eget gravida cum sociis" description="Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium." />
          <Item number="03." title="Massa massa ultricies" description="Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium." />
        </List>
      </Block>

      <Block>
        <Review />
      </Block>

      <Block>
        <Services />
      </Block>

      <Subscribe />
      <Footer />
    </>
  );
}
export default App;
