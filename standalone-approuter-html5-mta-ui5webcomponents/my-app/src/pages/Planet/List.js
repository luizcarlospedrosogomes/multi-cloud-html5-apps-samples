import { BusyIndicator, List as ListUI5, StandardListItem, Title, TitleLevel } from '@ui5/webcomponents-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlanet } from '../../../hooks/services/usePlanent';
import { getRoute, ROUTES } from '../../../routes/Routes';

const List = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const { data, isLoading } = usePlanet(page);

  const navToTodoEditPage = (e) => {
    navigate(getRoute(ROUTES.TODO_EDIT, { id: e.detail.item.dataset.id }));
  };

  return (
    <div>
      {isLoading ? (
        <BusyIndicator active />
      ) : (
        <>
          <Title level={TitleLevel.H5}>{`Records (${data.numberOfElements} / ${data.totalElements})`}</Title>
          <br />
          <ListUI5 onItemClick={navToTodoEditPage}>
            {data.content.map((todo) => (
              <StandardListItem
                data-id={todo.id}
                key={todo.id}
                additionalText={todo.description}
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
