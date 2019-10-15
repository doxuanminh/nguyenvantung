import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import User from'./user';
import Info from './info'
import Home from './home';
import DangNhap from './dangnhap';
import DangKi from './dangki';
const AppNavigator = createStackNavigator({

        DangNhaps:DangNhap,
        Dangkis:DangKi,
        Huys: DangKi,
        DangNhaps:DangNhap,
        Homes:Home,
        Users:User,
        Infos:Info,
        
   },
);

 export default createAppContainer(AppNavigator);