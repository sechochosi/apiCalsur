import pool from '../config/db.js';

const crearAgricultor = async (data) => {
  console.log(data);
  const values = [
    data.nombre,
    data.cedula,
    data.telefono || null,
    data.email || null,
    data.cuenta_bancaria || 0,
    data.gps_finca || null,
    data.experiencia_anios || 0,
    data.certificaciones || null,
    data.historial_calidad || null,
    data.fecha_ultimo_acceso || null,
    data.ip_ultimo_login || 0,
    data.intentos_fallidos || 0,
    data.modificado_por || null,
    data.fecha_creacion || null,
    data.fecha_modificacion || null,
  ]

  try {
    const sql = `INSERT INTO agricultores
                (name, cedula, telefono, email, cuenta_bancaria, gps_finca,experiencia_anios, certificaciones, historial_calidad, fecha_ultimo_acceso, ip_ultimo_login, intentos_fallidos,creado_por, modificado_por, fecha_creacion, fecha_modificacion)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?,  ?,?, ?, ?, ?, ?, ?, ?)`;
    const [result, ] = await pool.execute(sql, values);
    console.log(result);
    return {
      code:201,
      message: "Agricultor creado con exito, cédula de registro" + data.cedula;
      id: result.insertId
    }



    console.log(result);
  } catch (err) {
    console.log(err);
  }
}