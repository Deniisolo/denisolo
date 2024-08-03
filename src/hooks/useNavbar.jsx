import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useNavbar = () => {
  //Hooks
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Actions
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    toggleMenu()
  }

  return { isOpen, toggleMenu, handleNavigation };
};

export default useNavbar;
