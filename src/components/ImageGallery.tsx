import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import * as ReactImageGallery from 'react-image-gallery';

export interface ReactImageGalleryProps {
    items: ReadonlyArray<ReactImageGallery.ReactImageGalleryItem>;
}

export class MyGallery extends React.Component<ReactImageGalleryProps> {
  render() {
    return <ImageGallery items={this.props.items} />;
  }
}
