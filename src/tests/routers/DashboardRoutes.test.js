import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('Pruebas en <DashboardRouter />', () => {

    const contextValue = {
        dispatch : jest.fn(),
        user: { logged: true , name : 'Ivan David'}
    }

    test('debe mostrarse correctamente ', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        ) ;

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Ivan David');
    });

})


