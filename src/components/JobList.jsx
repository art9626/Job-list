import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'redux/filters/filtersActions';
import { getPositions } from 'redux/jobPositions/jobPositionsSelectors';
import { JobPosition } from './JobPosition';

export const JobList = () => {
  const jobPositionsData = useSelector(getPositions);
  const dispatch = useDispatch();

  const onAddFilter = useCallback((filter) => {
    dispatch(actions.addFilter(filter));
  }, [dispatch]);

  return (
    <div className='job-list'>
      {
        jobPositionsData.map((item) => {
          return (
            <JobPosition key={item.id} {...item} onAddFilter={onAddFilter} />
          );
        })
      }
    </div>
  )
}