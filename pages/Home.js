import { ScrollView, StyleSheet, View, Text, Image, Button, Alert, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import Slider from './components/Slider'
import Topbar from './Topbar';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    const goto = () => {
        navigation.push('Product Page');
    }
    const men = [
        {
            title: "Personalised Everton Watch",
            res: require("../images/men/personalised_everton.webp"),
            cost: "Rs.2999"
        },
        {
            title: "Personalised Classic",
            res: require("../images/men/personalised_classic.webp"),
            cost: "Rs.990"
      
        }
        ,
        {
            title: "Personalised Cuboid Locket For Men",
            res: require("../images/men/personalised_cuboid_locket.webp"),
            cost: "Rs.1499"
      
        },
        {
            title: "Personalised Emperor Locket for Men",
            res: require("../images/men/personalised_emperor.webp"),
            cost: "Rs.1999"
      
        },
        {
            title: "Personalised Silver Kada",
            res: require("../images/men/personalised_silver_kada.webp"),
            cost: "Rs.1399"
      
        }
      ];
    const goto_collection = () => {
        navigation.push("Collection Page",men);
    }
    const ProductData = [
        {
            title: "Hue Ring",
            res: require("../images/products/hue_ring.webp")
        },
        {
            title: "Zodiac Pendant",
            res: require("../images/products/zodiac_pendant.webp")

        }
        ,
        {
            title: "Emperor Locket",
            res: require("../images/products/emperor_locket.webp")

        },
        {
            title: "Classic Stature",
            res: require("../images/products/classic_stature.webp")

        },
        {
            title: "Everton Watch",
            res: require("../images/products/everton_watch.webp")

        }
    ];
    const NewNoteworthy = [
        {
            title: "Hue Ring",
            res: require("../images/products/hue_ring.webp"),
            cost: "Rs.1499"
        },
        {
            title: "Zodiac Pendant",
            res: require("../images/products/zodiac_pendant.webp"),
            cost: "Rs.1199"

        }
        ,
        {
            title: "Emperor Locket",
            res: require("../images/products/emperor_locket.webp"),
            cost: "Rs.899"

        },
        {
            title: "Classic Stature",
            res: require("../images/products/classic_stature.webp"),
            cost: "Rs.2999"

        },
        {
            title: "Everton Watch",
            res: require("../images/products/everton_watch.webp"),
            cost: "Rs.6999"

        }
    ];
    const CollectionData = [
        {
            title: "Watches",
            res: require("../images/collection/watches.webp")

        },
        {
            title: "Bracelets",
            res: require("../images/collection/bracelets.webp")

        },
        {
            title: "Jewellery",
            res: require("../images/collection/jewellery.webp")

        },
        {
            title: "Keychanins",
            res: require("../images/collection/keychains.webp")

        },
        {
            title: "Rings",
            res: require("../images/collection/rings.webp")

        },

    ]
    const Men = [
        {
            title: "Personalised Everton Watch",
            res: require("../images/men/personalised_everton.webp"),
            cost: "Rs.2999"
        },
        {
            title: "Personalised Classic",
            res: require("../images/men/personalised_classic.webp"),
            cost: "Rs.990"

        }
        ,
        {
            title: "Personalised Cuboid Locket For Men",
            res: require("../images/men/personalised_cuboid_locket.webp"),
            cost: "Rs.1499"

        },
        {
            title: "Personalised Emperor Locket for Men",
            res: require("../images/men/personalised_emperor.webp"),
            cost: "Rs.1999"

        },
        {
            title: "Personalised Silver Kada",
            res: require("../images/men/personalised_silver_kada.webp"),
            cost: "Rs.1399"

        }
    ];

    const Women = [
        {
            title: "Personalised Cuboid Pendant",
            res: require("../images/women/personalised_cuboid.jpg"),
            cost: "Rs.1199"
        },
        {
            title: "Personalised Classic Bracelet",
            res: require("../images/women/personalised_classic.jpg"),
            cost: "Rs.1499"

        }
        ,
        {
            title: "Personalised Evil Eye Bracelet",
            res: require("../images/women/personalised_evil_eye.jpg"),
            cost: "Rs.1499"

        },
        {
            title: "Personalised Signature Bracelet",
            res: require("../images/women/personalised_signature.jpg"),
            cost: "Rs.3999"

        },
        {
            title: "Personalised Silver Kada",
            res: require("../images/men/personalised_silver_kada.webp"),
            cost: "Rs.990"

        }
    ];
    const pendants = [
        {
            title: "Personalised Cuboid Pendant",
            res: require("../images/women/personalised_cuboid.jpg"),
            cost: "Rs.1199"
        },
      
      
    ];

    const instagram = [
        {
            res: require("../images/instagram/instagram_1.jpg")
        },
        {
            res: require("../images/instagram/instagram_2.jpg")
        },
        {
            res: require("../images/instagram/instagram_3.jpg")
        },
        {
            res: require("../images/instagram/instagram_4.jpg")
        },
        {
            res: require("../images/instagram/instagram_5.jpg")
        },
        {
            res: require("../images/instagram/instagram_6.jpg")
        },
        {
            res: require("../images/instagram/instagram_7.jpg")
        },
        {
            res: require("../images/instagram/instagram_8.jpg")
        },
        {
            res: require("../images/instagram/instagram_9.jpg")
        }
    ]

    const ban = [
        {
            res: require("../images/banner/ban-2.webp")
        },
        {
            res: require("../images/banner/ban-3.webp")
        }, {
            res: require("../images/banner/ban-4.webp")
        }
    ]

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <Topbar  />
            <Slider />




            {/* what's new */}
            <View style={{ flex: 1, marginVertical: 5 }}>
                <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>What's New</Text></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                    {
                        ProductData.map((item, key) => {
                            return (
                                <TouchableWithoutFeedback key={key}
                                    onPress={goto}
                                >
                                    <View style={styles.box}  >
                                        <Image

                                            style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
                                            source={item.res}
                                        />
                                        <Text style={styles.wnh} >{item.title}</Text>

                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }



                </ScrollView>
            </View>
            {/* // shop for */}
            <View style={{ flex: 1, marginVertical: 5 }}>
                <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>Shop For</Text></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        CollectionData.map((item, key) => {
                            return (
                                <TouchableWithoutFeedback key={key}
                                    onPress={goto_collection}
                                >
                                    <View style={styles.box}>
                                        <Image

                                            style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 50 }}
                                            source={item.res}
                                        />
                                        <Text style={styles.wnh}>{item.title}</Text>

                                    </View>
                                </TouchableWithoutFeedback>

                            )

                        })
                    }

                </ScrollView>
            </View>



            {/* products */}
            <View style={{ flex: 1, marginVertical: 1 }}>


                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <TouchableWithoutFeedback
                        onPress={goto}
                    >
                        <View style={{ flex: 1, backgroundColor: "white", padding: 2 }}>
                            <ImageBackground
                                source={require("../images/men/personalised_silver_kada.webp")}
                                style={{ width: "100%", height: (Dimensions.get("screen").height - 390) / 2, }}
                                resizeMode="contain"
                            />


                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={goto}
                    >
                        <View style={{ flex: 1, backgroundColor: "white", padding: 2 }}>
                            <ImageBackground
                                source={require("../images/separate_4_products/keychain.webp")}
                                style={{ width: "100%", height: (Dimensions.get("screen").height - 390) / 2 }}
                                resizeMode="cover"
                            />
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <TouchableWithoutFeedback
                        onPress={goto}
                    >
                        <View style={{ flex: 1, backgroundColor: "white", padding: 2 }}>
                            <ImageBackground
                                source={require("../images/separate_4_products/p-3.webp")}
                                style={{ width: "100%", height: (Dimensions.get("screen").height - 390) / 2, }}
                                resizeMode="cover"
                            />


                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={goto_collection}
                    >
                        <View style={{ flex: 1, backgroundColor: "white", padding: 2 }}>
                            <ImageBackground
                                source={require("../images/women/personalised_cuboid.jpg")}
                                style={{ width: "100%", height: (Dimensions.get("screen").height - 390) / 2 }}
                                resizeMode="cover"
                            />
                        </View>
                    </TouchableWithoutFeedback>

                </View>

            </View>


            {/* //banner */}
            <View style={{ flex: 1, marginVertical: 8 }}>
                <ImageBackground
                    source={require("../images/banner/ban-1.webp")}
                    style={{ width: "100%", height: (Dimensions.get("screen").height - 400) / 2 }}
                />
            </View>
            {/* note worthy */}
            <View style={{ flex: 1, marginVertical: 5 }}>
                <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>New & NoteWorthy</Text></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                    {
                        NewNoteworthy.map((item, key) => {
                            return (
                                <TouchableWithoutFeedback onPress={goto} >
                                    <View style={styles.outdiv} key={key}>
                                        <View style={styles.inner}>
                                            <Image

                                                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                                                source={item.res}
                                            />


                                        </View>
                                        <Text style={styles.nn}>{item.title}</Text>
                                        <Text style={styles.amt}>{item.cost}</Text>


                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }





                </ScrollView>
            </View>
            {/* for men */}
            <View style={{ flex: 1, marginVertical: 5 }}>
                <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>For Men</Text></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        Men.map((item, key) => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={goto}
                                >
                                    <View style={styles.outdiv}>
                                        <View style={styles.inner}>
                                            <Image

                                                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                                                source={item.res}
                                            />


                                        </View>
                                        <Text style={styles.nn}>{item.title}</Text>
                                        <Text style={styles.amt}>{item.cost}</Text>


                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }


                </ScrollView>
            </View>

            {/* for wormen */}
            <View style={{ flex: 1, marginVertical: 5 }}>
                <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>For Women</Text></View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                    {
                        Women.map((item, key) => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={goto}
                                >
                                    <View style={styles.outdiv}>
                                        <View style={styles.inner}>
                                            <Image

                                                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                                                source={item.res}
                                            />


                                        </View>
                                        <Text style={styles.nn}>{item.title}</Text>
                                        <Text style={styles.amt}>{item.cost}</Text>


                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }



                </ScrollView>
            </View>

            {/* //banner */}

            {
                ban.map((item, key) => {
                    return (
                        <TouchableWithoutFeedback
                            onPress={goto_collection}
                        >
                            <View style={{ flex: 1, padding: 2, marginVertical: 4 }} key={key}>
                                <ImageBackground
                                    source={item.res}
                                    style={{ width: "100%", height: (Dimensions.get("screen").height - (60 / 100 * (Dimensions.get("screen").height))) }}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
            }
            {/* // instagram */}
            <View style={{ flex: 1, marginVertical: 1 }}>
                <View style={{ padding: 5 }}><Text style={{ fontSize: 17, textAlign: 'center' }}>#INSTAGRAM</Text></View>


                <View style={{ flex: 1, flexDirection: "row", flexWrap: 'wrap', alignItems: "flex-start", }}>



                    {
                        instagram.map((item, key) => {
                            return (
                                <View style={{ width: "33%", height: (Dimensions.get("screen").height - (83 / 100 * Dimensions.get("screen").height)), backgroundColor: "white", padding: 2 }} key={key} >
                                    <ImageBackground
                                        source={item.res}
                                        style={{ width: "100%", height: "100%" }}
                                        resizeMode="cover"
                                    />


                                </View>
                            )
                        })
                    }






                </View>


            </View>



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    nn: { textAlign: 'center', color: 'black' },

    amt: { textAlign: 'center', color: 'black', fontWeight: '400', },
    wnh: { textAlign: 'center', color: 'black', },
    box: {
        height: 120, width: 110,
        padding: 1, flex: 1,
    },
    inner: {
        height: 140, width: 130,
        backgroundColor: 'yellow',
    },
    outdiv: {
        height: '100%', width: 130, marginHorizontal: 3,
        padding: 1, flex: 1,
    },
    con: {
        flex: 1, backgroundColor: 'red',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',

        justifyContent: 'center',
    },
});
