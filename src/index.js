index.js



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Api from '../android/app/src/config/Api';

const App = () => {

    const [title, setTitle] = React.useState([]);
    const [opening_crawl, setOpening_crawl] = React.useState([]);

    Api.get("/films/").then((response) => {
        // alert(JSON.stringify(response.data));
        setTitle(response.data.title);
        // setOpening_crawl(response.data.opening_crawl);
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Star Wars</Text>
            <Text style={styles.textTitle}>Filme: {title}</Text>
            {/* <Text>Sinópse:{opening_crawl}</Text> */}
        </View>
    );

}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444444',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50
    },
    text: {
        color: '#FFFF82',
        fontSize: 40,
        fontWeight: 'bold'
    },
    textTitle: {
        color: '#fff',
        paddingTop: 30,
        fontSize: 24
    }

});