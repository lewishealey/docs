import PropTypes from "prop-types"
import React from "react"
import Title from "./title"
import Text from "./text"

const Section = ({ title, text, children}) => (
    <div>
        {title &&
            <Title>{title}</Title>
        }

        {text &&
            <Text>{text}</Text>
        }

        <div style={
        {   display: `flex`,
            margin: `0 -16px 32px -16px`,
            minHeight: 160
        }
        }>
            {children}
         </div>
    </div>
)

Section.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Section
