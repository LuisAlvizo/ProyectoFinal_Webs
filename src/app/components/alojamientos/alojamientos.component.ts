import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css'],
})
export class AlojamientosComponent {
  constructor(private router: Router) {}

  listings = [
    {
      id: 0,
      title: 'Villa completa en Vallarta',
      description:
        'Disfruta de unas lindas vacaciones en este cómodo alojamiento, a solo unos pasos del mar, disfrutaras las soleadas tardes de Cancún en sus lindas albercas.',
      price: 100,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento1.jpg',
    },
    {
      id: 1,
      title: 'Casa frente al mar en Cancún',
      description:
        'Esta unidad lujosamente equipada está equipada con una increíble terraza de 650 pies cuadrados con vista al mar, cocina de mármol, sistema de wifi de malla fuerte.',
      price: 200,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento2.jpg',
    },
    {
      id: 2,
      title: 'Villa en Mazamitla',
      description:
        'Increíble villa estilo A-frame, disfruta del bosque con este estilo que de cabaña que a todo el mundo le encanta, le nombramos chalet Mágica ya que  iluminamos .',
      price: 50,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento3.jpg',
    },
    {
      id: 3,
      title: 'Villa completa en Punta Cana',
      description:
        'Una de las joyas de la corona de Corales, la exclusiva comunidad dentro de Puntacana Resort & Club. Corales 83 cuenta con un increíble patio interior, una decoración única.',
      price: 100,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento4.jpg',
    },
    {
      id: 4,
      title: 'Hotel Majestic-Barcelona',
      description:
        'A solo 10 minutos de la Plaza Cataluña. El aparthotel cuenta con estudios amplios y atractivos que permiten disfrutar de una estancia más cómoda y agradable. Excelente conexion WiFi ',
      price: 200,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento5.jpg',
    },
    {
      id: 5,
      title: 'Casa ecologica en Groelandia',
      description:
        'Casa ecológica. 2 km de Restuarant Qooqut nuan. 2 habitaciones con camas dobles y colchones que se pueden poner en la sala de estar. Con electricidad usando el generador.',
      price: 50,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento6.jpeg',
    },
    {
      id: 6,
      title: 'Hotel Maravilla en Oaxaca',
      description:
        'se encuentra en el centro de Oaxaca y ofrece piscina al aire libre, instalaciones para no fumadores con zonas designadas para fumadores, restaurante y conexión Wi-Fi gratuita.',
      price: 100,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento7.jpg',
    },
    {
      id: 7,
      title: 'Cabañas en Maldivas',
      description:
        'Con una de las playas más destacadas del mundo, Island Resort te da la bienvenida para disfrutar de unas vacaciones originales llenas de playa. Villa de agua entera en zanco con jacuzzi.',
      price: 200,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento8.jpg',
    },
    {
      id: 8,
      title: 'Hotel Hard Rock Mazatlan',
      description:
        'El Hard Rock se encuentra en Mazatlán, a pocos pasos de la playa de Camaron, y ofrece alojamiento con piscina al aire libre, aparcamiento privado gratuito. Este hotel cuenta con 5 estrellas.',
      price: 50,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento9.jpg',
    },
    {
      id: 9,
      title: 'Hotel Valari Brasil',
      description:
        'El América Bittar Hotel se encuentra a 400 metros de la torre de televisión de Brasilia y a 1,3 km del Complejo Cultural de la República, y ofrece habitaciones modernas y un restaurante.',
      price: 100,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento10.jpg',
    },
    {
      id: 10,
      title: 'Casa en el Sahara',
      description:
        '20 años de experiencia en el desierto del Sahara con nuestro MohammedMutlakcamp. Somos el campamento de SUPERHOSTS, en el área protegida más profunda. Perfecta para despejarte.',
      price: 200,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento11.jpg',
    },
    {
      id: 11,
      title: 'Villa Completa en Los Cabos',
      description:
        'Si buscas un lugar hogareño para tu estadía, esta habitación en nuestra casa familiar es perfecta para ti. Te ofrecemos todas las comodidades y una experiencia auténtica de la vida en la ciudad.',
      price: 50,
      imageUrl: 'assets/imagenesAlojamientos/alojamiento12.jpg',
    },
  ];

  //funcion que se maneja al momento de dar click en el boton de reserva
  // esto controla la info que se manda a la pantalla de registro
  reservar(casaElegida: any) {
    this.router.navigate([`/registro/:${casaElegida.id}`]);
    let alojamiento = JSON.stringify(casaElegida);
    localStorage.setItem('informacionCasaElegida', alojamiento);
    console.log(casaElegida);
  }
}
