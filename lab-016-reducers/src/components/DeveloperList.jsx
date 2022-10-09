import { actionType } from "./Developer";

export const DeveloperList = (props) => {

  const handleRemove = (id) => {
    props.dispatch({type:actionType.REMOVE_DEVELOPER, payload:{id:id}});
    console.log('inside handle remove');
    console.log('id',id)
  }
  return props.state.length ? (
    <div>
      <ul className="list-card">
        {console.log(props.state)}
        {props.state.map((developer) => {
          return (
            <div className="card" onClick={() => handleRemove(developer.id)}>
              <div class="container">
                <h2>Developer {developer.id}</h2>
                <h4>
                  <b>{developer.name}</b>
                </h4>
                <p>Skills : {developer.language} &{developer.technique} </p>
                <p>Favorite food: {developer.food} </p>
                <p>Favorite drink: {developer.drink} </p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  ) : (
    <p>No developers</p>
  );
};
