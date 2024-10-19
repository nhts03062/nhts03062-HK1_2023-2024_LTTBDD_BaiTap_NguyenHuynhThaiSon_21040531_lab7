import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, FlatList, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Screen_02 = () => {
    const products = [
        { id: 1, type: 'iphone', name: 'Iphone 12', price: '$899', image: require('../assets/Data/1.png') },
        { id: 2, type: 'iphone', name: 'Iphone 11', price: '$889', image: require('../assets/Data/2.png') },
        { id: 3, type: 'iphone', name: 'Iphone XSMax', price: '$799', image: require('../assets/Data/3.png') },
        { id: 4, type: 'iphone', name: 'Iphone 13', price: '$999', image: require('../assets/Data/4.png') },
        { id: 5, type: 'ipad', name: 'Ipad', price: '$1999', image: require('../assets/Data/ipad.png') },
        { id: 6, type: 'ipad', name: 'Ipad Air', price: '$1299', image: require('../assets/Data/ipadAir.png') },
        { id: 7, type: 'ipad', name: 'Ipad Air2', price: '$1399', image: require('../assets/Data/ipadAir2.png') },
        { id: 8, type: 'ipad', name: 'Ipad Mini', price: '$799', image: require('../assets/Data/ipadMini.png') },
        { id: 9, type: 'macbook', name: 'Macbook', price: '$2999', image: require('../assets/Data/macbook.png') },
        { id: 10, type: 'macbook', name: 'Macbook Air', price: '$1999', image: require('../assets/Data/macbookAir.png') },
        { id: 11, type: 'macbook', name: 'Macbook M1', price: '$2999', image: require('../assets/Data/macbookM1.png') },
        { id: 12, type: 'macbook', name: 'Macbook Pro', price: '$3999', image: require('../assets/Data/macbookPro.png') },
    ];

    const navigation = useNavigation();
    const [selectedCategoryType, setSelectedCategoryType] = useState('iphone');
    const [selectedCategory, setSelectedCategory] = useState('Best Sales');
    const [showAll, setShowAll] = useState(false);

    const filteredProducts = products.filter(product => product.type === selectedCategoryType);
    const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);

    const getFilteredProductList = () => {
        if (showAll) {
            return products;
        }

        switch (selectedCategory) {
            case 'Best Sales':
                return displayedProducts;
            case 'Best Matched':
                return displayedProducts.slice(0, 3);
            case 'Popular':
                return displayedProducts.slice(3, 6);
            default:
                return displayedProducts;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/Data/back.png')} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', marginHorizontal: 10 }}>Electronics</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/Data/basket.png')} style={{ marginLeft: 120 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/Data/Avatar_31.png')} style={{ width: 35, height: 35, marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', height: 45, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', width: '85%', backgroundColor: '#f3f4f6' }}>
                        <Image source={require('../assets/Data/search.png')} style={{ width: 20, height: 20, alignSelf: 'center', marginHorizontal: 10 }} />
                        <TextInput placeholder='Search' style={{ width: '105%', height: 45, fontSize: 17 }} />
                    </View>
                    <TouchableOpacity style={{ width: 45, marginLeft: 15 }}>
                        <Image source={require('../assets/Data/filter.png')} style={{ width: 55, height: 45, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Categories</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'gray', fontSize: 20 }}>See all</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
            }}>
                <TouchableOpacity onPress={() => setSelectedCategoryType('iphone')}>
                    <Image source={require('../assets/Data/iphoneCategory.png')} style={{ width: 105, height: 105, resizeMode: 'contain', borderRadius: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedCategoryType('ipad')}>
                    <Image source={require('../assets/Data/ipadCategory.png')} style={{ width: 105, height: 105, resizeMode: 'contain', borderRadius: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedCategoryType('macbook')}>
                    <Image source={require('../assets/Data/macbookcategory.png')} style={{ width: 105, height: 105, resizeMode: 'contain', borderRadius: 15 }} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity
                    style={[styles.filterButton, selectedCategory === 'Best Sales' && styles.selectedButton]}
                    onPress={() => setSelectedCategory('Best Sales')}
                >
                    <Text style={[styles.filterButtonText, selectedCategory === 'Best Sales' && styles.selectedButtonText]}>Best Sales</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, selectedCategory === 'Best Matched' && styles.selectedButton]}
                    onPress={() => setSelectedCategory('Best Matched')}
                >
                    <Text style={[styles.filterButtonText, selectedCategory === 'Best Matched' && styles.selectedButtonText]}>Best Matched</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, selectedCategory === 'Popular' && styles.selectedButton]}
                    onPress={() => setSelectedCategory('Popular')}
                >
                    <Text style={[styles.filterButtonText, selectedCategory === 'Popular' && styles.selectedButtonText]}>Popular</Text>
                </TouchableOpacity>
            </View>

            <ScrollView ontentContainerStyle={{ flexGrow: 1 }}>
                <FlatList
                    data={getFilteredProductList()}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.productContainer}>
                            <Image source={item.image} style={styles.productImage} />
                            <View style={styles.productDetails}>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Image source={require('../assets/Data/Rating5.png')} style={{ width: 70, height: 20, resizeMode: 'contain' }} />
                            </View>
                            <View style={styles.priceContainer}>
                                <View style={{ flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../assets/Data/add.png')} style={styles.addIcon} />
                                    </TouchableOpacity>
                                    <Text style={styles.productPrice}>{item.price}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />

                {showAll ? (
                    <TouchableOpacity
                        style={{
                            width: '90%',
                            height: 50,
                            backgroundColor: '#f3f4f6',
                            borderRadius: 12,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}
                        onPress={() => setShowAll(false)}
                    >
                        <Text style={{ fontSize: 18, color: 'gray' }}>Show Less</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{
                            width: '90%',
                            height: 50,
                            backgroundColor: '#f3f4f6',
                            borderRadius: 12,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}
                        onPress={() => setShowAll(true)}
                    >
                        <Text style={{ fontSize: 18, color: 'gray' }}>See all</Text>
                    </TouchableOpacity>
                )}

                <View style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 100,
                    marginBottom: 100,
                }}>
                    <Image source={require('../assets/Data/banner.png')} style={{ width: '100%', height: 150, marginTop: 20, borderRadius: 12 }} />
                </View>
            </ScrollView>

            <View style={styles.bottomNavigation}>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../assets/Data/clarity_home_solid.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../assets/Data/search.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../assets/Data/mdi_heart_outline.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../assets/Data/messageicon.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Inbox</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../assets/Data/codicon_account.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        alignSelf: 'center',
        height: 100,
    },
    productImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
    },
    productDetails: {
        flex: 1,
        marginLeft: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    priceContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addIcon: {
        width: 30,
        height: 30,
        marginBottom: 10,
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    navItem: {
        alignItems: 'center',
    },
    navIcon: {
        width: 25,
        height: 25,
    },
    navText: {
        fontSize: 12,
        color: '#333',
    },
    filterButton: {
        backgroundColor: '#ffffff',
        width: 105,
        height: 35,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedButton: {
        backgroundColor: '#ebfdff',
    },
    filterButtonText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '500',
    },
    selectedButtonText: {
        color: '#2bc9de',
        fontWeight: 'bold',
    },
});

export default Screen_02;