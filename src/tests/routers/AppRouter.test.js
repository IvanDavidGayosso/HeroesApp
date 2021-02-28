import  { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en <AppRouter />', () => {

    test('debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <AppRouter/>
            </AuthContext.Provider>
            
        );

        expect( wrapper ).toMatchSnapshot();

    });

    test( 'debe de mostrar el componente marvel si está autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Ivan David'
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <AppRouter/>
            </AuthContext.Provider>
            
        );

        expect( wrapper.find('.navbar').exists() ).toBe( true );
    } );
    
})
