# # HubSpot Form Integration Component

This component simplifies the integration of HubSpot forms into your Next.js application, allowing you to collect user data seamlessly. Feel free to use it and tweak it to your needs.

## Usage

1. **Installation**: Ensure you have React and Next.js set up in your project.

2. **Component Import**: Import the `HubSpotForm` component in your desired Next.js page or component file.

   ```javascript
   import HubSpotForm from '../components/hubspot'; // Adjust the path as needed
   
3. **Embedding the Form**: Place the HubSpotForm component where you want the HubSpot form to appear.
```
   export default function Contact(){
   	return(
   	<>
   		<h1>Contact page</h1>
   		<HubSpotForm />
   	</>
   	)
   }
```

4. **Configuration:** Open HubSpotForm.js and modify the portalId and formId in the window.hbspt.forms.create function with your HubSpot portal ID and form ID.
```
   if(window.hbspt){
   	window.hbspt.forms.create({
   		portalId: 'YOUR-PORTAL-ID',
   		formId: 'YOUR-FORM-ID',
   		target: '#hubspotForm'
   	});
   }
```

5. **Integration:** The component loads the HubSpot form script using the useEffect hook and creates the form within the specified target element (#hubspotForm).
