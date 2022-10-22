import { BusyIndicator, List as ListUI5, StandardListItem, Title, TitleLevel } from '@ui5/webcomponents-react';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRoute, ROUTES } from '../../routes/Routes';
import { usePlanet } from '../../hooks/services/usePlanet';

const List = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  
  const params = useParams();
  const { data, isLoading, isSuccess } = usePlanet(params.id);
  const navToTodoEditPage = (e) => {

    navigate(getRoute(ROUTES.RESIDENTS_LIST, { name: e.detail.item.dataset.id }));
  };
  
  return (
    <div>
      {isLoading ? (
        <BusyIndicator active />
      ) : (
        <>
          <Title level={TitleLevel.H5}>{`Planets Details`}</Title>
          <br />
          <ListUI5 onItemClick={navToTodoEditPage}>
            {data.residents.map((todo, i) => (
              <StandardListItem
                data-id={todo.name}
                key={todo.name}
                additionalText={i}
                additionalTextState="None"
              >
                {data.residents[i]}
              </StandardListItem>
            ))}
          </ListUI5>
        </>
      )}
    </div>
  );
};

export default List;
