import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';

interface MobileMenuProps {
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#coverage', label: 'Coverage' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className={`lg:hidden ${className}`}>
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-primary-foreground hover:text-secondary hover:bg-primary/20 p-2"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-64 bg-gradient-hero shadow-hero p-6">
            <div className="flex justify-end mb-8">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:text-secondary"
                onClick={toggleMenu}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <nav className="space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-lg font-medium text-primary-foreground hover:text-secondary transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
