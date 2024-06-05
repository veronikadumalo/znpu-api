import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  // await prisma.person.deleteMany({});
  // await prisma.deparments.deleteMany({});
  // await prisma.menuSubcategory.deleteMany({});
  // await prisma.menuCategory.deleteMany({});
  // await prisma.deparments.create({
  //   data: {
  //     title: "Drohobycki Oddiał ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Adam Chłopek",
  //           email: "adam-ch@mail.lviv.ua",
  //         },
  //         {
  //           name: "Maria Maćkowicz",
  //           email: "maria.dydynska@gmail.com",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Tarnopolski Oddiał ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Irena Nestajko",
  //           email: "nestajko_iryna@ukr.net",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Iwanofrankowski Oddział ZNPnUnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Oksana Bigun",
  //           email: "oksa.bigun67@gmail.com",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Zakarpacki Oddział ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Tetiana Pułyk",
  //           email: "pulykt@gmail.com",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Chmielnicki Oddział ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Julia Sierkowa",
  //           email: "yulsier@yahoo.pl",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Winnicki Oddział ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Julia Griaznowa",
  //           email: "griaznova.julia@gmail.com",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Żytomierski oddział ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Mirosława Starowierowa",
  //           email: "mira5447@mail.ru",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Czerniowiecki Oddizał ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Władysław Strutyński",
  //           email: "strukvl@gmail.com",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Rówieński Oddział ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Irena Androszczuk",
  //           email: "irenandro@gmail.com",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Odeski Oddział ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Swietłana Zajcewa-Wełykodna",
  //           email: "svetlana.zaytseva@gmail.com",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Kijowski Oddział ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Natalia Doroszkiewicz",
  //           email: "",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Wołyński Oddział ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Swietłana Zinczuk",
  //           email: "svitlana.zinczuk@gmail.com",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Charkowski Oddział ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Olga Heraszczenko",
  //           email: "olgeras@gmail.com",
  //         },
  //         {
  //           name: "Margarita Kondratenko",
  //           email: "kondratenko.margarita@gmail.com",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Czerkaski Oddział ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Irena Piątkowska",
  //           email: "yisp@ukr.net",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.deparments.create({
  //   data: {
  //     title: "Dnieprowski OddziaL ZNPnU",
  //     persons: {
  //       create: [
  //         {
  //           name: "Prezes Larysa Kolisnyk",
  //           email: "klarisaa@ukr.net",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.menuCategory.create({
  //   data: {
  //     title: "O NAS",
  //     subcategories: {
  //       create: [
  //         {
  //           title: "O NAS",
  //         },
  //         {
  //           title: "ODDZIAŁY ZNPWU",
  //         },
  //         {
  //           title: "STATUT",
  //         },
  //         {
  //           title: "NATALIA TULASIEWICZ",
  //         },
  //         {
  //           title: "AKTUALNOŚCI",
  //         },
  //         {
  //           title: "ADAPTACJA BUDYNKU",
  //         },
  //         {
  //           title: "HISTORIA ZAŁOŻENIA",
  //         },
  //         {
  //           title: "PRAWO UKRAIŃSKIE",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.menuCategory.create({
  //   data: { title: "STUDIA PODYPLOMOWE" },
  // });
  // await prisma.menuCategory.create({
  //   data: {
  //     title: "DZIEDZICTWO KULTUROWE",
  //     subcategories: {
  //       create: [
  //         {
  //           title: "MUZEUM ALEKSANDRA FREDRY",
  //         },
  //         { title: "WYSTAWA OBRAZÓW" },
  //         {
  //           title: "MUZEUM 'IZBA PAMIĘCI BRUNO SCHULZA'",
  //         },
  //         {
  //           title: "SŁOWNIK LITERATÓW POLSKICH",
  //         },
  //         {
  //           title: "CMENTARZ",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.menuCategory.create({
  //   data: {
  //     title: "WYDARZENIA",
  //     subcategories: {
  //       create: [
  //         {
  //           title: "KURSY",
  //         },
  //         { title: "KONFERENCJE" },
  //         {
  //           title: "SEMINARIA",
  //         },
  //         {
  //           title: "OLIMPIADY",
  //         },
  //         {
  //           title: "DYKTANDO",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.menuCategory.create({
  //   data: {
  //     title: "PROGRAMY",
  //     subcategories: {
  //       create: [
  //         {
  //           title: "ШКОЛИ З КЛАСАМИ ПОЛЬСЬКОЮ МОВОЮ НАВЧАННЯ",
  //         },
  //         {
  //           title:
  //             "ПОЛЬСЬКА МОВА ЯК РІДНА У ШКОЛІ З УКРАЇНСЬКОЮ МОВОЮ НАВЧАННЯ",
  //         },
  //         {
  //           title: "ПОЛЬСЬКА МОВА ЯК ДРУГА ІНОЗЕМНА",
  //         },
  //         {
  //           title: "ФАКУЛЬТАТИВНІ ЗАНЯТТЯ З ПОЛЬСЬКОЇ МОВИ",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.menuCategory.create({
  //   data: {
  //     title: "MATERIAŁY DYDAKTYCZNE",
  //     subcategories: {
  //       create: [
  //         { title: "KONSPEKTY LEKCJI DLA SZKÓŁ ŚREDNICH" },
  //         { title: "ZADANIA DO OLIMPIADY" },
  //         {
  //           title: "PODRĘCZNIKI",
  //         },
  //         {
  //           title: "PREZENTACJE",
  //         },
  //         {
  //           title: "SCENARIUSZY UROCZYSTOŚCI",
  //         },
  //         {
  //           title: "КАЛЕНДАРНО-ТЕМАТИЧНЕ ПЛАНУВАННЯ",
  //         },
  //         {
  //           title: "ЗБІРНИК ДИКТАНТІВ/ПЕРЕКАЗІВ",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.menuCategory.create({
  //   data: {
  //     title: "SZKOŁY SOBOTNIE",
  //     subcategories: {
  //       create: [
  //         {
  //           title: "ПОЛОЖЕННЯ ПРО КУЛЬТУРНО- ОСВІТНІЙ ЗАКЛАД",
  //         },
  //         {
  //           title: "ЯК ЗАРЕЄСТРУВАТИ",
  //         },
  //         {
  //           title: "KONSPEKTY LEKCJI DLA SZKÓŁ SOBOTNICH",
  //         },
  //         {
  //           title: "ПРОГРАМИ",
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.menuCategory.create({
  //   data: { title: "PLACÓWKI OŚWIATKOWE" },
  // });
  // await prisma.pageInfo.create({
  //   data: {
  //     uaAddress: `Укрпошта <br />
  //     82100 Дрогобич <br />
  //     вул. Данила Галицького, 21 а/с № 17`,
  //     plAddress: "82100 Drohobycz ul. Truskawiecka 9 obwód lwowski",
  //     phoneNuber: "03244 50177",
  //     email: "adam-ch@mail.lviv.ua",
  //     additionalEmail: "znpu.ua@gmail.com",
  //     facebookLink: "https://www.facebook.com/CentrumDrohobycz",
  //     uaPageTitle: "Cпілка вчителів - полоністів України",
  //     plPageTitle: "Zjednoczenie nauczycieli polskich w Ukrainie",
  //   },
  // });
  // await prisma.homePageContent.create({
  //   data: {
  //     type: `aboutUs`,
  //     homeTitle: "o nas",
  //     pageTitle: "Szanowni Państwo, Drogie Koleżanki i Drodzy Koledzy!",
  //     shortDescription:
  //       "Zrzeszamy nauczycieli języka polskiego i przedmiotów nauczanych po polsku w przedszkolach, szkołach średnich, wyższych i punktach pozaszkolnych. Popularyzujemy wiedzę o polskiej kulturze i historii. Pomagamy podnosić kwalifikacje nauczycieli, tworzyć programy nauczania. Opracowujemy i zaopatrujemy szkoły w podręczniki i pomoce szkolne. Udzielamy pomocy metodycznej i              dydaktycznej swoim członkom, przeprowadzamy konferencje              naukowo-praktyczne, seminaria, szkolenia i staże, a także obozy i              wczasy, festiwale, konkursy, olimpiady przedmiotowe, kongresy i              zjazdy z udziałem ekspertów z kraju i zagranicy. Wysyłamy także              dzieci, młodzież i osoby dorosłe na staże w wyższych,              specjalistycznych i średnich placówkach oświatowych, wspieramy              również inne formy nauki na Ukrainie i poza jej granicami.              Publikujemy wybitne prace zagranicznych i miejscowych ekspertów w              zakresie oświaty, okazujemy materialną i metodyczną pomoc              placówkom oświatowym. Prowadzimy wymianę doświadczeń między              nauczycielami z Polski, Ukrainy i innych państw.",
  //     imageUrl:
  //       "https://znpu-bucket.s3.eu-central-1.amazonaws.com/IMG_0185.JPG",
  //     longDescription:
  //       " <p>              Na stronie ZNPnU będziemy zamieszczali materiały dotyczące              nauczania języka i kultury polskiej w systemie oświaty              ukraińskiej.            </p>            <p>              Na podstronie              <strong>                <i>„O nas”</i>              </strong>              poznacie Państwo historię założenia Zjednoczenia Nauczycieli              Polskich na Ukrainie, zadania statutowe organizacji, zasady              powołania Ogólnoukraińskiego Koordynacyjno-Metodycznego Centrum              Nauczania Języka i Kultury Polskiej w Drohobyczu, cele i              działalność Centrum, historię adaptacji budynku będącego siedzibą              Centrum przy ul. Truskawieckiej 9 w Drohobyczu w obwodzie lwowskim              oraz uzasadnienie nauczania języka i wiedzy o kulturze polskiej w              świetle prawa ukraińskiego.            </p>            <p>              Na podstronie              <strong>                <i>„Materiały”</i>              </strong>              , w dziale zatytułowanym Programy, znajdziecie Państwo programy              nauczania języka polskiego i przedmiotów nauczanych w języku              polskim w różnych typach szkół ogólnokształcących funkcjonujących              na terytorium Ukrainy:            </p>            <ul>              <li>                Programy nauczania w klasach z polskim językiem nauczania: Język                polski dla klas 1-4, 5-9, 10-11; Czytanie kl. 1-4; Kurs                integrowany (literatura polska i powszechna); Programy nauczania                geografii Polski, historii Polski, literatury polskiej i wiedzy                o narodzie polskim.              </li>              <li>                Program nauczania języka polskiego jako ojczystego dla klas 1-4,                5-9 (kontynuacja) oraz 5-9 (początek nauki w klasie 5).              </li>              <li>                Program nauczania języka polskiego jako drugiego obcego dla klas                5-9. Program według koncepcji Nowej Szkoły Ukraińskiej. Dla                klasy 5 rozpoczynającej nauczanie języka polskiego w roku                szkolnym 2022/23 opracowano podręcznik dla klasy 5, rozkład                materiału i konspekty lekcji.              </li>              <li>                Program zajęć fakultatywnych z języka polskiego dla klas 1-4,                5-9, 10-11 wraz z przykładowymi konspektami. Program języka                polskiego jako fakultatywnego dla kl. 5-11.              </li>              <li>                Programy dla pozaszkolnych placówek oświatowych:                oświatowo-kulturalnych, centrów polskiej mniejszości narodowej,                polskich sobotnio-niedzielnych szkół z przedmiotów: język                polski, literatura polska, geografia Polski, historia Polski,                polska kultura muzyczna, wiedza o narodzie polskim.              </li>            </ul>            <p>              Ponadto podstrona              <strong>                <i>„Materiały”</i>              </strong>          będzie zawierała następujące działy:            </p>            <p>              <i>Konspekty</i> zawierające konspekty i scenariusze lekcji,              zajęć, imprez, uroczystości, wycieczek szkolnych, a także              propozycje ćwiczeń do wykorzystania w pracy dydaktycznej.            </p>            <p>              <i>Kursy</i> zawierające wykłady, ćwiczenia oraz prezentacje z              kursów i warsztatów doskonalenia zawodowego nauczycieli języka              polskiego.            </p>            <p>              <i>Podręczniki</i> zawierające informacje o podręcznikach              dopuszczonych do użytku szkolnego.            </p>            <p>              <i>Olimpiady</i> zawierające informacje o Ogólnoukraińskich              Olimpiadach Języka Polskiego i Literatury Polskiej, arkusze zadań              z lat poprzednich i klucze do ich rozwiązania.            </p>            <p>              Na podstronie              <strong>                <i>Dokumenty</i>              </strong>              znajdziecie Państwo kompendium wiedzy z dziedziny prawa              oświatowego i organizacji szkolnictwa. Dowiecie się Państwo m.in.              jak rejestrować różne typy placówek oświatowych, na jakich              zasadach wprowadzać język polski do nauczania, jakie uniwersytety              kształcą polonistów. Poznacie adresy szkół i placówek              przedszkolnych.            </p>            <p>              Informacje te zostały ujęte w następujących działach:            </p>            <ul>              <li>                <i>Klasy z polskim językiem nauczania;</i>              </li>              <li>                <i>Filologia polska na Ukrainie;</i>              </li>              <li>                <i>Nauczanie języka polskiego jako obcego;</i>              </li>              <li>                <i>Pozaszkolne placówki oświatowe;</i>              </li>              <li>                <i>Sobotnio-niedzielne szkoły;</i>              </li>              <li>                <i>Przedszkola i grupy przedszkolne.</i>              </li>            </ul>            <p>              Na podstronie              <strong>                <i>Kontakt</i>              </strong>              zamieściliśmy numery telefonów i adresy poczty elektronicznej              Zjednoczenia Nauczycieli Polskich na Ukrainie i Ogólnoukraińskiego              Koordynacyjno-Metodycznego Centrum Nauczania Języka i Kultury              Polskiej w Drohobyczu            </p>",
  //   },
  // });
  // await prisma.homePageContent.create({
  //   data: {
  //     type: `statut`,
  //     homeTitle: "string",
  //     pageTitle: "Zjednoczenie Nauczycieli Polskich na Ukrainie – witamy!",
  //     shortDescription: "string",
  //     imageUrl: "string",
  //     longDescription: "string",
  //   },
  // });
  // await prisma.homePageContent.create({
  //   data: {
  //     type: `natalia`,
  //     homeTitle:
  //       "19 stycznia 2022 roku dekretem Kongregacji Kultu Bożego i Dyscypliny Sakramentów bł. Natalia Tułasiewicz ustanowiona została Patronką nauczycieli polskich.",
  //     pageTitle:
  //       "«Wybrał mnie Pan do cudownej misji miłości w świecie» dla której zycie oddać warto, a cóż dopiero talent i wszystkie siły",
  //     shortDescription:
  //       "Natalia Tułasiewicz urodziła się 9 kwietnia 1906 roku w Rzeszowie.  Jej rodzina pochodziła z Krakowa. Od 1913 roku uczęszczała do Szkoły Podstawowej w Kętach, a od 1917 roku była uczennicą Prywatnego Gimnazjum Żeńskiego w Krakowie. W 1921 roku przeniosła się wraz z rodziną do Poznania. Tam rozpoczęła naukę w Gimnazjum Sióstr Urszulanek Unii Rzymskiej. Ukończyła je w 1926 roku. Po maturze studiowała polonistykę i muzykologię na Uniwersytecie Poznańskim. Studia ukończyła w 1931 roku. W 1932 roku obroniła pracę ,,Mickiewicz a muzyka” i uzyskała tytuł magistra filologii polskiej. Na wszystkich etapach edukacyjnych dała się poznać jako ambitna, zdolna uczennica....",
  //     imageUrl:
  //       "https://znpu-bucket.s3.eu-central-1.amazonaws.com/natalia-tulasiewicz.png",
  //     longDescription: "string",
  //   },
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
