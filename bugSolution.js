```javascript
import * as Linking from 'expo-linking';

export default function App() {
  const openUrl = async (url) => {
    try {
      const result = await Linking.openURL(url);
      if (!result) {
        console.error(`Failed to open URL: ${url}`);
        alert('There was a problem opening the link.');
      } else {
        console.log(`URL opened successfully: ${url}`);
      }
    } catch (error) {
      console.error(`Error opening URL: ${url}, Error: ${error}`);
      alert('There was an error opening the link. Please check the URL.');
    }
  };

  // ... rest of the app
}
```