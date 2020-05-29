import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tokens from "test-tokens/dist/web/1.0.0/tokens.json";
const Token = ({ token, name, version }) => (
    <div style={{ position: 'relative' }}>
      <div className="tooltip">
        <div className="tooltiptext">{tokens[`cds-${name}`]}</div>
        <Link
          to={`/tokens/${version}/#cds-${name}`}
          style={{
            color: "#0075BC",
            textDecoration: "none"
          }}
        >
          $cds-{name}
        </Link>
      </div>
    </div>
)

Token.propTypes = {
  name: PropTypes.string,
  version: PropTypes.string
}

Token.defaultProps = {
    name: "",
    version: "1.0"
}

export default Token
