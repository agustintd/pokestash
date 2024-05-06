function getColor(image, ratio) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;

    try {
        context.drawImage(image, 0, 0);
        const data = context.getImageData(0, 0, canvas.width, canvas.height).data;
        let r = 0, g = 0, b = 0, count = 0;

        for (let i = 0; i < data.length; i += 4 * ratio) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
        }

        r = Math.min(Math.round(r / count) + 0, 255);
        g = Math.min(Math.round(g / count) + 0, 255);
        b = Math.min(Math.round(b / count) + 0, 255);

        return { r, g, b };
    } catch (err) {
        console.error(err);
        return { r: 0, g: 0, b: 0 };
    }
    // Ejemplo de uso
    //const image = document.querySelector('img');
    // image.onload = function () {
    //     const color = getColor(image, 4);
    //     console.log(color)
    // }
}