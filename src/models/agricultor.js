import pool from '../config/db.js';


  try {
    const sql = `INSERT INTO agricultores
                (name, cedula, telefono,
                email, cuenta_bancaria, gps_finca,experiencia_anios,
                certificaciones, historial_calidad, fecha_ultimo_acceso,
                ip_ultimo_login, intentos_fallidos,creado_por, modificado_por,
                fecha_creacion, fecha_modificacion)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?,  ?,?, ?, ?, ?, ?, ?, ?)`;
    const values = [
                    'Katlen', '1105550645', '0963587412',
                    'katlen.22@gmail.com', '1236987452',
                    '-895986yeb56', '5', 'Ganaderia',
                    'lo mejor en calidad', '18-01-2025',
                    'Jo18-06-2025sh', '2', '1', 'Katlen',
                    'Katlen', '16-06-2025', '17-06-2025'
                  ];
                    [
                    'Lucia', '1104550645', '0989587412',
                    'lucia.15@gmail.com', '5626987452',
                    '-895986y8f56', '4', 'Veterianaria',
                    'lo mejor en produccion', '17-01-2025',
                    'Jo18-09-2025sh', '3', '2', 'Lucia',
                    'Lucia', '18-06-2025', '19-06-2025'
                  ];
                    [
                    'Evelyn', '1105987456', '0978987412',
                    'evin.22@gmail.com', '987456321',
                    '-89ño86yeb56', '4', 'Veterianaria',
                    'lo mejor en volumen', '18-01-2025',
                    'J458-06-2025sh', '2', '1', 'Evelyn',
                    'Evelyn', '18-06-2025', '19-06-2025'
                  ];
    

    const [result, fields] = await pool.execute(sql, values);

    console.log(result);
    console.log(fields);
  } catch (err) {
    console.log(err);
  }