# typescript-express-dasar
<ul>
    <li>yarn init atau npm init</li>
    <li>yarn add typescript nodemon -D, install typescript dan nodemon untuk auto reload saat dev (auto convert to js) -D artinya run untuk mode development</li>
    <li>di package.json tambhkan "scripts" berisi perintah yg akan dijlankan. "tsc":"rm -f build/ && tsc" untuk convert ts ke js, "ts":"rm -f build/ && tsc -w" auto convert ts ke js, "dev":"nodemon ./build/index.js" run nodemon</li>
    <li>buat config typescript dg perintah ./node_modules/.bin/tsc --init untuk window .\node_modules\.bin\tsc --init
    <br> akan ada file baru tsconfig.json, aktifkan allowJS, outDir (untuk hasil compile simpan di folder /.build</li>
    <li>jalankan 2 terminal yaitu yarn ts (muncul folder build) dan yarn dev (run app kita)</li>
</ul>