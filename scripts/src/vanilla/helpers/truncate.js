// truncate('some string', 3) // some...

export default function truncate(value, limit) {
  if (value.length > limit) {
    const trimmed = value.substr(0, limit);
    const lastWordIndex = Math.min(trimmed.length, trimmed.lastIndexOf(' '));
    return `${trimmed.substr(0, lastWordIndex)}...`;
  }
  return value;
}
