# typescript-express-dasar
set modul todo(crud)<br>
langkahnya buat migrasi ke db => buat route => buat controller nya
<ul>
    <li>.\node_modules\.bin\sequelize-cli model:generate --name todo --attributes user_id:integer,description:text --underscored<br>generate tabel dg nama todo fieldnya user_id berjenis integer</li>
    <li>akan ada 2 file baru yaitu db/migrations/tanggal sekarang.ts & db/models/todo.js</li>
    <li>kita perlu foreign key berupa user id diambil dari tabel user maka db/migrations/tanggal sekarang.ts kita tambah dibagian user_id nya<br>references: {model: 'users', key:'id'},
        allowNull: false<br>lalu di db/models/todo.js tambh kode yg akan merefresentasikan ke tabel users <br>todo.belongsTo(models.user)</b>
    </li>
    <li> lakukan migrate <b>.\node_modules\.bin\sequelize-cli db:migrate</b></li>
    <li> selanjutnya set todo route di index.ts, TodoRoutes.ts dan TodoController.ts, kemudian ControllerInterface.ts diubah juga<b></b> <br><br></li>
    <li><br><b></b></li>
    <li></li>
</ul>