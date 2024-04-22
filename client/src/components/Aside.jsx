import NavbarAdmin, { SideBarItem } from './adminComponents/NavbarAdmin';
import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  //   LifeBuoy,
  Package,
  Receipt,
  //   Settings,
  UserCircle,
  Moon,
} from 'lucide-react';
const Aside = () => {
  return (
    <NavbarAdmin>
      <SideBarItem
        icon={<Boxes size={20} />}
        text='products'
        url='/admin/products'
      />
      <SideBarItem
        icon={<LayoutDashboard size={20} />}
        text='dashboard'
        url='/admin/Category'
      />
      <SideBarItem
        icon={<BarChart3 size={20} />}
        text='colecciones'
        active
        url='/admin/Collections'
      />
      <SideBarItem icon={<Receipt size={20} />} text='billings' />
      <hr className='my-3' />
      {/* <SideBarItem icon={<Settings size={20} />} text='settings' /> */}
      <SideBarItem icon={<Package size={20} />} text='orders' />
      {/* <SideBarItem icon={<LifeBuoy size={20} />} text='help' /> */}
      <hr className='my-3' />
      <SideBarItem icon={<UserCircle size={20} />} text='users' />
      <SideBarItem icon={<Moon size={20} />} text='darkMode' />
    </NavbarAdmin>
  );
};

export default Aside;
