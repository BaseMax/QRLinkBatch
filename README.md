# QRLinkBatch

Generate and download QR codes in bulk from a list of URLs, all within your browser.

## Overview

QRLinkBatch is a JavaScript web app that allows users to generate QR codes from a list of URLs provided in a textarea. Each URL entered on a separate line is processed into a QR code, displayed in the browser, and available for download as a ZIP file. The project uses [QRCode.js](https://github.com/davidshimjs/qrcodejs) for QR code generation and [JSZip](https://stuk.github.io/jszip/) for packaging images.

## Features

- **Bulk QR Code Generation**: Paste a list of URLs and generate QR codes for each.
- **URL Validation**: Optional validation to ensure each entry is a valid URL.
- **Statistics**: Display total, valid, and invalid URL counts in real-time.
- **ZIP Download**: Download all generated QR codes as a ZIP file.
- **Client-side Processing**: No server required; everything runs in the browser.

## Usage

1. Paste or type a list of URLs into the left column textarea. Each URL should be on a separate line.
2. Check the **Validate URLs** checkbox to enforce URL validity. Invalid URLs will be ignored.
3. The QR codes for valid URLs will appear in the right column along with a count of total, valid, and invalid URLs.
4. Click the **Download All QR Codes** button to download the QR codes as a ZIP file.

## Getting Started

### Prerequisites

- A modern web browser with JavaScript enabled.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/YourUsername/QRLinkBatch.git
   cd QRLinkBatch
   ```

2. Open `index.html` in your browser to start using the app.

## File Structure

- `index.html` - Main HTML layout with left and right columns for input and QR code display.
- `script.js` - JavaScript logic for QR code generation, validation, and ZIP packaging.
- `style.css` - Basic styling for layout and appearance (included in index.html).
- `qrcode.min.js` - External library for QR code generation.
- `jszip.min.js` - External library for creating ZIP files.

## Technologies Used

HTML, CSS, JavaScript

QRCode.js

JSZip

### Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

### License
This project is open-source and available under the MIT License. See the LICENSE file for more details.

Copyright 2024, Max Base
