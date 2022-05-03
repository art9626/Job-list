import { FilterPanel } from 'components/FilterPanel';
import { Header } from 'components/Header';
import { JobList } from 'components/JobList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from 'redux/jobPositions/jobPositionsActions';
import data from './mock/data.json';

const App = () => {
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(actions.addPositions(data));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className='container'>
        <FilterPanel />
        <JobList />
      </main>
    </>
  );
}

export default App;
