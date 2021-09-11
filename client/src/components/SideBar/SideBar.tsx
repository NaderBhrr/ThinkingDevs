import { useWindowDimension } from '../hooks/useWindowsDimensions';

const SideBar = () => {
  const { width } = useWindowDimension();

  if (width <= 768) return null;

  return <aside className='sidebar'>Sidebar</aside>;
};

export default SideBar;
