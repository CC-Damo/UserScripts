// ==UserScript==
// @name        Adding Template Buttons
// @description Adds Template buttons to CRM
// @include     http://www.amazon.co.uk/*
// @grant       GM_addStyle
// ==/UserScript==

/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="SlowSpeed" type="button">'
                + 'Slow Speed</button>'
				+ '<button id="intConnection" type="button">'
                + 'IntConnection</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("SlowSpeed").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    /*--- For our dummy action, we'll just add a line of text to the top
        of the screen.
    */
	document.getElementById('twotabsearchtextbox').value = "thisisatest";
    var zNode       = document.createElement ('p');
    zNode.innerHTML = 'The button was clicked.';
    document.getElementById ("myContainer").appendChild (zNode);

}

//--- Style our newly added elements using CSS.
GM_addStyle ( multilineStr ( function () {/*!
    #myContainer {
        top:                    0;
        left:                   0;
        font-size:              20px;
        background:             orange;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                222;
        padding:                5px 20px;
    }
    #SlowSpeed {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
*/} ) );

function multilineStr (dummyFunc) {
    var str = dummyFunc.toString ();
    str     = str.replace (/^[^\/]+\/\*!?/, '') // Strip function () { /*!
            .replace (/\s*\*\/\s*\}\s*$/, '')   // Strip */ }
            .replace (/\/\/.+$/gm, '') // Double-slash comments wreck CSS. Strip them.
            ;
    return str;
}