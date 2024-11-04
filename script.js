const qrDataElement = document.querySelector("#qr-data");
const qrCodeListElement = document.querySelector("#qr-code-list");
const validateUrlElement = document.querySelector("#validate-url");
const totalCountElement = document.querySelector("#total-count");
const validCountElement = document.querySelector("#valid-count");
const invalidCountElement = document.querySelector("#invalid-count");
const downloadZipButton = document.querySelector("#download-zip");

let validUrls = [];
let invalidUrls = [];

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

function generateQrCodes() {
    const urls = qrDataElement.value.split("\n").map(url => url.trim()).filter(Boolean);

    validUrls = [];
    invalidUrls = [];
    qrCodeListElement.innerHTML = "";

    urls.forEach(url => {
        const isValid = !validateUrlElement.checked || isValidUrl(url);
        
        if (isValid) {
            validUrls.push(url);
            const qrCodeContainer = document.createElement("div");
            const qrCode = new QRCode(qrCodeContainer, {
                text: url,
                width: 100,
                height: 100,
            });
            qrCodeContainer.setAttribute("data-url", url);
            qrCodeListElement.appendChild(qrCodeContainer);
        } else {
            invalidUrls.push(url);
        }
    });

    totalCountElement.textContent = urls.length;
    validCountElement.textContent = validUrls.length;
    invalidCountElement.textContent = invalidUrls.length;

    if (validateUrlElement.checked) {
        document.querySelector("#stats").style.display = "block";
    } else {
        document.querySelector("#stats").style.display = "none";
    }
}

qrDataElement.addEventListener("input", generateQrCodes);
validateUrlElement.addEventListener("change", () => {
    generateQrCodes();

    document.querySelector("#stats").style.display = validateUrlElement.checked ? "block" : "none";
});

async function downloadQrCodesAsZip() {
    const zip = new JSZip();

    for (const url of validUrls) {
        const qrCodeContainer = document.querySelector(`[data-url="${url}"] canvas`);
        const dataUrl = qrCodeContainer.toDataURL("image/png");
        const imgData = dataUrl.replace(/^data:image\/(png|jpg);base64,/, "");

        zip.file(`${url.replace(/[^a-zA-Z0-9]/g, "_")}.png`, imgData, { base64: true });
    }

    const blob = await zip.generateAsync({ type: "blob" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcodes.zip";
    downloadLink.click();
}

downloadZipButton.addEventListener("click", downloadQrCodesAsZip);
