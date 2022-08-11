import * as React from 'react';
import Carousel from 'nuka-carousel';

export interface ImageCarouselProps {
    items: ReadonlyArray<string>;
}

export default class MyGallery extends React.Component<ImageCarouselProps> {
    render() {
        return (
                <Carousel wrapAround={true} defaultControlsConfig={{
                    nextButtonText: 'Neste',
                    prevButtonText: 'Forrige'
                }} >
                {this.props.items.map(x => <img src={x} style={{height: "90vh", width: "100%", objectFit: "contain"}} />)}
            </Carousel>
    );
  }
}
