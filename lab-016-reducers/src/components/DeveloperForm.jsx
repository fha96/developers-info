import { DeveloperReducer, actionType } from './Developer';
import { useReducer } from 'react';
import { DeveloperList } from './DeveloperList';

export const DeveloperForm = () => {

    const [state, dispatch] = useReducer(DeveloperReducer, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = {
        //     name: e.target.name.value,
        //     language: e.target.language.value,
        //     technique: e.target.technique.value,
        //     food:e.target.food.value,
        //     drink: e.target.drink.value
        // }
        console.log('name',e.target.name.value );
        dispatch({type: actionType.ADD_DEVELOPER, payload:{
            name: e.target.name.value,
             language: e.target.language.value,
             technique: e.target.technique.value,
             food:e.target.food.value,
             drink: e.target.drink.value
        }});
    }
  return (
    <div className="form">
        <form className="dev-form" onSubmit={handleSubmit}>
            <input type='text' placeholder='developer name' name='name' />
            <label htmlFor="language" >Select a language :</label>
            <select className="selector" name="language">
                <option value='java'>Java</option>
                <option value='javascript'>JavaScript</option>
                <option value='C++'>C++</option>
                <option value='PHP'>PHP</option>
            </select>
            <label htmlFor="technique" >Select a technique :</label>
            <select className="selector" name="technique">
                <option value='React'>React</option>
                <option value='Node js'>Node js</option>
                <option value='Express'>Express</option>
                <option value='Jest'>Jest</option>
            </select>
            <input name='food' type='text' placeholder='favorite food' />
            <input name='drink' type='text' placeholder='favorite drink' />
            <input id='submit' type='submit' value='submit' style={{width:'50%', margin:'auto'}}/>
        </form>
        <DeveloperList state={state} dispatch={dispatch} />
        
    </div>
  )
}
