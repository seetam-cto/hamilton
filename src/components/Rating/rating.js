import React, { useEffect, useMemo, useState } from 'react';
import { string, number, shape } from 'prop-types';
import { Star } from 'react-feather';
import Icon from '../Icon';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './rating.module.css';
import './rating.css';
import RatingStar from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const Rating = props => {
    const { rating } = props;

    const classes = useStyle(defaultClasses, props.classes);

    const [starValue, setStarValue] = useState(null);

    useEffect(() => {
        let val = ((rating * 5) / 100).toFixed(1);
        setStarValue(val)
    }, [])

    return (
        <div className={'classes.ratingAverage'} data-cy="ratingSummary">
            {/* <span className={classes.ratingValue}>
                {((rating * 5) / 100).toFixed(1)}
            </span>{' '} */}
            {/* <div className={'rating-container'}>
                <Icon size={18} src={Star} classes={{ root: classes.ratingIcon }} />
                <Icon size={18} src={Star} classes={{ root: classes.ratingIcon }} />
                <Icon size={18} src={Star} classes={{ root: classes.ratingIcon }} />
                <Icon size={18} src={Star} classes={{ root: classes.ratingIcon }} />
                <Icon size={18} src={Star} classes={{ root: classes.ratingIcon }} />
            </div> */}
            {
                !starValue &&
                <RatingStar
                    name="text-feedback"
                    value={starValue}
                    readOnly
                    precision={0.1}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
            }
        </div>
    );
};
Rating.propTypes = {
    classes: shape({
        ratingAverage: string,
        ratingValue: string,
        ratingIcon: string
    }),
    rating: number.isRequired
};
export default Rating;
