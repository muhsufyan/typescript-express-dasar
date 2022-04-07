# typescript-express-dasar
DESAIN PATTERN. refactor: service layer<br>
logik yg akan datang disimpan dlm 1 file (src/services/TodoService.ts)
<ul>
    <li>flow desain pattern untuk applikasi ini: api layer => service layer => repository layer => data access layer => db</li>
    <li>api layer disini adlh routers dan controllers</li>
    <li>service layer adlh logik(apa yg dilakukan, misalnya melakukan operasi ke db, menampilkan data, mencari data)</li>
    <li>repository layer adlh query yg dilakukan ke db. <br>db.todo.findAll()<br> repository layer tidak dibuat tp disatukan kedlm service layer</li>
    <li>data access layer adlh model nya (db/models)</li>
    <li>desain pattern ini terlalu overkill untuk projek ini, lbh cocok untuk app yg besar</li>
    <li><b>sumber projek ini https://www.youtube.com/watch?v=Tr1KiRzO-90&list=PLnQvfeVegcJZHhImGvDpnp0P725Ykx4Qt&index=24</b></li>
</ul>