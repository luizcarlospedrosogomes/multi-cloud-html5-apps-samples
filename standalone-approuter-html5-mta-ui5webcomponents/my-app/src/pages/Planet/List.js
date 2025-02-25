import { BusyIndicator, List as ListUI5, StandardListItem, Title, TitleLevel } from '@ui5/webcomponents-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlanets } from '../../hooks/services/usePlanet';
import { getRoute, ROUTES } from '../../routes/Routes';

const List = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data, isLoading } = usePlanets(page);

  const navToTodoEditPage = (e) => {

    navigate(getRoute(ROUTES.RESIDENTS_LIST, { id: e.detail.item.dataset.id }));
  };
  console.log("data", data)
  return (
    <div>
      {isLoading ? (
        <BusyIndicator active />
      ) : (
        <>
          <Title level={TitleLevel.H5}>{`Records (${data.count} / ${data.length})`}</Title>
          <br />
          <ListUI5 onItemClick={navToTodoEditPage}>
            {data.results.map((todo, i) => (
              <StandardListItem
                data-id={i}
                key={todo.name}
                additionalText={todo.climate}
                additionalTextState="None"
              >
                {todo.name}
              </StandardListItem>
            ))}
          </ListUI5>
        </>
      )}
    </div>
  );
};

export default List;
