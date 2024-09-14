/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/favicon.ico":
/*!*************************!*\
  !*** ./src/favicon.ico ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"favicon.ico\";\n\n//# sourceURL=webpack:///./src/favicon.ico?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n\n__webpack_require__(/*! ../favicon.ico */ \"./src/favicon.ico\");\n\n/**\r\n * This is main script file that contains JS code.\r\n */\n\n/*============================================================================*/\n/* Place any jQuery/helper plugins in here.\r\n/*============================================================================*/\n/**\r\n * The below expression is a jQuery function call:\r\n * $(...);\r\n * Which is the \"jQuery function\". $ is a function, and $(...) is you calling\r\n * that function. The first parameter we've supplied is the following\r\n * `function() {}`. The parameter is a function that you specific, and the '$'\r\n * function will call the supplied method when the DOM finishing loading.\r\n * $(function() { ... }) is also jQuery short-hand for\r\n * $(document).ready(function() { ... });\r\n */\n$(function () {\n\n    // Initialize NProgress\n    NProgress.configure({ showSpinner: false });\n    // Bind Scroll Up plugin to all pages\n    $.scrollUp({\n        scrollName: 'topScroll',\n        scrollText: '<i class=\"fas fa-long-arrow-alt-up\"></i>',\n        easingType: 'linear',\n        scrollSpeed: 900,\n        animation: 'fade',\n        zIndex: 100\n    });\n\n    // Bind this plugin on Product `Detail` page\n    $('#zoom-pro').elevateZoom({\n        gallery: 'gallery',\n        galleryActiveClass: 'active',\n        borderSize: 1,\n        zoomWindowWidth: 540,\n        zoomWindowHeight: 540,\n        zoomWindowOffetx: 10,\n        borderColour: '#e9e9e9'\n    });\n\n    // For `modals` we don't want to enable `zoom window`.\n    $('#zoom-pro-quick-view').elevateZoom({\n        gallery: 'gallery-quick-view',\n        galleryActiveClass: 'active',\n        zoomEnabled: false // false disables zoomwindow from showing\n    });\n\n    // Bind resize select on mid header\n    $('#select-category', document).ResizeSelect();\n    $('.select-hide').removeClass('select-hide');\n\n    // Bind mega menu plugin\n    $('.v-menu', document).MegaMenuDropDowns();\n\n    // Bind Countdown Timer to all sections\n    $('.section-timing-wrapper.dynamic', document).CountDown();\n});\n/*============================================================================*/\n/* Global JavaScript functions\r\n/*============================================================================*/\n(function ($, window, document) {\n    'use strict';\n    // ------------- Variables for Reusability and Performance ---------------\n    // Performance of jQuery selectors vs local variables\n    // https://jsperf.com/caching-jquery-selectors\n\n    var $vMenu = $('.v-menu');\n    var mode = '';\n    var bigScreenFlag = Number.MAX_VALUE;\n    var smallScreenFlag = 1;\n    // ------------------------Back Drop Arena ---------------------------\n    var listItembackDropFlag = false;\n    var $backDrop = void 0;\n    var $searchFormWrapper = void 0;\n    var $searchFormElement = void 0;\n    var $allListItemsForHover = $('.js-backdrop');\n    // ------------------------Back Drop Arena End ---------------------------\n    // Object Settings\n    var settings = {\n        bodyBackDropOnScenes: true,\n        zIndexNumber: 999998\n    };\n\n    /**\r\n     * return the window's width\r\n     * @return {Number|number}\r\n     */\n    var windowWidth = function windowWidth() {\n        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n    };\n\n    /**\r\n     * @param {jquery} element  - display back drop\r\n     */\n    var showBackDrop = function showBackDrop(element) {\n        element.css('display', 'block').on('click', function () {\n            $(this).css('display', '');\n        });\n    };\n\n    /**\r\n     * @param {jquery} element  - remove back drop\r\n     */\n    var removeBackDrop = function removeBackDrop(element) {\n        element.css('display', '');\n    };\n\n    /**\r\n     * Attach Click Event on Search Button\r\n     */\n    var attachClickOnResponsiveSearchForm = function attachClickOnResponsiveSearchForm() {\n        $('#responsive-search').on('click', function () {\n            $('.responsive-search-wrapper').stop(true, true).fadeIn();\n        });\n\n        $('#responsive-search-close-button').on('click', function () {\n            $('.responsive-search-wrapper').stop(true, true).fadeOut();\n        });\n    };\n\n    /**\r\n     * Attach Click Event on Mini Cart Anchor\r\n     */\n    var attachClickOnMiniCart = function attachClickOnMiniCart() {\n        //  let $href = $('#mini-cart-trigger'.attr('href');\n        //   window.location.href = $href; //causes the browser to refresh and\n        // load the requested url\n        $('#mini-cart-trigger').on('click', function () {\n            $('.mini-cart-wrapper').addClass('mini-cart-open');\n        });\n\n        $('#mini-cart-close').on('click', function () {\n            $('.mini-cart-wrapper').removeClass('mini-cart-open');\n        });\n    };\n\n    /**\r\n     * Attach Click Event on VMenu\r\n     */\n    var attachClickOnVMenu = function attachClickOnVMenu() {\n        $('.v-title').on('click', function () {\n            $vMenu.toggleClass('v-close');\n        });\n    };\n\n    /**\r\n     * Its a function that is bind to Mega Menu List items with event mouseenter\r\n     */\n    var MouseEnterFunctionForMegaMenu = function MouseEnterFunctionForMegaMenu() {\n        // I also Hope elements are appropriate assign\n        $vMenu.css({ 'z-index': settings.zIndexNumber });\n        // Show Back Drop\n        showBackDrop($backDrop);\n    };\n    /**\r\n     * Its a function that is bind to Mega Menu List items with event mouseleave\r\n     */\n    var MouseLeaveFunctionForMegaMenu = function MouseLeaveFunctionForMegaMenu() {\n        // I also Hope elements are appropriate assign\n        $vMenu.css({ 'z-index': '' });\n        // Remove Back Drop\n        removeBackDrop($backDrop);\n    };\n\n    /**\r\n     * Hover on list items that have class `js-backdrop`\r\n     */\n    var hoverOnListItems = function hoverOnListItems() {\n        $allListItemsForHover.on('mouseenter', MouseEnterFunctionForMegaMenu);\n        $allListItemsForHover.on('mouseleave', MouseLeaveFunctionForMegaMenu);\n    };\n    /**\r\n     * Hoveroff on list items that have class `js-backdrop`\r\n     */\n    var hoverOffListItems = function hoverOffListItems() {\n        $allListItemsForHover.off('mouseenter');\n        $allListItemsForHover.off('mouseleave');\n    };\n\n    /**\r\n     * Backdrop only works on landscape mode this function will Check\r\n     * if user wants to show or hide the backdrop\r\n     */\n    var mainBackDropManipulator = function mainBackDropManipulator() {\n        if (settings.bodyBackDropOnScenes) {\n            if (mode === 'landscape' && !listItembackDropFlag) {\n                // If body has length equal to zero then it means our element is\n                // not added, if it did'nt have length equal to zero then it\n                // means our element is added.\n                if ($('#app').find('.body-backdrop').length === 0) {\n                    $('#app').append('<div class=\"body-backdrop\"></div>\\n');\n                    // Assign Back Drop\n                    $backDrop = $('div.body-backdrop');\n                    // Input type Text\n                    $searchFormElement = $('#search-landscape');\n                    $searchFormWrapper = $('.form-searchbox');\n                    $searchFormElement.focus(function () {\n                        // I Hope elements are appropriate assign\n                        $searchFormWrapper.css({ 'position': 'relative', 'z-index': settings.zIndexNumber });\n                        // Show Back Drop\n                        showBackDrop($backDrop);\n                    }).blur(function () {\n                        // I Hope elements are appropriate assign\n                        $searchFormWrapper.css({ 'position': '', 'z-index': '' });\n                        // Remove Back Drop\n                        removeBackDrop($backDrop);\n                    });\n                    // First Time invocation\n                    // HoverOn list items that have class `js-backdrop`\n                    hoverOnListItems();\n                    // Flag is set to true\n                    listItembackDropFlag = true;\n                }\n            }\n\n            if (mode === 'landscape' && listItembackDropFlag) {\n                // It means hover is On\n                hoverOnListItems();\n            } else if (mode === 'portrait' && listItembackDropFlag) {\n                // Hover is Off\n                hoverOffListItems();\n            }\n        }\n    };\n    /**\r\n     * Manually Restart Pace-js when we change any tab.\r\n     */\n    var manuallyRestartProgress = function manuallyRestartProgress() {\n        // Specificity = 2\n        $('a[data-toggle=\"tab\"]').on('shown.bs.tab', function () {\n            // Shows the progress bar\n            NProgress.start();\n            // Completes the progress\n            NProgress.done();\n        });\n    };\n    /**\r\n     * Attach Click Event on Quantity buttons\r\n     */\n    var attachClickQuantityButton = function attachClickQuantityButton() {\n        var $currentTextField = void 0,\n            currentVal = void 0;\n        $('.plus-a').each(function () {\n            $(this).on('click', function () {\n                var $currentTextField = $(this).prev();\n                var currentVal = parseInt($currentTextField.val());\n                /*\r\n                 * Format values\r\n                 * In JS if variable is not converted to number then by default variable is NaN.\r\n                 * We known JS has Truthy & Falsey values.\r\n                 * By default NaN (e.g. the result of 1/0) is false so its convert to true and expression\r\n                 * becomes true.\r\n                 */\n                if (!currentVal || currentVal === '' || currentVal === 'NaN' || currentVal === 0) {\n                    // if value is NaN\n                    $currentTextField.val(1);\n                }\n                // Compare and add 1 if the condition is satisfy\n                else if (currentVal < $(this).data('max')) {\n                        $currentTextField.val(currentVal + 1);\n                    }\n            });\n        });\n        $('.minus-a').each(function () {\n            $(this).on('click', function () {\n                $currentTextField = $(this).closest('div').find('input');\n                currentVal = parseInt($currentTextField.val());\n                /*\r\n                 * Format values\r\n                 * In JS if variable is not convert to number then by default variable is NaN.\r\n                 * We known JS has Truthy & Falsey values.\r\n                 * By default NaN (e.g. the result of 1/0) is false so its convert to true and expression\r\n                 * becomes true.\r\n                 */\n                if (!currentVal || currentVal === '' || currentVal === 'NaN' || currentVal === 0) {\n                    // if value is NaN\n                    $currentTextField.val(1);\n                }\n                // Compare and minus 1 if the condition is satisfy\n                else if (currentVal > $(this).data('min')) {\n                        $currentTextField.val(currentVal - 1);\n                    }\n            });\n        });\n    };\n\n    /**\r\n     * Window Resize Breakpoint Function\r\n     */\n    var windowResizeBreakpoint = function windowResizeBreakpoint() {\n        if (windowWidth() <= 991 && bigScreenFlag > 991) {\n            // Assign on which mode we are\n            mode = 'portrait';\n            // Backdrop Manipulator on PORTRAIT\n            mainBackDropManipulator();\n        }\n\n        if (windowWidth() > 991 && smallScreenFlag <= 991) {\n            // Assign on which mode we are\n            mode = 'landscape';\n            // Backdrop Manipulator on LANDSCAPE\n            mainBackDropManipulator();\n        }\n        bigScreenFlag = windowWidth();\n        smallScreenFlag = windowWidth();\n    };\n\n    /**\r\n     * Resize event\r\n     */\n    $(window).resize(function () {\n        // Window Resize Breakpoint Function\n        windowResizeBreakpoint();\n    });\n\n    /**\r\n     * Only One Time Execution Ready event Check DOM elements if all loaded\r\n     */\n    $(function () {\n        //  Attach Click Event on Search Button\n        attachClickOnResponsiveSearchForm();\n        //  Attach Click Event on Mini Cart Anchor\n        attachClickOnMiniCart();\n        // Attach Click Event on VMenu\n        attachClickOnVMenu();\n        // Manually Restart Pace-js when we change any tab\n        manuallyRestartProgress();\n        // Attach Click Event on Quantity buttons\n        attachClickQuantityButton();\n        // Window Resize Breakpoint Function\n        windowResizeBreakpoint();\n    });\n})(jQuery, window, document);\n\n/*============================================================================*/\n/* Homepage JavaScript functions\r\n/*============================================================================*/\n(function ($, window, document) {\n    'use strict';\n    /**\r\n     * Shows Newsletter Modal After 5sec = 5000milliseconds\r\n     */\n\n    var showNewsletterModal = function showNewsletterModal() {\n        setTimeout(function () {\n            // Manually opens a modal\n            $('#newsletter-modal').modal('show');\n        }, 5000);\n    };\n    /**\r\n     * Initialize Main Slider\r\n     */\n    var sliderMain = function sliderMain() {\n        var $owl = $('.slider-main');\n        $owl.owlCarousel({\n            items: 1,\n            autoplay: true,\n            autoplayTimeout: 8000,\n            loop: false,\n            dots: false,\n            rewind: true, // Go backwards when the boundary has reached\n            nav: true, // Show next/prev buttons\n            //   navContainerClass: 'owl-nav' by default,\n            navElement: 'div',\n            navClass: ['main-slider-previous', 'main-slider-next'], // Add these classes on navElement\n            navText: ['<i class=\"fas fa-angle-left\"></i>', '<i class=\"fas fa-angle-right\"></i>'] // by default text prev, next will not show\n        });\n    };\n    /**\r\n     * Initialize owl-carousel for all product-place section on page\r\n     */\n    var productSlider = function productSlider() {\n        // Get Collection of all Product Slider\n        var $productsSlider = $('.products-slider');\n        $productsSlider.on('initialize.owl.carousel', function () {\n            $(this).closest('.slider-fouc').removeAttr('class');\n        }).each(function () {\n            var thisInstance = $(this);\n            var itemPerLine = thisInstance.data('item');\n            thisInstance.owlCarousel({\n                autoplay: false,\n                loop: false,\n                dots: false,\n                rewind: true,\n                nav: true,\n                navElement: 'div',\n                navClass: ['product-slider-previous', 'product-slider-next'],\n                navText: ['<i class=\"fas fa-angle-left\"></i>', '<i class=\"fas fa-angle-right\"></i>'],\n                responsive: {\n                    0: {\n                        items: 1\n                    },\n                    768: {\n                        items: itemPerLine - 2\n                    },\n                    991: {\n                        items: itemPerLine - 1\n                    },\n                    1200: {\n                        items: itemPerLine\n                    }\n                }\n            });\n        });\n    };\n    /**\r\n     * Initialize owl-carousel for all Specific Category section on page\r\n     */\n    var SpecificCategorySlider = function SpecificCategorySlider() {\n        // Get Collection of all Product Slider\n        var $specificCategorySlider = $('.specific-category-slider');\n        $specificCategorySlider.on('initialize.owl.carousel', function () {\n            $(this).closest('.slider-fouc').removeAttr('class');\n        }).each(function () {\n            var thisInstance = $(this);\n            var itemPerLine = thisInstance.data('item');\n            thisInstance.owlCarousel({\n                autoplay: false,\n                loop: false,\n                dots: false,\n                rewind: true,\n                nav: true,\n                navElement: 'div',\n                navClass: ['specific-category-slider-previous', 'specific-category-slider-next'],\n                navText: ['<i class=\"fas fa-angle-left\"></i>', '<i class=\"fas fa-angle-right\"></i>'],\n                responsive: {\n                    0: {\n                        items: 1\n                    },\n                    768: {\n                        items: 2\n                    },\n                    991: {\n                        items: itemPerLine - 1\n                    },\n                    1200: {\n                        items: itemPerLine\n                    }\n                }\n            });\n        });\n    };\n    /**\r\n     * On Product Slider Tabs: If content is hidden, Owl-carousel refuses to get the dimensions,\r\n     * Sounds like because by default un-active `tab` is set to \"display: none\"\r\n     * so it can't get the dimensions. Thus we Manually refresh the position on tab change.\r\n     */\n    var onTabChangeRefreshPositionOfCarousel = function onTabChangeRefreshPositionOfCarousel() {\n        // When showing a new tab, the events fire.\n        // Specificity = 2\n        $('.section-maker [data-toggle=\"tab\"]').on('shown.bs.tab', function (e) {\n            // Get the current click id of tab\n            var $currentID = $(e.target).attr('href');\n            // Trigger refresh `event` to current active `tab`\n            $($currentID + '.active').children().trigger('refresh.owl.carousel');\n        });\n    };\n    /**\r\n     * Initialize owl-carousel for brand slider\r\n     */\n    var brandSlider = function brandSlider() {\n        var thisInstance = $('.brand-slider-content');\n        var itemPerLine = thisInstance.data('item');\n        thisInstance.owlCarousel({\n            autoplay: true,\n            autoplayTimeout: 8000,\n            loop: false,\n            dots: false,\n            rewind: true,\n            nav: true,\n            navElement: 'div',\n            navClass: ['brand-slider-previous', 'brand-slider-next'],\n            navText: ['<i class=\"fas fa-angle-left\"></i>', '<i class=\"fas fa-angle-right\"></i>'],\n            responsive: {\n                0: {\n                    items: 1\n                },\n                768: {\n                    items: 3\n                },\n                991: {\n                    items: itemPerLine\n                },\n                1200: {\n                    items: itemPerLine\n                }\n            }\n        });\n    };\n\n    $(function () {\n        sliderMain();\n        productSlider();\n        SpecificCategorySlider();\n        onTabChangeRefreshPositionOfCarousel();\n        brandSlider();\n    });\n\n    /**\r\n     * Check everything including DOM elements and images loaded\r\n     */\n    $(window).on('load', function () {\n        showNewsletterModal();\n        $('.ph-item').removeClass('ph-item');\n    });\n})(jQuery, window, document);\n\n/*============================================================================*/\n/* Contact-page JavaScript functions\r\n/*============================================================================*/\n(function ($, window, document) {\n    'use strict';\n    /**\r\n     * GoogleMap Init\r\n     */\n\n    var googleinitMap = function googleinitMap() {\n        // Basic options for a simple Google Map\n        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions\n        var mapOptions = {\n            // How zoomed in you want the map to start at (always required)\n            zoom: 11,\n            scrollwheel: false,\n            // The latitude and longitude to center the map (always required)\n            center: new google.maps.LatLng(37.393322, -122.023780)\n        };\n        // Get the HTML DOM element that will contain your map\n        // We are using a div with id=\"map\" seen below in the <body>\n        var mapElement = document.getElementById('map');\n        // Create the Google Map using our element and options defined above\n        var map = new google.maps.Map(mapElement, mapOptions);\n        // Let's also add a marker while we're at it\n        var marker = new google.maps.Marker({\n            position: new google.maps.LatLng(37.393322, -122.023780),\n            map: map\n        });\n    };\n\n    $(function () {\n        // GoogleMap Init\n        if ($('#map').length !== 0) {\n            try {\n                google.maps.event.addDomListener(window, 'load', googleinitMap);\n            } catch (e) {\n                console.log('\"Google Maps\" refused to connect!');\n            }\n        }\n    });\n})(jQuery, window, document);\n\n/*============================================================================*/\n/* Product-Detail-page JavaScript functions\r\n/*============================================================================*/\n(function ($, window, document) {\n    'use strict';\n    //  Variables\n\n    var $ratingField = $('#your-rating-value');\n    var $starWidth = $('#your-stars');\n    var $starComment = $('#star-comment');\n\n    /**\r\n     * Rating Stars Control\r\n     */\n    var ratingStarsControl = function ratingStarsControl() {\n        var oneStarWidth = 15; // 15 * 5 = 75\n        var newStarWidth = void 0;\n        var ratingthresholdNumber = 5;\n        var comment = void 0;\n        var currentVal = void 0;\n        // On Every key type\n        $ratingField.on('keyup', function () {\n            // Reset Star Width\n            $starWidth.css('width', 0);\n            // Reset Comment\n            $starComment.text('');\n            // Always remember when when you enter any number and immediately enter some strings then parseFloat\n            // function will truncate those strings and just only parse number so that's why i'm using this\n            // check isNumeric\n            if ($.isNumeric($ratingField.val())) {\n                currentVal = parseFloat($ratingField.val());\n            } else {\n                currentVal = NaN;\n            }\n            /*\r\n             * Format values\r\n             * In JS if variable is not convert to number then by default variable is NaN.\r\n             * We known JS has Truthy & Falsey values.\r\n             * By default NaN (e.g. the result of 1/0) is false so its convert to true and expression\r\n             * becomes true.\r\n             */\n            if (!currentVal || currentVal === '' || currentVal === 'NaN' || currentVal === 0) {\n                // if value is NaN\n                currentVal = 0;\n                $starWidth.css('width', 0);\n                $starComment.text('');\n            } else {\n                if (currentVal >= 1 && currentVal <= ratingthresholdNumber) {\n\n                    if (currentVal === 1) {\n                        comment = 'I hate it.';\n                    } else if (currentVal === 2) {\n                        comment = \"I don't like it.\";\n                    } else if (currentVal === 3) {\n                        comment = \"It's OK.\";\n                    } else if (currentVal === 4) {\n                        comment = \"I like it.\";\n                    } else if (currentVal === 5) {\n                        comment = \"It's Perfect.\";\n                    }\n                    // Precise Float value to only one decimal. example: 2.454544 to 2.5\n                    currentVal = currentVal.toFixed(1);\n                    // Manipulate Stars Width\n                    newStarWidth = oneStarWidth * currentVal;\n                    // Remove decimals from a variable, Convert float value to downward\n                    newStarWidth = Math.floor(newStarWidth);\n                    // Update Star Width\n                    $starWidth.css('width', newStarWidth);\n                    // Add Comment\n                    $starComment.text(comment);\n                }\n            }\n        });\n    };\n\n    $(function () {\n        // Rating Stars Control\n        ratingStarsControl();\n    });\n})(jQuery, window, document);\n\n/*============================================================================*/\n/* Shop-page JavaScript functions\r\n/*============================================================================*/\n(function ($, window, document, undefined) {\n    'use strict';\n    //  Variables\n\n    var $shopProductContainer = $('.product-container');\n    var $searchFetchAllbtn = $('.fetch-categories ul > li > button');\n\n    /**\r\n     * Price Range Slider\r\n     */\n    var priceRangeSlider = function priceRangeSlider() {\n        $('.price-slider-range').each(function () {\n            // Get original minimum data value\n            var queryMin = parseFloat($(this).data('min'));\n            // Get original maximum data value\n            var queryMax = parseFloat($(this).data('max'));\n            // Get currency unit\n            var currecyUnit = $(this).data('currency');\n            // Get default minimum data value\n            var defaultLow = parseFloat($(this).data('default-low'));\n            // Get default maximum data value\n            var defaultHigh = parseFloat($(this).data('default-high'));\n            // Taking this\n            var $instance = $(this);\n            // Plugin invocation\n            $('.price-filter').slider({\n                range: true,\n                min: queryMin,\n                max: queryMax,\n                values: [defaultLow, defaultHigh],\n                slide: function slide(event, ui) {\n                    var result = '<div class=\"price-from\">' + currecyUnit + ui.values[0] + '</div>\\n<div class=\"price-to\">' + currecyUnit + ui.values[1] + '</div>\\n';\n                    $instance.parent().find('.amount-result').html(result);\n                }\n            });\n        });\n    };\n    /**\r\n     * Attach Click event to Grid & List\r\n     */\n    var attachClickGridAndList = function attachClickGridAndList() {\n        $('#list-anchor').on('click', function () {\n            $(this).addClass('active');\n            $(this).next().removeClass('active');\n            $shopProductContainer.removeClass('grid-style');\n            $shopProductContainer.addClass('list-style');\n        });\n        $('#grid-anchor').on('click', function () {\n            $(this).addClass('active');\n            $(this).prev().removeClass('active');\n            $shopProductContainer.removeClass('list-style');\n            $shopProductContainer.addClass('grid-style');\n        });\n    };\n    /**\r\n     * All Categories Functionality\r\n     */\n    var searchFetchAllCategoriesFunctionality = function searchFetchAllCategoriesFunctionality() {\n        $searchFetchAllbtn.on('click', function () {\n            $(this).toggleClass('js-open');\n            $(this).next('ul').stop(true, true).slideToggle();\n        });\n    };\n    /**\r\n     * Bind Slim Scroll Plugin to Associates Filters\r\n     */\n    var bindScrollWithAssociateFilters = function bindScrollWithAssociateFilters() {\n        $('.associate-wrapper').each(function () {\n            $(this).slimScroll({\n                height: 'auto',\n                railClass: 'grooverScrollRail', // default CSS class of the slimscroll rail\n                barClass: 'grooverScrollBar', // default CSS class of the slimscroll bar\n                wrapperClass: 'grooverScrollDiv' // default CSS class of the slimscroll wrapper\n            });\n        });\n    };\n\n    $(function () {\n        // Price Range Slider\n        priceRangeSlider();\n        // Attach Click event to Grid & List\n        attachClickGridAndList();\n        // Bind Slim Scroll Plugin to Associates Filters\n        bindScrollWithAssociateFilters();\n        // All Categories Functionality\n        searchFetchAllCategoriesFunctionality();\n    });\n})(jQuery, window, document);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ })

/******/ });