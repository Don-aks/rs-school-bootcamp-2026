import { fileURLToPath } from 'node:url';
import { readdirSync } from 'node:fs';

const getAllHTMLFiles = (path) => {
  const dirPath = fileURLToPath(path, import.meta.url);
  const allFiles = readdirSync(dirPath, { withFileTypes: true });
  const htmlFiles = allFiles.filter((file) => file.name.endsWith('.html'));

  // Return an object where keys are names without extension
  // and values are full paths
  return htmlFiles.reduce((acc, file) => {
    const name = file.name.replace('.html', '');
    acc[name] = `${dirPath}${file.name}`;
    return acc;
  }, {});
};

export default getAllHTMLFiles;
