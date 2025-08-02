'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation' // <-- 1. استيراد usePathname
import { FaBars, FaTimes } from 'react-icons/fa'
import { sidebarData } from '../lib/data'

const Sidebar = () => {
  const { name, logo, socialLinks, navigationLinks } = sidebarData;
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname(); // <-- 2. الحصول على المسار الحالي

  useEffect(() => {
    // 3. تحديث منطق الـ Scrollspy
    // إذا لم نكن في الصفحة الرئيسية، قم بإلغاء تفعيل أي قسم
    if (pathname !== '/') {
      setActiveSection(''); // قيمة فارغة تعني لا يوجد قسم نشط
      return;
    }

    // منطق تتبع التمرير يعمل فقط في الصفحة الرئيسية
    const handleScroll = () => {
      let currentSection = 'home';
      navigationLinks.forEach(item => {
        if (item.href.startsWith('#')) {
          const section = document.getElementById(item.id);
          if (section) {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
              currentSection = item.id;
            }
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, navigationLinks]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);

    // هذا المنطق خاص فقط بالصفحة الرئيسية
    if (pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
    }
    // في حالة الروابط لصفحات أخرى (مثل /portfolio)، سيقوم Next.js بالانتقال العادي
  };

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-dark-section text-text-white"
      >
        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      <aside className={`fixed left-0 top-0 h-full w-72 bg-dark-bg transform transition-transform duration-300 ease-in-out z-40 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex flex-col items-center py-8 px-6 text-center">
          <div className="mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-dark-section">
              <Image src={logo} alt={name} width={96} height={96} className="w-full h-full object-cover" />
            </div>
          </div>
          <h2 className="text-text-white text-xl font-semibold mb-6">{name}</h2>
          <div className="flex space-x-3 mb-8">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-section flex items-center justify-center text-text-light hover:text-primary transition-colors duration-200">
                <social.icon size={16} />
              </a>
            ))}
          </div>
          <nav className="w-full">
            <ul className="space-y-2">
              {navigationLinks.map((item) => {
                // 4. تحديث شرط تحديد الرابط النشط
                const isActive = pathname === '/' && activeSection === item.id;
                
                return (
                  <li key={item.name}>
                    <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive ? 'text-primary bg-dark-section' : 'text-text-light hover:text-primary hover:bg-dark-section'}`}>
                      <item.icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
      {isMobileMenuOpen && (
        <div onClick={() => setIsMobileMenuOpen(false)} className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30" />
      )}
    </>
  );
};
export default Sidebar;