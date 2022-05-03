import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'redux/filters/filtersActions';
import { getFilters } from 'redux/filters/filtersSelectors';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


export const FilterPanel = () => {
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();

  const onRemoveFilter = (filter) => {
    dispatch(actions.removeFilter(filter));
  }

  const onClearFilter = () => {
    dispatch(actions.clearFilters());
  }

  if (filters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {
            filters.map((item) => {
              return (
                <Badge 
                  onClear={() => onRemoveFilter(item)} 
                  key={item} 
                  variant="clearable"
                >
                  {item}
                </Badge>
              );
            })
          }
        </Stack>
        <button onClick={onClearFilter} className='link'>Clear</button>
      </div>
    </Card>
  )
}