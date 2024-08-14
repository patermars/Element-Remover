# Element Deleter

## Description
Element Deleter is a browser extension that allows users to interactively remove elements from web pages. It provides a simple and intuitive way to clean up cluttered websites, remove unwanted content, or customize your browsing experience.

## Features
- **Toggle Deletion Mode:** Toggle on/off element deletion mode
- **Custom Cursor:** Custom cursor indicating active deletion mode
- **Visual Feedback:** Hover highlighting of elements
- **Effortless Removal:** One-click element removal

## Installation

Option 1:
Install it using [Chrome Webstore]() //Haven't published it yet.

Option 2:
1. Go to the [Release page](https://github.com/patermars/Element-Remover/releases) of this repository.
2. Download the latest `.crx` version from there.
3. Once downloaded, drag and drop it onto the browser, it will automatically install itself.

Option 3:
1. Clone this repository or download the ZIP file.
2. Open your browser's extension page (e.g., chrome://extensions for Chrome).
3. Enable Developer Mode.
4. Click "Load unpacked" and select the extension directory.

## Usage
1. Click the Element Deleter icon in your browser toolbar to open the popup.
2. Click the "Enable Deleter" button to activate the deletion mode.
3. Hover over elements on the webpage. They will be highlighted with a red outline.
4. Click on a highlighted element to delete it from the page.
5. To stop deleting elements, open the popup again and click "Disable Deleter".

## Development
This extension is built using vanilla JavaScript, HTML, and CSS. The main components are:
- `manifest.json`: Extension configuration
- `popup.html` & `popup.js`: User interface for enabling/disabling the deleter
- `content.js`: Core functionality for element highlighting and deletion
- `cursor.png`: Custom cursor image, also stored at [PostImage uploade link](https://i.postimg.cc/05zZv2kN/cursor.png)

To modify the extension:
1. Edit the relevant files.
2. Reload the extension in your browser to see the changes.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
[MIT License](LICENSE)

## Disclaimer
Use this extension responsibly. Deleting elements may break the functionality of some websites. The changes are temporary and will be reset when you refresh the page.
