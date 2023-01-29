'use strict';

ReactDOM.render(
    React.createElement('button', 
        {className: 'promo__btn', 
        onClick: function() { alert("Oops, I must have forgotten to upload it :)"); }
    }, 'Download Resume'), 
    document.getElementById('react_button')
);