export const products = [
    {
      id: 1,
      title: 'Central Alarma',
      price: 18581,
      category: 'alarmas',
      
      img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_Central_Alarma_igtdsf.jpg',
    },
    {
        id: 2,
        title: 'Teclado Display',
        price: 18218,
        category: 'alarmas',
        
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312450/MySecurity/img_Teclado_Display_wisenl.jpg',
      },
      {
        id: 3,
        title: 'Teclado LED',
        price: 15258,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312450/MySecurity/img_Teclado_Led_h3j6or.jpg',
      },
      {
        id: 4,
        title: 'Sensor Infrarrojo Inalámbrico',
        price: 10367,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312450/MySecurity/img_Sensor_Movimiento_nty02o.jpg',
      },
      {
        id: 5,
        title: 'Sensor Infrarrojo Cableado',
        price: 7144,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312450/MySecurity/img_Sensor_Movimiento_nty02o.jpg',
      },
      {
        id: 6,
        title: 'Sensor Magnético Inalámbrico',
        price: 6842,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312450/MySecurity/img_Sensor_Magnetico_Inalambrico_m45di4.jpg',
      },
      {
        id: 7,
        title: 'Sensor Magnético Cableado',
        price: 3691,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312450/MySecurity/img_Sensor_Magnetico_auw8or.jpg',
      },
      {
        id: 8,
        title: 'Sensor de Humo',
        price: 13111,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_Detector_Humo_j8q8hx.jpg',
      },
      {
        id: 9,
        title: 'Sirena',
        price:  9898,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312450/MySecurity/img_Sirena_tugecc.jpg',
      },
      {
        id: 10,
        title: 'Barrera Infrarroja',
        price: 12008,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_Barrera_Infraroja_ow4tfw.jpg',
      },
      {
        id: 11,
        title: 'Batería',
        price: 6022,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_Bateria_cyu0ya.jpg',
      },
      {
        id: 12,
        title: 'Control Remoto',
        price: 4412,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_Control_Remoto_qikp3h.jpg',
      },
      {
        id: 13,
        title: 'Receptor Sensores Inalámbricos',
        price: 7359,
        category: 'alarmas',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_Receptor_Inalambrico_pfgtfl.jpg',
      },
      {
        id: 14,
        title: 'Cámara Bullet',
        price: 18475,
        category: 'camaras',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_Camara_Bulet_wesmcg.jpg',
      },
      {
        id: 15,
        title: 'Cámara Domo',
        price: 10743,
        category: 'camaras',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312450/MySecurity/img_Camara_Domo_rqrysw.jpg',
      },
      {
        id: 16,
        title: 'DVR',
        price: 49545,
        category: 'almacenamiento',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_DVR_reudn2.jpg',
      },
      {
        id: 17,
        title: 'Disco Rígido 1TB',
        price: 17329,
        category: 'almacenamiento',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_Disco_1TB_om0yi5.jpg',
      },
      {
        id: 18,
        title: 'Disco Rígido 2TB',
        price: 20999,
        category: 'almacenamiento',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_Disco_2TB_luephq.jpg',
      },
      {
        id: 19,
        title: 'Disco Rígido 4TB ',
        price: 33990,
        category: 'almacenamiento',
        img: 'https://res.cloudinary.com/dtsltqjuw/image/upload/v1692312449/MySecurity/img_Disco_4TB_wczqcl.jpg',
      },
      
];
export const TotalProducts = products.length;

 export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {}); 