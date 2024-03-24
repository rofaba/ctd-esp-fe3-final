import { useContextGlobal } from '../Components/utils/ContextGlobal'
import Card from '../Components/Card'


const Home = () => {
  const { dentist } = useContextGlobal();
  
  return (
    <main className="">
      <h2>Listado de profesionales</h2>
      <div className='card-grid'>
        {dentist.map(dentist => (<Card key={dentist.id} data={dentist} />))}
      </div>
    </main>
  );
};

export default Home;
