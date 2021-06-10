import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const PortalTo = ({children, target}) => {
    const container = document.getElementById(target);
    const element = document.createElement('div');

    useEffect(() => {
        container.appendChild(element);

        return () => container.remove(element);
    },
    [container, element]);

    return createPortal(children, element);
}

PortalTo.propTypes = {
    target: PropTypes.string.isRequired
}


export default PortalTo;