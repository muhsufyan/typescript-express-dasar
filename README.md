# typescript-express-dasar
Refactore dan interface untuk route, buat route yg terpisah filenya dan route yg tdk terpisah agar terihat perbedaannya<br>
hal ini perlu dilakukan agar kode lbh rapih, mudah dipahami, mudah ketika ada perubahan
<ul>
    <li>semua route akan disimpan di folder src/routers</li>
    <li>kita buat UserRoutes.ts untuk kode route user, lalu buat juga interfacenya agar lbh rapi dan mudah dibaca kodingannya RouteInterface.ts <br> interface akan diimplement kasus ini interface RouteInterface.ts diimplemen oleh UserRoutes.ts</li>
</ul>