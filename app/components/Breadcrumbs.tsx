// components/Breadcrumbs.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  // تقسيم المسار إلى أجزاء وتجاهل الجزء الفارغ الأول
  const pathSegments = pathname.split('/').filter(segment => segment); 

  // دالة لتنسيق النص (مثال: "video-editing" -> "Video Editing")
  const formatSegment = (segment: string) => {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center justify-center  space-x-2 text-sm text-text-secondary">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                // آخر جزء في المسار يكون نصًا عاديًا
                <span className="font-semibold text-text-primary">{formatSegment(segment)}</span>
              ) : (
                // الأجزاء الأخرى تكون روابط
                <Link href={href} className="hover:text-primary transition-colors">
                  {formatSegment(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;