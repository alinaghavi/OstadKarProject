import React from "react";


const Layout = ({layoutType}) => {

    //Divide layoutType(e.g 2xl/4l/3sm) by '/' and add the items to Array (e.g [2xl, 4l, 3sm] then Loops on the Array and
    //Extract the number part and string part of the each layout item by regex (e.g numberPart:2, stringPart:xl).
    let pageLayouts = layoutType.split('/').map((layout) => {
        let numberPart = (layout.match(/\d/g)) ? (layout.match(/\d/g)) : (1);
        let stringPart = layout.replace(/[0-9]/g, '');

        //Making layouts that is a div with a stringPart class(e.g xl).
        //The count of these divs is equal to numberPart
        let layoutItem = [];
        for (let i = 0; i < numberPart; i++) {
            layoutItem.push(<div key={i} className={`layout ${stringPart}`}>
                Content Go's Here...
            </div>)
        }
        //We'll Style this layouts base on their class
        return layoutItem
    });

    return (
        <div className="layouts-wrapper">
            {pageLayouts}
        </div>
    )

};

export default Layout;
