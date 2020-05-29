import React from "react"
import Token from './token'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class TokenTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        copied: false,
        css: false
      };
    }
    componentDidMount() {
        const { section, version, component } = this.props;
        const data = require(`../requirements/${component}/v${version}/choices`);

        let cssString = "";

        data.tokens.map(function(row, index) {
            Object.keys(row[section]).map(function(key, index) {
                cssString += `${key}: $${row[section][key]}; \n`
            })
        })

        this.setState({
            data,
            css: cssString,
        })
    }
    render() {
        const { section } = this.props;
        const { data } = this.state;

        return <div>
            <div className="d-flex content-between tokens-heading">
                <h5 className="tokens-title">Tokens</h5>

                <div>
                    <CopyToClipboard text={this.state.css} onCopy={() => this.setState({copied: true})}>
                        <button className="tertiary-button">{this.state.copied ? 'Copied' : 'Copy tokens to clipboard'}</button>
                    </CopyToClipboard>
                </div>
            </div>

            {data ? data.tokens.map(function(row, index) {
                return <table key={index}>
                    <tbody>
                        {Object.keys(row[section]).map(function(key, index) {
                            return <tr key={index}><td>{key}</td><td><Token name={row[section][key]}/></td></tr>
                        })} 
                    </tbody>
                </table>
            }): null}
        </div>
    }
}
