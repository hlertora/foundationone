/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2014 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

"use strict";

/**
 * Title foundation component JS backing script
 */
use(function () {
    
    // TODO: change currentStyle to wcm.currentStyle
    
    var CONST = {
        PROP_LABEL: "linkLabel",
        PROP_LINK: "link",
    }
    
    var title = {};
    
    // The actual title content
    title.text = granite.resource.properties[CONST.PROP_LABEL]
            || wcm.currentPage.properties[CONST.PROP_LABEL];
    
    // The HTML element name
    title.link = granite.resource.properties[CONST.PROP_LINK]
    		|| wcm.currentPage.properties[CONST.PROP_LINK];
    
    // Adding the constants to the exposed API
    title.CONST = CONST;
    
    return title;
    
});
