import React, { useEffect, useRef, useState } from 'react';

import { useIsInViewport } from '@magento/peregrine/lib/hooks/useIsInViewport';
import { useMegaMenu } from '@magento/peregrine/lib/talons/MegaMenu/useMegaMenu';
import { useStyle } from '@magento/venia-ui/lib/classify';

import MegaMenuItem from './megaMenuItem';
import defaultClasses from './megaMenu.module.css';

import { useDispatch } from 'react-redux';
import { saveCategoryList } from '../../redux_custom/categoriesList/categoryListAciton';
import { Link } from 'react-router-dom';

/**
 * The MegaMenu component displays menu with categories on desktop devices
 */
const MegaMenu = props => {
    const mainNavRef = useRef(null);
    const dispatch = useDispatch();

    const {
        megaMenuData,
        activeCategoryId,
        subMenuState,
        disableFocus,
        handleSubMenuFocus,
        categoryUrlSuffix,
        handleNavigate,
        handleClickOutside
    } = useMegaMenu({ mainNavRef });

    const classes = useStyle(defaultClasses, props.classes);

    const [mainNavWidth, setMainNavWidth] = useState(0);
    const shouldRenderItems = useIsInViewport({
        elementRef: mainNavRef
    });

    useEffect(() => {
        const handleResize = () => {
            const navWidth = mainNavRef.current
                ? mainNavRef.current.offsetWidth
                : null;

            setMainNavWidth(navWidth);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    //saving current selected category
    useEffect(() => {
        dispatch(saveCategoryList(megaMenuData?.children, activeCategoryId, categoryUrlSuffix));
    }, [activeCategoryId, megaMenuData.children])



    const items = megaMenuData.children
        ? megaMenuData.children.map(category => {
            return (
                <MegaMenuItem
                    category={category}
                    activeCategoryId={activeCategoryId}
                    categoryUrlSuffix={categoryUrlSuffix}
                    mainNavWidth={mainNavWidth}
                    onNavigate={handleNavigate}
                    key={category.uid}
                    subMenuState={subMenuState}
                    disableFocus={disableFocus}
                    handleSubMenuFocus={handleSubMenuFocus}
                    handleClickOutside={handleClickOutside}
                />
            );
        })
        : null;


    return (
        <>
            <nav
                ref={mainNavRef}
                className={classes.megaMenu}
                data-cy="MegaMenu-megaMenu"
                role="navigation"
                onFocus={handleSubMenuFocus}
            >
                {/* jrb */}
                <div style={{ display: "grid", placeContent: "center", paddingRight: "10px" }}>
                    <Link to="/new-launches">New-Launches</Link>
                </div> 
                {shouldRenderItems ? items : null}
            </nav>
        </>
    );
};

export default MegaMenu;
