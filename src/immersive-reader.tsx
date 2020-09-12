/**
 * Immersive Reader Component for ReactJS Applications
 *
 * @author    Aleksey Sinyagin
 * @copyright (C) Aleksey Sinyagin
 * @package   immersive-reader
 * @since     v1.0.0
 * @license   GPL-3.0 License
 */

import * as React from 'react'
import { renderButtons, launchAsync }  from  "@microsoft/immersive-reader-sdk";

export interface Props {
  title: string;
  text: string;
  tokenURL: string;
  locale: string;
}

export class ImmersiveReader extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  componentDidMount () {
    renderButtons();
}

getTokenandLaunch() {
  fetch(this.props.tokenURL, { credentials: `include`, cache: "no-store" })
  .then(response => response.json())
  .then (body => {
      const options = {
          "uiZIndex": 2000 
      };
        const data = {
            title: this.props.title,
            chunks: [{
                content: this.props.text,
                lang:"en-us",
                mimeType: "text/plain"
            }]
        };
        launchAsync(body.token, body.subdomain, data, options)
           .catch(function (error) {
                  console.log("Error in launching the Immersive Reader.");
                  console.log(error);
              }); 
            })
    .catch((error) => {
  console.error('Error:', error);
});
}
  
render() {
  return (
    <button 
          className="immersive-reader-button" 
          onClick={()=>this.getTokenandLaunch()} 
          data-button-style="iconAndText" 
          data-locale={this.props.locale}></button>
   );}
}


export default ImmersiveReader;

