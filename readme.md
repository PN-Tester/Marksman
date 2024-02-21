# Extendo - Attack Surface Expansion Tool
The purpose of this tool is to make quick determination of available web app attack surfaces convenient for casual browsing.
No more commandline tools and subsequent trial and error. While this tool is only relevant for web application attack surface,
it aims to offer a fast, convenient and hassle free approach for testers performing casual estimations and recon.
![](https://github.com/PN-Tester/Extendo/blob/main/Extendo%20Clip.gif)

# Usage
In 1 click, you get all available subdomains hosting web apps opened in your browser as separate tabs. The tool will validate HTTP response codes
for each enumerated subdomain prior to opening them, excluding any error responses and opening only responses with 200 or redirect codes.
Extendo uses the SecurityTrails API and so it requires that you add your free API key to the background.js file at the designated position.
Simply open the extension on your target page, and click the launch button. After loading phase, tabs will open automatically.

# Installation
1. git clone https://github.com/PN-Tester/Extendo/
2. Edit the background.js file and add your own securityTrails API key at the designated position
3. In chromium based browser (chrome, edge, opera, etc) navigate to chrome://extensions
4. Set the "Developer mode" switch to Enabled
5. Select "Load unpacked" button which appears
6. Select the Extendo folder and hit enter
7. Restart the browser

# Coming Soon
Ability to granularly select the response codes you want Extendo to open via checkboxes. Currently things like 401, 403, and 404 are excluded.
I understand that these can still be interesting to explore in many cases, and so this feature will allow users to choose what gets opened. 
