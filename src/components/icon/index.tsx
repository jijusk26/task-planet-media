import React from 'react';
import { SvgXml } from 'react-native-svg';
import { SvgImageNames, SvgImages } from '../../assets/svg-images';

const Icon = ({
  color = '#264A6B',
  size,
  icon,
}: {
  color?: string;
  size?: number;
  icon: keyof SvgImageNames;
}) => {
  return (
    <SvgXml
      xml={SvgImages[icon]?.replaceAll('#264A6B', color)}
      height={size}
      width={size}
    />
  );
};

export default Icon;
