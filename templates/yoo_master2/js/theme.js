/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

jQuery(function($) {

    var config = $('html').data('config') || {};

    // Social buttons
    $('article[data-permalink]').socialButtons(config);
    // .book-button {
    //     float: left;
    //     color: #FFF;
    //     display: none !important;
    //     height: 35px;
    //     line-height: 35px;
    //     background: #000;
    //     padding: 0 8px;
    //     font-size: 1.2rem;
    //     font-weight: 400;
    //     font-family: HelveticaNeueLTStd-BdCn!important;
    //     font-weight: normal;
    //     font-style: normal;
    // }
});

