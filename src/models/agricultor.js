import pool from '../config/db.js';

const crearAgricultor = async (data) => {
  console.log(data)

  try {
    const sql = 'INSERT INTO `users`(`name`,`cedula`,`telefono`,`email`,`cuenta_bancaria`,`gps_finca`,`experiencia_anios`,`certificaciones`,`historial_calidad`,`fecha_ultimo_acceso`,`ip_ultimo_login`,`intentos_fallidos`,`creado_por`,`modificado_por`,`fecha_creacion`,`fecha_modificacion`)'
                'VALUES (?, ?, ?, ?, ?, ?, ?, ?,  ?,?, ?, ?, ?, ?, ?, ?)';
    const values = ['Katlen', '1105550645', '0963587412', 'katlen.22@gmail.com', '1236987452', '-895986yeb56', '5', 'Ganaderia', 'lo mejor en calidad', '18-01-2025', 'Jo18-06-2025sh', '2', '1', 'Katlen', 'Katlen', '16-06-2025', '17-06-2025'];

    const [result, fields] = await pool.execute(sql, values);

    console.log(result);
    console.log(fields);
  } catch (err) {
    console.log(err);
  }
}