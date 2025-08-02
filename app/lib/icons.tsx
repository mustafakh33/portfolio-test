// app/lib/icons.tsx
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';

type IconName = keyof typeof FaIcons | keyof typeof IoIcons;

interface DynamicIconProps {
  name: string;
  className?: string;
}

const iconLibs = { ...FaIcons, ...IoIcons };

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
  const IconComponent = iconLibs[name as IconName];

  if (!IconComponent) {
    return <FaIcons.FaQuestionCircle className={className} />; // أيقونة احتياطية
  }

  return <IconComponent className={className} />;
};

export default DynamicIcon;