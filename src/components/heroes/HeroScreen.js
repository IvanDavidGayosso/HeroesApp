import React,{useMemo} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById( heroId ), [ heroId ]);
    

    if( !hero ){
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if( history.length <= 2 )
            history.push('/');
        else
            history.goBack();
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div>
            <h1>HeroScreen</h1>
            <hr />

            <div className="row mt-5">
                <div className="col-4">
                    <img 
                        src={`../heroesApp/assets/heroes/${ heroId }.jpg`}
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                        alt={ superhero }
                    />
                </div>

                <div className="col-8">
                    <h3>{ superhero }</h3>
                    <ul>
                        <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                        <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                        <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                    </ul>

                    <h5> characters </h5>
                    <p>{ characters }</p>

                    <button 
                        className="btn btn-outline-info"
                        onClick={ handleReturn }
                    >
                        return
                    </button>
                </div>
            </div>
        </div>
    )
}
