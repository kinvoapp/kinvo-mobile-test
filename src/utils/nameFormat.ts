export function formatShortName(name: string) {
  return (
    name.split(' ')[0] + ' ' + (name.split(' ')[1] ? name.split(' ')[1] : '')
  );
}
