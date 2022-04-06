import bcrypt from 'bcrypt';

// sbnrnya bisa juga dg function tp kita pakai konsep oop jd class
class PasswordHash{
    // static agar kita tdk perlu buat objek lagi dan hash memang fungsi hash ini static
    public static hash = (password: string): Promise<string> => {
        // salt nya kita set 10 round
        return bcrypt.hash(password, 10)
    }
}
export default PasswordHash;