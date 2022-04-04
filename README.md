# typescript-express-dasar
Sequelize bersifat asynchronous<br>
ISSUE: ERROR KARENA PASSWORD DB TIDAK BOLEH KOSONG
<ul>
    <li>yarn add sequelize sequelize-cli mysql2</li>
    <li>.sequelizerc adlh file untuk config path ke db</li>
    <li>set up db (generate setting ke db)<br> window di terminal <b>.\node_modules\.bin\sequelize-cli init</b><br>
    akan generate folder config dan models</li>
    <li>config/database.js kita perlu set value ke dotenv</li>
    <li>buat migration <b>.\node_modules\.bin\sequelize-cli model:generate --name user --attributes username:string,password:string --underscored</b> <br> nama tabel user, fieldnya ada username dan password bertipe string, nama fieldnya pake underscore jika tdk akan lowercase <br> akan generate file baru di migrations</li>
    <li>buat db baru "typescript" <br> buat migrasi ke db <b>.\node_modules\.bin\sequelize-cli db:migrate</b> jika ingin mengubah misal nama tabel users jd user maka di file migrations ubah users jd user</li>
    <li></li>
</ul>