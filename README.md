# typescript-express-dasar
membuat otentifikasi (login dan register)<br>
kita buat route dan controller untuk otentifikasi
<ul>
    <li>AuthController karena hanya create dan index maka tdk perlu implement interface IController kecuali kita buat interface yg baru </li>
    <li>karena UserRoutes dan AuthRoutes memiliki constructor dan public route yg sama maka kita lakukan refactor (supaya reuse), simpan di BaseRouter disini kita membuat abstract class </li>
</ul>