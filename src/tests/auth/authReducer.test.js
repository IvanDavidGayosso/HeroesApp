import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

    /* const state = {
        name: 'Ivan David',
        logged: true
    } */
    
    test('debe de retornar el estado por defecto',()=>{
        
        const state = authReducer({logged: false},{});
        expect( state ).toEqual( {logged: false} );
    });

    test('debe de autenticar y colocar el name del usuario',()=>{
        

        const action = {
            type: types.login,
            payload: {name: 'Ivan David'}
        };
        
        const state = authReducer({logged: false}, action);

        expect( state).toEqual({
            logged: true,
            name: 'Ivan David'
        });

    });

    test('debe de borrar el name del usuario y logged en false', () =>{

        const state = authReducer({logged: false}, {type: types.logout});
        expect( state ).toEqual( {logged: false} );
    });

})
