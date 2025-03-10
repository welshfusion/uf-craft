document.addEventListener('afterBlitzInject', function (event) {
    if(event.detail.element.querySelector("#elc-cookie-consent")) {
        /*
         * addEventListner: For all major browsers, except IE 8 and earlier
         * attachEvent:     For IE 8 and earlier versions
         */
        let detailLink = document.getElementById("elc-detail-link");
        if (detailLink !== null) {
            if (detailLink.addEventListener) {
                detailLink.addEventListener("click", toggleExpand);
            } else if (detailLink.attachEvent) {
                detailLink.attachEvent("onclick", toggleExpand);
            }
        }

        let hideDetailLink = document.getElementById("elc-hide-detail-link");
        if (hideDetailLink !== null) {
            if (hideDetailLink.addEventListener) {
                hideDetailLink.addEventListener("click", toggleExpand);
            } else if (hideDetailLink.attachEvent) {
                hideDetailLink.attachEvent("onclick", toggleExpand);
            }
        }

        let saveLink = document.getElementById("elc-save-link");
        if (saveLink !== null) {
            if (saveLink.addEventListener) {
                saveLink.addEventListener("click", submitConsent);
            } else if (saveLink.attachEvent) {
                saveLink.attachEvent("onclick", submitConsent);
            }
        }

        let acceptLink = document.getElementById("elc-accept-link");
        if (acceptLink !== null) {
            if (acceptLink.addEventListener) {
                acceptLink.addEventListener("click", submitConsent);
            } else if (acceptLink.attachEvent) {
                acceptLink.attachEvent("onclick", submitConsent);
            }
        }


        let acceptAllLink = document.getElementById("elc-accept-all-link");
        if (acceptAllLink !== null) {
            if (acceptAllLink.addEventListener) {
                acceptAllLink.addEventListener("click", submitAllConsent);
            } else if (acceptAllLink.attachEvent) {
                acceptAllLink.attachEvent("onclick", submitAllConsent);
            }
        }

        let tabLink = document.getElementById("elc-tab-link");
        if (tabLink !== null) {
            if (tabLink.addEventListener) {
                tabLink.addEventListener("click", toggleTab);
            } else if (tabLink.attachEvent) {
                tabLink.attachEvent("onclick", toggleTab);
            }
        }

        addWindowObject();
    }
});

function submitConsent(event) {

    event.preventDefault();

    let form = document.querySelector('#elc-cookie-consent-form');
    let data = serialize(form);

    document.getElementById("elc-cookie-consent").classList.toggle('elc-hidden');
    let cookieTab = document.getElementById("elc-cookie-tab");
    if(typeof cookieTab !== 'undefined' && cookieTab !== null) document.getElementById("elc-cookie-tab").classList.toggle('elc-hidden');

    let xhr = new XMLHttpRequest();
    xhr.open('POST', form.dataset.url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            addWindowObject()
            if (xhr.status !== 200) console.log('Error: ' + xhr.status);
            else {
                document.querySelectorAll(".elc-cookie-checkbox").forEach(function(item) {
                    setCookie('cookie-consent-' + item.name, item.checked ? "on" : "off", 365);
                });

                if (form.hasAttribute("data-refresh") && form.dataset.refresh === "true" && form.hasAttribute("data-refreshtime")) {
                    refresh(form.dataset.refreshtime)
                }
            }
        }
    }
}
window.submitConsent = submitConsent;

function submitAllConsent(event) {

    event.preventDefault();

    let form = document.querySelector('#elc-cookie-consent-form');

    for (let i = 0; i < form.elements.length; i++ ) {

        if (form.elements[i].type == 'checkbox') {

            if (form.elements[i].checked == false) {
                form.elements[i].checked = true;
            }
        }
    }

    let data = serialize(form);
    document.getElementById("elc-cookie-consent").classList.toggle('elc-hidden');
    let cookieTab = document.getElementById("elc-cookie-tab");
    if(typeof cookieTab !== 'undefined' && cookieTab !== null) document.getElementById("elc-cookie-tab").classList.toggle('elc-hidden');

    let xhr = new XMLHttpRequest();
    xhr.open('POST', form.dataset.url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data.concat('&acceptAll=true'));

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) console.log('Error: ' + xhr.status);
            else if (form.hasAttribute("data-refresh") && form.dataset.refresh === "true" && form.hasAttribute("data-refreshtime")) {
                refresh(form.dataset.refreshtime)
            }
        }
    }
}
window.submitAllConsent = submitAllConsent;


function refresh(ms) {
    setTimeout(function() {
        location.reload();
    }, ms);
}
window.refresh = refresh;

function toggleExpand(event)
{
    event.preventDefault();
    document.getElementById("elc-cookie-consent").classList.toggle('elc-fullwidth');
    document.getElementById("elc-cookie-consent").classList.toggle('elc-small');
}
window.toggleExpand = toggleExpand;

function toggleTab(event)
{
    event.preventDefault();
    document.getElementById("elc-cookie-consent").classList.toggle('elc-hidden');
    document.getElementById("elc-cookie-tab").classList.toggle('elc-hidden');

    document.getElementById("elc-cookie-consent").classList.add('elc-fullwidth');
    document.getElementById("elc-cookie-consent").classList.remove('elc-small');
}
window.toggleTab = toggleTab;

function addWindowObject()
{
    let form = document.querySelector('#elc-cookie-consent-form');
    if (typeof form.dataset.show !== 'undefined')
    {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', form.dataset.show);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    console.log('Error: ' + xhr.status);
                    window.ccc = {}
                }
                else {
                    if(xhr.response === 'null') {
                        window.ccc = {}
                    }
                    else window.ccc = JSON.parse(xhr.response)
                }
            }
        }
    }
}
window.addWindowObject = addWindowObject;

/*!
 * Serialize all form data into a query string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 */
var serialize = function (form) {

    // Setup our serialized data
    var serialized = [];

    // Loop through each field in the form
    for (var i = 0; i < form.elements.length; i++) {

        var field = form.elements[i];

        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'button') continue;

        // If a multi-select, get all selections
        if (field.type === 'select-multiple') {
            for (var n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
            }
        }

        // Convert field data to a query string
        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
        }
    }

    return serialized.join('&');

};
window.serialize = serialize;

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}