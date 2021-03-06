## p5.js
#### 描画位置
1. html側でidを設定
* p5.jsのスクリプトでcanvas.parent(id)を指定

## Vagrant
#### proxy環境
* vagrant-proxyconfを使う
* 参考：http://weblabo.oscasierra.net/vagrant-proxyconf/
* `vagrant plugin install vagrant-proxyconf`

## Node.js
#### Windows
1. nodistをインストール
* `nodist + 6`
* `nodist global 6`
* `node -v`
* npmが入らなかった場合: `nodist npm global match`

#### Linux
1. nvmをインストール
* `nvm install 6`

## express
#### インストール
* `npm install ect express-generator -g`
  * テンプレートエンジンectもついでに入れる

#### アプリ作成
* ejsをテンプレートエンジンとして作成：`express app --ejs`
  * `--ect`だとjadeで作成されてしまうため
* ejs用の部分をect用に書き換える
  * package.jsonのdependencies
  * app.js
  * views内の各ファイル
* 依存ファイル取得：`npm install --no-bin-links`
  * Vagrantの共有フォルダだとシンボリックリンクを作成できないためオプションをつけないとエラーになる

#### publicフォルダ外の静的ファイルを使う（p5.gibber.js）
  * 参考：http://expressjs.com/ja/starter/static-files.html
  * app.js内のapp.useでディレクトリを追加する

## AWS
* URL: ec2-54-199-159-238.ap-northeast-1.compute.amazonaws.com

## gooラボID
* `c51755ba305f15bdb2476d86ad4492c38eb0be7171778cf32a36f9feb953dfb3`

## bootstrap
* URL: https://www.npmjs.com/package/bootstrap
* `npm install bower -g`
* `bower install bootstrap`

## Node.jsでffmpeg
* https://github.com/fluent-ffmpeg/node-fluent-ffmpeg

#### インストール
* `npm install fluent-ffmpeg`
