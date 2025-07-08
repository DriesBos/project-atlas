import {
  SbBlokData,
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import React from 'react';

interface SbPagePlayData extends SbBlokData {
  body: SbBlokData[];
}

interface PagePlayProps {
  blok: SbPagePlayData;
}

const PagePlay: React.FunctionComponent<PagePlayProps> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1>PAGE PLAYGROUND</h1>
      <div className="pagePlay"></div>
      {blok.body.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default PagePlay;
