/**
 * Immersive Reader Component for ReactJS Applications
 *
 * @author    Aleksey Sinyagin
 * @copyright (C) Aleksey Sinyagin
 * @package   immersive-reader
 * @since     v1.0.0
 * @license   GPL-2.0 License
 * 
Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
**/

import * as React from 'react'
import { renderButtons, launchAsync }  from  "@microsoft/immersive-reader-sdk";

export interface Props {
  title: string;
  text: string;
  tokenURL: string;
  locale?: string;
  options: any;
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
        const data = {
            title: this.props.title,
            chunks: [{
                content: this.props.text,
                lang:"en-us",
                mimeType: "text/plain"
            }]
        };
        launchAsync(body.token, body.subdomain, data, this.props.options)
           .catch(function (error:any) {
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

