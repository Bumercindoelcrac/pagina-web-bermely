/**
 * BER-MELY | Restaurante • Cafetería • Crepería
 * Aplicación principal en Vanilla JavaScript
 * Mobile First | Premium | Responsive | Accesible
 * Con soporte para Netlify CMS
 */

(function() {
  'use strict';

  // ========================================================================
  // DATOS: MENÚ COMPLETO - CARGADO DESDE JSON (Netlify CMS)
  // ========================================================================

  let menuData = [];

  // DATOS DE RESPALDO (en caso de que no se pueda cargar el JSON)
  const getDefaultMenu = () => {
    return [
      // DESAYUNOS
      {
        id: 1, name: 'Chilaquiles (verdes o rojos)', description: 'Chilaquiles tradicionales en salsa verde o roja. Incluye fruta, café o té.',
        category: 'Desayunos', subcategory: 'Chilaquiles', price: 96,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Tradicional'], rating: 4.8, orders: 1200, featured: false
      },
      {
        id: 2, name: 'Chilaquiles con huevo al gusto', description: 'Chilaquiles en salsa verde o roja con huevo estrellado, revuelto o tibio. Incluye fruta, café o té.',
        category: 'Desayunos', subcategory: 'Chilaquiles', price: 116,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Proteína'], rating: 4.7, orders: 980, featured: false
      },
      {
        id: 3, name: 'Chilaquiles con pechuga a la plancha', description: 'Chilaquiles con pechuga de pollo a la plancha. Incluye fruta, café o té.',
        category: 'Desayunos', subcategory: 'Chilaquiles', price: 133,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Proteína'], rating: 4.8, orders: 850, featured: false
      },
      {
        id: 4, name: 'Chilaquiles con bistec', description: 'Chilaquiles con bistec a la plancha. Incluye fruta, café o té.',
        category: 'Desayunos', subcategory: 'Chilaquiles', price: 139,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Res'], rating: 4.7, orders: 760, featured: false
      },
      {
        id: 5, name: 'Chilaquiles con costilla', description: 'Chilaquiles con costilla de res tierna. Incluye fruta, café o té.',
        category: 'Desayunos', subcategory: 'Chilaquiles', price: 159,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Res'], rating: 4.8, orders: 640, featured: false
      },
      {
        id: 6, name: 'Chilaquiles con cecina', description: 'Chilaquiles con cecina de res. Incluye fruta, café o té.',
        category: 'Desayunos', subcategory: 'Chilaquiles', price: 159,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Res'], rating: 4.6, orders: 520, featured: false
      },
      {
        id: 7, name: 'Chilaquiles con arrachera', description: 'Chilaquiles con arrachera premium. Incluye fruta, café o té.',
        category: 'Desayunos', subcategory: 'Chilaquiles', price: 169,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Premium'], rating: 4.9, orders: 890, featured: true
      },
      {
        id: 8, name: 'Enchiladas (verdes o rojas)', description: 'Enchiladas bañadas en salsa verde o roja, crema, queso y cebolla.',
        category: 'Desayunos', subcategory: 'Enchiladas', price: 107,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Tradicional'], rating: 4.6, orders: 740, featured: false
      },
      {
        id: 9, name: 'En frijoladas', description: 'Tortillas bañadas en salsa de frijol, crema, queso y cebolla.',
        category: 'Desayunos', subcategory: 'Enchiladas', price: 107,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Tradicional'], rating: 4.5, orders: 610, featured: false
      },
      {
        id: 10, name: 'Enchiladas suizas', description: 'Enchiladas cubiertas con queso gratinado y salsa verde o roja.',
        category: 'Desayunos', subcategory: 'Enchiladas', price: 123,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Queso'], rating: 4.7, orders: 680, featured: false
      },
      {
        id: 11, name: 'Enmoladas', description: 'Tortillas bañadas en mole, crema, queso y cebolla.',
        category: 'Desayunos', subcategory: 'Enchiladas', price: 123,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Mole'], rating: 4.7, orders: 590, featured: false
      },
      {
        id: 12, name: 'Huevos al gusto', description: 'Huevos acompañados de jamón, tocino, salchicha, chorizo o a la mexicana.',
        category: 'Desayunos', subcategory: 'Huevos', price: 93,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Huevos'], rating: 4.6, orders: 820, featured: false
      },
      {
        id: 13, name: 'Huevos divorciados', description: 'Huevos estrellados, uno en salsa roja y otro en salsa verde, separados por frijoles.',
        category: 'Desayunos', subcategory: 'Huevos', price: 99,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Huevos'], rating: 4.7, orders: 750, featured: false
      },
      {
        id: 14, name: 'Huevos rancheros estilo Ber-Mely', description: 'Huevos rancheros con queso panela y chapulines, un toque único de la casa.',
        category: 'Desayunos', subcategory: 'Huevos', price: 129,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Especialidad'], rating: 4.9, orders: 920, featured: true
      },
      {
        id: 15, name: 'Omelette clásico', description: 'Omelette relleno de jamón con queso manchego.',
        category: 'Desayunos', subcategory: 'Huevos', price: 103,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Huevos'], rating: 4.6, orders: 640, featured: false
      },
      {
        id: 16, name: 'Omelette de champiñones o espinacas', description: 'Omelette relleno de champiñones o espinacas con queso.',
        category: 'Desayunos', subcategory: 'Huevos', price: 113,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Vegetariano'], rating: 4.5, orders: 480, featured: false
      },
      {
        id: 17, name: 'Molletes clásicos', description: 'Bolillo con frijoles, queso gratinado, pico de gallo y aguacate.',
        category: 'Desayunos', subcategory: 'Molletes', price: 89,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Pan'], rating: 4.6, orders: 710, featured: false
      },
      {
        id: 18, name: 'Molletes hawaianos', description: 'Jamón, piña salteada, queso manchego, pico de gallo y aguacate.',
        category: 'Desayunos', subcategory: 'Molletes', price: 103,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Hawaiano'], rating: 4.7, orders: 560, featured: false
      },
      {
        id: 19, name: 'Molletes argentinos', description: 'Chorizo argentino, queso manchego, pico de gallo y aguacate.',
        category: 'Desayunos', subcategory: 'Molletes', price: 109,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Argentino'], rating: 4.7, orders: 590, featured: false
      },
      {
        id: 20, name: 'Molletes chistorra', description: 'Chistorra, queso manchego, pico de gallo y aguacate.',
        category: 'Desayunos', subcategory: 'Molletes', price: 109,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno'], rating: 4.6, orders: 520, featured: false
      },
      {
        id: 21, name: 'Molletes de la granja', description: 'Huevo estrellado, tocino, queso manchego, pico de gallo y aguacate.',
        category: 'Desayunos', subcategory: 'Molletes', price: 115,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Completo'], rating: 4.7, orders: 610, featured: false
      },
      {
        id: 22, name: 'Hot cakes (2 pzas)', description: 'Hot cakes esponjosos servidos con mantequilla y miel.',
        category: 'Desayunos', subcategory: 'Dulce', price: 99,
        image: 'imagenes/productos/desayuno.svg', tags: ['Desayuno', 'Dulce'], rating: 4.7, orders: 780, featured: false
      },

      // MENÚ EJECUTIVO
      {
        id: 23, name: 'Menú Ejecutivo (Lunes a Viernes)', description: '3 tiempos + agua del día. Disponible de 12:30 p.m. a 5:00 p.m. Consulta opciones del día.',
        category: 'Menú Ejecutivo', subcategory: 'Combos', price: 0,
        image: 'imagenes/productos/entrada.svg', tags: ['Promoción', 'Lunes a Viernes'], rating: 4.8, orders: 650, featured: false
      },

      // ENTRADAS
      {
        id: 24, name: 'Orden de guacamole con totopos', description: 'Guacamole fresco preparado al momento, acompañado de totopos crujientes.',
        category: 'Entradas', subcategory: 'Frias', price: 85,
        image: 'imagenes/productos/entrada.svg', tags: ['Entrada'], rating: 4.7, orders: 840, featured: false
      },
      {
        id: 25, name: 'Orden de frijoles refritos con totopos', description: 'Frijoles refritos acompañados de totopos.',
        category: 'Entradas', subcategory: 'Frias', price: 50,
        image: 'imagenes/productos/entrada.svg', tags: ['Entrada'], rating: 4.5, orders: 620, featured: false
      },
      {
        id: 26, name: 'Queso fundido con chapulines', description: 'Queso fundido gratinado con chapulines crujientes.',
        category: 'Entradas', subcategory: 'Calientes', price: 96,
        image: 'imagenes/productos/entrada.svg', tags: ['Entrada', 'Especial'], rating: 4.8, orders: 710, featured: false
      },
      {
        id: 27, name: 'Chapulines con guacamole y queso panela', description: 'Orden de chapulines acompañados de guacamole fresco y queso panela.',
        category: 'Entradas', subcategory: 'Calientes', price: 126,
        image: 'imagenes/productos/entrada.svg', tags: ['Entrada', 'Oaxaca'], rating: 4.7, orders: 540, featured: false
      },

      // ALGO DE LA CARTA - CARNES
      {
        id: 28, name: 'Ribeye', description: 'Corte Ribeye acompañado de guacamole, frijoles refritos, papas a la francesa y cebollitas cambray.',
        category: 'Carnes', subcategory: 'Res', price: 346,
        image: 'imagenes/productos/carne.svg', tags: ['Premium', 'Res'], rating: 4.9, orders: 720, featured: true
      },
      {
        id: 29, name: 'New York', description: 'Corte New York acompañado de guacamole, frijoles refritos, papas a la francesa y cebollitas cambray.',
        category: 'Carnes', subcategory: 'Res', price: 346,
        image: 'imagenes/productos/carne.svg', tags: ['Premium', 'Res'], rating: 4.8, orders: 680, featured: false
      },
      {
        id: 30, name: 'T-Bone', description: 'Corte T-Bone acompañado de guacamole, frijoles refritos, papas a la francesa y cebollitas cambray.',
        category: 'Carnes', subcategory: 'Res', price: 346,
        image: 'imagenes/productos/carne.svg', tags: ['Premium', 'Res'], rating: 4.8, orders: 650, featured: false
      },
      {
        id: 31, name: 'Sirloin', description: 'Corte Sirloin acompañado de guacamole, frijoles refritos, papas a la francesa y cebollitas cambray.',
        category: 'Carnes', subcategory: 'Res', price: 346,
        image: 'imagenes/productos/carne.svg', tags: ['Premium', 'Res'], rating: 4.7, orders: 610, featured: false
      },
      {
        id: 32, name: 'Picanha', description: 'Picanha acompañada de guacamole, frijoles refritos, papas a la francesa y cebollitas cambray.',
        category: 'Carnes', subcategory: 'Res', price: 346,
        image: 'imagenes/productos/carne.svg', tags: ['Premium', 'Res'], rating: 4.8, orders: 590, featured: false
      },
      {
        id: 33, name: 'Arrachera', description: 'Arrachera acompañada de ensalada, guacamole, frijoles refritos y cebollitas cambray.',
        category: 'Carnes', subcategory: 'Res', price: 289,
        image: 'imagenes/especialidades/arrachera-premium.jpg', tags: ['Popular', 'Res'], rating: 4.9, orders: 1050, featured: true
      },
      {
        id: 34, name: 'Costilla de res', description: 'Costilla de res acompañada de guacamole, frijoles refritos, papas a la francesa y cebollitas cambray.',
        category: 'Carnes', subcategory: 'Res', price: 189,
        image: 'imagenes/productos/carne.svg', tags: ['Res'], rating: 4.7, orders: 740, featured: false
      },
      {
        id: 35, name: 'Pechuga rellena', description: 'Pechuga de pollo rellena de jamón, queso manchego y queso Oaxaca.',
        category: 'Carnes', subcategory: 'Pollo', price: 166,
        image: 'imagenes/productos/pescado.svg', tags: ['Pollo'], rating: 4.6, orders: 580, featured: false
      },
      {
        id: 36, name: 'Pechuga empanizada', description: 'Pechuga de pollo empanizada con ensalada, papas a la francesa y frijoles refritos.',
        category: 'Carnes', subcategory: 'Pollo', price: 146,
        image: 'imagenes/productos/pescado.svg', tags: ['Pollo'], rating: 4.6, orders: 620, featured: false
      },
      {
        id: 37, name: 'Pechuga asada', description: 'Pechuga de pollo asada con ensalada, papas a la francesa y frijoles refritos.',
        category: 'Carnes', subcategory: 'Pollo', price: 139,
        image: 'imagenes/productos/pescado.svg', tags: ['Pollo', 'Saludable'], rating: 4.5, orders: 540, featured: false
      },
      {
        id: 38, name: 'Bistec a la mexicana o encebollado', description: 'Bistec a la mexicana o encebollado acompañado de frijoles refritos y nopal asado.',
        category: 'Carnes', subcategory: 'Res', price: 123,
        image: 'imagenes/productos/carne.svg', tags: ['Res'], rating: 4.6, orders: 690, featured: false
      },

      // ALGO DEL MAR - MARISCOS
      {
        id: 39, name: 'Mojarra frita', description: 'Mojarra frita acompañada de arroz, ensalada y papas a la francesa.',
        category: 'Mariscos', subcategory: 'Mojarra', price: 206,
        image: 'imagenes/productos/pescado.svg', tags: ['Mariscos'], rating: 4.7, orders: 640, featured: false
      },
      {
        id: 40, name: 'Mojarra a la diabla', description: 'Mojarra a la diabla acompañada de arroz, ensalada y papas a la francesa.',
        category: 'Mariscos', subcategory: 'Mojarra', price: 206,
        image: 'imagenes/productos/pescado.svg', tags: ['Mariscos', 'Picoso'], rating: 4.7, orders: 580, featured: false
      },
      {
        id: 41, name: 'Mojarra al mojo de ajo', description: 'Mojarra al mojo de ajo acompañada de arroz, ensalada y papas a la francesa.',
        category: 'Mariscos', subcategory: 'Mojarra', price: 206,
        image: 'imagenes/productos/pescado.svg', tags: ['Mariscos'], rating: 4.8, orders: 620, featured: false
      },
      {
        id: 42, name: 'Mojarra empanizada', description: 'Mojarra empanizada acompañada de arroz, ensalada y papas a la francesa.',
        category: 'Mariscos', subcategory: 'Mojarra', price: 206,
        image: 'imagenes/productos/pescado.svg', tags: ['Mariscos'], rating: 4.6, orders: 520, featured: false
      },
      {
        id: 43, name: 'Camarones a la diabla', description: 'Camarones a la diabla acompañados de arroz, ensalada y papas a la francesa.',
        category: 'Mariscos', subcategory: 'Camarones', price: 219,
        image: 'imagenes/productos/pescado.svg', tags: ['Mariscos', 'Picoso'], rating: 4.8, orders: 710, featured: false
      },
      {
        id: 44, name: 'Camarones empanizados', description: 'Camarones empanizados acompañados de arroz, papas a la francesa y ensalada.',
        category: 'Mariscos', subcategory: 'Camarones', price: 219,
        image: 'imagenes/productos/pescado.svg', tags: ['Mariscos'], rating: 4.7, orders: 650, featured: false
      },
      {
        id: 45, name: 'Camarones al mojo de ajo', description: 'Camarones al mojo de ajo acompañados de arroz, papas a la francesa y ensalada.',
        category: 'Mariscos', subcategory: 'Camarones', price: 219,
        image: 'imagenes/productos/pescado.svg', tags: ['Mariscos'], rating: 4.8, orders: 680, featured: false
      },
      {
        id: 46, name: 'Aguachile de camarón', description: 'Aguachile de camarón fresco preparado al estilo de la casa.',
        category: 'Mariscos', subcategory: 'Camarones', price: 219,
        image: 'imagenes/productos/pescado.svg', tags: ['Mariscos', 'Fresco'], rating: 4.7, orders: 590, featured: false
      },
      {
        id: 47, name: 'Filete de pescado empanizado o al ajillo', description: 'Filete de pescado empanizado o al ajillo con ensalada y frijoles refritos.',
        category: 'Mariscos', subcategory: 'Filete', price: 149,
        image: 'imagenes/productos/pescado.svg', tags: ['Mariscos'], rating: 4.6, orders: 560, featured: false
      },
      {
        id: 48, name: 'Filete de pescado asado', description: 'Filete de pescado asado acompañado de ensalada y frijoles refritos.',
        category: 'Mariscos', subcategory: 'Filete', price: 136,
        image: 'imagenes/productos/pescado.svg', tags: ['Mariscos', 'Saludable'], rating: 4.5, orders: 480, featured: false
      },

      // TACOS Y OTROS
      {
        id: 49, name: 'Tacos de arrachera', description: 'Orden de 3 tacos de arrachera. Incluyen papas a la francesa, nopal asado y cebolla fileteada.',
        category: 'Tacos y Otros', subcategory: 'Tacos', price: 136,
        image: 'imagenes/productos/taco.svg', tags: ['Tacos', 'Res'], rating: 4.8, orders: 920, featured: true
      },
      {
        id: 50, name: 'Tacos de cecina', description: 'Orden de 3 tacos de cecina. Incluyen papas a la francesa, nopal asado y cebolla fileteada.',
        category: 'Tacos y Otros', subcategory: 'Tacos', price: 136,
        image: 'imagenes/productos/taco.svg', tags: ['Tacos', 'Res'], rating: 4.7, orders: 640, featured: false
      },
      {
        id: 51, name: 'Tacos de chorizo argentino o campechano con arrachera', description: 'Orden de 3 tacos. Incluyen papas a la francesa, nopal asado y cebolla fileteada.',
        category: 'Tacos y Otros', subcategory: 'Tacos', price: 136,
        image: 'imagenes/productos/taco.svg', tags: ['Tacos'], rating: 4.7, orders: 710, featured: false
      },
      {
        id: 52, name: 'Tacos de bistec', description: 'Orden de 3 tacos de bistec. Incluyen papas a la francesa, nopal asado y cebolla fileteada.',
        category: 'Tacos y Otros', subcategory: 'Tacos', price: 113,
        image: 'imagenes/productos/taco.svg', tags: ['Tacos', 'Res'], rating: 4.6, orders: 680, featured: false
      },
      {
        id: 53, name: 'Tacos campechanos bistec/longaniza', description: 'Orden de 3 tacos campechanos. Incluyen papas a la francesa, nopal asado y cebolla fileteada.',
        category: 'Tacos y Otros', subcategory: 'Tacos', price: 113,
        image: 'imagenes/productos/taco.svg', tags: ['Tacos'], rating: 4.6, orders: 620, featured: false
      },
      {
        id: 54, name: 'Tacos al pastor', description: 'Orden de 3 tacos al pastor. Incluyen papas a la francesa, nopal asado y cebolla fileteada. +$27 con queso.',
        category: 'Tacos y Otros', subcategory: 'Tacos', price: 93,
        image: 'imagenes/productos/taco.svg', tags: ['Tacos', 'Popular'], rating: 4.7, orders: 850, featured: false
      },
      {
        id: 55, name: 'Burrito galán', description: 'Camarones en crema de chipotle.',
        category: 'Tacos y Otros', subcategory: 'Burritos', price: 146,
        image: 'imagenes/productos/taco.svg', tags: ['Burrito', 'Mariscos'], rating: 4.8, orders: 540, featured: false
      },
      {
        id: 56, name: 'Burrito de arrachera', description: 'Burrito relleno de arrachera.',
        category: 'Tacos y Otros', subcategory: 'Burritos', price: 139,
        image: 'imagenes/productos/taco.svg', tags: ['Burrito', 'Res'], rating: 4.7, orders: 610, featured: false
      },
      {
        id: 57, name: 'Burrito de bistec o campechano', description: 'Burrito relleno de bistec o campechano.',
        category: 'Tacos y Otros', subcategory: 'Burritos', price: 126,
        image: 'imagenes/productos/taco.svg', tags: ['Burrito'], rating: 4.6, orders: 580, featured: false
      },
      {
        id: 58, name: 'Burrito de longaniza', description: 'Burrito relleno de longaniza.',
        category: 'Tacos y Otros', subcategory: 'Burritos', price: 106,
        image: 'imagenes/productos/taco.svg', tags: ['Burrito'], rating: 4.5, orders: 520, featured: false
      },
      {
        id: 59, name: 'Burrito al pastor', description: 'Burrito relleno de pastor.',
        category: 'Tacos y Otros', subcategory: 'Burritos', price: 99,
        image: 'imagenes/productos/taco.svg', tags: ['Burrito'], rating: 4.6, orders: 590, featured: false
      },
      {
        id: 60, name: 'Alambre de arrachera', description: 'Alambre de arrachera con pimientos y cebolla.',
        category: 'Tacos y Otros', subcategory: 'Alambres', price: 169,
        image: 'imagenes/productos/taco.svg', tags: ['Alambre', 'Res'], rating: 4.8, orders: 620, featured: false
      },
      {
        id: 61, name: 'Alambre fortachón', description: 'Chuleta ahumada, tocino, chorizo y champiñón.',
        category: 'Tacos y Otros', subcategory: 'Alambres', price: 169,
        image: 'imagenes/productos/taco.svg', tags: ['Alambre', 'Especial'], rating: 4.7, orders: 540, featured: false
      },
      {
        id: 62, name: 'Alambre de pollo', description: 'Alambre de pollo con pimientos y cebolla.',
        category: 'Tacos y Otros', subcategory: 'Alambres', price: 149,
        image: 'imagenes/productos/taco.svg', tags: ['Alambre', 'Pollo'], rating: 4.6, orders: 510, featured: false
      },
      {
        id: 63, name: 'Alambre de bistec, campechano, pastor o chuleta', description: 'Alambre a elegir: bistec, campechano, pastor o chuleta.',
        category: 'Tacos y Otros', subcategory: 'Alambres', price: 146,
        image: 'imagenes/productos/taco.svg', tags: ['Alambre'], rating: 4.6, orders: 560, featured: false
      },

      // MOLCAJETES
      {
        id: 64, name: 'Molcajete BER-MELY', description: 'Pechuga de pollo, arrachera, costilla, chorizo argentino, chistorra y bistec. Cebolla cambray, nopal asado, queso panela, chicharrón y salsa de la casa.',
        category: 'Molcajetes', subcategory: 'Mixto', price: 556,
        image: 'imagenes/especialidades/molcajete-ber-mely.jpg', tags: ['Especialidad', 'Para compartir'], rating: 5.0, orders: 890, featured: true
      },
      {
        id: 65, name: 'Molcajete mar y tierra', description: 'Camarones al ajillo, filete de pescado al ajillo, pechuga de pollo, costilla, longaniza y pechuga a la plancha. Cebolla cambray, nopal asado, queso panela, chicharrón y salsa de la casa.',
        category: 'Molcajetes', subcategory: 'Mar y Tierra', price: 556,
        image: 'imagenes/productos/molcajete.svg', tags: ['Mariscos', 'Para compartir'], rating: 4.9, orders: 720, featured: false
      },
      {
        id: 66, name: 'Molcajete aguachile', description: 'Cebolla cambray, nopal asado, queso panela, chicharrón y salsa de la casa con aguachile de camarón.',
        category: 'Molcajetes', subcategory: 'Aguachile', price: 553,
        image: 'imagenes/productos/molcajete.svg', tags: ['Mariscos', 'Picoso'], rating: 4.8, orders: 610, featured: false
      },

      // ENSALADAS
      {
        id: 67, name: 'Ensalada Ber-Mely', description: 'Mix de lechugas, espinaca, jitomate, cebolla morada, jícama, queso panela, queso azul, pechuga a la plancha o bistec y chapulines.',
        category: 'Ensaladas', subcategory: 'Gourmet', price: 159,
        image: 'imagenes/especialidades/ensalada-ber-mely.jpg', tags: ['Especialidad', 'Saludable'], rating: 4.8, orders: 740, featured: true
      },
      {
        id: 68, name: 'Ensalada Primavera', description: 'Mix de lechugas, espinaca, mango, piña, durazno, pechuga a la plancha o bistec, ajonjolí garapiñado y frutos finos.',
        category: 'Ensaladas', subcategory: 'Frutal', price: 139,
        image: 'imagenes/productos/ensalada.svg', tags: ['Saludable', 'Frutal'], rating: 4.7, orders: 580, featured: false
      },
      {
        id: 69, name: 'Ensalada Campestre', description: 'Mix de lechugas, espinaca, granos de elote, cebolla, ajonjolí garapiñado, frutos finos y huevo duro.',
        category: 'Ensaladas', subcategory: 'Clásica', price: 126,
        image: 'imagenes/productos/ensalada.svg', tags: ['Saludable', 'Vegetariana'], rating: 4.6, orders: 520, featured: false
      },

      // EXCLUSIVO SÁBADOS Y DOMINGOS - CALDOS
      {
        id: 70, name: 'Pancita de res', description: 'Caldito tradicional de pancita de res. Exclusivo sábados y domingos.',
        category: 'Caldos', subcategory: 'Res', price: 120,
        image: 'imagenes/productos/caldo.svg', tags: ['Fines de semana'], rating: 4.7, orders: 640, featured: false
      },
      {
        id: 71, name: 'Pozole blanco', description: 'Pozole blanco de puerco, pollo o mixto. Exclusivo sábados y domingos.',
        category: 'Caldos', subcategory: 'Puerco', price: 120,
        image: 'imagenes/productos/pozole.svg', tags: ['Fines de semana'], rating: 4.8, orders: 720, featured: false
      },
      {
        id: 72, name: 'Pierna de gallina', description: 'Pierna de gallina en caldo. Exclusivo sábados y domingos.',
        category: 'Caldos de Gallina', subcategory: 'Pierna', price: 86,
        image: 'imagenes/productos/gallina.svg', tags: ['Fines de semana'], rating: 4.6, orders: 480, featured: false
      },
      {
        id: 73, name: 'Muslo de gallina', description: 'Muslo de gallina en caldo. Exclusivo sábados y domingos.',
        category: 'Caldos de Gallina', subcategory: 'Muslo', price: 86,
        image: 'imagenes/productos/gallina.svg', tags: ['Fines de semana'], rating: 4.6, orders: 450, featured: false
      },
      {
        id: 74, name: 'Rabadilla de gallina', description: 'Rabadilla de gallina en caldo. Exclusivo sábados y domingos.',
        category: 'Caldos de Gallina', subcategory: 'Rabadilla', price: 76,
        image: 'imagenes/productos/gallina.svg', tags: ['Fines de semana'], rating: 4.5, orders: 380, featured: false
      },
      {
        id: 75, name: 'Huacal de gallina', description: 'Huacal de gallina en caldo. Exclusivo sábados y domingos.',
        category: 'Caldos de Gallina', subcategory: 'Huacal', price: 76,
        image: 'imagenes/productos/gallina.svg', tags: ['Fines de semana'], rating: 4.5, orders: 360, featured: false
      },
      {
        id: 76, name: 'Ala de gallina', description: 'Ala de gallina en caldo. Exclusivo sábados y domingos.',
        category: 'Caldos de Gallina', subcategory: 'Ala', price: 76,
        image: 'imagenes/productos/gallina.svg', tags: ['Fines de semana'], rating: 4.5, orders: 390, featured: false
      },
      {
        id: 77, name: '¼ de pechuga de gallina', description: '¼ de pechuga de gallina en caldo. Exclusivo sábados y domingos.',
        category: 'Caldos de Gallina', subcategory: 'Pechuga', price: 99,
        image: 'imagenes/productos/gallina.svg', tags: ['Fines de semana'], rating: 4.6, orders: 420, featured: false
      },
      {
        id: 78, name: '½ pechuga de gallina', description: '½ pechuga de gallina en caldo. Exclusivo sábados y domingos.',
        category: 'Caldos de Gallina', subcategory: 'Pechuga', price: 116,
        image: 'imagenes/productos/gallina.svg', tags: ['Fines de semana'], rating: 4.6, orders: 450, featured: false
      },
      {
        id: 79, name: 'Consomé con pechuga deshebrada', description: 'Consomé de gallina con pechuga deshebrada. Exclusivo sábados y domingos.',
        category: 'Caldos de Gallina', subcategory: 'Consomé', price: 65,
        image: 'imagenes/productos/gallina.svg', tags: ['Fines de semana'], rating: 4.7, orders: 510, featured: false
      },

      // BEBIDAS
      {
        id: 80, name: 'Jugo de naranja (Jumex)', description: 'Jugo de naranja Jumex en vaso de 560 ml.',
        category: 'Bebidas', subcategory: 'Jugos', price: 40,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Jugo'], rating: 4.5, orders: 620, featured: false
      },
      {
        id: 81, name: 'Jugo de manzana (Jumex)', description: 'Jugo de manzana Jumex en vaso de 560 ml.',
        category: 'Bebidas', subcategory: 'Jugos', price: 40,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Jugo'], rating: 4.5, orders: 540, featured: false
      },
      {
        id: 82, name: 'Jugo de durazno (Jumex)', description: 'Jugo de durazno Jumex en vaso de 560 ml.',
        category: 'Bebidas', subcategory: 'Jugos', price: 40,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Jugo'], rating: 4.5, orders: 510, featured: false
      },
      {
        id: 83, name: 'Jugo de mango (Jumex)', description: 'Jugo de mango Jumex en vaso de 560 ml.',
        category: 'Bebidas', subcategory: 'Jugos', price: 40,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Jugo'], rating: 4.5, orders: 530, featured: false
      },
      {
        id: 84, name: 'Agua fresca fresa mango', description: 'Agua fresca de fresa mango en vaso de 560 ml. Jarra 1 litro $70, jarra grande $130.',
        category: 'Bebidas', subcategory: 'Aguas Frescas', price: 35,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Natural'], rating: 4.6, orders: 690, featured: false
      },
      {
        id: 85, name: 'Agua fresca piña guayaba', description: 'Agua fresca de piña guayaba en vaso de 560 ml.',
        category: 'Bebidas', subcategory: 'Aguas Frescas', price: 35,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Natural'], rating: 4.6, orders: 650, featured: false
      },
      {
        id: 86, name: 'Agua fresca horchata fresa', description: 'Agua fresca de horchata fresa en vaso de 560 ml.',
        category: 'Bebidas', subcategory: 'Aguas Frescas', price: 35,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Natural'], rating: 4.6, orders: 620, featured: false
      },
      {
        id: 87, name: 'Agua fresca sandía limón', description: 'Agua fresca de sandía limón en vaso de 560 ml.',
        category: 'Bebidas', subcategory: 'Aguas Frescas', price: 35,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Natural'], rating: 4.6, orders: 590, featured: false
      },
      {
        id: 88, name: 'Agua fresca frutos rojos', description: 'Agua fresca de frutos rojos en vaso de 560 ml.',
        category: 'Bebidas', subcategory: 'Aguas Frescas', price: 35,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Natural'], rating: 4.6, orders: 570, featured: false
      },
      {
        id: 89, name: 'Agua natural', description: 'Agua natural embotellada.',
        category: 'Bebidas', subcategory: 'Refrescos', price: 15,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Refresco'], rating: 4.5, orders: 1200, featured: false
      },
      {
        id: 90, name: 'Jugo de naranja natural', description: 'Jugo de naranja natural recién exprimido.',
        category: 'Bebidas', subcategory: 'Naturales', price: 45,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Natural'], rating: 4.7, orders: 740, featured: false
      },
      {
        id: 91, name: 'Naranjada natural o mineral', description: 'Naranjada natural o mineral.',
        category: 'Bebidas', subcategory: 'Naturales', price: 45,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Natural'], rating: 4.6, orders: 680, featured: false
      },
      {
        id: 92, name: 'Limonada natural o mineral', description: 'Limonada natural o mineral.',
        category: 'Bebidas', subcategory: 'Naturales', price: 45,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Natural'], rating: 4.7, orders: 820, featured: false
      },
      {
        id: 93, name: 'Coca Cola', description: 'Refresco Coca Cola.',
        category: 'Bebidas', subcategory: 'Refrescos', price: 35,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Refresco'], rating: 4.5, orders: 950, featured: false
      },
      {
        id: 94, name: 'Sprite', description: 'Refresco Sprite.',
        category: 'Bebidas', subcategory: 'Refrescos', price: 35,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Refresco'], rating: 4.5, orders: 760, featured: false
      },
      {
        id: 95, name: 'Sidral Mundet', description: 'Refresco Sidral Mundet.',
        category: 'Bebidas', subcategory: 'Refrescos', price: 35,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Refresco'], rating: 4.5, orders: 720, featured: false
      },
      {
        id: 96, name: 'Agua mineral', description: 'Agua mineral.',
        category: 'Bebidas', subcategory: 'Refrescos', price: 35,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Refresco'], rating: 4.5, orders: 810, featured: false
      },
      {
        id: 97, name: 'Sangría', description: 'Sangría.',
        category: 'Bebidas', subcategory: 'Refrescos', price: 35,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Refresco'], rating: 4.5, orders: 640, featured: false
      },
      {
        id: 98, name: 'Cerveza Modelo Especial', description: 'Cerveza Modelo Especial clara u oscura.',
        category: 'Bebidas', subcategory: 'Cerveza', price: 50,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Cerveza'], rating: 4.7, orders: 890, featured: false
      },
      {
        id: 99, name: 'Cerveza Heineken', description: 'Cerveza Heineken.',
        category: 'Bebidas', subcategory: 'Cerveza', price: 50,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Cerveza'], rating: 4.7, orders: 740, featured: false
      },
      {
        id: 100, name: 'Cerveza Victoria', description: 'Cerveza Victoria.',
        category: 'Bebidas', subcategory: 'Cerveza', price: 50,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Cerveza'], rating: 4.6, orders: 680, featured: false
      },
      {
        id: 101, name: 'Jarra de limonada', description: 'Jarra de limonada natural o mineral.',
        category: 'Bebidas', subcategory: 'Jarras', price: 160,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Para compartir'], rating: 4.7, orders: 520, featured: false
      },
      {
        id: 102, name: 'Jarra de naranjada', description: 'Jarra de naranjada natural o mineral.',
        category: 'Bebidas', subcategory: 'Jarras', price: 160,
        image: 'imagenes/productos/bebida-natural.svg', tags: ['Para compartir'], rating: 4.7, orders: 510, featured: false
      },

      // COCTELERIA
      {
        id: 103, name: 'Cantaritos tequila Hornitos', description: 'Cantaritos con tequila Hornitos. Sabores: tamarindo, naranja o frutos rojos.',
        category: 'Coctelería', subcategory: 'Cantaritos', price: 120,
        image: 'imagenes/productos/cantarito.svg', tags: ['Cóctel', 'Tequila'], rating: 4.8, orders: 640, featured: false
      },
      {
        id: 104, name: 'Margarita Frozen tequila Hornitos', description: 'Margarita frozen con tequila Hornitos. Sabores: naranja, tamarindo, mango.',
        category: 'Coctelería', subcategory: 'Margaritas', price: 120,
        image: 'imagenes/productos/margarita.svg', tags: ['Cóctel', 'Tequila'], rating: 4.8, orders: 620, featured: false
      },
      {
        id: 105, name: 'Mojitos', description: 'Mojitos clásico o de frutos rojos.',
        category: 'Coctelería', subcategory: 'Mojitos', price: 130,
        image: 'imagenes/productos/mojito.svg', tags: ['Cóctel'], rating: 4.7, orders: 580, featured: false
      },

      // CAFETERÍA - HAMBURGUESAS
      {
        id: 106, name: 'Hamburguesa de res', description: 'Jamón, queso amarillo y queso manchego. Incluye papas a la francesa.',
        category: 'Cafetería', subcategory: 'Hamburguesas', price: 116,
        image: 'imagenes/especialidades/hamburguesa-especial.jpg', tags: ['Hamburguesa'], rating: 4.7, orders: 820, featured: false
      },
      {
        id: 107, name: 'Hamburguesa hawaiana', description: 'Jamón, queso amarillo, queso manchego y piña. Incluye papas a la francesa.',
        category: 'Cafetería', subcategory: 'Hamburguesas', price: 126,
        image: 'imagenes/especialidades/hamburguesa-especial.jpg', tags: ['Hamburguesa', 'Hawaiana'], rating: 4.7, orders: 710, featured: false
      },
      {
        id: 108, name: 'Hamburguesa de pollo', description: 'Jamón, queso amarillo y queso manchego. Incluye papas a la francesa.',
        category: 'Cafetería', subcategory: 'Hamburguesas', price: 126,
        image: 'imagenes/especialidades/hamburguesa-especial.jpg', tags: ['Hamburguesa', 'Pollo'], rating: 4.6, orders: 650, featured: false
      },
      {
        id: 109, name: 'Hamburguesa especial', description: 'Jamón, tocino, queso manchego, queso amarillo, queso Oaxaca y champiñones. Incluye papas a la francesa.',
        category: 'Cafetería', subcategory: 'Hamburguesas', price: 159,
        image: 'imagenes/especialidades/hamburguesa-especial.jpg', tags: ['Hamburguesa', 'Especial'], rating: 4.9, orders: 920, featured: true
      },
      {
        id: 110, name: 'Hamburguesa especial doble carne', description: 'Doble carne, jamón, tocino, queso manchego, queso amarillo, queso Oaxaca y champiñones. Incluye papas a la francesa.',
        category: 'Cafetería', subcategory: 'Hamburguesas', price: 179,
        image: 'imagenes/especialidades/hamburguesa-especial.jpg', tags: ['Hamburguesa', 'Doble'], rating: 4.8, orders: 780, featured: false
      },
      // HOT DOGS
      {
        id: 111, name: 'Hot dogs sencillos', description: '2 hot dogs sencillos.',
        category: 'Cafetería', subcategory: 'Hot Dogs', price: 79,
        image: 'imagenes/productos/hotdog.svg', tags: ['Hot Dog'], rating: 4.5, orders: 640, featured: false
      },
      {
        id: 112, name: 'Hot dogs hawaiano', description: '2 hot dogs con tocino, piña y queso.',
        category: 'Cafetería', subcategory: 'Hot Dogs', price: 89,
        image: 'imagenes/productos/hotdog.svg', tags: ['Hot Dog', 'Hawaiano'], rating: 4.6, orders: 580, featured: false
      },
      {
        id: 113, name: 'Hot dogs especial', description: '2 hot dogs con tocino, cebolla caramelizada, guacamole y queso.',
        category: 'Cafetería', subcategory: 'Hot Dogs', price: 113,
        image: 'imagenes/productos/hotdog.svg', tags: ['Hot Dog', 'Especial'], rating: 4.7, orders: 620, featured: false
      },
      // SANDWICHS
      {
        id: 114, name: 'Club sándwich', description: 'Club sándwich de pollo, jamón y tocino.',
        category: 'Cafetería', subcategory: 'Sándwichs', price: 139,
        image: 'imagenes/productos/sandwich.svg', tags: ['Sándwich'], rating: 4.6, orders: 590, featured: false
      },
      {
        id: 115, name: 'Club sándwich 4 quesos', description: 'Queso manchego, queso amarillo, queso Oaxaca y queso panela.',
        category: 'Cafetería', subcategory: 'Sándwichs', price: 149,
        image: 'imagenes/productos/sandwich.svg', tags: ['Sándwich', 'Queso'], rating: 4.7, orders: 540, featured: false
      },
      {
        id: 116, name: 'Club sándwich arrachera', description: 'Arrachera y queso manchego.',
        category: 'Cafetería', subcategory: 'Sándwichs', price: 190,
        image: 'imagenes/productos/sandwich.svg', tags: ['Sándwich', 'Res'], rating: 4.8, orders: 610, featured: false
      },
      {
        id: 117, name: 'Cuernito', description: 'Jamón, queso panela y queso manchego.',
        category: 'Cafetería', subcategory: 'Sándwichs', price: 63,
        image: 'imagenes/productos/sandwich.svg', tags: ['Sándwich'], rating: 4.5, orders: 520, featured: false
      },
      // CHAPATAS
      {
        id: 118, name: 'Chapata pollo a las finas hierbas', description: 'Pechuga de pollo empanizado y queso manchego.',
        category: 'Cafetería', subcategory: 'Chapatas', price: 109,
        image: 'imagenes/productos/chapata.svg', tags: ['Chapata', 'Pollo'], rating: 4.6, orders: 560, featured: false
      },
      {
        id: 119, name: 'Chapata chistorra', description: 'Chistorra, guacamole y queso manchego.',
        category: 'Cafetería', subcategory: 'Chapatas', price: 129,
        image: 'imagenes/productos/chapata.svg', tags: ['Chapata'], rating: 4.6, orders: 510, featured: false
      },
      {
        id: 120, name: 'Chapata Argentina', description: 'Chorizo argentino, guacamole y queso manchego.',
        category: 'Cafetería', subcategory: 'Chapatas', price: 129,
        image: 'imagenes/productos/chapata.svg', tags: ['Chapata', 'Argentina'], rating: 4.7, orders: 540, featured: false
      },
      {
        id: 121, name: 'Chapata arrachera', description: 'Arrachera, guacamole y queso manchego.',
        category: 'Cafetería', subcategory: 'Chapatas', price: 139,
        image: 'imagenes/productos/chapata.svg', tags: ['Chapata', 'Res'], rating: 4.7, orders: 620, featured: false
      },
      // SNACKS
      {
        id: 122, name: 'Alitas (6 pzs)', description: 'Alitas con salsa a elegir: chipotle, mango habanero, tamarindo chipotle o búfalo.',
        category: 'Cafetería', subcategory: 'Snacks', price: 83,
        image: 'imagenes/productos/snack.svg', tags: ['Snack'], rating: 4.7, orders: 720, featured: false
      },
      {
        id: 123, name: 'Boneless', description: 'Boneless crujientes.',
        category: 'Cafetería', subcategory: 'Snacks', price: 93,
        image: 'imagenes/productos/snack.svg', tags: ['Snack'], rating: 4.7, orders: 680, featured: false
      },
      {
        id: 124, name: 'Papas a la francesa', description: 'Orden de papas a la francesa.',
        category: 'Cafetería', subcategory: 'Snacks', price: 63,
        image: 'imagenes/productos/snack.svg', tags: ['Snack'], rating: 4.5, orders: 850, featured: false
      },
      {
        id: 125, name: 'Nachos', description: 'Orden de nachos.',
        category: 'Cafetería', subcategory: 'Snacks', price: 63,
        image: 'imagenes/productos/snack.svg', tags: ['Snack'], rating: 4.5, orders: 790, featured: false
      },

      // CAFÉ
      {
        id: 126, name: 'Café americano', description: 'Café americano.',
        category: 'Café', subcategory: 'Café Caliente', price: 46,
        image: 'imagenes/productos/cafe.svg', tags: ['Café'], rating: 4.6, orders: 1200, featured: false
      },
      {
        id: 127, name: 'Café expreso', description: 'Café expreso.',
        category: 'Café', subcategory: 'Café Caliente', price: 46,
        image: 'imagenes/productos/cafe.svg', tags: ['Café'], rating: 4.6, orders: 980, featured: false
      },
      {
        id: 128, name: 'Café capuchino', description: 'Café capuchino.',
        category: 'Café', subcategory: 'Café Caliente', price: 66,
        image: 'imagenes/productos/cafe.svg', tags: ['Café'], rating: 4.7, orders: 1100, featured: false
      },
      {
        id: 129, name: 'Leche con chocolate caliente o frío', description: 'Leche con chocolate, servida caliente o fría.',
        category: 'Café', subcategory: 'Café Caliente', price: 66,
        image: 'imagenes/productos/chocolate.svg', tags: ['Chocolate'], rating: 4.7, orders: 820, featured: false
      },
      {
        id: 130, name: 'Café con leche caliente', description: 'Café con leche caliente.',
        category: 'Café', subcategory: 'Café Caliente', price: 66,
        image: 'imagenes/productos/cafe.svg', tags: ['Café'], rating: 4.6, orders: 950, featured: false
      },
      {
        id: 131, name: 'Chocolate abuelita espumoso', description: 'Chocolate abuelita espumoso.',
        category: 'Café', subcategory: 'Café Caliente', price: 69,
        image: 'imagenes/productos/chocolate.svg', tags: ['Chocolate'], rating: 4.7, orders: 760, featured: false
      },
      {
        id: 132, name: 'Capuchino Moka, Cajeta y Fresa', description: 'Capuchino con sabores Moka, Cajeta o Fresa.',
        category: 'Café', subcategory: 'Café Caliente', price: 69,
        image: 'imagenes/productos/cafe.svg', tags: ['Café', 'Sabores'], rating: 4.8, orders: 690, featured: false
      },
      {
        id: 133, name: 'Capuchino Rompope, Amaretto, Kahlúa y Baileys', description: 'Capuchino con licores: Rompope, Amaretto, Kahlúa o Baileys.',
        category: 'Café', subcategory: 'Café Caliente', price: 96,
        image: 'imagenes/productos/cafe.svg', tags: ['Café', 'Con licor'], rating: 4.8, orders: 540, featured: false
      },
      {
        id: 134, name: 'Café capuchino frío', description: 'Café capuchino servido frío.',
        category: 'Café', subcategory: 'Bebidas Frías', price: 66,
        image: 'imagenes/productos/frappe.svg', tags: ['Café Frío'], rating: 4.6, orders: 620, featured: false
      },
      {
        id: 135, name: 'Leche con chocolate frío', description: 'Leche con chocolate frío.',
        category: 'Café', subcategory: 'Bebidas Frías', price: 66,
        image: 'imagenes/productos/frappe.svg', tags: ['Chocolate'], rating: 4.6, orders: 580, featured: false
      },
      {
        id: 136, name: 'Frappé Capuchino, Cajeta, Mazapán, 3 Leches, Fresa, Oreo, Moka, Ferrero Rocher', description: 'Frappé cremoso con sabores a elegir.',
        category: 'Café', subcategory: 'Frappés', price: 89,
        image: 'imagenes/especialidades/frappe-ferrero.jpg', tags: ['Frappé', 'Popular'], rating: 4.8, orders: 1050, featured: true
      },
      {
        id: 137, name: 'Frappé Amaretto, Kahlúa, Baileys y Piña Colada', description: 'Frappé con sabores de licor.',
        category: 'Café', subcategory: 'Frappés', price: 109,
        image: 'imagenes/especialidades/frappe-ferrero.jpg', tags: ['Frappé', 'Con licor'], rating: 4.8, orders: 720, featured: false
      },
      {
        id: 138, name: 'Chamoyada', description: 'Chamoyada de mango, fresa, tamarindo, limón o frutos rojos.',
        category: 'Café', subcategory: 'Chamoyadas', price: 86,
        image: 'imagenes/productos/chamoyada.svg', tags: ['Chamoyada'], rating: 4.7, orders: 680, featured: false
      },
      {
        id: 139, name: 'Licuado de plátano', description: 'Licuado de plátano.',
        category: 'Café', subcategory: 'Licuados', price: 45,
        image: 'imagenes/productos/licuado.svg', tags: ['Licuado', 'Natural'], rating: 4.6, orders: 590, featured: false
      },
      {
        id: 140, name: 'Licuado de fresa', description: 'Licuado de fresa.',
        category: 'Café', subcategory: 'Licuados', price: 45,
        image: 'imagenes/productos/licuado.svg', tags: ['Licuado', 'Natural'], rating: 4.6, orders: 570, featured: false
      },
      {
        id: 141, name: 'Licuado de guayaba', description: 'Licuado de guayaba.',
        category: 'Café', subcategory: 'Licuados', price: 45,
        image: 'imagenes/productos/licuado.svg', tags: ['Licuado', 'Natural'], rating: 4.6, orders: 520, featured: false
      },
      {
        id: 142, name: 'Licuado guayaba/plátano/chocolate', description: 'Mezcla de guayaba, plátano y chocolate.',
        category: 'Café', subcategory: 'Licuados', price: 55,
        image: 'imagenes/productos/licuado.svg', tags: ['Licuado', 'Mix'], rating: 4.7, orders: 540, featured: false
      },
      {
        id: 143, name: 'Licuado plátano/fresa', description: 'Mezcla de plátano y fresa.',
        category: 'Café', subcategory: 'Licuados', price: 55,
        image: 'imagenes/productos/licuado.svg', tags: ['Licuado', 'Mix'], rating: 4.7, orders: 610, featured: false
      },
      {
        id: 144, name: 'Choco fresa', description: 'Licuado de chocolate y fresa.',
        category: 'Café', subcategory: 'Licuados', price: 55,
        image: 'imagenes/productos/licuado.svg', tags: ['Licuado', 'Dulce'], rating: 4.7, orders: 580, featured: false
      },
      {
        id: 145, name: 'Choco banana', description: 'Licuado de chocolate y plátano.',
        category: 'Café', subcategory: 'Licuados', price: 55,
        image: 'imagenes/productos/licuado.svg', tags: ['Licuado', 'Dulce'], rating: 4.7, orders: 620, featured: false
      },

      // CREPAS
      {
        id: 146, name: 'Crepa salada de jamón de pavo o pierna', description: 'Crepa salada con jamón de pavo o pierna y queso.',
        category: 'Crepas', subcategory: 'Saladas', price: 109,
        image: 'imagenes/productos/crepa-salada.svg', tags: ['Crepa', 'Salada'], rating: 4.6, orders: 540, featured: false
      },
      {
        id: 147, name: 'Crepa salada de champiñones', description: 'Crepa salada con champiñones y queso.',
        category: 'Crepas', subcategory: 'Saladas', price: 109,
        image: 'imagenes/productos/crepa-salada.svg', tags: ['Crepa', 'Salada', 'Vegetariana'], rating: 4.5, orders: 480, featured: false
      },
      {
        id: 148, name: 'Crepa salada de atún', description: 'Crepa salada con atún y queso.',
        category: 'Crepas', subcategory: 'Saladas', price: 109,
        image: 'imagenes/productos/crepa-salada.svg', tags: ['Crepa', 'Salada'], rating: 4.6, orders: 510, featured: false
      },
      {
        id: 149, name: 'Crepa Clasic', description: 'Jamón, pechuga de pavo y manchego.',
        category: 'Crepas', subcategory: 'Especiales Saladas', price: 119,
        image: 'imagenes/productos/crepa-salada.svg', tags: ['Crepa', 'Especial'], rating: 4.7, orders: 620, featured: false
      },
      {
        id: 150, name: 'Crepa Chapis', description: 'Jamón, champiñones y manchego.',
        category: 'Crepas', subcategory: 'Especiales Saladas', price: 119,
        image: 'imagenes/productos/crepa-salada.svg', tags: ['Crepa', 'Especial'], rating: 4.7, orders: 580, featured: false
      },
      {
        id: 151, name: 'Crepa Ber-Mely', description: 'Jamón, atún y manchego.',
        category: 'Crepas', subcategory: 'Especiales Saladas', price: 119,
        image: 'imagenes/productos/crepa-salada.svg', tags: ['Crepa', 'Especial'], rating: 4.8, orders: 690, featured: true
      },
      {
        id: 152, name: 'Crepa Hawaiana', description: 'Jamón, piña y manchego.',
        category: 'Crepas', subcategory: 'Especiales Saladas', price: 119,
        image: 'imagenes/productos/crepa-salada.svg', tags: ['Crepa', 'Hawaiana'], rating: 4.7, orders: 640, featured: false
      },
      {
        id: 153, name: 'Crepa de cajeta con plátano', description: 'Crepa dulce con cajeta y plátano.',
        category: 'Crepas', subcategory: 'Dulces', price: 86,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce'], rating: 4.7, orders: 780, featured: false
      },
      {
        id: 154, name: 'Crepa de mermelada de zarzamora con queso', description: 'Mermelada de zarzamora con queso crema.',
        category: 'Crepas', subcategory: 'Dulces', price: 86,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce'], rating: 4.6, orders: 620, featured: false
      },
      {
        id: 155, name: 'Crepa de lechera con nuez', description: 'Lechera con nuez.',
        category: 'Crepas', subcategory: 'Dulces', price: 86,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce'], rating: 4.7, orders: 650, featured: false
      },
      {
        id: 156, name: 'Crepa de Nutella con queso', description: 'Nutella con queso crema.',
        category: 'Crepas', subcategory: 'Dulces', price: 86,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce', 'Popular'], rating: 4.8, orders: 890, featured: false
      },
      {
        id: 157, name: 'Crepa de mermelada de frutos rojos con almendras', description: 'Mermelada de frutos rojos con almendras.',
        category: 'Crepas', subcategory: 'Dulces', price: 86,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce'], rating: 4.6, orders: 580, featured: false
      },
      {
        id: 158, name: 'Crepa Frutos Tropicales', description: 'Queso philadelphia, fresa, mango y kiwi.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce', 'Frutal'], rating: 4.8, orders: 720, featured: false
      },
      {
        id: 159, name: 'Crepa Frutos Rojos', description: 'Frambuesas, fresa y cerezas.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce', 'Frutal'], rating: 4.7, orders: 680, featured: false
      },
      {
        id: 160, name: 'Crepa La Rufi', description: 'Queso philadelphia, zarzamora y almendras.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce'], rating: 4.8, orders: 650, featured: false
      },
      {
        id: 161, name: 'Crepa Delith', description: 'Queso philadelphia, cajeta y plátano.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce'], rating: 4.8, orders: 690, featured: false
      },
      {
        id: 162, name: 'Crepa Peach', description: 'Queso philadelphia, durazno y lechera.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce', 'Frutal'], rating: 4.7, orders: 620, featured: false
      },
      {
        id: 163, name: 'Crepa Zeland', description: 'Nutella, durazno y kiwi.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce', 'Frutal'], rating: 4.7, orders: 640, featured: false
      },
      {
        id: 164, name: 'Crepa Banana', description: 'Queso philadelphia, Nutella y plátano.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce'], rating: 4.8, orders: 750, featured: false
      },
      {
        id: 165, name: 'Crepa Ladyn', description: 'Nutella, fresa y plátano.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce'], rating: 4.8, orders: 780, featured: false
      },
      {
        id: 166, name: 'Crepa Mely', description: 'Queso philadelphia, fresa, arándanos y frutos finos. Nuestra especialidad.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Especialidad', 'Destacado'], rating: 4.9, orders: 1100, featured: true
      },
      {
        id: 167, name: 'Crepa Dulce Manzana', description: 'Queso philadelphia, manzana y cajeta.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce', 'Frutal'], rating: 4.7, orders: 610, featured: false
      },
      {
        id: 168, name: 'Crepa 3 Quesos', description: 'Queso philadelphia, queso manchego, queso mozzarella, lechera y nuez.',
        category: 'Crepas', subcategory: 'Especiales Dulces', price: 99,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce', 'Queso'], rating: 4.7, orders: 590, featured: false
      },
      {
        id: 169, name: 'Crepa Kinder Buu', description: 'Nutella, fresa y Kinder Bueno.',
        category: 'Crepas', subcategory: 'Con Chocolates', price: 109,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce', 'Chocolate'], rating: 4.8, orders: 820, featured: false
      },
      {
        id: 170, name: 'Crepa Kinder Deliss', description: 'Queso philadelphia, Nutella y Kinder Delis.',
        category: 'Crepas', subcategory: 'Con Chocolates', price: 109,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce', 'Chocolate'], rating: 4.8, orders: 760, featured: false
      },
      {
        id: 171, name: 'Crepa Roshe', description: 'Nutella, nuez y Ferrero Rocher.',
        category: 'Crepas', subcategory: 'Con Chocolates', price: 109,
        image: 'imagenes/especialidades/crepa-mely.jpg', tags: ['Crepa', 'Dulce', 'Chocolate'], rating: 4.8, orders: 790, featured: false
      },
      {
        id: 172, name: 'Crepa Coronado', description: 'Cajeta, queso philadelphia, nuez y rompope.',
        category: 'Crepas', subcategory: 'Con Licor', price: 116,
        image: 'imagenes/productos/crepa-licor.svg', tags: ['Crepa', 'Con licor'], rating: 4.8, orders: 520, featured: false
      },
      {
        id: 173, name: 'Crepa Khalua', description: 'Nutella, cerezas y Kahlúa.',
        category: 'Crepas', subcategory: 'Con Licor', price: 116,
        image: 'imagenes/productos/crepa-licor.svg', tags: ['Crepa', 'Con licor'], rating: 4.7, orders: 480, featured: false
      },
      {
        id: 174, name: 'Crepa Baileys', description: 'Nutella, durazno y Baileys.',
        category: 'Crepas', subcategory: 'Con Licor', price: 116,
        image: 'imagenes/productos/crepa-licor.svg', tags: ['Crepa', 'Con licor'], rating: 4.7, orders: 510, featured: false
      },
      {
        id: 175, name: 'Crepa Malibu', description: 'Queso philadelphia, piña, lechera y Malibu.',
        category: 'Crepas', subcategory: 'Con Licor', price: 116,
        image: 'imagenes/productos/crepa-licor.svg', tags: ['Crepa', 'Con licor'], rating: 4.7, orders: 460, featured: false
      },
      {
        id: 176, name: 'Crepa Amaretto', description: 'Queso philadelphia, lechera, almendras y amaretto.',
        category: 'Crepas', subcategory: 'Con Licor', price: 116,
        image: 'imagenes/productos/crepa-licor.svg', tags: ['Crepa', 'Con licor'], rating: 4.7, orders: 490, featured: false
      }
    ];
  };

  // ========================================================================
  // CARGAR MENÚ DESDE JSON (Netlify CMS)
  // ========================================================================

  const loadMenuData = async () => {
    try {
      const response = await fetch('data/menu.json?' + Date.now());
      if (response.ok) {
        menuData = await response.json();
        console.log('✅ Menú cargado desde JSON:', menuData.length, 'productos');
        return true;
      } else {
        console.warn('⚠️ No se pudo cargar menu.json, usando datos de respaldo');
        menuData = getDefaultMenu();
        return false;
      }
    } catch (e) {
      console.warn('⚠️ Error cargando menú:', e.message);
      menuData = getDefaultMenu();
      return false;
    }
  };

  // ========================================================================
  // DATOS DE GALERÍA Y TESTIMONIOS
  // ========================================================================

  const galleryData = [
    { src: 'imagenes/galeria/ambiente-1.svg', caption: 'Ambiente acogedor BER-MELY' },
    { src: 'imagenes/nosotros/restaurante-interior.jpg', caption: 'Nuestro interior' },
    { src: 'imagenes/nosotros/platillo-gourmet.jpg', caption: 'Platillo gourmet' },
    { src: 'imagenes/especialidades/molcajete-ber-mely.jpg', caption: 'Molcajete caliente' },
    { src: 'imagenes/especialidades/hamburguesa-especial.jpg', caption: 'Hamburguesa artesanal' },
    { src: 'imagenes/especialidades/crepa-mely.jpg', caption: 'Crepa dulce' },
    { src: 'imagenes/especialidades/frappe-ferrero.jpg', caption: 'Bebidas frías' },
    { src: 'imagenes/productos/bebida-natural.svg', caption: 'Limonada refrescante' },
    { src: 'imagenes/productos/pastel.svg', caption: 'Brownie con helado' },
    { src: 'imagenes/especialidades/ensalada-ber-mely.jpg', caption: 'Ensalada fresca' },
    { src: 'imagenes/especialidades/arrachera-premium.jpg', caption: 'Carne a la parrilla' },
    { src: 'imagenes/productos/ensalada.svg', caption: 'Ensalada de pollo' }
  ];

  const testimonialsData = [
    {
      name: 'Mariana López',
      role: 'Cliente frecuente',
      avatar: 'imagenes/testimonios/mariana.jpg',
      text: 'El Molcajete Ber-Mely es una experiencia completa. La presentación, el sabor y el servicio son de otro nivel. Mi lugar favorito para celebrar ocasiones especiales.',
      rating: 5
    },
    {
      name: 'Carlos Mendoza',
      role: 'Foodie local',
      avatar: 'imagenes/testimonios/carlos.svg',
      text: 'Las crepas son las mejores de la ciudad. La Crepa Mely es simplemente adictiva. Además, el ambiente es perfecto para una cena romántica o un brunch con amigos.',
      rating: 5
    },
    {
      name: 'Daniela Herrera',
      role: 'Visitante de negocios',
      avatar: 'imagenes/testimonios/daniela.svg',
      text: 'Pedí por WhatsApp y la entrega fue rápida. Los alimentos llegaron calientes y bien empacados. El Frappé Ferrero es una delicia. ¡Totalmente recomendado!',
      rating: 5
    },
    {
      name: 'Roberto Castillo',
      role: 'Crítico gastronómico',
      avatar: 'imagenes/testimonios/roberto.svg',
      text: 'BER-MELY logra equilibrar calidad, precio y ambiente. La arrachera premium es digna de los mejores restaurantes. Un must en la ciudad.',
      rating: 5
    },
    {
      name: 'Fernanda Ruiz',
      role: 'Cliente premium',
      avatar: 'imagenes/testimonios/fernanda.svg',
      text: 'Reservé para el cumpleaños de mi mamá y todo fue perfecto. La atención, el ambiente y la comida hicieron que el día fuera inolvidable.',
      rating: 5
    },
    {
      name: 'Javier Torres',
      role: 'Estudiante',
      avatar: 'imagenes/testimonios/javier.svg',
      text: 'El menú infantil salvó nuestra salida familiar. Los niños felices y nosotros disfrutamos un excelente desayuno. Volveremos pronto.',
      rating: 4
    }
  ];

  const config = {
    whatsappNumber: '5215539637021',
    currency: 'MXN',
    currencySymbol: '$'
  };

  // ========================================================================
  // ESTADO DE LA APLICACIÓN
  // ========================================================================

  const state = {
    cart: [],
    favorites: new Set(),
    menuView: 'grid',
    menuFilter: {
      search: '',
      category: 'all',
      subcategory: 'all',
      sort: 'default',
      showFavorites: false
    }
  };

  // ========================================================================
  // UTILIDADES
  // ========================================================================

  const formatPrice = (price) => {
    return `${config.currencySymbol}${price.toFixed(2)}`;
  };

  const escapeHtml = (str) => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  const debounce = (fn, delay = 300) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  // ========================================================================
  // LOADER
  // ========================================================================

  const initLoader = () => {
    const loader = document.getElementById('loader');
    if (!loader) return;
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
      }, 2200);
    });
  };

  // ========================================================================
  // HEADER SCROLL
  // ========================================================================

  const initHeader = () => {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  };

  // ========================================================================
  // NAVEGACIÓN MÓVIL
  // ========================================================================

  const initMobileNav = () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!menuToggle || !mobileNav) return;
    
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileNavOverlay.setAttribute('aria-hidden', 'true');
    
    const open = () => {
      menuToggle.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      mobileNav.classList.add('open');
      mobileNav.setAttribute('aria-hidden', 'false');
      mobileNavOverlay.classList.add('open');
      document.body.classList.add('nav-open');
    };
    
    const close = () => {
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      mobileNav.setAttribute('aria-hidden', 'true');
      mobileNavOverlay.classList.remove('open');
      document.body.classList.remove('nav-open');
    };
    
    menuToggle.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) close();
      else open();
    });
    
    mobileNavClose.addEventListener('click', close);
    mobileNavOverlay.addEventListener('click', close);
    
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', close);
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        close();
      }
    });
  };

  // ========================================================================
  // BARRA DE BÚSQUEDA GLOBAL
  // ========================================================================

  const initSearchBar = () => {
    const searchToggle = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');
    const searchClose = document.getElementById('searchClose');
    const globalSearch = document.getElementById('globalSearch');
    
    if (!searchToggle || !searchBar) return;
    
    const open = () => {
      searchBar.classList.add('open');
      searchToggle.setAttribute('aria-expanded', 'true');
      setTimeout(() => globalSearch.focus(), 300);
    };
    
    const close = () => {
      searchBar.classList.remove('open');
      searchToggle.setAttribute('aria-expanded', 'false');
      globalSearch.value = '';
    };
    
    searchToggle.addEventListener('click', () => {
      if (searchBar.classList.contains('open')) close();
      else open();
    });
    
    searchClose.addEventListener('click', close);
    
    globalSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const term = globalSearch.value.trim();
        if (term) {
          document.getElementById('menuSearch').value = term;
          state.menuFilter.search = term;
          renderMenu();
          close();
          document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (e.key === 'Escape') close();
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchBar.classList.contains('open')) {
        close();
      }
    });
  };

  // ========================================================================
  // CARRITO DE COMPRAS
  // ========================================================================

  const loadCart = () => {
    try {
      const saved = localStorage.getItem('bermely-cart-v2');
      if (saved) {
        state.cart = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('No se pudo cargar el carrito:', e);
      state.cart = [];
    }
  };

  const saveCart = () => {
    try {
      localStorage.setItem('bermely-cart-v2', JSON.stringify(state.cart));
    } catch (e) {
      console.warn('No se pudo guardar el carrito:', e);
    }
  };

  const getCartTotal = () => {
    return state.cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  };

  const getCartCount = () => {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  };

  const updateCartBadge = () => {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const count = getCartCount();
    badge.textContent = count;
    if (count > 0) badge.classList.add('visible');
    else badge.classList.remove('visible');
  };

  const addToCart = (item) => {
    const existing = state.cart.find(cartItem => 
      cartItem.id === item.id && 
      JSON.stringify(cartItem.extras) === JSON.stringify(item.extras) &&
      cartItem.notes === item.notes
    );
    
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      state.cart.push({
        id: item.id,
        name: item.name,
        basePrice: item.basePrice,
        unitPrice: item.unitPrice,
        image: item.image,
        quantity: item.quantity,
        extras: item.extras || [],
        notes: item.notes || ''
      });
    }
    saveCart();
    updateCartBadge();
    renderCartItems();
    showToast('Producto agregado', `${item.name} se agregó al carrito`, 'success');
  };

  const removeFromCart = (index) => {
    state.cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    renderCartItems();
  };

  const updateQuantity = (index, change) => {
    const item = state.cart[index];
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(index);
    } else {
      saveCart();
      updateCartBadge();
      renderCartItems();
    }
  };

  const clearCart = () => {
    state.cart = [];
    saveCart();
    updateCartBadge();
    renderCartItems();
    showToast('Carrito vacío', 'Se eliminaron todos los productos', 'warning');
  };

  const renderCartItems = () => {
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    
    if (!cartItems || !cartEmpty) return;
    
    if (state.cart.length === 0) {
      cartItems.classList.add('hidden');
      cartEmpty.classList.remove('hidden');
      cartFooter.style.display = 'none';
      return;
    }
    
    cartItems.classList.remove('hidden');
    cartEmpty.classList.add('hidden');
    cartFooter.style.display = 'block';
    
    cartItems.innerHTML = state.cart.map((item, index) => `
      <div class="cart-item" data-index="${index}">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-name">${escapeHtml(item.name)}</h4>
          <p class="cart-item-price">${formatPrice(item.unitPrice)} c/u</p>
          ${item.extras && item.extras.length ? `
            <div class="cart-item-extras">
              ${item.extras.map(extra => `<span>+ ${escapeHtml(extra.name)} (${formatPrice(extra.price)})</span>`).join('')}
            </div>
          ` : ''}
          ${item.notes ? `<p class="cart-item-notes">Nota: ${escapeHtml(item.notes)}</p>` : ''}
          <div class="cart-item-actions">
            <button class="qty-btn" data-action="decrease" data-index="${index}" aria-label="Disminuir cantidad">−</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button class="qty-btn" data-action="increase" data-index="${index}" aria-label="Aumentar cantidad">+</button>
            <button class="cart-item-remove" data-action="remove" data-index="${index}">Eliminar</button>
          </div>
        </div>
      </div>
    `).join('');
    
    const total = getCartTotal();
    subtotalEl.textContent = formatPrice(total);
    totalEl.textContent = formatPrice(total);
  };

  const initCartDrawer = () => {
    const cartToggle = document.getElementById('cartToggle');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartClose = document.getElementById('cartClose');
    const clearCartBtn = document.getElementById('clearCartBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartItems = document.getElementById('cartItems');
    
    if (!cartToggle || !cartDrawer) return;
    
    cartDrawer.setAttribute('aria-hidden', 'true');
    cartOverlay.setAttribute('aria-hidden', 'true');
    
    const open = () => {
      cartDrawer.classList.add('open');
      cartDrawer.setAttribute('aria-hidden', 'false');
      cartOverlay.classList.add('open');
      cartToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('cart-open');
      renderCartItems();
    };
    
    const close = () => {
      cartDrawer.classList.remove('open');
      cartDrawer.setAttribute('aria-hidden', 'true');
      cartOverlay.classList.remove('open');
      cartToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('cart-open');
    };
    
    cartToggle.addEventListener('click', () => {
      if (cartDrawer.classList.contains('open')) close();
      else open();
    });
    
    cartClose.addEventListener('click', close);
    cartOverlay.addEventListener('click', close);
    
    cartItems.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const index = parseInt(btn.dataset.index);
      const action = btn.dataset.action;
      
      if (action === 'increase') updateQuantity(index, 1);
      if (action === 'decrease') updateQuantity(index, -1);
      if (action === 'remove') removeFromCart(index);
    });
    
    clearCartBtn.addEventListener('click', clearCart);
    
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Carrito vacío', 'Agrega productos antes de finalizar', 'warning');
        return;
      }
      generateWhatsAppOrder();
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cartDrawer.classList.contains('open')) {
        close();
      }
    });
  };

  const generateWhatsAppOrder = () => {
    const globalNotes = document.getElementById('cartNotes').value.trim();
    const total = getCartTotal();
    
    let message = '¡Hola BER-MELY! 👋\n\nQuiero hacer el siguiente pedido:\n\n';
    state.cart.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - ${formatPrice(item.unitPrice * item.quantity)}\n`;
      if (item.extras && item.extras.length) {
        item.extras.forEach(extra => {
          message += `  └ + ${extra.name} (${formatPrice(extra.price)})\n`;
        });
      }
      if (item.notes) {
        message += `  └ Nota: ${item.notes}\n`;
      }
    });
    
    message += `\n*Total: ${formatPrice(total)}*\n`;
    
    if (globalNotes) {
      message += `\nNotas generales: ${globalNotes}\n`;
    }
    
    message += '\n¿Me confirman el pedido y el tiempo de entrega? ¡Gracias!';
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${config.whatsappNumber}?text=${encoded}`, '_blank', 'noopener');
  };

  // ========================================================================
  // MENÚ DIGITAL
  // ========================================================================

  const getCategories = () => {
    const categories = new Map();
    menuData.forEach(item => {
      if (!categories.has(item.category)) {
        categories.set(item.category, new Set());
      }
      categories.get(item.category).add(item.subcategory);
    });
    return categories;
  };

  const getCategoryCounts = () => {
    const counts = {};
    menuData.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  };

  const populateFilters = () => {
    const categorySelect = document.getElementById('menuCategory');
    const subcategorySelect = document.getElementById('menuSubcategory');
    const categories = getCategories();
    
    categorySelect.innerHTML = '<option value="all">Todas las categorías</option>';
    categories.forEach((subcategories, category) => {
      categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
    });
  };

  const populatePills = () => {
    const pills = document.getElementById('menuPills');
    const counts = getCategoryCounts();
    const categories = Array.from(getCategories().keys());
    
    pills.innerHTML = `
      <button class="category-pill active" data-category="all">Todos <span class="pill-count">${menuData.length}</span></button>
      ${categories.map(cat => `
        <button class="category-pill" data-category="${cat}">${cat} <span class="pill-count">${counts[cat]}</span></button>
      `).join('')}
    `;
    
    pills.addEventListener('click', (e) => {
      const pill = e.target.closest('.category-pill');
      if (!pill) return;
      
      const category = pill.dataset.category;
      state.menuFilter.category = category;
      state.menuFilter.subcategory = 'all';
      document.getElementById('menuCategory').value = category;
      document.getElementById('menuSubcategory').value = 'all';
      
      pills.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      
      renderMenu();
    });
  };

  const updateSubcategories = () => {
    const subcategorySelect = document.getElementById('menuSubcategory');
    const categories = getCategories();
    const subcategories = categories.get(state.menuFilter.category) || new Set();
    
    subcategorySelect.innerHTML = '<option value="all">Todas las subcategorías</option>';
    
    if (state.menuFilter.category !== 'all') {
      subcategories.forEach(sub => {
        subcategorySelect.innerHTML += `<option value="${sub}">${sub}</option>`;
      });
    }
    
    subcategorySelect.value = state.menuFilter.subcategory;
  };

  const filterMenu = () => {
    let filtered = [...menuData];
    
    if (state.menuFilter.showFavorites) {
      filtered = filtered.filter(item => state.favorites.has(item.id));
    }
    
    if (state.menuFilter.search) {
      const term = state.menuFilter.search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      filtered = filtered.filter(item => {
        const searchable = `${item.name} ${item.description} ${item.category} ${item.subcategory} ${item.tags.join(' ')}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return searchable.includes(term);
      });
    }
    
    if (state.menuFilter.category !== 'all') {
      filtered = filtered.filter(item => item.category === state.menuFilter.category);
    }
    
    if (state.menuFilter.subcategory !== 'all') {
      filtered = filtered.filter(item => item.subcategory === state.menuFilter.subcategory);
    }
    
    switch (state.menuFilter.sort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        filtered.sort((a, b) => b.orders - a.orders);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.orders - a.orders;
        });
    }
    
    return filtered;
  };

  const renderMenu = () => {
    const menuGrid = document.getElementById('menuGrid');
    const menuEmpty = document.getElementById('menuEmpty');
    const resultsCount = document.getElementById('resultsCount');
    const showFavoritesBtn = document.getElementById('showFavorites');
    
    if (!menuGrid) return;
    
    const filtered = filterMenu();
    
    updateSubcategories();
    
    if (filtered.length === 0) {
      menuGrid.innerHTML = '';
      menuGrid.hidden = true;
      menuEmpty.hidden = false;
      resultsCount.textContent = '0 productos encontrados';
      showFavoritesBtn.textContent = state.menuFilter.showFavorites ? 'Ver todos' : 'Ver favoritos';
      return;
    }
    
    menuGrid.hidden = false;
    menuEmpty.hidden = true;
    
    const viewClass = state.menuView === 'list' ? 'list-view' : '';
    menuGrid.className = `menu-grid ${viewClass}`;
    
    menuGrid.innerHTML = filtered.map(item => `
      <article class="product-card" data-id="${item.id}" tabindex="0" role="button" aria-label="Ver ${escapeHtml(item.name)}">
        <button type="button" class="product-favorite ${state.favorites.has(item.id) ? 'active' : ''}" data-id="${item.id}" aria-label="${state.favorites.has(item.id) ? 'Quitar de' : 'Agregar a'} favoritos" aria-pressed="${state.favorites.has(item.id)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="product-image">
          <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">
        </div>
        <div class="product-content">
          <div class="product-header">
            <p class="product-category">${escapeHtml(item.category)} • ${escapeHtml(item.subcategory)}</p>
            <h3 class="product-name">${escapeHtml(item.name)}</h3>
          </div>
          <p class="product-desc">${escapeHtml(item.description)}</p>
          <div class="product-footer">
            <p class="product-price">${formatPrice(item.price)}</p>
            <button type="button" class="btn-add" data-id="${item.id}" data-action="quick-add" aria-label="Ver detalle de ${escapeHtml(item.name)}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
              Ver más
            </button>
          </div>
        </div>
      </article>
    `).join('');
    
    resultsCount.textContent = state.menuFilter.showFavorites 
      ? `Mostrando ${filtered.length} favorito${filtered.length !== 1 ? 's' : ''}` 
      : `Mostrando ${filtered.length} de ${menuData.length} productos`;
    showFavoritesBtn.textContent = state.menuFilter.showFavorites ? 'Ver todos' : 'Ver favoritos';
  };

  const initMenu = () => {
    populateFilters();
    populatePills();
    
    const menuSearch = document.getElementById('menuSearch');
    const menuCategory = document.getElementById('menuCategory');
    const menuSubcategory = document.getElementById('menuSubcategory');
    const menuSort = document.getElementById('menuSort');
    const viewGrid = document.getElementById('viewGrid');
    const viewList = document.getElementById('viewList');
    const resetFilters = document.getElementById('resetFilters');
    const showFavorites = document.getElementById('showFavorites');
    const menuGrid = document.getElementById('menuGrid');
    
    menuSearch.addEventListener('input', debounce((e) => {
      state.menuFilter.search = e.target.value.trim();
      renderMenu();
    }, 200));
    
    menuCategory.addEventListener('change', (e) => {
      state.menuFilter.category = e.target.value;
      state.menuFilter.subcategory = 'all';
      document.getElementById('menuSubcategory').value = 'all';
      
      document.querySelectorAll('.category-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.category === e.target.value);
      });
      
      renderMenu();
    });
    
    menuSubcategory.addEventListener('change', (e) => {
      state.menuFilter.subcategory = e.target.value;
      renderMenu();
    });
    
    menuSort.addEventListener('change', (e) => {
      state.menuFilter.sort = e.target.value;
      renderMenu();
    });
    
    viewGrid.addEventListener('click', () => {
      state.menuView = 'grid';
      viewGrid.classList.add('active');
      viewGrid.setAttribute('aria-pressed', 'true');
      viewList.classList.remove('active');
      viewList.setAttribute('aria-pressed', 'false');
      renderMenu();
    });
    
    viewList.addEventListener('click', () => {
      state.menuView = 'list';
      viewList.classList.add('active');
      viewList.setAttribute('aria-pressed', 'true');
      viewGrid.classList.remove('active');
      viewGrid.setAttribute('aria-pressed', 'false');
      renderMenu();
    });
    
    resetFilters.addEventListener('click', () => {
      state.menuFilter = {
        search: '',
        category: 'all',
        subcategory: 'all',
        sort: 'default',
        showFavorites: false
      };
      menuSearch.value = '';
      menuCategory.value = 'all';
      menuSubcategory.value = 'all';
      menuSort.value = 'default';
      document.querySelectorAll('.category-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.category === 'all');
      });
      renderMenu();
    });
    
    showFavorites.addEventListener('click', () => {
      state.menuFilter.showFavorites = !state.menuFilter.showFavorites;
      renderMenu();
    });
    
    menuGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      const favBtn = e.target.closest('.product-favorite');
      const addBtn = e.target.closest('[data-action="quick-add"]');
      
      if (favBtn) {
        e.stopPropagation();
        const id = parseInt(favBtn.dataset.id);
        toggleFavorite(id, favBtn);
        return;
      }
      
      if (addBtn) {
        e.stopPropagation();
        const id = parseInt(addBtn.dataset.id);
        const product = menuData.find(p => p.id === id);
        if (product) openProductModal(product);
        return;
      }
      
      if (card) {
        const id = parseInt(card.dataset.id);
        const product = menuData.find(p => p.id === id);
        if (product) openProductModal(product);
      }
    });
    
    menuGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.product-card');
        if (card) {
          e.preventDefault();
          const id = parseInt(card.dataset.id);
          const product = menuData.find(p => p.id === id);
          if (product) openProductModal(product);
        }
      }
    });
    
    renderMenu();
  };

  const toggleFavorite = (id, btn) => {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('aria-label', 'Agregar a favoritos');
      showToast('Favorito eliminado', 'Producto eliminado de favoritos', 'warning');
    } else {
      state.favorites.add(id);
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      btn.setAttribute('aria-label', 'Quitar de favoritos');
      showToast('Favorito agregado', 'Producto guardado en favoritos', 'success');
    }
    
    if (state.menuFilter.showFavorites) {
      renderMenu();
    }
  };

  // ========================================================================
  // ESPECIALIDADES
  // ========================================================================

  const renderSpecialties = () => {
    const container = document.getElementById('specialtiesGrid');
    if (!container) return;
    
    const specialties = menuData.filter(item => item.featured).slice(0, 6);
    
    container.innerHTML = specialties.map((item, index) => `
      <article class="specialty-card ${index === 0 ? 'featured' : ''} reveal-up" data-delay="${(index + 1) * 100}">
        ${index === 0 ? '<span class="specialty-badge">⭐ Más vendido</span>' : ''}
        <div class="specialty-image">
          <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">
        </div>
        <div class="specialty-content">
          <h3 class="specialty-name">${escapeHtml(item.name)}</h3>
          <p class="specialty-desc">${escapeHtml(item.description)}</p>
          <div class="specialty-footer">
            <span class="specialty-price">${formatPrice(item.price)}</span>
            <button class="btn btn-primary btn-sm" data-add-specialty="${item.id}">Agregar</button>
          </div>
        </div>
      </article>
    `).join('');
    
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-add-specialty]');
      if (!btn) return;
      const id = parseInt(btn.dataset.addSpecialty);
      const product = menuData.find(p => p.id === id);
      if (product) addToCart(product);
    });
  };

  // ========================================================================
  // GALERÍA
  // ========================================================================

  const renderGallery = () => {
    const container = document.getElementById('galleryGrid');
    if (!container) return;
    
    container.innerHTML = galleryData.map((item, index) => `
      <figure class="gallery-item reveal-scale" data-index="${index}" tabindex="0" role="button" aria-label="Ver imagen ampliada: ${escapeHtml(item.caption)}">
        <img src="${item.src}" alt="${escapeHtml(item.caption)}" loading="lazy" decoding="async">
        <div class="gallery-overlay">
          <figcaption class="gallery-caption">${escapeHtml(item.caption)}</figcaption>
        </div>
      </figure>
    `).join('');
  };

  const initLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (!lightbox || !galleryGrid) return;
    
    lightbox.setAttribute('aria-hidden', 'true');
    
    let currentIndex = 0;
    
    const open = (index) => {
      currentIndex = index;
      updateLightbox();
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
    };
    
    const close = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
    };
    
    const updateLightbox = () => {
      const item = galleryData[currentIndex];
      lightboxImage.src = item.src;
      lightboxImage.alt = item.caption;
      lightboxCaption.textContent = item.caption;
    };
    
    const next = () => {
      currentIndex = (currentIndex + 1) % galleryData.length;
      updateLightbox();
    };
    
    const prev = () => {
      currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
      updateLightbox();
    };
    
    galleryGrid.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      open(parseInt(item.dataset.index));
    });
    
    galleryGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const item = e.target.closest('.gallery-item');
        if (item) {
          e.preventDefault();
          open(parseInt(item.dataset.index));
        }
      }
    });
    
    lightboxClose.addEventListener('click', close);
    lightboxNext.addEventListener('click', next);
    lightboxPrev.addEventListener('click', prev);
    
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
    
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    }, { passive: true });
  };

  // ========================================================================
  // TESTIMONIOS
  // ========================================================================

  const renderTestimonials = () => {
    const container = document.getElementById('testimonialsSlider');
    if (!container) return;
    
    container.innerHTML = testimonialsData.map((item, index) => `
      <article class="testimonial-card reveal-up" data-delay="${(index + 1) * 100}">
        <div class="testimonial-quote" aria-hidden="true">“</div>
        <div class="testimonial-stars" aria-label="${item.rating} de 5 estrellas">
          ${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}
        </div>
        <p class="testimonial-text">${escapeHtml(item.text)}</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">
            <img src="${item.avatar}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">
          </div>
          <div class="testimonial-info">
            <h4>${escapeHtml(item.name)}</h4>
            <p>${escapeHtml(item.role)}</p>
          </div>
        </div>
      </article>
    `).join('');
  };

  // ========================================================================
  // RESERVACIONES
  // ========================================================================

  const initReservationForm = () => {
    const form = document.getElementById('reservationForm');
    const timeSelect = document.getElementById('resTime');
    const dateInput = document.getElementById('resDate');
    const status = document.getElementById('resStatus');
    
    if (!form || !timeSelect) return;
    
    const generateTimes = () => {
      const times = [];
      for (let h = 7; h <= 22; h++) {
        for (let m of ['00', '30']) {
          if (h === 22 && m === '30') continue;
          const hour = h.toString().padStart(2, '0');
          times.push(`${hour}:${m}`);
        }
      }
      return times;
    };
    
    timeSelect.innerHTML = '<option value="">Selecciona una hora</option>' + 
      generateTimes().map(t => `<option value="${t}">${t}</option>`).join('');
    
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    const validateField = (input, errorEl, message) => {
      if (!input.value.trim() || (input.type === 'checkbox' && !input.checked)) {
        input.classList.add('error');
        errorEl.textContent = message;
        return false;
      }
      input.classList.remove('error');
      errorEl.textContent = '';
      return true;
    };
    
    const validateEmail = (input, errorEl) => {
      if (!input.value.trim()) return true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        input.classList.add('error');
        errorEl.textContent = 'Ingresa un correo válido';
        return false;
      }
      input.classList.remove('error');
      errorEl.textContent = '';
      return true;
    };
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.className = 'form-status';
      status.textContent = '';
      
      const name = document.getElementById('resName');
      const phone = document.getElementById('resPhone');
      const email = document.getElementById('resEmail');
      const date = document.getElementById('resDate');
      const time = document.getElementById('resTime');
      const guests = document.getElementById('resGuests');
      const terms = document.getElementById('resTerms');
      const comments = document.getElementById('resComments');
      
      const isValid = 
        validateField(name, document.getElementById('resNameError'), 'El nombre es requerido') &&
        validateField(phone, document.getElementById('resPhoneError'), 'El teléfono es requerido') &&
        validateEmail(email, document.getElementById('resEmailError')) &&
        validateField(date, document.getElementById('resDateError'), 'La fecha es requerida') &&
        validateField(time, document.getElementById('resTimeError'), 'La hora es requerida') &&
        validateField(guests, document.getElementById('resGuestsError'), 'El número de personas es requerido') &&
        validateField(terms, document.getElementById('resTerms'), 'Debes aceptar la política de privacidad');
      
      if (!isValid) {
        status.className = 'form-status error';
        status.textContent = 'Por favor completa los campos requeridos.';
        return;
      }
      
      let message = '¡Hola BER-MELY! 👋\n\nQuiero hacer una reservación:\n\n';
      message += `*Nombre:* ${name.value}\n`;
      message += `*Teléfono:* ${phone.value}\n`;
      if (email.value) message += `*Correo:* ${email.value}\n`;
      message += `*Fecha:* ${date.value}\n`;
      message += `*Hora:* ${time.value}\n`;
      message += `*Personas:* ${guests.value === 'more' ? 'Más de 8' : guests.value}\n`;
      if (comments.value) message += `*Comentarios:* ${comments.value}\n`;
      message += `\n¿Me confirman la reservación? ¡Gracias!`;
      
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/${config.whatsappNumber}?text=${encoded}`, '_blank', 'noopener');
      
      status.className = 'form-status success';
      status.textContent = '¡Reservación enviada! Te contactaremos por WhatsApp para confirmar.';
      form.reset();
    });
    
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('blur', () => {
        const errorEl = document.getElementById(field.id + 'Error');
        if (errorEl && field.hasAttribute('required')) {
          validateField(field, errorEl, 'Este campo es requerido');
        }
        if (field.id === 'resEmail') validateEmail(field, errorEl);
      });
    });
  };

  // ========================================================================
  // MODAL DE PRIVACIDAD
  // ========================================================================

  const initPrivacyModal = () => {
    const privacyLink = document.getElementById('privacyLink');
    const privacyModal = document.getElementById('privacyModal');
    const privacyOverlay = document.getElementById('privacyOverlay');
    const privacyClose = document.getElementById('privacyClose');
    
    if (!privacyLink || !privacyModal) return;
    
    privacyModal.setAttribute('aria-hidden', 'true');
    privacyOverlay.setAttribute('aria-hidden', 'true');
    
    const open = () => {
      privacyModal.classList.add('open');
      privacyModal.setAttribute('aria-hidden', 'false');
      privacyOverlay.classList.add('open');
      document.body.classList.add('modal-open');
    };
    
    const close = () => {
      privacyModal.classList.remove('open');
      privacyModal.setAttribute('aria-hidden', 'true');
      privacyOverlay.classList.remove('open');
      document.body.classList.remove('modal-open');
    };
    
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      open();
    });
    
    privacyClose.addEventListener('click', close);
    privacyOverlay.addEventListener('click', close);
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && privacyModal.classList.contains('open')) {
        close();
      }
    });
  };

  // ========================================================================
  // TOAST NOTIFICATIONS
  // ========================================================================

  const showToast = (title, message, type = 'info') => {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
      <span class="toast-icon" aria-hidden="true">${icons[type]}</span>
      <div class="toast-content">
        <div class="toast-title">${escapeHtml(title)}</div>
        <div class="toast-message">${escapeHtml(message)}</div>
      </div>
    `;
    
    container.appendChild(toast);
    toast.offsetHeight;
    
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // ========================================================================
  // SCROLL REVEAL ANIMATIONS
  // ========================================================================

  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    
    if (!revealElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
  };

  // ========================================================================
  // STATS COUNTERS
  // ========================================================================

  const initCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    if (!counters.length) return;
    
    const animate = (el) => {
      const target = parseFloat(el.dataset.target);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const startTime = performance.now();
      const isFloat = target % 1 !== 0;
      
      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        
        el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
        
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };
      
      requestAnimationFrame(update);
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  };

  // ========================================================================
  // PARALLAX HERO
  // ========================================================================

  const initParallax = () => {
    const heroBg = document.querySelector('.hero-bg img');
    if (!heroBg) return;
    
    let ticking = false;
    
    const updateParallax = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const translateY = scrollY * 0.4;
      heroBg.style.transform = `scale(1.1) translateY(${translateY}px)`;
      ticking = false;
    };
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
    
    updateParallax();
  };

  // ========================================================================
  // NAVEGACIÓN ACTIVA
  // ========================================================================

  const initActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    if (!sections.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: `-${document.getElementById('header')?.offsetHeight || 72}px 0px 0px 0px`
    });
    
    sections.forEach(section => observer.observe(section));
  };

  // ========================================================================
  // FOOTER AÑO
  // ========================================================================

  const initFooter = () => {
    const yearEl = document.getElementById('footerYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  };

  // ========================================================================
  // PRODUCT MODAL - SIN EXTRAS, CON OPCIONES PARA DESAYUNOS
  // ========================================================================

  let currentModalProduct = null;
  let currentModalQuantity = 1;
  let currentModalOptions = {};

  const isBreakfastCategory = (category) => {
    return category === 'Desayunos';
  };

  const openProductModal = (product) => {
    currentModalProduct = product;
    currentModalQuantity = 1;
    currentModalOptions = {};
    
    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('productModalOverlay');
    const image = document.getElementById('productModalImage');
    const category = document.getElementById('productModalCategory');
    const name = document.getElementById('productModalName');
    const price = document.getElementById('productModalPrice');
    const desc = document.getElementById('productModalDesc');
    const qtyValue = document.getElementById('productQtyValue');
    const notes = document.getElementById('productModalNotes');
    const optionsContainer = document.getElementById('productModalOptions');
    const cafeTeGroup = document.getElementById('optionGroupCafeTe');
    const salsaGroup = document.getElementById('optionGroupSalsa');
    
    image.src = product.image;
    image.alt = product.name;
    category.textContent = `${product.category} • ${product.subcategory}`;
    name.textContent = product.name;
    price.textContent = formatPrice(product.price);
    desc.textContent = product.description;
    qtyValue.textContent = '1';
    notes.value = '';
    
    if (isBreakfastCategory(product.category)) {
      optionsContainer.style.display = 'block';
      
      const isChilaquiles = product.subcategory === 'Chilaquiles';
      const isEnchiladas = product.subcategory === 'Enchiladas';
      
      cafeTeGroup.style.display = 'block';
      
      if (isChilaquiles || isEnchiladas) {
        salsaGroup.style.display = 'block';
        const salsaRadios = salsaGroup.querySelectorAll('input[name="salsa"]');
        salsaRadios.forEach(r => r.checked = false);
        salsaRadios[0].checked = true;
      } else {
        salsaGroup.style.display = 'none';
      }
      
      const cafeRadios = cafeTeGroup.querySelectorAll('input[name="bebida"]');
      cafeRadios.forEach(r => r.checked = false);
      cafeRadios[0].checked = true;
      
    } else {
      optionsContainer.style.display = 'none';
    }
    
    updateProductModalTotal();
    
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeProductModal = () => {
    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('productModalOverlay');
    
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    
    currentModalProduct = null;
    currentModalQuantity = 1;
    currentModalOptions = {};
  };

  const updateProductModalTotal = () => {
    if (!currentModalProduct) return;
    
    const total = currentModalProduct.price * currentModalQuantity;
    document.getElementById('productModalTotal').textContent = formatPrice(total);
  };

  const getProductOptions = () => {
    const options = {};
    const bebidaRadios = document.querySelectorAll('input[name="bebida"]');
    const salsaRadios = document.querySelectorAll('input[name="salsa"]');
    
    bebidaRadios.forEach(r => {
      if (r.checked) options.bebida = r.value;
    });
    
    salsaRadios.forEach(r => {
      if (r.checked) options.salsa = r.value;
    });
    
    return options;
  };

  const initProductModal = () => {
    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('productModalOverlay');
    const closeBtn = document.getElementById('productModalClose');
    const cancelBtn = document.getElementById('productModalCancel');
    const addBtn = document.getElementById('productModalAdd');
    const qtyMinus = document.getElementById('productQtyMinus');
    const qtyPlus = document.getElementById('productQtyPlus');
    const notes = document.getElementById('productModalNotes');
    
    if (!modal) return;
    
    modal.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    
    closeBtn.addEventListener('click', closeProductModal);
    cancelBtn.addEventListener('click', closeProductModal);
    overlay.addEventListener('click', closeProductModal);
    
    qtyMinus.addEventListener('click', () => {
      if (currentModalQuantity > 1) {
        currentModalQuantity -= 1;
        document.getElementById('productQtyValue').textContent = currentModalQuantity;
        updateProductModalTotal();
      }
    });
    
    qtyPlus.addEventListener('click', () => {
      currentModalQuantity += 1;
      document.getElementById('productQtyValue').textContent = currentModalQuantity;
      updateProductModalTotal();
    });
    
    addBtn.addEventListener('click', () => {
      if (!currentModalProduct) return;
      
      const options = getProductOptions();
      let productName = currentModalProduct.name;
      
      if (isBreakfastCategory(currentModalProduct.category)) {
        if (options.salsa) {
          productName = productName.replace(/\(verdes o rojas\)/i, `(${options.salsa}s)`);
          productName = productName.replace(/\(verdes o rojos\)/i, `(${options.salsa}s)`);
        }
        if (options.bebida) {
          if (productName.toLowerCase().includes('café') || productName.toLowerCase().includes('té')) {
            productName = productName.replace(/(café|té)/i, options.bebida);
          } else {
            productName = productName + ` (con ${options.bebida})`;
          }
        }
      }
      
      addToCart({
        id: currentModalProduct.id,
        name: productName,
        basePrice: currentModalProduct.price,
        unitPrice: currentModalProduct.price,
        image: currentModalProduct.image,
        quantity: currentModalQuantity,
        extras: [],
        notes: notes.value.trim()
      });
      
      closeProductModal();
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeProductModal();
      }
    });
  };

  // ========================================================================
  // ANIMACIONES ADICIONALES
  // ========================================================================

  const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  const initStaggerReveal = () => {
    if (prefersReducedMotion()) return;
    
    const grids = [
      { selector: '.specialties-grid', child: '.specialty-card', delay: 100 },
      { selector: '.about-values', child: '.value-card', delay: 150 },
      { selector: '.menu-grid', child: '.product-card', delay: 80 },
      { selector: '.gallery-grid', child: '.gallery-item', delay: 100 },
      { selector: '.testimonials-slider', child: '.testimonial-card', delay: 120 },
      { selector: '.footer-links', child: 'li', delay: 50 }
    ];
    
    grids.forEach(({ selector, child, delay }) => {
      const container = document.querySelector(selector);
      if (!container) return;
      const items = container.querySelectorAll(child);
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * delay}ms`;
        item.classList.add('reveal-up');
      });
    });
  };

  const initMagneticButtons = () => {
    if (prefersReducedMotion()) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    const buttons = document.querySelectorAll('.btn, .qty-btn, .view-btn');
    
    buttons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  };

  const initDecorativeParallax = () => {
    if (prefersReducedMotion()) return;
    
    const decoratives = document.querySelectorAll('.about::before, .specialties::before, .menu::before');
    if (decoratives.length === 0) return;
    
    let ticking = false;
    const updateParallax = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      decoratives.forEach((el, index) => {
        const speed = 0.05 + (index * 0.02);
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
      ticking = false;
    };
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  };

  const initHeroAnimations = () => {
    if (prefersReducedMotion()) return;
    
    const heroElements = document.querySelectorAll('.hero-label, .hero-title, .hero-subtitle, .hero-slogan, .hero-actions');
    heroElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.animation = 'none';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + (index * 150));
    });
  };

  const initPulseAnimations = () => {
    if (prefersReducedMotion()) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pulse-once');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.section-label, .stat-item').forEach(el => observer.observe(el));
  };

  // ========================================================================
  // INICIALIZACIÓN PRINCIPAL
  // ========================================================================

  const initApp = () => {
    loadCart();
    initLoader();
    initHeader();
    initMobileNav();
    initSearchBar();
    initCartDrawer();
    renderSpecialties();
    initMenu();
    renderGallery();
    initLightbox();
    renderTestimonials();
    initReservationForm();
    initPrivacyModal();
    initProductModal();
    initStaggerReveal();
    initMagneticButtons();
    initDecorativeParallax();
    initHeroAnimations();
    initPulseAnimations();
    initScrollReveal();
    initCounters();
    initParallax();
    initActiveNav();
    initFooter();
    updateCartBadge();
    
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 2500);
  };

  // ========================================================================
  // ARRANQUE: PRIMERO CARGAR MENÚ, LUEGO INICIAR APP
  // ========================================================================

  const start = async () => {
    await loadMenuData();
    initApp();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

})();