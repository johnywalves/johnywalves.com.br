// https://css-tricks.com/converting-color-spaces-in-javascript/

export const hexToHSL = (H, object = false) => {
    // Convert hex to RGB first
    let r = 0,
        g = 0,
        b = 0
    if (H.length === 4) {
        r = "0x" + H[1] + H[1]
        g = "0x" + H[2] + H[2]
        b = "0x" + H[3] + H[3]
    } else if (H.length === 7) {
        r = "0x" + H[1] + H[2]
        g = "0x" + H[3] + H[4]
        b = "0x" + H[5] + H[6]
    }
    // Then to HSL
    r /= 255
    g /= 255
    b /= 255
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0

    if (delta === 0) h = 0
    else if (cmax === r) h = ((g - b) / delta) % 6
    else if (cmax === g) h = (b - r) / delta + 2
    else h = (r - g) / delta + 4

    h = Math.round(h * 60)

    if (h < 0) h += 360

    l = (cmax + cmin) / 2
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)

    if (object) {
        return [h, s, l]
    }

    return "hsl(" + h + "," + s + "%," + l + "%)"
}

export const hexToRGB = (h, object = false) => {
    let r = 0,
        g = 0,
        b = 0

    // 3 digits
    if (h.length === 4) {
        r = "0x" + h[1] + h[1]
        g = "0x" + h[2] + h[2]
        b = "0x" + h[3] + h[3]

        // 6 digits
    } else if (h.length === 7) {
        r = "0x" + h[1] + h[2]
        g = "0x" + h[3] + h[4]
        b = "0x" + h[5] + h[6]
    }

    if (object) {
        return [r, g, b]
    }

    return "rgb(" + +r + "," + +g + "," + +b + ")"
}

export const rgbToCmyk = (r, g, b, normalized = false) => {
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    let k = Math.min(c, Math.min(m, y));

    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);

    if (!normalized) {
        c = Math.round(c * 10000) / 100;
        m = Math.round(m * 10000) / 100;
        y = Math.round(y * 10000) / 100;
        k = Math.round(k * 10000) / 100;
    }

    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;
    k = isNaN(k) ? 0 : k;

    return [c, m, y, k]
}

export const hslToHex = (h, s, l) => {
    l /= 100
    const a = (s * Math.min(l, 1 - l)) / 100
    const f = (n) => {
        const k = (n + h / 30) % 12
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0")
    }
    return `#${f(0)}${f(8)}${f(4)}`
}

export const getContrastColor = (hex) => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    let r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);

    return (r * 0.299 + g * 0.587 + b * 0.114) > 150 //186
        ? '#333'
        : '#f8f8f8';

}