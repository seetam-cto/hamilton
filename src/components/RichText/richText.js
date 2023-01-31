import React from 'react';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './richText.module.css';

const toHTML = str => ({ __html: str });

const RichText = props => {
    const { content } = props;
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div
            className={classes.root}
            dangerouslySetInnerHTML={toHTML(content)}
        />
    );
};

export default RichText;
