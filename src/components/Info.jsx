import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Info() {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      {username === ":Ada" ? (
        <p>
          Augusta Ada King, condesa de Lovelace (Londres, 10 de diciembre de
          1815-íd., 27 de noviembre de 1852), registrada al nacer como Augusta
          Ada Byron y conocida habitualmente como Ada Lovelace, fue una
          matemática y escritora británica, célebre sobre todo por su trabajo
          acerca de la computadora mecánica de uso general de Charles Babbage,
          la denominada máquina analítica. Fue la primera en reconocer que la
          máquina tenía aplicaciones más allá del cálculo puro y en haber
          publicado lo que se reconoce hoy como el primer algoritmo destinado a
          ser procesado por una máquina, por lo que se la considera como la
          primera programadora de ordenadores.2​3​4​ Lovelace fue la única hija
          legítima del poeta lord Byron y su esposa lady Byron. Byron se separó
          de su esposa un mes después del nacimiento de Ada y dejó Inglaterra
          para siempre cuatro meses después. Conmemoró la despedida en un poema
          que comienza: «¿Es tu rostro como el de tu madre, mi bella hija? ¡ADA!
          Hija única de mi casa y mi corazón».5​ Murió en la Guerra de
          independencia de Grecia cuando Ada tenía ocho años. Dedujo y previó la
          capacidad de los ordenadores para ir más allá de los simples cálculos
          de números, mientras que otros, incluido el propio Babbage, se
          centraron únicamente en estas capacidades.6​ Su madre, Anne Isabella
          Noel Byron, fue matemática y activista política y social.7​ Su padre
          fue el conocido poeta George Byron.8​ Su posición social y su
          educación la llevaron a conocer a científicos importantes como Andrew
          Crosse, Sir David Brewster, Charles Wheatstone, Michael Faraday y al
          novelista Charles Dickens, relaciones que aprovechó para llegar más
          lejos en su educación. Entre estas relaciones se encuentra Mary
          Somerville, que fue su tutora durante un tiempo, además de amiga y
          estímulo intelectual.9​ Ada Byron se refería a sí misma como una
          científica poetisa y como analista (y metafísica).10​11​ A una edad
          temprana, su talento matemático la condujo a una relación de amistad
          prolongada con el matemático inglés Charles Babbage, y concretamente
          con la obra de Babbage sobre la máquina analítica.12​ Entre 1842 y
          1843, tradujo un artículo del ingeniero militar italiano Luigi
          Menabrea sobre la máquina, que complementó con un amplio conjunto de
          notas propias, denominado simplemente Notas. Estas notas contienen lo
          que se considera como el primer programa de ordenador, esto es, un
          algoritmo codificado para que una máquina lo procese. Las notas de
          Lovelace son importantes en la historia de la computación. Otros
          historiadores rechazan esta perspectiva y señalan que las notas
          personales de Babbage de los años 1836/1837 contienen los primeros
          programas para el motor.13​ También desarrolló una visión de la
          capacidad de las computadoras para ir más allá del mero cálculo o el
          cálculo de números, mientras que muchos otros, incluido el propio
          Babbage, se centraron solo en esas capacidades. Su mentalidad de
          'ciencia poética' la llevó a hacer preguntas sobre el motor analítico
          (como se muestra en sus notas) examinando cómo los individuos y la
          sociedad se relacionan con la tecnología como una herramienta de
          colaboración.
        </p>
      ) : (
        <></>
      )}
      {username === ":Alan" ? (
        <p>
          Alan Mathison Turing (Paddington, Londres; 23 de junio de
          1912-Wilmslow, Cheshire; 7 de junio de 1954) fue un matemático,
          lógico, informático teórico, criptógrafo, filósofo y biólogo teórico
          británico.1​2​3​4​5​ Está considerado uno de los padres de la ciencia
          de la computación y precursor de la informática moderna. Proporcionó
          una influyente formalización de los conceptos de algoritmo y
          computación: la máquina de Turing. Formuló su propia versión que hoy
          es ampliamente aceptada como la tesis de Church-Turing (1936). Durante
          la segunda guerra mundial, trabajó en descifrar los códigos nazis,
          particularmente los de la máquina Enigma, y durante un tiempo fue el
          director de la sección Naval Enigma de Bletchley Park. Se ha estimado
          que su trabajo acortó la duración de esa guerra entre dos y cuatro
          años.6​ Tras la guerra, diseñó uno de los primeros computadores
          electrónicos programables digitales en el Laboratorio Nacional de
          Física del Reino Unido y poco tiempo después construyó otra de las
          primeras máquinas en la Universidad de Mánchester. En el campo de la
          inteligencia artificial, es conocido sobre todo por la concepción de
          la prueba de Turing (1950), un criterio según el cual puede juzgarse
          la inteligencia de una máquina si sus respuestas en la prueba son
          indistinguibles de las de un ser humano. La carrera de Turing terminó
          súbitamente tras ser procesado por homosexualidad en 1952. Dos años
          después de su condena, murió —según la versión oficial por suicidio;
          sin embargo, su muerte ha dado lugar a otras hipótesis, incluida la
          del envenenamiento accidental —. Después de una campaña pública en
          2009, el primer ministro británico, Gordon Brown, se disculpó
          públicamente en nombre del gobierno británico por «la forma espantosa
          en que [Turing] había sido tratado». La reina Isabel II le otorgó un
          indulto póstumo en 2013. El término «ley Alan Turing» ahora se usa de
          manera informal para referirse a una ley de 2017 en el Reino Unido que
          perdona retroactivamente a hombres amonestados o condenados en virtud
          de la legislación que prohibía los actos homosexuales.7​ Turing tiene
          un extenso legado con estatuas y muchas cosas que llevan su nombre,
          incluido un premio anual por innovación en informática. Aparece en el
          billete actual de 50 libras del Banco de Inglaterra,8​ que se lanzó el
          23 de junio de 2021, coincidiendo con su cumpleaños. Un programa de la
          BBC de 2019, votado por la audiencia, lo nombró la persona más grande
          del siglo xx.9​
        </p>
      ) : (
        <></>
      )}
      {username === ":Margaret" ? (
        <p>
          Margaret Hamilton (Paoli, Indiana, 17 de agosto de 1936) es una
          científica computacional, matemática e ingeniera de Software
          estadounidense. Fue directora de la División de Ingeniería de Software
          del Laboratorio de Instrumentación del MIT,1​ donde con su equipo
          desarrolló el software de navegación "on-board" para el Programa
          Espacial Apolo.2​3​4​ Fue fundadora, en 1976, de la empresa Higher
          Order Software. En 1986, se convirtió en la fundadora y CEO de
          Hamilton Technologies, Inc. en Cambridge, Massachusetts. La compañía
          se desarrolló alrededor del lenguaje universal de sistemas basada en
          su paradigma de "desarrollo antes del hecho" (DBTF, del inglés
          Development Before the Fact) para sistemas de diseño de software.5​
          Acuñó el término «ingeniería de software» para distinguir entre el
          trabajo de hardware y otras ingenierías. A pesar de que su idea no fue
          bien recibida al inicio, eventualmente el software generó el mismo
          respeto que otras disciplinas.6​7​ El 22 de noviembre de 2016,
          Hamilton recibió la Medalla Presidencial de la Libertad, entregada por
          el expresidente de Estados Unidos Barack Obama, por su trabajo en la
          NASA durante las misiones Apolo.8​9​ Su enfoque del diseño de software
          fue pionero para la época, ya que los requisitos de robustez y
          tolerancia a fallos eran una prioridad para la seguridad y
          supervivencia de los astronautas durante los viajes a la Luna, es por
          esto que para muchos Margaret Hamilton es considerada una de las
          primeras personas en convertirse en Ingeniera de Confiabilidad del
          Sitio (del inglés Site Reliability Engineer).10​ Hamilton ha publicado
          más de 130 artículos, actas e informes, y ha llevado a cabo sesenta
          proyectos y seis grandes programas.
        </p>
      ) : (
        <></>
      )}
      {username === ":Ken" ? (
        <p>
          Kenneth Lane Thompson (Nueva Orleans, Luisiana; 4 de febrero de 1943),
          más conocido como Ken Thompson, es un pionero en las ciencias de la
          computación. Su trabajo con el lenguaje de programación B y el sistema
          operativo UNIX y Plan 9 para los laboratorios Bell. Se le adjudica a
          Thompson, junto a Dennis Ritchie, la creación de UNIX. Biografía En
          1965 se diploma en ciencias y en 1966 consigue un máster en ingeniería
          eléctrica y ciencias de la computación, por la universidad de
          California. Ken Thompson (izquierda) y Dennis Ritchie En los años 60,
          Thompson y Dennis Ritchie trabajaron el sistema operativo Multics.
          Mientras escribía Multics, Thompson creó el lenguaje de programación
          B, al que llamó así por su esposa, Bonnie, (también se dice que fue
          probablemente una contracción de "BCPL"), el cual sería el precursor
          del C. Tanto Thompson como Ritchie abandonaron el desarrollo de
          Multics por su creciente complejidad, y en 1969 crean el sistema
          operativo UNIX. Thompson había desarrollado la versión de CTSS del
          editor QED, que incluyó las expresiones regulares para buscar el
          texto. QED y un editor más moderno ed (el editor por defecto en Unix)
          contribuyeron al desarrollo de las expresiones regulares. Estas
          llegaron a ser importantes en procesadores de texto. Casi todos los
          programas que trabajan con expresiones regulares hoy, utilizan una
          cierta variante de la notación de Thompson. También trabajó en el
          desarrollo de la PDP-11 y en la introducción de las pipes o tuberías
          en los sistemas operativos. El 2 de septiembre de 1992, inventa junto
          a Rob Pike el código de caracteres UTF-8, pero no fue presentado
          oficialmente hasta enero de 1993 en una conferencia en San Diego.
          Junto con Joseph Condon, creó el hardware y el software para Belle, un
          ordenador de ajedrez. Más adelante, con la ayuda del experto
          ajedrecista John Roycroft, Thompson distribuyó sus primeros resultados
          en CD-ROM. El estilo de programación de Thompson ha influenciado
          notablemente a otros programadores. A finales de 2000, Thompson se
          retiró de los laboratorios de Bell, para trabajar en Entrisphere donde
          estuvo hasta 2006. Actualmente trabaja para Google en el desarrollo
          del lenguaje Go.
        </p>
      ) : (
        <></>
      )}
      {username === ":James" ? (
        <p>
          Gosling asistió a la escuela secundaria William Aberhart en Calgary,
          Alberta. Mientras estaba en la escuela secundaria, escribió parte del
          software para analizar datos del satélite ISIS 2 , trabajando para el
          departamento de física de la Universidad de Calgary . [4] Recibió una
          Licenciatura en Ciencias de la Universidad de Calgary [5] y su MA y
          Ph.D. de la Universidad Carnegie Mellon , todos en informática . [2]
          [6] [7] Escribió una versión de Emacs llamada Gosling Emacs(Gosmacs)
          mientras trabajaba para obtener su doctorado. Creó una versión
          multiprocesador de Unix para un sistema informático de 16 vías [8]
          mientras estaba en la Universidad Carnegie Mellon, antes de unirse a
          Sun Microsystems . También desarrolló allí varios compiladores y
          sistemas de correo . Carrera y contribuciones Gosling estuvo en Sun
          Microsystems entre 1984 y 2010 (26 años). En Sun, inventó uno de los
          primeros sistemas de ventanas de Unix llamado NeWS , que se convirtió
          en una alternativa menos utilizada al X Window que aún se usa , porque
          Sun no le otorgó una licencia de código abierto. [ cita requerida ] Es
          conocido como el padre del lenguaje de programación Java . [9] [10] Se
          le ocurrió la idea de Java VM mientras escribía un programa para
          portar software desde un PERQ traduciendo Perq Q-Code al ensamblador
          VAX y emulando el hardware. Generalmente se le atribuye haber
          inventado el lenguaje de programación Java en 1994. [11] [12] [13]
          Creó el diseño original de Java e implementó el compilador original y
          la máquina virtual del lenguaje . [14] Gosling remonta los orígenes
          del enfoque a sus primeros días de estudiante de posgrado, cuando creó
          una máquina virtual de código p para el laboratorio.computadora DEC
          VAX , para que su profesor pudiera ejecutar programas escritos en UCSD
          Pascal . En el trabajo que condujo a Java en Sun, vio que la ejecución
          de arquitectura neutral para programas ampliamente distribuidos se
          podía lograr mediante la implementación de una filosofía similar:
          programar siempre para la misma máquina virtual. [15] Otra
          contribución de Gosling fue coescribir el programa " bundle ",
          conocido como "shar", una utilidad detallada en el libro de Brian
          Kernighan y Rob Pike The Unix Programming Environment . [dieciséis]
          Dejó Sun Microsystems el 2 de abril de 2010, después de que Oracle
          Corporation la adquiriera , [9] citando reducciones en el salario, el
          estado y la capacidad de toma de decisiones, junto con el cambio de
          rol y los desafíos éticos. [17] Desde entonces, ha adoptado una
          postura muy crítica hacia Oracle en las entrevistas, señalando que
          "durante las reuniones de integración entre Sun y Oracle, en las que
          nos interrogaron sobre la situación de las patentes entre Sun y
          Google, pudimos ver brillar los ojos del abogado de Oracle ." [10]
          Aclaró su posición durante el juicio de Oracle v. Google sobre
          Android: "Si bien tengo diferencias con Oracle, en este caso tienen
          razón. Google engañó totalmente a Sun. Todos estábamos realmente
          molestos, incluso Jonathan[Schwartz]: simplemente decidió poner una
          cara feliz e intentó convertir los limones en limonada, lo que molestó
          a mucha gente en Sun". [18] Sin embargo, aprobó la decisión del
          tribunal de que las API no deberían tener derechos de autor. [ 19] En
          marzo de 2011, Gosling se unió a Google . [20] Seis meses después,
          siguió a su colega Bill Vass y se unió a una startup llamada Liquid
          Robotics . [1] A finales de 2016, Liquid Robotics fue adquirida por
          Boeing . [21] Tras la adquisición, Gosling dejó Liquid Robotics para
          trabajar en Amazon Web Services como ingeniero distinguido en mayo de
          2017. [22] Es asesor de la empresa Scala Lightbend , [23] Director
          Independiente de Jelastic , [24] y Asesor Estratégico de Eucalyptus ,
          [25] y es miembro del directorio de DIRTT Environmental
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
