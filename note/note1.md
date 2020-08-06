## 生成目录树

### DOS 下面的命令

当你在当前目录下使用tree /F或者tree /a 这两个命令时,你会发现,它会把所有文件目录结构都给你打印出来 使用tree /f,如下所示:

tree /f > 指定输出的文件(一般为txt格式或者readme文档)

tree /f > list.txt


## 参考： https://github.com/yangshun/tree-node-cli

```
$ tree -h

  Usage: tree [options]

  Options:

    -V, --version             output the version number
    -a, --all-files           All files, include hidden files, are printed.
    --dirs-first              List directories before files.
    -d, --dirs-only           List directories only.
    -I, --exclude [patterns]  Exclude files that match the pattern. | separates alternate patterns. Wrap your entire pattern in double quotes. E.g. `"node_modules|coverage".
    -L, --max-depth <n>       Max display depth of the directory tree.
    -r, --reverse             Sort the output in reverse alphabetic order.
    -F, --trailing-slash      Append a '/' for directories.
    -h, --help                output usage information
```

<!-- 利用python 进行登录微信 -->
https://github.com/jackfrued/Python-100-Days/blob/master/%E5%85%AC%E5%BC%80%E8%AF%BE/%E6%96%87%E6%A1%A3/%E7%AC%AC04%E6%AC%A1%E5%85%AC%E5%BC%80%E8%AF%BE-%E5%A5%BD%E7%8E%A9%E7%9A%84Python/%E5%A5%BD%E7%8E%A9%E7%9A%84Python.md


















