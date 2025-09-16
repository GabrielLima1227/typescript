type Coordinate = [x: number, y: number];

function formatPoint(point: Coordinate): string {
    return `X: ${point[0]}, Y: ${point[1]}`;
}
