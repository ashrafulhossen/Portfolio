import PropTypes from "prop-types"
// eslint-disable-next-line no-unused-vars
import React from 'react'

const SectionWraper = ({children, id}) => {
    return (
        <div className="pt-80">
            <span id={id} className='block -mt-14 pb-14'>&nbsp;</span>
            {children}
        </div>
    )
}

SectionWraper.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
}

export default SectionWraper