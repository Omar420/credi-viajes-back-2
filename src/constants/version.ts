import fs from 'fs/promises';
import path from 'path';

const packageJsonPath = path.join(__dirname, '../../../package.json');

export async function getVersion() {
  try {
    const data = await fs.readFile(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(data);
    return packageJson.version;
  } catch (err) {
    console.error('Error al leer el archivo package.json:', err);
    return '0.0.0';
  }
}


export async function getName() {
  try {
    const data = await fs.readFile(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(data);
    return packageJson.name;
  } catch (err) {
    console.error('Error al leer el archivo package.json:', err);
    return '0.0.0';
  }
}
