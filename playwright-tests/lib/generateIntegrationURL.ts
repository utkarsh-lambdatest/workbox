import {resolve} from 'path';

const projectRoot = resolve(__dirname, '..', '..');

function trimPrefix(str: string): string {
  if (str.startsWith(projectRoot)) {
    return str.slice(projectRoot.length);
  } else {
    return str;
  }
}

export function generateIntegrationURL(
  baseURL = '',
  dirname: string,
  htmlFile = 'integration.html',
): string {
  const path = trimPrefix(dirname);
  return `${baseURL}/random-prefix-${Math.random()}${path}/${htmlFile}`;
}
