import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext"
import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from "../../../types/types"


describe('Pruebas eb <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    }

    const valueContex = {
        dispatch: jest.fn()
    }

    const wrapper = mount(
            <AuthContext.Provider value={ valueContex }>
                <LoginScreen history={ history } />
            </AuthContext.Provider >
            
        );
    
    test('debe de mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.container').exists() ).toBe(true);

    })

    test('debe de realizar el dispatch y la navegación ', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( history.replace ).toHaveBeenCalled();
        expect( valueContex.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Ivan David'
            }
        });

    })
    
    

})
