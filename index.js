#!/usr/bin/env node
var _0x38bb=['css_modules','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.css$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20importLoaders:\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20modules:\x20true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20localIdentName:\x20\x27[hash:base64:32]\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20include:\x20/\x5c.module\x5c.css$/\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.scss$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20importLoaders:\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20modules:\x20true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20localIdentName:\x20\x27[hash:base64:32]\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27sass-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20include:\x20/\x5c.module\x5c.scss$/\x0a\x20\x20\x20\x20\x20\x20},\x0a','image_loader','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.svg$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27file-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name:\x20\x27[name]_[hash:8].[ext]\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20publicPath:\x20\x27/images\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outputPath:\x20\x27../images\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a','png','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.png$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27url-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mimetype:\x20\x27image/png\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a','react','\x20\x20resolve:\x20{\x0a\x20\x20\x20\x20extensions:\x20[\x0a\x20\x20\x20\x20\x20\x20\x27.js\x27,\x0a\x20\x20\x20\x20\x20\x20\x27.jsx\x27\x0a\x20\x20\x20\x20]\x0a\x20\x20},\x0a','\x20\x20resolve:\x20{\x0a\x20\x20\x20\x20extensions:\x20[\x0a\x20\x20\x20\x20\x20\x20\x27.js\x27,\x0a\x20\x20\x20\x20\x20\x20\x27.vue\x27\x0a\x20\x20\x20\x20]\x0a\x20\x20},\x0a','\x20\x20],\x0a\x20\x20optimization:\x20{\x0a\x20\x20\x20\x20runtimeChunk:\x20\x27single\x27,\x0a\x20\x20\x20\x20splitChunks:\x20{\x0a\x20\x20\x20\x20\x20\x20cacheGroups:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vendor:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/[\x5c\x5c/]node_modules[\x5c\x5c/]/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name:\x20\x27vendors\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20chunks:\x20\x27all\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a}\x0a\x0amodule.exports\x20=\x20config\x0a','\x20\x20]\x0a}\x0a\x0amodule.exports\x20=\x20config\x0a','readFileSync','/package.json','scripts','dev','cross-env\x20NODE_ENV=development\x20webpack\x20-d\x20--progress\x20--hide-modules\x20--watch\x20--mode=development','prod','npm\x20run\x20production','cross-env\x20NODE_ENV=production\x20webpack\x20-p\x20--progress\x20--hide-modules\x20--mode=production','dependencies','nodemon','^3.16.0','devDependencies','webpack','^4.29.6','assets-webpack-plugin','^3.9.10','cross-env','^5.2.0','clean-webpack-plugin','^2.0.1','react-dom','@babel/preset-react','babel-loader','^8.0.5','@babel/core','^7.4.0','^7.4.2','@babel/plugin-proposal-class-properties','babel-eslint','^10.0.1','^5.15.3','eslint-config-standard','^12.0.0','eslint-plugin-import','eslint-plugin-jsx-a11y','^6.2.1','eslint-plugin-node','^8.0.1','eslint-plugin-promise','^4.0.1','^7.12.4','eslint-plugin-standard','^4.0.0','react-router-dom','^5.0.0','^2.6.10','vue-loader','^15.7.0','@babel/preset-env','eslint-friendly-formatter','eslint-loader','^1.7.1','eslint-plugin-vue','vue-router','css-loader','^0.23.1','sass-loader','node-sass','^4.11.0','^4.1.0','^3.9.0','stylus-loader','^3.0.2','file-loader','^3.0.1','url-loader','^1.1.2','^2.24.0','lodash','lodash-webpack-plugin','^0.11.5','writeFileSync','stringify','log','\x0a#================================\x0a','toLowerCase','windows','\x20\x20\x20\x20','#00ffe7','get','ok_hand','hex','Project\x20initialization\x20finished!','To\x20get\x20started:\x0a','\x20\x20\x20\x20Run:\x20','#e6f509','visible','cd\x20','npm\x20install','\x20(to\x20install\x20dependencies)','npm\x20start','npm\x20run\x20dev','\x20(in\x20another\x20terminal\x20window,\x20to\x20build\x20frontend\x20in\x20developement\x20mode)','http://localhost:3000','type','\x09\x09\x09----------\x20','Thank\x20you\x20for\x20using\x20this\x20package','\x20----------\x0a','\x09\x09\x09','star2','bulb','Creator:\x20Mai\x20Trung\x20Duc\x20<maitrungduc1410@gmail.com>','copy','npm\x20install\x20-g\x20express-generator','express\x20--view=','/templates/views/index.','\x22\x20\x22','/views\x22','replace','/templates/webpack.config.js\x22\x20\x22','/views/frontend\x22\x20&&\x20mkdir\x20\x22','/views/frontend/js\x22\x20&&\x20','/templates/views/frontend/','/\x22\x20\x22','/views/frontend/js\x22','transpiler','/templates/babel/.babelrc.','/.babelrc\x22','/templates/git_ignore\x22\x20\x22','/.gitignore\x22','/app.js','utf8','var\x20app\x20=\x20express();','\x0avar\x20app\x20=\x20express();\x0a\x0a//\x20when\x20the\x20app\x20is\x20boot\x20up\x20we\x20read\x20the\x20assets\x20compiled\x20files\x20from\x20webpack\x20and\x20pass\x20it\x20as\x20a\x20global\x20variable\x20to\x20view\x0atry\x20{\x0a\x20\x20fs.statSync(path.join(__dirname,\x20\x27public/webpack-assets.json\x27))\x0a\x20\x20let\x20data\x20=\x20fs.readFileSync(path.join(__dirname,\x20\x27public/webpack-assets.json\x27))\x0a\x20\x20data\x20=\x20JSON.parse(data)\x0a\x20\x20app.locals.assets\x20=\x20data\x0a}\x20catch\x20(err)\x20{\x0a\x20\x20app.locals.assets\x20=\x20{\x0a\x20\x20\x20\x20runtime:\x20\x27\x27,\x0a\x20\x20\x20\x20main:\x20\x27\x27,\x0a\x20\x20\x20\x20vendors:\x20\x27\x27\x0a\x20\x20}\x0a}','var\x20express\x20=\x20require(\x27express\x27);','var\x20express\x20=\x20require(\x27express\x27);\x0avar\x20helmet\x20=\x20require(\x27helmet\x27);','var\x20app\x20=\x20express();\x0aapp.use(helmet());','inquirer','child_process','process','node-emoji','cwd','EJS','pug','Jade','jade','Hbs','Hjs','twig','Vash','ReactJS','VueJS','vue','Babel','babel','Typescript\x20(not\x20supported','typescript','css','SCSS','Less','less','stylus','sass_modules','SVG','svg','PNG','moment','Lodash','prompt','Project\x20name:\x20','project_name','my_app','list','Express\x20View\x20Engine','backend','Frontend\x20Framework','frontend','Using\x20with\x20React-router/Vue-router','router','Yes','with-router','Transpiler','Styling','stylings','length','You\x20must\x20choose\x20at\x20least\x20one\x20option.','checkbox','Image\x20loader','Ultilities','ultilities','optimization','yes','Using\x20Eslint?','eslint','Do\x20you\x20want\x20to\x20use\x20Helmet\x20for\x20security?\x20(recommended)','helmet','then','appendFileSync','/webpack.config.js','const\x20webpack\x20=\x20require(\x27webpack\x27)\x0a','const\x20path\x20=\x20require(\x27path\x27)\x0a','includes','const\x20LodashModuleReplacementPlugin\x20=\x20require(\x27lodash-webpack-plugin\x27)\x0a','const\x20VueLoaderPlugin\x20=\x20require(\x27vue-loader/lib/plugin\x27)\x0a','const\x20AssetsPlugin\x20=\x20require(\x27assets-webpack-plugin\x27)\x0a','const\x20CleanWebpackPlugin\x20=\x20require(\x27clean-webpack-plugin\x27)\x0a','const\x20WebpackNotifierPlugin\x20=\x20require(\x27webpack-notifier\x27)\x0a\x0a','const\x20config\x20=\x20{\x0a\x20\x20entry:\x20\x27./views/frontend/js/index.js\x27,\x0a\x20\x20output:\x20{\x0a\x20\x20\x20\x20path:\x20path.resolve(__dirname,\x20\x27public/javascripts\x27),\x0a\x20\x20\x20\x20filename:\x20process.env.NODE_ENV\x20===\x20\x27production\x27\x20?\x20\x27[name].[contenthash].js\x27\x20:\x20\x27[name].js\x27\x0a\x20\x20},\x0a\x20\x20module:\x20{\x0a\x20\x20\x20\x20rules:\x20[\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.(js|jsx)$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20\x27babel-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/node_modules/\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/.vue$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27vue-loader\x27\x0a\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/.js$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20\x27babel-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/node_modules/\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.css$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/\x5c.module\x5c.css$/\x0a\x20\x20\x20\x20\x20\x20},\x0a','scss','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.scss$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27sass-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/\x5c.module\x5c.scss$/\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.less$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27less-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.styl$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27stylus-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a'];(function(_0x296ed8,_0x23950e){var _0x4ba96f=function(_0x46776c){while(--_0x46776c){_0x296ed8['push'](_0x296ed8['shift']());}};_0x4ba96f(++_0x23950e);}(_0x38bb,0x164));var _0x4d38=function(_0x24c52a,_0x284ac9){_0x24c52a=_0x24c52a-0x0;var _0x1898d7=_0x38bb[_0x24c52a];return _0x1898d7;};var inquirer=require(_0x4d38('0x0'));const {execSync}=require(_0x4d38('0x1'));const process=require(_0x4d38('0x2'));const fs=require('fs');var emoji=require(_0x4d38('0x3'));const chalk=require('chalk');var os=require('os');const CURR_DIR=process[_0x4d38('0x4')]();let templateEngines=[{'name':_0x4d38('0x5'),'checked':!![],'value':'ejs'},{'name':'Pug','value':_0x4d38('0x6')},{'name':_0x4d38('0x7'),'value':_0x4d38('0x8')},{'name':_0x4d38('0x9'),'value':'hbs'},{'name':_0x4d38('0xa'),'value':'hjs'},{'name':'Twig','value':_0x4d38('0xb')},{'name':_0x4d38('0xc'),'value':'vash'}];let frontendFrameworks=[{'name':_0x4d38('0xd'),'checked':!![],'value':'react'},{'name':_0x4d38('0xe'),'value':_0x4d38('0xf')}];let transpilers=[{'name':_0x4d38('0x10'),'checked':!![],'value':_0x4d38('0x11')},{'name':_0x4d38('0x12'),'value':_0x4d38('0x13'),'disabled':!![]}];let stylings=[{'name':'CSS','checked':!![],'value':_0x4d38('0x14')},{'name':_0x4d38('0x15'),'checked':!![],'value':'scss'},{'name':_0x4d38('0x16'),'value':_0x4d38('0x17')},{'name':'Stylus','value':_0x4d38('0x18')}];let cssModules=[{'name':'CSS\x20Modules','checked':!![],'value':'css_modules'},{'name':'SASS\x20Modules','checked':!![],'value':_0x4d38('0x19')}];let imageLoaders=[{'name':_0x4d38('0x1a'),'value':_0x4d38('0x1b')},{'name':_0x4d38('0x1c'),'value':'png'}];let ultilities=[{'name':'MomentJS','value':_0x4d38('0x1d')},{'name':_0x4d38('0x1e'),'value':'lodash'}];inquirer[_0x4d38('0x1f')]([{'type':'input','message':_0x4d38('0x20'),'name':_0x4d38('0x21'),'default':_0x4d38('0x22')},{'type':_0x4d38('0x23'),'message':_0x4d38('0x24'),'name':_0x4d38('0x25'),'choices':templateEngines},{'type':_0x4d38('0x23'),'message':_0x4d38('0x26'),'name':_0x4d38('0x27'),'choices':frontendFrameworks},{'type':'list','message':_0x4d38('0x28'),'name':_0x4d38('0x29'),'choices':[{'name':_0x4d38('0x2a'),'value':_0x4d38('0x2b'),'checked':!![]},{'name':'No','value':'no-router'}]},{'type':'list','message':_0x4d38('0x2c'),'name':'transpiler','choices':transpilers},{'type':'checkbox','message':_0x4d38('0x2d'),'name':_0x4d38('0x2e'),'choices':stylings,'validate':function(_0x323213){if(_0x323213[_0x4d38('0x2f')]<0x1){return _0x4d38('0x30');}return!![];}},{'type':_0x4d38('0x31'),'message':'Using\x20CSS/SASS\x20modules','name':'css_modules','choices':cssModules},{'type':'checkbox','message':_0x4d38('0x32'),'name':'image_loader','choices':imageLoaders},{'type':_0x4d38('0x31'),'message':_0x4d38('0x33'),'name':_0x4d38('0x34'),'choices':ultilities},{'type':'list','message':'Code\x20split\x20vendors\x20(This\x20will\x20split\x20your\x20built\x20files\x20into\x20chunks,\x20recommended)','name':_0x4d38('0x35'),'choices':[{'name':_0x4d38('0x2a'),'value':_0x4d38('0x36')},{'name':'No','value':'no'}]},{'type':_0x4d38('0x23'),'message':_0x4d38('0x37'),'name':_0x4d38('0x38'),'choices':[{'name':_0x4d38('0x2a'),'value':'yes'},{'name':'No','value':'no'}]},{'type':_0x4d38('0x23'),'message':_0x4d38('0x39'),'name':_0x4d38('0x3a'),'choices':[{'name':'Yes','value':'yes'},{'name':'No','value':'no'}]}])[_0x4d38('0x3b')](_0x722c89=>{copyRequiredFiles(_0x722c89);writeContentToWebpackFile(_0x722c89);writeContentToPackageJson(_0x722c89);printOnSuccess(_0x722c89);});function writeContentToWebpackFile(_0x5506c6){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x3e'));fs['appendFileSync'](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x3f'));if(_0x5506c6[_0x4d38('0x34')][_0x4d38('0x40')]('lodash')){fs['appendFileSync'](CURR_DIR+'/'+_0x5506c6['project_name']+_0x4d38('0x3d'),_0x4d38('0x41'));}if(_0x5506c6['frontend']===_0x4d38('0xf')){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x42'));}fs['appendFileSync'](CURR_DIR+'/'+_0x5506c6['project_name']+_0x4d38('0x3d'),_0x4d38('0x43'));fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x44'));fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x45'));fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x46'));if(_0x5506c6['frontend']==='react'){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6['project_name']+'/webpack.config.js',_0x4d38('0x47'));}else if(_0x5506c6['frontend']===_0x4d38('0xf')){fs['appendFileSync'](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x48'));}if(_0x5506c6[_0x4d38('0x2e')]['includes'](_0x4d38('0x14'))){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+'/webpack.config.js',_0x4d38('0x49'));}if(_0x5506c6[_0x4d38('0x2e')][_0x4d38('0x40')](_0x4d38('0x4a'))){fs['appendFileSync'](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x4b'));}if(_0x5506c6['stylings'][_0x4d38('0x40')](_0x4d38('0x17'))){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x4c'));}if(_0x5506c6[_0x4d38('0x2e')]['includes'](_0x4d38('0x18'))){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6['project_name']+'/webpack.config.js',_0x4d38('0x4d'));}if(_0x5506c6[_0x4d38('0x4e')][_0x4d38('0x40')](_0x4d38('0x4e'))){fs['appendFileSync'](CURR_DIR+'/'+_0x5506c6['project_name']+'/webpack.config.js',_0x4d38('0x4f'));}if(_0x5506c6[_0x4d38('0x4e')][_0x4d38('0x40')](_0x4d38('0x19'))){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x50'));}if(_0x5506c6[_0x4d38('0x51')][_0x4d38('0x40')](_0x4d38('0x1b'))){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x52'));}if(_0x5506c6[_0x4d38('0x51')][_0x4d38('0x40')](_0x4d38('0x53'))){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x54'));}fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),'\x20\x20\x20\x20]\x0a\x20\x20},\x0a');if(_0x5506c6['frontend'][_0x4d38('0x40')](_0x4d38('0x55'))){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+'/webpack.config.js',_0x4d38('0x56'));}else if(_0x5506c6[_0x4d38('0x27')][_0x4d38('0x40')](_0x4d38('0xf'))){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6['project_name']+'/webpack.config.js',_0x4d38('0x57'));}fs['appendFileSync'](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),'\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20new\x20WebpackNotifierPlugin({\x20alwaysNotify:\x20true\x20}),\x0a\x20\x20\x20\x20new\x20webpack.HashedModuleIdsPlugin(),\x20//\x20only\x20change\x20hash\x20of\x20file\x20which\x20changed\x0a\x20\x20\x20\x20new\x20AssetsPlugin({\x0a\x20\x20\x20\x20\x20\x20processOutput:\x20(assets)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20Object.keys(assets).forEach(item\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20assets[item][\x27js\x27]\x20=\x20\x27/javascripts/\x27\x20+\x20assets[item][\x27js\x27]\x0a\x20\x20\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20JSON.stringify(assets,\x20null,\x20\x27\x20\x20\x27)\x0a\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20path:\x20path.join(__dirname,\x20\x27public\x27)\x0a\x20\x20\x20\x20}),\x0a\x20\x20\x20\x20new\x20CleanWebpackPlugin(),\x0a');if(_0x5506c6[_0x4d38('0x34')]['includes']('lodash')){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),'\x20\x20\x20\x20new\x20LodashModuleReplacementPlugin,\x0a');}if(_0x5506c6[_0x4d38('0x34')][_0x4d38('0x40')](_0x4d38('0x1d'))){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),'\x20\x20\x20\x20new\x20webpack.ContextReplacementPlugin(/moment[\x5c/\x5c\x5c]locale$/,\x20/en/),\x0a');}if(_0x5506c6[_0x4d38('0x27')]===_0x4d38('0xf')){fs['appendFileSync'](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+'/webpack.config.js','\x20\x20\x20\x20new\x20VueLoaderPlugin(),\x0a');}if(_0x5506c6[_0x4d38('0x35')]===_0x4d38('0x36')){fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+'/webpack.config.js',_0x4d38('0x58'));}else{fs[_0x4d38('0x3c')](CURR_DIR+'/'+_0x5506c6[_0x4d38('0x21')]+_0x4d38('0x3d'),_0x4d38('0x59'));}}function writeContentToPackageJson(_0x489eef){let _0x478948=fs[_0x4d38('0x5a')](CURR_DIR+'/'+_0x489eef['project_name']+_0x4d38('0x5b'));let _0x29f5e6=JSON['parse'](_0x478948);_0x29f5e6[_0x4d38('0x5c')]['start']='nodemon\x20./bin/www';_0x29f5e6['scripts'][_0x4d38('0x5d')]=_0x4d38('0x5e');_0x29f5e6['scripts'][_0x4d38('0x5f')]=_0x4d38('0x60');_0x29f5e6[_0x4d38('0x5c')]['production']=_0x4d38('0x61');_0x29f5e6[_0x4d38('0x62')][_0x4d38('0x63')]='^1.18.10';if(_0x489eef[_0x4d38('0x3a')]==='yes'){_0x29f5e6[_0x4d38('0x62')][_0x4d38('0x3a')]=_0x4d38('0x64');}if(!_0x29f5e6[_0x4d38('0x65')]){_0x29f5e6[_0x4d38('0x65')]={};}_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x66')]=_0x4d38('0x67');_0x29f5e6[_0x4d38('0x65')]['webpack-cli']='^3.3.0';_0x29f5e6[_0x4d38('0x65')]['webpack-notifier']='^1.7.0';_0x29f5e6['devDependencies'][_0x4d38('0x68')]=_0x4d38('0x69');_0x29f5e6['devDependencies'][_0x4d38('0x6a')]=_0x4d38('0x6b');_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x6c')]=_0x4d38('0x6d');if(_0x489eef['frontend']===_0x4d38('0x55')){_0x29f5e6[_0x4d38('0x62')][_0x4d38('0x6e')]='^16.8.5';_0x29f5e6[_0x4d38('0x62')]['react']='^16.8.5';_0x29f5e6['devDependencies'][_0x4d38('0x6f')]='^7.0.0';_0x29f5e6['devDependencies'][_0x4d38('0x70')]=_0x4d38('0x71');_0x29f5e6['devDependencies'][_0x4d38('0x72')]=_0x4d38('0x73');_0x29f5e6[_0x4d38('0x65')]['@babel/preset-env']=_0x4d38('0x74');_0x29f5e6['devDependencies'][_0x4d38('0x75')]=_0x4d38('0x73');if(_0x489eef[_0x4d38('0x38')]===_0x4d38('0x36')){_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x76')]=_0x4d38('0x77');_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x38')]=_0x4d38('0x78');_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x79')]=_0x4d38('0x7a');_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x7b')]='^2.16.0';_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x7c')]=_0x4d38('0x7d');_0x29f5e6['devDependencies'][_0x4d38('0x7e')]=_0x4d38('0x7f');_0x29f5e6['devDependencies'][_0x4d38('0x80')]=_0x4d38('0x81');_0x29f5e6['devDependencies']['eslint-plugin-react']=_0x4d38('0x82');_0x29f5e6['devDependencies'][_0x4d38('0x83')]=_0x4d38('0x84');}if(_0x489eef['router']===_0x4d38('0x2b')){_0x29f5e6['dependencies'][_0x4d38('0x85')]=_0x4d38('0x86');}}else if(_0x489eef['frontend']===_0x4d38('0xf')){_0x29f5e6[_0x4d38('0x62')][_0x4d38('0xf')]=_0x4d38('0x87');_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x88')]=_0x4d38('0x89');_0x29f5e6[_0x4d38('0x65')]['vue-template-compiler']=_0x4d38('0x87');_0x29f5e6[_0x4d38('0x65')]['babel-loader']=_0x4d38('0x71'),_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x72')]=_0x4d38('0x73'),_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x8a')]=_0x4d38('0x74');if(_0x489eef[_0x4d38('0x38')]==='yes'){_0x29f5e6['devDependencies']['babel-eslint']=_0x4d38('0x77');_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x38')]='^5.15.3';_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x79')]=_0x4d38('0x7a');_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x8b')]='^3.0.0';_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x8c')]=_0x4d38('0x8d');_0x29f5e6[_0x4d38('0x65')]['eslint-plugin-import']='^2.16.0';_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x7e')]=_0x4d38('0x7f');_0x29f5e6['devDependencies'][_0x4d38('0x80')]=_0x4d38('0x81');_0x29f5e6['devDependencies'][_0x4d38('0x83')]=_0x4d38('0x84');_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x8e')]=_0x4d38('0x84');}if(_0x489eef[_0x4d38('0x29')]===_0x4d38('0x2b')){_0x29f5e6['dependencies'][_0x4d38('0x8f')]='^3.0.1';}}_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x90')]='^2.1.1';_0x29f5e6[_0x4d38('0x65')]['style-loader']=_0x4d38('0x91');if(_0x489eef['stylings'][_0x4d38('0x40')](_0x4d38('0x4a'))){_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x92')]='^7.1.0';_0x29f5e6['devDependencies'][_0x4d38('0x93')]=_0x4d38('0x94');}if(_0x489eef[_0x4d38('0x2e')][_0x4d38('0x40')](_0x4d38('0x17'))){_0x29f5e6[_0x4d38('0x65')]['less-loader']=_0x4d38('0x95');_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x17')]=_0x4d38('0x96');}if(_0x489eef[_0x4d38('0x2e')][_0x4d38('0x40')](_0x4d38('0x18'))){_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x97')]=_0x4d38('0x98');_0x29f5e6[_0x4d38('0x65')]['stylus']='^0.54.5';}if(_0x489eef[_0x4d38('0x51')][_0x4d38('0x40')](_0x4d38('0x1b'))){_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x99')]=_0x4d38('0x9a');}if(_0x489eef[_0x4d38('0x51')][_0x4d38('0x40')](_0x4d38('0x1b'))){_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x9b')]=_0x4d38('0x9c');}if(_0x489eef[_0x4d38('0x34')][_0x4d38('0x40')](_0x4d38('0x1d'))){_0x29f5e6[_0x4d38('0x62')][_0x4d38('0x1d')]=_0x4d38('0x9d');}if(_0x489eef[_0x4d38('0x34')]['includes'](_0x4d38('0x9e'))){_0x29f5e6[_0x4d38('0x62')][_0x4d38('0x9e')]='^4.17.11';_0x29f5e6[_0x4d38('0x65')][_0x4d38('0x9f')]=_0x4d38('0xa0');}fs[_0x4d38('0xa1')](CURR_DIR+'/'+_0x489eef['project_name']+'/package.json',JSON[_0x4d38('0xa2')](_0x29f5e6,null,'\x20\x20'));}function printOnSuccess(_0x48d6cf){console[_0x4d38('0xa3')](_0x4d38('0xa4'));if(os['type']()[_0x4d38('0xa5')]()['includes'](_0x4d38('0xa6'))){console['log'](_0x4d38('0xa7')+chalk['hex'](_0x4d38('0xa8'))['visible']('Project\x20initialization\x20finished!'));}else{console['log'](emoji[_0x4d38('0xa9')](_0x4d38('0xaa'))+'\x20'+chalk[_0x4d38('0xab')](_0x4d38('0xa8'))['visible'](_0x4d38('0xac'))+'\x20'+emoji[_0x4d38('0xa9')]('ok_hand'));}console['log'](_0x4d38('0xa4'));console[_0x4d38('0xa3')](_0x4d38('0xad'));console['log'](_0x4d38('0xae')+chalk['hex'](_0x4d38('0xaf'))[_0x4d38('0xb0')](_0x4d38('0xb1')+_0x48d6cf[_0x4d38('0x21')]));console[_0x4d38('0xa3')](_0x4d38('0xae')+chalk['hex'](_0x4d38('0xaf'))['visible'](_0x4d38('0xb2'))+_0x4d38('0xb3'));console[_0x4d38('0xa3')]('\x20\x20\x20\x20Run:\x20'+chalk[_0x4d38('0xab')](_0x4d38('0xaf'))[_0x4d38('0xb0')](_0x4d38('0xb4'))+'\x20(to\x20start\x20backend)');console[_0x4d38('0xa3')](_0x4d38('0xae')+chalk['hex'](_0x4d38('0xaf'))[_0x4d38('0xb0')](_0x4d38('0xb5'))+_0x4d38('0xb6'));console[_0x4d38('0xa3')]('\x20\x20\x20\x20Open\x20your\x20browser,\x20your\x20app\x20will\x20be\x20hosted\x20at:\x20'+chalk['hex'](_0x4d38('0xaf'))[_0x4d38('0xb0')](_0x4d38('0xb7'))+'\x0a');console[_0x4d38('0xa3')]('\x20\x20\x20\x20For\x20production\x20build,\x20run:\x20'+chalk[_0x4d38('0xab')](_0x4d38('0xaf'))['visible']('npm\x20run\x20prod')+'\x0a');console[_0x4d38('0xa3')](_0x4d38('0xa4'));if(os[_0x4d38('0xb8')]()['toLowerCase']()[_0x4d38('0x40')](_0x4d38('0xa6'))){console[_0x4d38('0xa3')](_0x4d38('0xb9')+chalk[_0x4d38('0xab')](_0x4d38('0xa8'))['visible'](_0x4d38('0xba'))+'\x20----------');console[_0x4d38('0xa3')]('\x09\x09----------\x20'+chalk[_0x4d38('0xab')](_0x4d38('0xa8'))['visible']('Creator:\x20Mai\x20Trung\x20Duc\x20<maitrungduc1410@gmail.com>')+_0x4d38('0xbb'));}else{console[_0x4d38('0xa3')](_0x4d38('0xbc')+emoji[_0x4d38('0xa9')](_0x4d38('0xbd'))+'\x20'+chalk[_0x4d38('0xab')](_0x4d38('0xa8'))[_0x4d38('0xb0')]('Thank\x20you\x20for\x20using\x20this\x20package')+'\x20'+emoji[_0x4d38('0xa9')](_0x4d38('0xbd')));console[_0x4d38('0xa3')]('\x09\x09'+emoji['get'](_0x4d38('0xbe'))+'\x20'+chalk[_0x4d38('0xab')](_0x4d38('0xa8'))['visible'](_0x4d38('0xbf'))+'\x20'+emoji['get']('bulb')+'\x0a');}}function copyRequiredFiles(_0x4dff7d){let _0x280428=os[_0x4d38('0xb8')]()['toLowerCase']()[_0x4d38('0x40')](_0x4d38('0xa6'))?_0x4d38('0xc0'):'cp';let _0x4b0703='';execSync(_0x4d38('0xc1'));execSync(_0x4d38('0xc2')+_0x4dff7d[_0x4d38('0x25')]+'\x20'+_0x4dff7d[_0x4d38('0x21')]);_0x4b0703=_0x280428+'\x20\x22'+__dirname+_0x4d38('0xc3')+_0x4dff7d[_0x4d38('0x25')]+_0x4d38('0xc4')+CURR_DIR+'/'+_0x4dff7d['project_name']+_0x4d38('0xc5');_0x4b0703=_0x280428===_0x4d38('0xc0')?_0x4b0703[_0x4d38('0xc6')](/\//g,'\x5c'):_0x4b0703;execSync(_0x4b0703);_0x4b0703=_0x280428+'\x20\x22'+__dirname+_0x4d38('0xc7')+CURR_DIR+'/'+_0x4dff7d[_0x4d38('0x21')]+'\x22';_0x4b0703=_0x280428===_0x4d38('0xc0')?_0x4b0703[_0x4d38('0xc6')](/\//g,'\x5c'):_0x4b0703;execSync(_0x4b0703);_0x4b0703='mkdir\x20\x22'+CURR_DIR+'/'+_0x4dff7d['project_name']+_0x4d38('0xc8')+CURR_DIR+'/'+_0x4dff7d[_0x4d38('0x21')]+_0x4d38('0xc9')+_0x280428+'\x20'+(_0x280428===_0x4d38('0xc0')?'':'-r')+'\x20\x22'+__dirname+_0x4d38('0xca')+_0x4dff7d['frontend']+'/'+_0x4dff7d[_0x4d38('0x29')]+_0x4d38('0xcb')+CURR_DIR+'/'+_0x4dff7d['project_name']+_0x4d38('0xcc');_0x4b0703=_0x280428==='copy'?_0x4b0703[_0x4d38('0xc6')](/\//g,'\x5c'):_0x4b0703;execSync(_0x4b0703);if(_0x4dff7d[_0x4d38('0x38')]===_0x4d38('0x36')){_0x4b0703=_0x280428+'\x20\x22'+__dirname+'/templates/eslint/.eslintrc.'+_0x4dff7d[_0x4d38('0x27')]+'.js\x22\x20\x22'+CURR_DIR+'/'+_0x4dff7d[_0x4d38('0x21')]+'/.eslintrc.js\x22';_0x4b0703=_0x280428===_0x4d38('0xc0')?_0x4b0703[_0x4d38('0xc6')](/\//g,'\x5c'):_0x4b0703;execSync(_0x4b0703);}if(_0x4dff7d[_0x4d38('0xcd')]===_0x4d38('0x11')){_0x4b0703=_0x280428+'\x20\x22'+__dirname+_0x4d38('0xce')+_0x4dff7d[_0x4d38('0x27')]+_0x4d38('0xc4')+CURR_DIR+'/'+_0x4dff7d[_0x4d38('0x21')]+_0x4d38('0xcf');_0x4b0703=_0x280428===_0x4d38('0xc0')?_0x4b0703[_0x4d38('0xc6')](/\//g,'\x5c'):_0x4b0703;execSync(_0x4b0703);}_0x4b0703=_0x280428+'\x20\x22'+__dirname+_0x4d38('0xd0')+CURR_DIR+'/'+_0x4dff7d['project_name']+_0x4d38('0xd1');_0x4b0703=_0x280428===_0x4d38('0xc0')?_0x4b0703[_0x4d38('0xc6')](/\//g,'\x5c'):_0x4b0703;execSync(_0x4b0703);let _0x561b8e=CURR_DIR+'/'+_0x4dff7d['project_name']+_0x4d38('0xd2');if(_0x280428===_0x4d38('0xc0')){_0x561b8e=_0x561b8e['replace'](/\//g,'\x5c');}let _0x159c50=fs[_0x4d38('0x5a')](_0x561b8e,_0x4d38('0xd3'));let _0x23504f=_0x159c50['replace']('var\x20express\x20=\x20require(\x27express\x27);','var\x20express\x20=\x20require(\x27express\x27);\x0avar\x20fs\x20=\x20require(\x27fs\x27);')[_0x4d38('0xc6')](_0x4d38('0xd4'),_0x4d38('0xd5'));fs['writeFileSync'](_0x561b8e,_0x23504f,_0x4d38('0xd3'));if(_0x4dff7d[_0x4d38('0x3a')]===_0x4d38('0x36')){_0x159c50=fs[_0x4d38('0x5a')](_0x561b8e,_0x4d38('0xd3'));_0x23504f=_0x159c50[_0x4d38('0xc6')](_0x4d38('0xd6'),_0x4d38('0xd7'))['replace'](_0x4d38('0xd4'),_0x4d38('0xd8'));fs['writeFileSync'](_0x561b8e,_0x23504f,'utf8');}}