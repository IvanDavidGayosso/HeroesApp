import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroItem } from './HeroItem';

export const HeroList = ( { publisher } ) => {
    
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div>
            <div className="card-columns animate__animated animate__fadeIn">
                {
                    heroes.map( hero => (
                        <HeroItem 
                            key={ hero.id }
                            { ...hero}
                        />
                    ))
                }
            </div>
        </div>
    )
}
