export function getImageColors(imageUrl: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.src = imageUrl

        img.onload = () => {
            requestAnimationFrame(() => {
                // Use OffscreenCanvas for performance (if available)
                const canvas =
                    typeof OffscreenCanvas !== 'undefined'
                        ? new OffscreenCanvas(32, 32)
                        : document.createElement('canvas')
                const ctx = canvas.getContext('2d')

                if (!ctx) {
                    reject(new Error('Could not get canvas context'))
                    return
                }

                // Resize image for faster processing
                const targetSize = 32
                canvas.width = targetSize
                canvas.height = targetSize
                ctx.drawImage(img, 0, 0, targetSize, targetSize)

                const imageData = ctx.getImageData(
                    0,
                    0,
                    targetSize,
                    targetSize
                ).data
                const colorMap = new Map<string, number>()

                for (let i = 0; i < imageData.length; i += 32) {
                    // Process fewer pixels
                    const r = imageData[i]
                    const g = imageData[i + 1]
                    const b = imageData[i + 2]

                    const brightness = (r * 299 + g * 587 + b * 114) / 1000
                    const max = Math.max(r, g, b)
                    const min = Math.min(r, g, b)
                    const saturation = max === 0 ? 0 : (max - min) / max

                    if (brightness < 50 || brightness > 220 || saturation < 0.5)
                        continue

                    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`

                    // Track color frequency
                    colorMap.set(hex, (colorMap.get(hex) || 0) + 1)
                }

                // Sort colors by frequency (most frequent first)
                const sortedColors = Array.from(colorMap.entries())
                    .sort((a, b) => b[1] - a[1])
                    .map(([color]) => color)

                resolve(sortedColors)
            })
        }

        img.onerror = () => reject(new Error('Failed to load image'))
    })
}
