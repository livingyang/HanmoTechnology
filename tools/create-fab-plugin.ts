// create-fab-plugin.ts
// 用于将UE5的插件，打包成Fab上架的zip包
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import crypto from "crypto";

// 从命令行中，获取插件目录
const pluginPath = process.argv[2];
if (!pluginPath) {
  console.error("请指定插件目录");
  process.exit(1);
}

// 7zip的可执行文件路径
const zipPath = "C:/Program Files/7-Zip/7z.exe";

// 获取目录名称
const pluginName = path.basename(pluginPath);
console.log("pluginPath:", pluginPath);
console.log("pluginName:", pluginName);

// 生成uplugin文件路径
const pluginFilePath = path.join(pluginPath, `${pluginName}.uplugin`);
console.log("pluginFilePath:", pluginFilePath);

// 将uplugin文件的内容保存起来
const pluginContent = fs.readFileSync(pluginFilePath, "utf8");

function pluginFolderToZip(pluginPath: string, version: string) {
  // 生成zip包路径
  const zipFilePath = path.join(".", `${pluginName}-${version}.zip`);
  console.log("zipFilePath:", zipFilePath);

  // 生成密码
  const hash = crypto.createHash("md5").update(pluginName).digest("hex");
  const password = `${hash.substring(0, 6)}@${version}`;

  // 替换uplugin文件中的Version字符串
  const updatedPluginContent = pluginContent.replace("5.0.0", version);
  // 保存更新后的uplugin文件
  fs.writeFileSync(pluginFilePath, updatedPluginContent);

  // 执行7zip命令
  const zipCommand = `"${zipPath}" a -tzip -p"${password}" ${zipFilePath} ${pluginPath}/*`;
  console.log("zipCommand:", zipCommand);
  console.log("password:", password);
  // 执行7zip命令，添加密码
  execSync(`${zipCommand}`);
}

// 调用函数，将插件目录打包成zip包
pluginFolderToZip(pluginPath, "5.0.0");
pluginFolderToZip(pluginPath, "5.1.0");
pluginFolderToZip(pluginPath, "5.2.0");
pluginFolderToZip(pluginPath, "5.3.0");
pluginFolderToZip(pluginPath, "5.4.0");
pluginFolderToZip(pluginPath, "5.5.0");
pluginFolderToZip(pluginPath, "5.6.0");
pluginFolderToZip(pluginPath, "5.7.0");

// 恢复uplugin文件
fs.writeFileSync(pluginFilePath, pluginContent);
