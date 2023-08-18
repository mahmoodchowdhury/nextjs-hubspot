/**
 * The HubSpotForm component is a React component that creates a HubSpot form and renders it in a
 * specified target element.
 * 
 * The portalId and formId can be obtained from the form embed code within hubspot.
 * 
 * @returns The component is returning a `<div>` element with the id "hubspotForm" and the className
 * "hubspotForm".
 */
import { useEffect } from 'react';

export default function HubSpotForm(){
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if(window.hbspt){
                window.hbspt.forms.create({
                    portalId: 'PLACE-PORTAL-ID',
                    formId: 'PLACE-FORM-ID',
                    target: '#hubspotForm'
                });
            }
        });
    }, []);

    return(
        <div id="hubspotForm" className="hubspotForm"></div>
    );
}