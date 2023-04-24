import { 
    View, 
    Text, 
    TextInput, 
    Button, 
    StyleSheet, 
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'



const AIRPORTS = [
    {
      img: 'https://www.visitsingapore.com/travel-guide-tips/travelling-to-singapore/changi-airport-singapore/_jcr_content/par-carousel/carousel_detailpage/carousel/item0.thumbnail.carousel-img.740.416.jpg',
      name: 'Singapore Changi Airport',
      loc: 'Singapore',
      intro: "    Singapore Changi Airport is one of the busiest and most highly-rated airports in the world, located in Singapore. It serves as a hub for numerous airlines and offers a wide range of services and amenities to passengers, including entertainment options, shopping and dining outlets, and leisure activities. In addition to its excellent customer service and facilities, Changi Airport is also known for its efficient operations, safety measures, and sustainability initiatives",
      overview: "   Singapore Changi Airport is the main airport serving Singapore and is one of the largest transportation hubs in Southeast Asia. It is located approximately 17.2 km northeast of Singapore's city center and consists of four terminals with a fifth one currently under construction. The airport serves over 60 million passengers annually and offers flights to over 200 destinations worldwide. Changi Airport is known for its state-of-the-art facilities, efficient operations, and excellent customer service. It has also won numerous awards for its innovative and sustainable design, as well as its commitment to passenger comfort and convenience.",
      dev: "    Singapore Changi Airport has several future developments planned, including the construction of Terminal 5, expansion of its runway system, smart airport initiatives, and sustainability measures. The airport has already opened Jewel Changi Airport, a lifestyle and retail complex that offers a unique experience for passengers. These developments reflect Changi's commitment to providing excellent facilities and services, as well as its efforts to stay at the forefront of technological and environmental advancements in the aviation industry.",
      link: "https://www.changiairport.com/"
    },
    {
      img: 'https://cdn.businesstraveller.com/wp-content/uploads/2017/04/Airport_1.jpg',
      name: 'Hamad International Airport',
      loc: 'Qatar',
      intro: "    Hamad International Airport is the main airport in Qatar, located in the capital city of Doha. It opened in 2014 and has since become a major hub for airlines in the Middle East and beyond. The airport features a modern design, state-of-the-art facilities, and a range of amenities for passengers, including shopping and dining options, lounges, and a hotel. It is also known for its excellent customer service, efficient operations, and commitment to sustainability.",
      overview: "   Hamad International Airport is the primary airport serving Qatar, located in the capital city of Doha. It opened in 2014 and has since become one of the busiest airports in the Middle East, with over 35 million passengers annually. The airport is the main hub for Qatar Airways and features a modern and innovative design, with state-of-the-art facilities and amenities for passengers. These include a range of shopping and dining options, lounges, and a hotel. The airport is also known for its high levels of customer service, efficient operations, and commitment to sustainability.",
      dev: "    Hamad International Airport in Qatar has several planned future developments, including the construction of a new terminal, an automated people mover system, and a new cargo terminal to accommodate increasing demand. The airport also plans to upgrade its technology to improve efficiency and the passenger experience, and is committed to sustainability initiatives, such as reducing its carbon footprint and promoting eco-friendly practices. These developments reflect the airport's commitment to staying at the forefront of innovation while providing excellent services and promoting sustainability.",
      link: "https://dohahamadairport.com/"
    },
    {
      img: 'https://www.jrailpass.com/blog/wp-content/uploads/2020/03/haneda-airport-entrada-e1584024068396.jpg',
      name: 'Tokyo Haneda International Airport',
      loc: 'Japan',
      intro: "    Tokyo Haneda International Airport, also known as Haneda Airport, is one of the two main airports serving Tokyo, Japan. It is located in the Ota Ward of Tokyo and is primarily used for domestic flights, but also operates some international routes. Haneda Airport has undergone significant upgrades and expansions over the years, and is known for its efficient operations, convenience, and proximity to the city center. It is also one of the busiest airports in Asia, serving over 87 million passengers in 2019.",
      overview: "     Tokyo Haneda International Airport, commonly referred to as Haneda Airport, is one of the two primary airports serving the Tokyo metropolitan area in Japan. Located in the Ota ward, it is the closest airport to central Tokyo and primarily serves domestic flights, with a growing number of international routes. The airport has undergone significant renovations and expansions in recent years, including the construction of a new terminal building, increasing its capacity and efficiency. Haneda Airport is known for its convenience, with excellent transportation links to the city center and surrounding areas. It is also one of the busiest airports in Asia, serving over 87 million passengers in 2019.",
      dev: "    Tokyo Haneda International Airport has several future developments planned, including the construction of a new international terminal, expansion of the domestic terminal, upgrades to Terminal 2, and introduction of an automated baggage handling system. The airport is also considering the construction of a new runway to increase capacity. These developments demonstrate the airport's commitment to providing a world-class experience for passengers and staying at the forefront of technological advancements in the aviation industry.",
      link: "https://tokyo-haneda.com/en/index.html"
    },
    {
      img: 'https://s28477.pcdn.co/wp-content/uploads/2017/12/ICN_1-984x554.jpg',
      name: 'Incheon International Airport',
      loc: 'Korea',
      intro: "      Incheon International Airport is the primary airport serving Seoul, South Korea. It is located on an island near the city of Incheon and is one of the largest airports in the world, serving over 68 million passengers in 2019. Incheon Airport is known for its world-class facilities and services, including its efficient operations, extensive shopping and dining options, and cultural exhibits. It is also a hub for Korean Air and Asiana Airlines, and serves as a major gateway to Asia and beyond.",
      overview: "     Incheon International Airport is the largest airport in South Korea, located on an island near the city of Incheon. The airport serves as the main hub for Korean Air and Asiana Airlines and is a major gateway to Asia and beyond. Incheon Airport is known for its world-class facilities and services, including efficient operations, extensive shopping and dining options, cultural exhibits, and excellent connectivity to the city and surrounding areas. It has won numerous awards for its services and is considered one of the best airports in the world. The airport served over 68 million passengers in 2019 and continues to expand and upgrade its facilities to accommodate growing demand.",
      dev: "    Incheon International Airport has several future developments planned, including the expansion of Terminal 3, construction of a second runway, implementation of smart airport technologies, creation of an airport city and becoming a carbon-neutral airport by 2040. These developments reflect the airport's commitment to providing a world-class experience for passengers, improving efficiency, and reducing its environmental impact.",
      link: "https://www.airport.kr/ap/en/index.do"
    },
    {
      img: 'https://s28477.pcdn.co/wp-content/uploads/2017/10/CDG_1-984x554.jpg',
      name: 'Paris Charles de Gaulle Airport',
      loc: 'France',
      intro: "      Paris Charles de Gaulle Airport, also known as Roissy Airport, is the largest international airport in France and one of the busiest airports in Europe. The airport is located northeast of Paris and serves as the main hub for Air France and a focus city for other major airlines. Charles de Gaulle Airport has three main terminals and handles over 70 million passengers per year. The airport is known for its modern facilities, extensive shopping and dining options, and efficient operations.",
      overview: "     Paris Charles de Gaulle Airport, also known as Roissy Airport, is the largest international airport in France. The airport is located northeast of Paris and serves as the main hub for Air France and a focus city for other major airlines. It has three main terminals and handles over 70 million passengers per year. The airport offers modern facilities, extensive shopping and dining options, and efficient operations. Additionally, the airport provides excellent connectivity to Paris and surrounding areas through various modes of transportation, including high-speed trains, buses, taxis, and car rentals. Paris Charles de Gaulle Airport is a major gateway to Europe and beyond and is continuously upgrading its facilities to accommodate growing demand.",
      dev: "    Paris Charles de Gaulle Airport is planning several future developments to enhance passenger experience, increase capacity, and reduce its environmental impact. These include the construction of Terminal 4, development of a connecting hub, implementation of green technologies, enhancement of security measures, and improvements to ground transportation options. These developments demonstrate the airport's dedication to providing a modern and sustainable airport experience for travelers.",
      link: "https://www.parisaeroport.fr/en"
    },
    {
      img: 'https://www.internationalairportreview.com/wp-content/uploads/aviation-2.jpg',
      name: 'Istanbul Airport',
      loc: 'India',
      intro:"     Istanbul Airport, also known as Istanbul New Airport, is the main international airport serving Istanbul, Turkey. The airport is one of the largest airports in the world, spanning over 76.5 million square meters and has a capacity to handle up to 200 million passengers annually. Istanbul Airport officially opened in 2018 and serves as the main hub for Turkish Airlines. The airport features a modern design and state-of-the-art facilities, including a large duty-free shopping area, lounges, and restaurants. The airport is strategically located to connect travelers to destinations in Europe, Asia, and the Middle East.",
      overview: "     Istanbul Airport is the main international airport serving Istanbul, Turkey. It is located on the European side of Istanbul, near the Black Sea coast. The airport is one of the largest in the world, covering an area of over 76.5 million square meters, with a capacity to handle up to 200 million passengers annually. The airport officially opened in 2018 and serves as the main hub for Turkish Airlines. The airport features a modern design and state-of-the-art facilities, including a large duty-free shopping area, lounges, and restaurants. The airport also offers efficient and convenient ground transportation options to connect passengers to the city center and other destinations in the region.",
      dev: "    Istanbul Airport is planning to expand its terminal buildings, build additional runways, implement smart airport technology, create a dedicated cargo village, and build new hotels to improve its capacity and efficiency, as well as provide a better airport experience for passengers. These developments are aimed at strengthening the airport's position as a major transportation hub in the region and increasing its competitiveness on the global stage.",
      link: "https://www.istairport.com/"
    },
    {
      img: 'https://s28477.pcdn.co/wp-content/uploads/2017/03/airsite-mfz1_web-768x432.jpg',
      name: 'Munich Airport',
      loc: 'Germany',
      intro: "      Munich Airport, also known as Flughafen München in German, is the second-busiest airport in Germany and is located in the Bavarian region of Germany. The airport serves as a hub for Lufthansa and is known for its efficiency, convenience, and excellent customer service. Munich Airport has two terminals and handles over 47 million passengers annually. The airport features modern facilities and amenities, including a range of dining options, duty-free shopping, lounges, and other services for passengers.",
      overview: "     Munich Airport is an international airport located near the city of Munich in Germany. It is the second-busiest airport in Germany, with two terminals and four runways, and serves as a hub for Lufthansa. The airport offers a range of facilities and services for passengers, including a variety of shops and restaurants, lounges, and other amenities such as showers and sleeping pods. The airport is known for its efficient operations and excellent customer service, and has won several awards for its quality and efficiency. Munich Airport also has a strong commitment to sustainability and has implemented various measures to reduce its environmental impact.",
      dev: "    Munich Airport is planning a number of future developments, including the expansion of Terminal 1 with a new satellite terminal, a focus on sustainable energy and a goal to become carbon-neutral by 2030, digitalization initiatives such as automated check-in and baggage handling systems and a mobile app for passengers, and the development of a new business district and innovation campus. These developments aim to improve the airport's capacity, efficiency, sustainability, and passenger experience, while also contributing to the economic growth of the region.",
      link: "https://www.munich-airport.com/"
    },
    {
      img: 'https://holidaystoswitzerland.com/wp-content/uploads/2019/11/Zurich-Airport.jpg.webp',
      name: 'Zurich Airport',
      loc: 'Switzerland',
      intro: "      Zurich Airport is an international airport located in the canton of Zurich in Switzerland. It is the largest airport in Switzerland and serves as a hub for Swiss International Air Lines. The airport has three terminals and two runways, and offers a range of facilities and services for passengers, including shops, restaurants, lounges, and other amenities such as showers and sleeping pods. Zurich Airport has a reputation for efficiency and reliability, and has won several awards for its quality and customer service. The airport also has a strong focus on sustainability and has implemented various measures to reduce its environmental impact.",
      overview: "     Zurich Airport is an international airport located in the canton of Zurich, Switzerland. It is the largest airport in Switzerland and serves as a hub for Swiss International Air Lines. The airport has three terminals and two runways and offers a range of facilities and services for passengers, including shops, restaurants, lounges, and other amenities such as showers and sleeping pods. Zurich Airport is known for its efficiency and reliability and has won several awards for its quality and customer service. The airport also places a strong emphasis on sustainability and has implemented various measures to reduce its environmental impact, including the use of renewable energy sources and the promotion of sustainable transportation options.",
      dev: "    Zurich Airport is planning several future developments, including the expansion of its infrastructure with the construction of a new terminal and a new satellite building, which will increase the airport's capacity and improve the passenger experience. The airport also plans to introduce new technologies and innovations to enhance efficiency and sustainability, such as automated baggage handling systems and the use of electric and hybrid vehicles. Additionally, Zurich Airport is committed to reducing its carbon footprint and aims to achieve carbon neutrality by 2050 through the use of renewable energy sources and other measures. Finally, the airport plans to continue its collaboration with local stakeholders to support the economic growth of the region and ensure the airport remains an important driver of the Swiss economy.",
      link: "https://www.flughafen-zuerich.ch/en/passengers"
    },
    {
      img: 'https://www.jrailpass.com/blog/wp-content/uploads/2019/05/narita-airport-to-tokyo.jpg',
      name: 'Tokyo Narita Airport',
      loc: 'Japan',
      intro: "      Tokyo Narita Airport is an international airport located in the city of Narita, Chiba Prefecture, Japan. It serves as one of the two major airports in the Tokyo metropolitan area, alongside Tokyo Haneda Airport. The airport has two terminals and two runways, and offers a wide range of facilities and services for passengers, including shops, restaurants, lounges, and other amenities such as showers and sleeping areas. Tokyo Narita Airport is known for its punctuality and efficiency, and has won several awards for its quality and customer service. The airport also places a strong emphasis on safety and security, and has implemented various measures to ensure the safety of passengers and employees.",
      overview: "     Tokyo Narita Airport is one of the two main airports serving the Tokyo metropolitan area in Japan. It is located in the city of Narita in Chiba Prefecture, around 60 kilometers east of central Tokyo. The airport has two terminals, with Terminal 1 serving international flights and Terminal 2 serving mainly domestic flights. Tokyo Narita Airport is a hub for several airlines, including Japan Airlines, All Nippon Airways, and Delta Air Lines. The airport offers a wide range of facilities and services for passengers, including shops, restaurants, lounges, and other amenities such as showers and sleeping areas. It also has a variety of transportation options, including trains, buses, and taxis, for easy access to Tokyo and other destinations in the region.",
      dev: "    Tokyo Narita Airport is planning several future developments to enhance its capacity and services. One major development is the expansion of Terminal 2, which will increase the terminal's capacity and improve passenger experience. The airport is also planning to build a third runway to accommodate increasing demand for flights. In addition, the airport is exploring the use of new technologies to improve passenger flow and reduce waiting times, such as biometric screening and automated baggage handling. The airport is also focused on reducing its environmental impact, and is implementing various initiatives to improve energy efficiency and reduce carbon emissions. Finally, Tokyo Narita Airport is working to improve its connectivity with other airports in the region, such as through the construction of a new rail link to Haneda Airport.",
      link: "https://www.narita-airport.jp/en"
    },
    {
      img: 'https://s28477.pcdn.co/wp-content/uploads/2018/01/MAD_2-984x554.jpg',
      name: 'Madrid Barajas Airport',
      loc: 'Spain',
      intro: "      Madrid Barajas Airport, also known as Adolfo Suárez Madrid Barajas Airport, is the main international airport serving Madrid, the capital city of Spain. It is one of the busiest airports in Europe, handling over 60 million passengers annually, and has four terminals with a wide range of facilities for passengers. It is a hub for several airlines and offers flights to destinations across Europe, as well as to North and South America, Africa, and Asia.",
      overview: "     Madrid Barajas Airport, also known as Adolfo Suárez Madrid Barajas Airport, is the main international airport serving Madrid, the capital city of Spain. It is located around 12 kilometers from the city center and is one of the busiest airports in Europe, handling over 60 million passengers per year. The airport has four terminals and offers a wide range of facilities and services for passengers, including shops, restaurants, lounges, and other amenities such as showers and sleeping areas. Madrid Barajas Airport is a hub for several airlines, including Iberia and Air Europa, and offers flights to destinations across Europe, as well as to North and South America, Africa, and Asia.",
      dev: "    The future developments for Madrid Barajas Airport include the construction of a new terminal, Terminal T4, which will be dedicated to low-cost airlines and will have a capacity of up to 30 million passengers per year. The airport is also undergoing a major renovation and expansion project, which includes the extension of existing terminals, the construction of new facilities, and the modernization of its infrastructure and technology. Additionally, the airport aims to become more sustainable and environmentally friendly, with plans to increase the use of renewable energy sources and reduce its carbon footprint.",
      link: "https://www.aena.es/en/adolfo-suarez-madrid-barajas.html"
    },
  ];
  

export default function Home() {
    const navigation = useNavigation();
    const [img, name, loc] = useState('');
    const sections = React.useMemo(() => {
      const sectionsMap = AIRPORTS.reduce((acc, item) => {
        const [lastName] = item.name.split(' ').reverse();
  
        return Object.assign(acc, {
          [lastName[0]]: [...(acc[lastName[0]] || []), item],
        });
      }, {});
  
      return Object.entries(sectionsMap)
        .map(([letter, items]) => ({
          letter,
          items,
        }))
        .sort((a, b) => a.letter.localeCompare(b.letter));
    }, []);
  
    return (
      <SafeAreaView style={{ backgroundColor: '#D2E5BE' }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>World's Top 10 Airports</Text>
          </View>
  
          {sections.map(({ letter, items }) => (
            <View style={styles.section} key={letter}>
              <View style={styles.sectionItems}>
                {items.map(({ img, name, loc, intro, overview, dev, link }, index) => {
                  return (
                    <View key={index} style={styles.cardWrapper}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Details', {
                            image: img, name:name, loc: loc, intro:intro, overview:overview, dev:dev, link:link

                        })}
                        >
                        <View style={styles.card}>
                           <Image
                              alt=""
                              resizeMode="cover"
                              source={{ uri: img }}
                              style={styles.cardImg}
                            />                          
  
                          <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>{name}</Text>
  
                            <Text style={styles.cardloc}>{loc}</Text>
                          </View>                          
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      paddingHorizontal: 24,
    },
    section: {
      marginTop: 12,
      paddingLeft: 24,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: '#000',
    },
    sectionItems: {
      marginTop: 8,
    },
    container: {
      paddingVertical: 24,
      paddingHorizontal: 0,
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      color: '#1d1d1d',
      marginBottom: 12,
      textAlign:'center'
    },
    card: {
      paddingVertical: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    cardWrapper: {
      borderBottomWidth: 3,
      borderColor: '#7E8287',
      marginEnd: 15
    },
    cardImg: {
      width: 150,
      height: 150,
      borderRadius: 5,
    },
    cardBody: {
      marginRight: 'auto',
      marginLeft: 12,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: '#000',
    },
    cardloc: {
      fontSize: 15,
      lineHeight: 20,
      fontWeight: '500',
      color: '#616d79',
      marginTop: 3,
    }
  });