# Marksman - Targeting Assistance Program
The purpose of this tool is to assist with casual web application penetration testing during large scope engagements where pages may contain dozens or hundreds of links and references to additional endpoints. The tool aims to give testers visual indicators that can help them streamline their attention and focus on elements of interests for further testing without clicking through large numbers of static resources.
![](https://github.com/PN-Tester/Marksman/blob/main/MarksmanV3.gif)

# Usage
In 1 click, the tool will highlight in **yellow** all href elements that refer to pages with the potential for dynamic functionality (asp, php, aspx, jsp, jspx, etc.). The tool will also highlight in **red** all href elements that contain HTTP GET parameters, after identifying these via regular expression. Finally the tool highlights in **magenta** any input form elements that result in dynamic HTTP POST requests. This should ideally assist penetration testers in focusing quickly on elements of interest for further investigation.

If you want to have the functionality running continuously, simply select the **INFINITE MODE** checkbox and press the **FIRE** button. The plugin will automatically perform targeting during navigation until the checkbox is deselected by the user. 

The tool is equally useful for reconnaissance on search results page to visually identify interesting endpoints containing the aforementioned properties.
![](https://github.com/PN-Tester/Marksman/blob/main/marksman_google_demo.gif)

# Installation
1. git clone https://github.com/PN-Tester/Marksman/
2. In chromium based browser (chrome, edge, opera, etc) navigate to chrome://extensions
3. Set the "Developer mode" switch to Enabled
4. Select "Load unpacked" button which appears
5. Select the Marksman folder and hit enter
6. Restart the browser


