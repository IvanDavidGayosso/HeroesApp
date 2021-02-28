import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router-dom"
import { AuthContext } from "../../../auth/AuthContext"
import { Navbar } from "../../../components/ui/Navbar"
import { types } from "../../../types/types"

describe('Pruebas en Navbar.js', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: true,
            name: 'Ivan David'
        }
    }

    const wrapper = mount( 
        <MemoryRouter>
            <AuthContext.Provider value= { contextValue }>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </AuthContext.Provider>
        </MemoryRouter>
    );

    afterEach( () =>{
        jest.clearAllMocks();
    });

    test('debe de mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Ivan David');
        
    });

    test('debe de llamar el logout y el usar history', () => {
        
        wrapper.find('button').prop('onClick')();
        expect( contextValue.dispatch ).toHaveBeenCalledWith({ 
            type: types.logout 
        });

    });

    test('debe de llamar el logout u el usar history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    })
    


    
    
})
