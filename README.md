# Auto Login to Komga (Dynamic, SPA Support)

This userscript automates the login process to Komga. It detects when the user is on the login page and automatically performs the login action, then redirects to a specified dashboard page after successful login.

## Features
- Automatically POSTs login credentials.
- Redirects to dashboard page after successful login.

## How to Use
1. Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
2. Create a new userscript in your script manager.
3. Copy and paste the code from the script file into the editor.
4. Replace the following placeholders in the script:
   - `yourwebsite.com`: Replace with the base URL of your Komga instance.
   - `youremail@email.com`: Replace with your Komga login email.
   - `password`: Replace with your Komga password.
5. Save the script.

## Notes
- **Security Warning**: This script contains plain-text credentials, which can be easily accessed by others. Use it at your own risk and avoid using it on shared or public devices.
- Customize the redirect URL (`redirectUrl`) to match your desired page after login or just leave it at default.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the script.

---

**Author**: wanhuz

