export default function randomHexColor() {

    return `#${Math.random().toString(16).slice(2, 8)}`;
    
}